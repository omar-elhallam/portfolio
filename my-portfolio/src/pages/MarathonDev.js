import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bonkusImage from '../assets/images/projects/Bonkus_3_50.png';
import bonkusImage2 from '../assets/images/projects/marathondev/bonkus_games.gif';
import bonkusVideo from '../assets/images/projects/marathondev/bonkus_navigation.mp4';
import '../styles/ProjectPage.css';

function MarathonDev() {
  const navigate = useNavigate();
  const [lightboxImage, setLightboxImage] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setLightboxImage(null);
      }
    };

    if (lightboxImage) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [lightboxImage]);

  const openLightbox = (imageSrc, imageAlt) => {
    const isVideo = imageSrc.endsWith('.mp4') || imageSrc.endsWith('.webm') || imageSrc.endsWith('.ogg');
    setLightboxImage({ src: imageSrc, alt: imageAlt, isVideo });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="project-page">
      {/* Back Button */}
      <button className="back-button" onClick={() => navigate('/')}>
        ← Back
      </button>

      {/* Floating Back Button */}
      <button 
        className={`scroll-top-button ${!showScrollTop ? 'hidden' : ''}`}
        onClick={() => navigate('/')}
        style={{ left: '20px', right: 'auto' }}
      >
        ←
      </button>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-top-button ${!showScrollTop ? 'hidden' : ''}`}
        onClick={scrollToTop}
      >
        ↑
      </button>
      {/* Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="lightbox-overlay" 
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            cursor: 'pointer',
            padding: '2rem'
          }}
        >
          {lightboxImage.isVideo ? (
            <video
              src={lightboxImage.src}
              autoPlay
              loop
              muted
              playsInline
              controls
              onClick={(e) => e.stopPropagation()}
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '95vw',
                maxHeight: '95vh',
                minWidth: '60vw',
                objectFit: 'contain',
                cursor: 'default',
                borderRadius: '8px',
                boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)',
                transform: 'scale(1)',
                transition: 'transform 0.3s ease'
              }}
            />
          ) : (
            <img 
              src={lightboxImage.src} 
              alt={lightboxImage.alt}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '95vw',
                maxHeight: '95vh',
                minWidth: '60vw',
                objectFit: 'contain',
                cursor: 'default',
                borderRadius: '8px',
                boxShadow: '0 0 50px rgba(0, 0, 0, 0.5)',
                transform: 'scale(1)',
                transition: 'transform 0.3s ease'
              }}
            />
          )}
        </div>
      )}

      {/* Hero Section with Animated Background */}
      <div className="project-hero">
        <div className="hero-glow"></div>
        <h1 className="project-title animated-title">Dev Marathon – Game Platform</h1>
        <div className="project-tech-stack">
          <span className="tech-badge">React.js</span>
          <span className="tech-badge">JavaScript</span>
          <span className="tech-badge">Godot Engine</span>
          <span className="tech-badge">Netlify</span>
          <span className="tech-badge">HTML5</span>
        </div>
        <p className="project-tagline">7 Days. One Developer. Complete Game Platform.</p>
      </div>

      <div className="project-content">
        {/* Timeline Badge */}
        <div className="timeline-badge">
          <span className="timeline-icon">⏱️</span>
          <span>1 Week Sprint | Solo Development</span>
        </div>

        {/* Main Overview Card */}
        <div className="overview-card cosmic-card">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">🚀</span>
            Project Overview
          </h2>
          <div className="dual-column-section" style={{ marginTop: '1rem' }}>
            <div className="content-column">
              <p className="project-description">
                Dev Marathon is an intensive one-week development challenge where I built a complete game platform 
                from concept to deployment. This project showcases rapid prototyping skills, full-stack web development, 
                game engine integration, and the ability to deliver a polished product under extreme time constraints.
              </p>
              <p className="project-description">
                The platform features multiple custom-built games, responsive design, smooth animations, and seamless 
                integration between React components and Godot game instances. It serves as both a portfolio piece 
                demonstrating technical versatility and a testament to effective time management and prioritization skills.
              </p>
              <button 
                className="cta-button primary" 
                onClick={() => window.open('https://atome-marathon-dev.netlify.app/', '_blank')}
                style={{ marginTop: '1.5rem' }}
              >
                Click to View Website →
              </button>
            </div>
            <div className="image-column">
              <div className="image-container cosmic-card">
                <img 
                  src={bonkusImage} 
                  alt="Game Platform Preview" 
                  className="project-main-image"
                  onClick={() => openLightbox(bonkusImage, "Game Platform Preview")}
                  style={{ cursor: 'zoom-in' }}
                />
                <div className="image-caption">Main game interface with responsive design</div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenge Card */}
        <div className="cosmic-card challenge-card">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">⚡</span>
            The Challenge
          </h2>
          <div className="challenge-grid">
            <div className="challenge-box glow-card">
              <h3>⏰ Extreme Time Pressure</h3>
              <p>Complete platform development from zero to deployment in just 7 days, including design, 
              development, testing, and optimization phases.</p>
            </div>
            <div className="challenge-box glow-card">
              <h3>🎯 Multiple Technologies</h3>
              <p>Master and integrate multiple frameworks: React for frontend, Godot for game development, 
              and Netlify for deployment automation.</p>
            </div>
            <div className="challenge-box glow-card">
              <h3>🎮 Game-Web Integration</h3>
              <p>Seamlessly embed Godot HTML5 exports within React components while maintaining smooth performance 
              and responsive behavior.</p>
            </div>
            <div className="challenge-box glow-card">
              <h3>✨ Polish & UX</h3>
              <p>Despite time constraints, deliver a polished user experience with smooth animations, intuitive 
              navigation, and professional aesthetics.</p>
            </div>
          </div>
        </div>

        {/* Day-by-Day Breakdown */}
        <div className="cosmic-card">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">📅</span>
            Development Timeline
          </h2>
          
          <div className="journey-timeline">
            <div className="timeline-item">
              <div className="timeline-marker day-marker">Day 1</div>
              <div className="timeline-content glow-card">
                <h3>Planning & Architecture</h3>
                <p>Defined project scope, created wireframes, and established tech stack. Set up development 
                environment, initialized React project with Create React App, and planned component hierarchy. 
                Made critical decision to use Godot over Unity for better HTML5 export capabilities.</p>
                <div className="time-spent">8 hours</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker day-marker">Day 2</div>
              <div className="timeline-content glow-card">
                <h3>Core React Development</h3>
                <p>Built main application structure with React Router for navigation. Created reusable components 
                for navigation, game cards, and layout. Implemented responsive design with CSS Grid and Flexbox. 
                Set up state management for game selection and user preferences.</p>
                <div className="time-spent">10 hours</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker day-marker">Day 3</div>
              <div className="timeline-content glow-card">
                <h3>Godot Learning & Game #1</h3>
                <p>Intensive Godot crash course studying documentation and tutorials. Built first playable game 
                with GDScript. Implemented game logic, collision detection, and basic physics. Learned scene 
                management and node hierarchy patterns.</p>
                <div className="time-spent">12 hours</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker day-marker">Day 4</div>
              <div className="timeline-content glow-card">
                <h3>HTML5 Export & Integration</h3>
                <p>Configured Godot HTML5 export templates. Optimized game size and load times. Integrated 
                Godot canvas within React components. Debugged cross-origin and asset loading issues. 
                Implemented loading screens and error handling.</p>
                <div className="time-spent">9 hours</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker day-marker">Day 5</div>
              <div className="timeline-content glow-card">
                <h3>Game Polish & Open Source Integration</h3>
                <p>Focused on polishing the existing game with refined mechanics, improved visuals, and better 
                user feedback. Researched and identified two suitable open source games to integrate into the 
                platform, expanding the game library while maintaining quality standards and consistent user 
                experience.</p>
                <div className="time-spent">11 hours</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker day-marker">Day 6</div>
              <div className="timeline-content glow-card">
                <h3>Polish & Optimization</h3>
                <p>Performance optimization: code splitting, lazy loading, and asset compression. Cross-browser 
                testing on Chrome, Firefox, Safari. Mobile responsiveness improvements. Added sound effects and 
                background music with volume controls.</p>
                <div className="time-spent">10 hours</div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker day-marker">Day 7</div>
              <div className="timeline-content glow-card">
                <h3>Deployment & Documentation</h3>
                <p>Set up Netlify deployment pipeline with continuous integration. Configured build settings 
                and environment variables. Final testing in production environment. Created project documentation 
                and README with setup instructions.</p>
                <div className="time-spent">7 hours</div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Deep Dive */}
        <div className="dual-column-section">
          <div className="content-column">
            <div className="cosmic-card">
              <h2 className="section-title cosmic-title">
                <span className="title-icon">💻</span>
                Technical Implementation
              </h2>

              <div className="tech-section">
                <h3 className="tech-subsection">React Architecture</h3>
                <p>Built a straightforward React application with component-based structure. The site features 
                a simple, clean interface to showcase the games without complex routing or navigation systems. 
                Focused on core functionality and ease of use rather than over-engineering the solution.</p>
            
              </div>

              <div className="tech-section">
                <h3 className="tech-subsection">Godot Game Development</h3>
                <p>Developed and integrated games using Godot's HTML5 export functionality. The games were 
                embedded directly into the React site, keeping the implementation simple and effective. 
                Focused on creating playable, fun experiences rather than complex systems.</p>
              </div>

              <div className="tech-section">
                <h3 className="tech-subsection">Straightforward Approach</h3>
                <ul className="tech-list">
                  <li>Simple React components without over-complication</li>
                  <li>Direct game embedding using HTML5 exports</li>
                  <li>Clean, minimal design focused on showcasing the games</li>
                  <li>Fast development by avoiding unnecessary features</li>
                  <li>Practical implementation meeting project goals efficiently</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="image-column">
            <div className="image-container cosmic-card">
              <video 
                src={bonkusVideo} 
                alt="Game Selection Screen" 
                className="project-main-image"
                autoPlay
                loop
                muted
                playsInline
                onClick={() => openLightbox(bonkusVideo, "Game Selection Screen")}
                style={{ cursor: 'zoom-in' }}
              />
              <div className="image-caption">Card-based navigation for multiple games</div>
            </div>

            <div className="image-container cosmic-card image-placeholder">
              <div className="placeholder-content">
                <span className="placeholder-icon">🖼️</span>
                <p>Gameplay Screenshot</p>
              </div>
              <div className="image-caption">In-game action with UI overlays</div>
            </div>
          </div>
        </div>

        {/* Challenges & Solutions */}
        <div className="cosmic-card">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">🧩</span>
            Challenges & Solutions
          </h2>
          
          <div className="challenges-list">
            <div className="challenge-item glow-card">
              <div className="challenge-header">
                <h3>🤖 AI-Generated Code Issues</h3>
                <span className="difficulty-badge high">High Impact</span>
              </div>
              <p><strong>Problem:</strong> Initially attempted to use AI for game logic generation, but the 
              resulting code was difficult to debug and contained subtle logical errors that caused unpredictable 
              behavior.</p>
              <p><strong>Solution:</strong> Made strategic decision to write game logic manually from scratch. 
              While more time-consuming initially, resulted in cleaner, more maintainable code with fewer bugs. 
              Learned that for complex game mechanics, understanding and writing the logic yourself is more 
              efficient than debugging AI output.</p>
            </div>

            <div className="challenge-item glow-card">
              <div className="challenge-header">
                <h3>🎮 Godot-React Communication</h3>
                <span className="difficulty-badge medium">Medium Impact</span>
              </div>
              <p><strong>Problem:</strong> Needed bidirectional communication between Godot games and React 
              components for score updates, game state management, and navigation triggers.</p>
              <p><strong>Solution:</strong> Implemented JavaScript interface in Godot using JavaScript.eval() 
              and created event listeners in React. Set up message passing system with JSON serialization for 
              complex data structures. Added error boundaries to prevent game crashes from affecting entire application.</p>
            </div>

            <div className="challenge-item glow-card">
              <div className="challenge-header">
                <h3>📱 Mobile Responsiveness</h3>
                <span className="difficulty-badge medium">Medium Impact</span>
              </div>
              <p><strong>Problem:</strong> Game controls designed for mouse/keyboard didn't translate well to 
              touch interfaces. Canvas sizing issues on various screen sizes.</p>
              <p><strong>Solution:</strong> Implemented touch event handlers in Godot with on-screen virtual 
              controls. Used CSS viewport units and JavaScript resize listeners for dynamic canvas scaling. 
              Added device detection to show appropriate control schemes.</p>
            </div>

            <div className="challenge-item glow-card">
              <div className="challenge-header">
                <h3>⚡ Build Size & Load Times</h3>
                <span className="difficulty-badge low">Low Impact</span>
              </div>
              <p><strong>Problem:</strong> Initial Godot HTML5 exports were large (10+ MB) causing slow load 
              times and poor user experience.</p>
              <p><strong>Solution:</strong> Optimized Godot export settings to exclude unused modules. Compressed 
              game assets and implemented progressive loading. Added loading progress indicators and splash 
              screens to improve perceived performance. Final build size reduced to under 3 MB.</p>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <div className="cosmic-card">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">✨</span>
            Key Features
          </h2>
          
          <div className="feature-grid">
            <div className="feature-card glow-card">
              <div className="feature-icon">🎯</div>
              <h3>Multiple Game Modes</h3>
              <p>Platform supports multiple games with different genres and mechanics. Easy-to-extend 
              architecture allows adding new games by simply dropping in Godot exports and registering 
              them in the game catalog.</p>
            </div>

            <div className="feature-card glow-card">
              <div className="feature-icon">🏆</div>
              <h3>Score Tracking</h3>
              <p>Persistent high score system using browser localStorage. Tracks best scores per game 
              with timestamps and player names. Implements leaderboard display with animated transitions.</p>
            </div>

            <div className="feature-card glow-card">
              <div className="feature-icon">🎨</div>
              <h3>Smooth Animations</h3>
              <p>CSS transitions and keyframe animations for page transitions, card hovers, and UI feedback. 
              Particle effects in games using Godot's built-in particle system. Loading animations during 
              game initialization.</p>
            </div>

            <div className="feature-card glow-card">
              <div className="feature-icon">📱</div>
              <h3>Responsive Design</h3>
              <p>Fully responsive layout adapting from mobile phones to desktop displays. Touch-optimized 
              controls for mobile gaming. Flexible grid system adjusting game thumbnails based on screen size.</p>
            </div>

            <div className="feature-card glow-card">
              <div className="feature-icon">🔊</div>
              <h3>Audio System</h3>
              <p>Background music with seamless looping. Sound effects for user interactions and game events. 
              Volume controls and mute functionality persisted across sessions.</p>
            </div>

            <div className="feature-card glow-card">
              <div className="feature-icon">⚙️</div>
              <h3>Settings & Preferences</h3>
              <p>User customization options for audio, graphics quality, and control schemes. Settings persist 
              across sessions using localStorage. Easy-to-access settings panel with instant preview.</p>
            </div>
          </div>
        </div>

        {/* Stats & Metrics */}
        <div className="stats-section">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">📊</span>
            Project Metrics
          </h2>
          
          <div className="stats-grid">
            <div className="stat-card cosmic-card">
              <div className="stat-number">7</div>
              <div className="stat-label">Days to Completion</div>
              <p>From concept to deployed production application</p>
            </div>

            <div className="stat-card cosmic-card">
              <div className="stat-number">2000+</div>
              <div className="stat-label">Lines of Code</div>
              <p>Across React components and Godot game scripts</p>
            </div>

            <div className="stat-card cosmic-card">
              <div className="stat-number">90+</div>
              <div className="stat-label">Lighthouse Score</div>
              <p>Performance, accessibility, best practices, SEO</p>
            </div>

            <div className="stat-card cosmic-card">
              <div className="stat-number">15+</div>
              <div className="stat-label">React Components</div>
              <p>Reusable, modular component architecture</p>
            </div>

            <div className="stat-card cosmic-card">
              <div className="stat-number">3</div>
              <div className="stat-label">Technologies Mastered</div>
              <p>React, Godot, and modern deployment practices</p>
            </div>

            <div className="stat-card cosmic-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Uptime</div>
              <p>Reliable hosting on Netlify with CDN distribution</p>
            </div>
          </div>
        </div>

        {/* Learning Outcomes */}
        <div className="cosmic-card outcomes-card">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">🎓</span>
            Key Learnings
          </h2>
          
          <div className="outcomes-grid">
            <div className="outcome-item">
              <span className="outcome-icon">⚡</span>
              <h3>Rapid Development</h3>
              <p>Learned to prioritize features effectively using MVP approach. Mastered time-boxing tasks 
              and making quick technical decisions to maintain momentum without sacrificing quality.</p>
            </div>

            <div className="outcome-item">
              <span className="outcome-icon">🎮</span>
              <h3>Game Development</h3>
              <p>Gained proficiency in Godot Engine, GDScript, and game design principles. Understanding of 
              game loops, collision detection, physics simulation, and HTML5 export optimization.</p>
            </div>

            <div className="outcome-item">
              <span className="outcome-icon">🔧</span>
              <h3>Integration Skills</h3>
              <p>Experience combining disparate technologies into cohesive application. Solved cross-platform 
              compatibility issues and implemented bidirectional communication patterns.</p>
            </div>

            <div className="outcome-item">
              <span className="outcome-icon">📈</span>
              <h3>Performance Optimization</h3>
              <p>Learned practical optimization techniques: code splitting, lazy loading, asset compression, 
              and performance profiling. Achieved production-ready performance metrics.</p>
            </div>

            <div className="outcome-item">
              <span className="outcome-icon">🎯</span>
              <h3>Problem Solving</h3>
              <p>Developed systematic debugging approach for complex multi-technology stack. Enhanced ability 
              to research solutions quickly and adapt to new tools under pressure.</p>
            </div>

            <div className="outcome-item">
              <span className="outcome-icon">🚀</span>
              <h3>Deployment & DevOps</h3>
              <p>Mastered modern deployment practices with Netlify. Configured build pipelines, environment 
              variables, and continuous deployment workflows for automated releases.</p>
            </div>
          </div>
        </div>

        {/* Future Enhancements */}
        <div className="cosmic-card">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">🔮</span>
            Future Enhancements
          </h2>
          
          <div className="feature-grid">
            <div className="future-feature glow-card">
              <div className="feature-icon">🌐</div>
              <h3>Multiplayer Support</h3>
              <p>Implement WebSocket-based real-time multiplayer using Socket.io. Add matchmaking system, 
              lobbies, and synchronized game state across clients for competitive gameplay.</p>
            </div>

            <div className="future-feature glow-card">
              <div className="feature-icon">🎮</div>
              <h3>More Games</h3>
              <p>Expand game library with diverse genres: puzzle, strategy, racing, and RPG elements. 
              Create game development pipeline for rapid prototyping and integration of new titles.</p>
            </div>

            <div className="future-feature glow-card">
              <div className="feature-icon">📱</div>
              <h3>PWA Conversion</h3>
              <p>Transform into Progressive Web App with offline support, push notifications, and home 
              screen installation. Improve mobile experience with native-like functionality.</p>
            </div>

            <div className="future-feature glow-card">
              <div className="feature-icon">👥</div>
              <h3>User Accounts</h3>
              <p>Add authentication system with profile management. Cloud-based score sync across devices, 
              achievements system, and social features for friend challenges.</p>
            </div>

            <div className="future-feature glow-card">
              <div className="feature-icon">🎨</div>
              <h3>Theme System</h3>
              <p>Implement customizable UI themes with dark/light modes and color schemes. Allow user-created 
              themes with community sharing capabilities.</p>
            </div>

            <div className="future-feature glow-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics Dashboard</h3>
              <p>Build analytics system tracking play time, popular games, and user engagement metrics. 
              Provide insights for improving game balance and user experience.</p>
            </div>
          </div>
        </div>

        {/* Tech Stack Details */}
        <div className="cosmic-card">
          <h2 className="section-title cosmic-title">
            <span className="title-icon">🛠️</span>
            Complete Tech Stack
          </h2>
          
          <div className="tech-stack-grid">
            <div className="stack-category">
              <h3>Frontend</h3>
              <ul className="tech-list">
                <li>React 18 with Hooks</li>
                <li>React Router v6</li>
                <li>CSS3 with Grid & Flexbox</li>
                <li>CSS Animations & Transitions</li>
                <li>Local Storage API</li>
              </ul>
            </div>

            <div className="stack-category">
              <h3>Game Engine</h3>
              <ul className="tech-list">
                <li>Godot Engine 3.5</li>
                <li>GDScript</li>
                <li>HTML5 Export Module</li>
                <li>2D Physics Engine</li>
                <li>Particle Systems</li>
              </ul>
            </div>

            <div className="stack-category">
              <h3>Development Tools</h3>
              <ul className="tech-list">
                <li>VS Code</li>
                <li>Git Version Control</li>
                <li>Chrome DevTools</li>
                <li>React Developer Tools</li>
                <li>Lighthouse Auditing</li>
              </ul>
            </div>

            <div className="stack-category">
              <h3>Deployment</h3>
              <ul className="tech-list">
                <li>Netlify Hosting</li>
                <li>Continuous Deployment</li>
                <li>CDN Distribution</li>
                <li>HTTPS/SSL</li>
                <li>Custom Domain</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section cosmic-card">
          <h2>Experience the Platform Live</h2>
          <p>Want to see the result of this intense development sprint? Check out the live platform or 
          explore the source code to see how everything comes together. This project demonstrates not just 
          technical skills, but also the ability to deliver production-ready applications under pressure.</p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => window.open('https://atome-marathon-dev.netlify.app/', '_blank')}>
              View Live Demo →
            </button>
            <button className="cta-button secondary" onClick={() => navigate('/')}>
              ← Back to Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarathonDev;
