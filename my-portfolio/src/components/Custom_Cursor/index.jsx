import React, { useEffect, useRef, useState } from 'react';
import './CustomCursor.css';
import rocket01 from './icon_rocket_01.png';
import rocket02 from './icon_rocket_02.png';
import rocket03 from './icon_rocket_03.png';
import rocket04 from './icon_rocket_04.png';

function CustomCursor() {
  const cursorRef = useRef(null);
  const [rocketImage, setRocketImage] = useState(rocket01);

  useEffect(() => {
    const rockets = [rocket01, rocket02, rocket03, rocket04];
    let previousRocket = rocketImage;

    const getRandomRocket = () => {
      let newRocket;
      do {
        newRocket = rockets[Math.floor(Math.random() * rockets.length)];
      } while (newRocket === previousRocket);
      previousRocket = newRocket;
      return newRocket;
    };

    setRocketImage(getRandomRocket());
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let currentAngle = 0; // <- Track the rocket's current rotation angle

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animateCursor = () => {
      const dx = mouseX - currentX;
      const dy = mouseY - currentY;
      const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90; // Your +45 offset is fine

      currentX += dx * 0.1; // Smooth follow
      currentY += dy * 0.1;

      // --- Angle interpolation fix ---
      let deltaAngle = targetAngle - currentAngle;

      // Normalize deltaAngle to be between -180 and +180
      deltaAngle = ((deltaAngle + 180) % 360) - 180;

      // Smoothly rotate towards target angle
      currentAngle += deltaAngle * 0.1; // 0.1 = rotation smoothing factor

      cursor.style.transform = `translate3d(${currentX - 32}px, ${currentY}px, 0) rotate(${currentAngle}deg)`;

      requestAnimationFrame(animateCursor);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateCursor();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <img ref={cursorRef} src={rocketImage} alt="Custom Cursor" className="custom-cursor" />;
}

export default CustomCursor;