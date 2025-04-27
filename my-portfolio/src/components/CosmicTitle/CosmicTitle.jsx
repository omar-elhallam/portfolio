import React, { useState, useEffect } from 'react';
import './CosmicTitle.css';

const CosmicTitle = ({ text }) => {
  const [firstLine, secondLine] = text.split(' with ');
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const firstLineTimer = setTimeout(() => setShowFirstLine(true), 500); // Fade in first line after 0.5s
    const secondLineTimer = setTimeout(() => setShowSecondLine(true), 3500); // Fade in second line after 4s

    return () => {
      clearTimeout(firstLineTimer);
      clearTimeout(secondLineTimer);
    };
  }, []);

  return (
    <h1 className="cosmic-title">
      <span className={showFirstLine ? 'fade-in' : ''}>{firstLine}</span>
      <br />
      <span className={showSecondLine ? 'fade-in' : ''}>with {secondLine}</span>
    </h1>
  );
};

export default CosmicTitle;