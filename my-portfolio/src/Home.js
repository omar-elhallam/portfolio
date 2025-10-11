import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import './Home.css';
import CustomCursor from './components/Custom_Cursor';
import CosmicTitle from './components/CosmicTitle/CosmicTitle';
import Header from './components/Header/Header';
import WhoAmI from './components/WhoAmI';
import GlowingCards from './components/GlowingCards';
import ScrollBar from "./components/ScrollBar/ScrollBar";
import QuickStats from './components/QuickStats';

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
      <div id="home"></div>
      <ScrollBar />
      <CustomCursor /> {/* Add the custom cursor to the home page */}
      <Header showHeader={showHeader} />
      <div className="background-layer" id="nebula"></div>
      <div className="background-layer" id="stars-midground"></div>
      <div className="background-layer" id="stars-foreground"></div>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <CosmicTitle text="Crafting Immersive Experiences with Code & Design" />
        </div>
        <div id="whoami"><WhoAmI /></div>
        {/* Quick Stats Section */}
        <QuickStats />
        <div className="hero-visuals">
          {/* Glowing Cards */}
          <GlowingCards />
        </div>
      </section>

      {/* Education Timeline */}
      <section className="education-section">
        <h2 className="section-title">
          <span className="title-icon">🎓</span>
          Education & Academic Excellence
        </h2>
        <div className="education-timeline">
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
      </section>

      {/* Skills Section */}
      <section className="skills-modern">
        <h2 className="section-title">
          <span className="title-icon">💻</span>
          Technical Expertise
        </h2>
        <div className="skills-grid">
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
      </section>

      {/* Professional Experience */}
      <section className="experience-section">
        <h2 className="section-title">
          <span className="title-icon">💼</span>
          Professional Experience
        </h2>
        <div className="experience-timeline">
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
