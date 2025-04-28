import React, { useState, useEffect } from 'react';
import './WhoAmI.css';

function WhoAmI() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [terminalText, setTerminalText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);
  const [currentLine, setCurrentLine] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [clearingTerminal, setClearingTerminal] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [showWhoAmI, setShowWhoAmI] = useState(false);

  const [state, setState] = useState('hidden'); // 'hidden' | 'visible' | 'exit'

  const aboutMeTransmission = [
    "> Receiving transmission...",
    "> Decrypting message...",
    "> Message received."
  ];

  const aboutMeDescription = [
    "> I am Omar El Hallam, a Computer Science student, who studied at University of Richmond and College de paris, with a passion for software development, music, and sports. I specialize in creating dynamic and immersive digital experiences. blabla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.",
    "> Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla.",
  ];

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			if (scrollY > 100 && scrollY < 1450) {
				setState('visible');
			} else if (scrollY >= 1450) {
				setState('exit');
			} else {
				setState('hidden');
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showTerminal) {
      setFadeIn(true);
      if (!clearingTerminal) {
        if (typingIndex < aboutMeTransmission.length) {
          if (charIndex < aboutMeTransmission[typingIndex].length) {
            setIsTyping(true); // Start typing
            const typingDelay = setTimeout(() => {
              setCurrentLine((prev) => prev + aboutMeTransmission[typingIndex][charIndex]);
              setCharIndex((prev) => prev + 1);
            }, 20); // Adjust speed here

            return () => clearTimeout(typingDelay);
          } else {
            const lineDelay = setTimeout(() => {
              setTerminalText((prev) => prev + currentLine + "\n"); // Ensure proper line break
              setCurrentLine("");
              setCharIndex(0);
              setTypingIndex((prev) => prev + 1);
            }, 500);

            return () => clearTimeout(lineDelay);
          }
        } else {
          const clearDelay = setTimeout(() => {
            setTerminalText("");
            setCurrentLine("");
            setCharIndex(0);
            setTypingIndex(0); // Reset for description
            setClearingTerminal(true);
          }, 1000); // Pause before clearing

          return () => clearTimeout(clearDelay);
        }
      } else {
        if (typingIndex < aboutMeDescription.length) {
          if (charIndex < aboutMeDescription[typingIndex].length) {
            setIsTyping(true); // Start typing
            const typingDelay = setTimeout(() => {
              setCurrentLine((prev) => prev + aboutMeDescription[typingIndex][charIndex]);
              setCharIndex((prev) => prev + 1);
            }, 10);

            return () => clearTimeout(typingDelay);
          } else {
            const lineDelay = setTimeout(() => {
              setTerminalText((prev) => prev + currentLine + "\n");
              setCurrentLine("");
              setCharIndex(0);
              setTypingIndex((prev) => prev + 1);
              setIsTyping(false); // Stop typing
            }, 500);

            return () => clearTimeout(lineDelay);
          }
        } else {
          setIsTyping(false); // Stop typing when all text is written
        }
      }
    }
  }, [showTerminal, typingIndex, charIndex, clearingTerminal]);

  const handleButtonClick = () => {
    setShowButton(false); // Hide button instantly
    setShowTerminal(false); // Hide terminal instantly
    setTimeout(() => {
      setShowTerminal(true); // Show terminal with fade-in effect
    }, 10); // Small delay to trigger re-render
  };

  return (
    <div className={`who-am-i-container ${state}`}>
      {showButton && (
        <button
          className="who-am-i-button"
          onClick={handleButtonClick}
        >
          Who am I?
        </button>
      )}

      {showTerminal && (
        <div className={`terminal ${fadeIn ? 'fade-in' : ''}`}>
          <pre>{terminalText + currentLine}<span className={`blinking-cursor ${isTyping ? '' : 'hidden'}`}>|</span></pre>
        </div>
      )}
    </div>
  );
}

export default WhoAmI;