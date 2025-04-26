import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';
import rocketIcon from './icon_rocket.png';

function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      const angle = Math.atan2(dy, dx) * (180 / Math.PI) + 45; // Adjust by -45 degrees to align the rocket tip

      currentX += dx * 0.1; // Smooth follow effect
      currentY += dy * 0.1;

      cursor.style.transform = `translate3d(${currentX - 32}px, ${currentY - 32}px, 0) rotate(${angle}deg)`;
      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <img ref={cursorRef} src={rocketIcon} alt="Custom Cursor" className="custom-cursor" />;
}

export default CustomCursor;