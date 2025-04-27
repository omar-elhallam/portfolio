import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './Home.css';
import CustomCursor from './components/Custom_Cursor';
import CosmicTitle from './components/CosmicTitle/CosmicTitle';
import Header from './components/Header/Header';

function Home() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {  
      if (window.scrollY > lastScrollY && window.scrollY > 70) {
        setShowHeader(true);
      } else if (window.scrollY <= 70) {
        setShowHeader(false);
      }
      lastScrollY = window.scrollY;
    
      const scrollY = window.scrollY;
      const nebula = document.getElementById("nebula");
      const starsMidground = document.getElementById("stars-midground");
      const starsForeground = document.getElementById("stars-foreground");

      if (nebula) nebula.style.backgroundPosition = `center calc(500px + ${scrollY * 0.1}px)`;
      if (starsMidground) starsMidground.style.backgroundPosition = `center calc(100px + ${scrollY * 0.25}px)`;
      if (starsForeground) starsForeground.style.backgroundPosition = `center calc(100px + ${scrollY * 0.4}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="portfolio dark-theme">
      <CustomCursor /> {/* Add the custom cursor to the home page */}
      <Header showHeader={showHeader} />
      <div className="background-layer" id="nebula"></div>
      <div className="background-layer" id="stars-midground"></div>
      <div className="background-layer" id="stars-foreground"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <CosmicTitle text="Crafting Immersive Experiences with Code & Design" />
          <NavLink to="/MyWork" className="cta-button nav-link">Explore My Work</NavLink>
        </div>
        <div className="hero-visuals">
          {/* Glowing Cards */}
          <div className="card-layout">
            <div className="card-layer glowing-card"></div>
            <div className="card-layer glowing-card"></div>
            <div className="card-layer glowing-card"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am Omar El Hallam, a Computer Science student, who studied at University of Richmond and College de paris, with a passion for software development, music, and sports. I specialize in creating dynamic and immersive digital experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: C++, Python, Java, SQL, MIPS Assembly</li>
          <li>Frameworks: React, Flutter</li>
          <li>Database Management: SQL, Firebase</li>
          <li>Other: Unix/Linux, OOP, API Development</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>Contact</h2>
        <p>Feel free to reach out via <a href="mailto:omar.elhallam8@gmail.com">email</a> or connect with me on <a href="https://linkedin.com">LinkedIn</a>.</p>
      </section>

      <div className="extra-content"></div> {/* Placeholder for scrolling */}
    </div>
  );
}

export default Home;
