import React, { useEffect } from 'react';
import './GlowingCards.css';

function GlowingCards() {
  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll('.card-layer');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          card.classList.add('visible');
        } else {
          card.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="card-layout">
      <div className="card-layer glowing-card from-left">
        <div className="card-content">
          <h3 className="card-title">Games Website</h3>
          <p className="card-description">Created a website with React and JavaScript to host games developed using Godot.</p>
        </div>
      </div>
      <div className="card-layer glowing-card from-right"></div>
      <div className="card-layer glowing-card from-top"></div>
    </div>
  );
}

export default GlowingCards;