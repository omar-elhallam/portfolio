import React, { useState, useEffect } from 'react';
import './CardStackNav.css';

const CardStackNav = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [direction, setDirection] = useState('next');

  const cards = [
    {
      id: 0,
      title: 'Education & Academic Excellence',
      icon: '🎓',
      theme: 'education',
      content: (
        <div className="card-content-wrapper">
          <div className="education-item">
            <div className="education-period">Nov 2024 - Jun 2025</div>
            <div className="education-content">
              <h3>Collège de Paris</h3>
              <p className="education-location">Casablanca, Morocco</p>
              <p className="education-degree">B3 Information Technology</p>
            </div>
          </div>

          <div className="education-item highlight">
            <div className="education-period">Aug 2021 - May 2024</div>
            <div className="education-content">
              <h3>University of Richmond</h3>
              <p className="education-location">School of Arts & Sciences, VA, USA</p>
              <p className="education-degree">Computer Science Major</p>
              <div className="achievement-badge">93% Scholarship Recipient</div>
            </div>
          </div>

          <div className="education-item">
            <div className="education-period">Jul 2021</div>
            <div className="education-content">
              <h3>Lycée Maimonide</h3>
              <p className="education-location">Casablanca, Morocco</p>
              <p className="education-degree">French Baccalauréat - Mention Bien (High Honors)</p>
            </div>
          </div>

          <div className="education-item">
            <div className="education-period">Oct 2020</div>
            <div className="education-content">
              <h3>SAT Examination</h3>
              <p className="education-location">Casablanca, Morocco</p>
              <div className="sat-scores">
                <div className="score-item">
                  <span className="score-value">770/800</span>
                  <span className="score-label">Math (Top 3% International)</span>
                </div>
                <div className="score-item">
                  <span className="score-value">600/800</span>
                  <span className="score-label">English (Top 27% International)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 1,
      title: 'Technical Expertise',
      icon: '💻',
      theme: 'skills',
      content: (
        <div className="card-content-wrapper skills-content">
          <div className="skill-category">
            <h3>Programming Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">C++</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">SQL</span>
              <span className="skill-tag">MIPS Assembly</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Web & Mobile Development</h3>
            <div className="skill-tags">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Flutter</span>
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">SharePoint Framework (SPFx)</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Systems & Architecture</h3>
            <div className="skill-tags">
              <span className="skill-tag">Unix/Linux</span>
              <span className="skill-tag">OOP</span>
              <span className="skill-tag">API Development</span>
              <span className="skill-tag">Computer Architecture</span>
              <span className="skill-tag">Database Management</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">English (Fluent)</span>
              <span className="skill-tag">French (Fluent)</span>
              <span className="skill-tag">Arabic (Fluent)</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      title: 'Professional Experience',
      icon: '💼',
      theme: 'experience',
      content: (
        <div className="card-content-wrapper">
          <div className="experience-item">
            <div className="experience-header">
              <div className="company-info">
                <h3>Exakis Nelite Morocco</h3>
                <p className="position">IT Intern</p>
              </div>
              <div className="experience-period">Jun 2024 - Aug 2024</div>
            </div>
            <div className="experience-location">Casablanca, Morocco</div>
            <ul className="experience-details">
              <li>Participated in development and customization of SharePoint solutions for internal clients</li>
              <li>Created modern SharePoint sites tailored to business requirements</li>
              <li>Integrated web components (Web Parts) using SharePoint Framework (SPFx)</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="company-info">
                <h3>Allianz Morocco</h3>
                <p className="position">Data & Business Intelligence Intern</p>
              </div>
              <div className="experience-period">Jun 2023 - Aug 2023</div>
            </div>
            <div className="experience-location">Casablanca, Morocco</div>
            <ul className="experience-details">
              <li>Managed company databases and network systems</li>
              <li>Analyzed commercial opportunities and conducted client prospecting</li>
              <li>Utilized SQL to extract relevant information from databases</li>
              <li>Created interactive web pages with Python to present data through diagrams</li>
              <li>Assisted in integration and updating of large volumes of Excel data into databases</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="experience-header">
              <div className="company-info">
                <h3>Exakis Nelite</h3>
                <p className="position">Observation Intern</p>
              </div>
              <div className="experience-period">Feb 2020 - Mar 2023</div>
            </div>
            <div className="experience-location">Casablanca, Morocco</div>
            <ul className="experience-details">
              <li>Discovered the professional world in an IT consulting company</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];

  const handleNext = () => {
    setDirection('next');
    setActiveCard((prev) => (prev + 1) % cards.length);
  };

  const handlePrev = () => {
    setDirection('prev');
    setActiveCard((prev) => (prev - 1 + cards.length) % cards.length);
  };

  const handleTabClick = (index) => {
    setDirection(index > activeCard ? 'next' : 'prev');
    setActiveCard(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="card-stack-container">
      {/* Navigation Tabs */}
      <div className="card-tabs">
        {cards.map((card, index) => (
          <button
            key={card.id}
            className={`card-tab ${activeCard === index ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          >
            <span className="tab-icon">{card.icon}</span>
            <span className="tab-title">{card.title}</span>
          </button>
        ))}
      </div>

      {/* Card Stack */}
      <div className="card-stack">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`stack-card ${card.theme} ${
              index === activeCard
                ? 'active'
                : index < activeCard
                ? 'left'
                : 'right'
            } ${direction}`}
          >
            <div className="card-header-section">
              <span className="card-icon">{card.icon}</span>
              <h2 className="card-title">{card.title}</h2>
            </div>
            <div className="card-body">{card.content}</div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="nav-arrow nav-arrow-left" onClick={handlePrev} aria-label="Previous card">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className="nav-arrow nav-arrow-right" onClick={handleNext} aria-label="Next card">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Progress Indicator */}
      <div className="progress-indicator">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`progress-dot ${index === activeCard ? 'active' : ''}`}
            onClick={() => handleTabClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CardStackNav;
