import React, { useState, useEffect } from 'react';
import './CosmicTitle.css';

const CosmicTitle = ({ text }) => {
  const [firstLine, secondLine] = text.split(' through ');
  const [showFirstLine, setShowFirstLine] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const firstLineTimer = setTimeout(() => setShowFirstLine(true), 500); // Fade in first line after 0.5s
    const secondLineTimer = setTimeout(() => setShowSecondLine(true), 2500); // Fade in second line after 2s

    return () => {
      clearTimeout(firstLineTimer);
      clearTimeout(secondLineTimer);
    };
  }, []);

  const wrapWithSpans = (line, fade) => {
    return line.split('').map((char, index) => {
      const isSpace = char === ' ';
      const delay = `${index * 40}ms`;
      return (
        <span
          key={index}
          className={`letter-wrapper${fade ? ' fade-in' : ''}`}
          style={isSpace ? { width: '0.6em', display: 'inline-block' } : {}}
        >
          {!isSpace && (
            <span className="letter-glow" style={fade ? { transitionDelay: delay } : {}}>{char}</span>
          )}
          <span className="letter-plain" style={fade ? { transitionDelay: delay } : {}}>{char}</span>
        </span>
      );
    });
  };

  return (
    <h1 className="cosmic-title">
      {wrapWithSpans(firstLine, showFirstLine)}
      <br />
      {wrapWithSpans('through ', showSecondLine)}
      {wrapWithSpans(secondLine, showSecondLine)}
    </h1>
  );
};

export default CosmicTitle;