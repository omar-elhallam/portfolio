import React, { useEffect, useState } from 'react';
import './Header.css';
import emailIcon from './email_icon.svg';
import githubIcon from './github_icon.svg';
import linkedinIcon from './linkedin_icon.svg';
import whatsappIcon from './whatsapp_icon.svg';
import profilePic from '../../assets/images/omar.jfif';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Run animation on mount only
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 20);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const headerOffset = 80;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}${animate ? ' header-fade-in' : ''}`}>
      {/* Left side - Name/Brand */}
      <div className="header-brand fade-in-el" style={{ animationDelay: '0.1s' }}>
        <img src={profilePic} alt="Omar El Hallam" className="header-profile-pic" />
        <div className="header-brand-text">
          <span className="header-name">Omar El Hallam</span>
          {scrolled && (
            <span className="header-tagline">Full-Stack Developer</span>
          )}
        </div>
      </div>

      {/* Center - Navigation */}
      <nav className={`nav nav-buttons${animate ? ' fade-in-stagger' : ''}`}>
        <button className="nav-btn fade-in-el" style={{ animationDelay: '0.2s' }} onClick={() => scrollToSection('home')}>
          Home
        </button>
        <button className="nav-btn fade-in-el" style={{ animationDelay: '0.3s' }} onClick={() => scrollToSection('whoami')}>
          About me
        </button>
        <button className="nav-btn fade-in-el" style={{ animationDelay: '0.4s' }} onClick={() => scrollToSection('projects')}>
          Projects
        </button>
      </nav>

      {/* Right side - Social Links */}
      <div className={`header-social${animate ? ' fade-in-stagger' : ''}`}>
        <a 
          href="mailto:omar.elhallam8@gmail.com" 
          className="social-link fade-in-el" 
          style={{ animationDelay: '0.5s' }}
          aria-label="Email"
          title="Email me"
        >
          <img src={emailIcon} alt="Email" className="social-icon" />
        </a>
        <a 
          href="https://github.com/omar-elhallam" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link fade-in-el" 
          style={{ animationDelay: '0.6s' }}
          aria-label="GitHub"
          title="GitHub Profile"
        >
          <img src={githubIcon} alt="GitHub" className="social-icon" />
        </a>
        <a 
          href="https://www.linkedin.com/in/omar-abdelmoti-el-hallam-73850a347/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link fade-in-el" 
          style={{ animationDelay: '0.7s' }}
          aria-label="LinkedIn"
          title="LinkedIn Profile"
        >
          <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
        </a>
        <a 
          href="https://wa.me/212669809246" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="social-link fade-in-el" 
          style={{ animationDelay: '0.8s' }}
          aria-label="WhatsApp"
          title="WhatsApp"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
        </a>
      </div>
    </header>
  );
}

export default Header;