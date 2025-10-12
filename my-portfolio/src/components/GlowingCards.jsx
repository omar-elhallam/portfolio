import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './GlowingCards.css';
import computerImage from '../assets/images/projects/computer.png'; // Add this import
import bonkusImage from '../assets/images/projects/Bonkus_3_50.png'; // Add this import

function GlowingCards() {
  const navigate = useNavigate();

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

  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="card-layout">
      <div className="card-layer glowing-card from-left" onClick={() => handleCardClick('/MarathonDev')}>
        <div className="card-inner">
          <div className="card-front">
            <div className="card-content">
              <h3 className="card-title">Dev Marathon – Game Platform</h3>
              <p className="card-description">
                A dynamic web platform built in one week, hosting both custom-made and open-source games.
              </p>
              <div className="tech-stack">React.js • JavaScript • Godot • Netlify</div>
            </div>
          </div>
          <div className="card-back">
            <div className="card-content">
              <h4 className="card-title">Dev Marathon Preview</h4>
              <img src={bonkusImage} alt="Dev Marathon Preview" className="project-image" />
              <p className="extended-description">
                Features responsive design, multiple playable games, and seamless integration with Godot exports.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-layer glowing-card from-right" onClick={() => handleCardClick('/LogismProject')}>
        <div className="card-inner">
          <div className="card-front">
            <div className="card-content">
              <h3 className="card-title">Custom CPU & Assembler</h3>
              <p className="card-description">
                A complete CPU architecture built from scratch, featuring a custom assembler and kernel.
              </p>
              <div className="tech-stack">Logisim • C++ • MIPS Assembly</div>
            </div>
          </div>
          <div className="card-back">
            <div className="card-content">
              <h4 className="card-title">Custom CPU Preview</h4>
              <img src={computerImage} alt="Custom CPU & Assembler Preview" className="project-image" />
              <p className="extended-description">
                Includes a custom-built assembler, kernel, and playable assembly-coded games like Pong.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card-layer glowing-card from-top" onClick={() => handleCardClick('/ServicePlatform')}>
        <div className="card-inner">
          <div className="card-front">
            <div className="card-content">
              <h3 className="card-title">Service Platform MVP</h3>
              <p className="card-description">
                Full-stack multiplatform service marketplace connecting customers with providers. Solo internship project featuring complete architecture.
              </p>
              <div className="tech-stack">Flutter • NestJS • PostgreSQL • Supabase</div>
            </div>
          </div>
          <div className="card-back">
            <div className="card-content">
              <h4 className="card-title">Service Platform Preview</h4>
              <div style={{
                width: '100%',
                height: '200px',
                background: 'linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(255, 0, 255, 0.2))',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                marginBottom: '1rem'
              }}>
                🚧
              </div>
              <p className="extended-description">
                Built from scratch: database design, REST APIs, authentication, bookings, payments, and Flutter mobile app (in development).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GlowingCards;