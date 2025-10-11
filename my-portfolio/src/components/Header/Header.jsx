import React, { useEffect, useState } from 'react';
import './Header.css';
import pfp from '../../assets/images/pfp/pfp.png';

function Header() {
  const [atTop, setAtTop] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Run animation on mount
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 20);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    // Animate when atTop changes
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 20);
    return () => clearTimeout(timeout);
  }, [atTop]);

  useEffect(() => {
    const handleScroll = () => {
      setAtTop(window.scrollY < 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80; // Header height (60px) + extra padding
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${atTop ? 'minimal-header' : 'full-header'}${animate ? ' header-fade-in' : ''}`}>
      <nav className={`nav nav-buttons${animate ? ' fade-in-stagger' : ''}`}>
        <button className="nav-btn fade-in-el" style={{ animationDelay: '0.1s' }} onClick={() => scrollToSection('home')}>Home</button>
        <button className="nav-btn fade-in-el" style={{ animationDelay: '0.2s' }} onClick={() => scrollToSection('whoami')}>About Me</button>
        <button className="nav-btn fade-in-el" style={{ animationDelay: '0.3s' }} onClick={() => scrollToSection('projects')}>Projects</button>
      </nav>
      <div className="profile minimal-profile fade-in-el" style={{ animationDelay: '0.4s' }}>
        <span className="header-name">Omar El Hallam</span>
      </div>
      {!atTop && (
        <div className={`full-header-content${animate ? ' fade-in-el' : ''}`} style={{ animationDelay: '0.5s' }}>
          <div className="logo">Portfolio</div>
        </div>
      )}
    </header>
  );
}

export default Header;