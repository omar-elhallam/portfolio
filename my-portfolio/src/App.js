import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio dark-theme">
      {/* Header */}
      <header className={`header ${showHeader ? 'visible' : ''}`}>
        <div className="logo">My Logo</div>
        <nav className="nav">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-link">LinkedIn</a>
          <a href="mailto:your.email@example.com" className="nav-link">Email</a>
          <a href="" className="nav-link">Resume</a>
        </nav>
        <div className="name">Omar  El Hallam</div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to My Portfolio</h1>
          <p className="hero-subtitle">Crafting immersive experiences with code and design</p>
          <button className="cta-button">Explore My Work</button>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          Placeholder text for the about section. This will describe your expertise and passion for development.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Placeholder Skill 1</li>
          <li>Placeholder Skill 2</li>
          <li>Placeholder Skill 3</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Reach out via <a href="mailto:your.email@example.com">email</a>.</p>
      </section>

      {/* Glowing Cards */}
      <div className="card-layout">
        <div className="card-layer glowing-card">Card 1</div>
        <div className="card-layer glowing-card">Card 2</div>
        <div className="card-layer glowing-card">Card 3</div>
      </div>
    </div>
  );
}

export default App;
