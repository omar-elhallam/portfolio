import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProjectPage.css';
import '../styles/ServicePlatform.css';

function ServicePlatform() {
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
    setLightboxImage({ src: imageSrc, alt: imageAlt });
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
          <img 
            src={lightboxImage.src} 
            alt={lightboxImage.alt}
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              objectFit: 'contain',
              cursor: 'default',
              borderRadius: '8px',
              boxShadow: '0 0 50px rgba(0, 212, 255, 0.5)'
            }}
          />
        </div>
      )}

      {/* Hero Section */}
      <div className="project-hero">
        <div className="hero-glow"></div>
        <div className="animated-title">
          <h1 className="project-title">Service Platform MVP</h1>
          <div className="project-tech-stack">
            <span className="tech-badge">Flutter</span>
            <span className="tech-badge">NestJS</span>
            <span className="tech-badge">PostgreSQL</span>
            <span className="tech-badge">Supabase</span>
          </div>
          <p className="project-tagline">
            Full-stack multiplatform service marketplace connecting customers with service providers
          </p>
          <div className="status-badge ongoing">
            🚧 Project Ongoing - Frontend in Development
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="project-content">
        
        {/* Overview Section */}
        <section className="cosmic-card overview-card">
          <h2 className="section-title cosmic-style">
            <span className="title-icon">📱</span>
            Project Overview
          </h2>
          <p className="project-description">
            During my summer 2025 internship at <strong>Mobiconnect Technologies</strong>, I developed a complete full-stack service marketplace platform from scratch. 
            This ambitious solo project aimed to create a multiplatform mobile application connecting customers with service providers through an intuitive booking system.
          </p>
          <p className="project-description">
            The project follows a modern architecture with <strong>Flutter</strong> for the mobile frontend, <strong>NestJS</strong> (Node.js) for the backend API, 
            and <strong>PostgreSQL</strong> hosted on <strong>Supabase</strong> for data persistence. The platform handles user authentication, service listings, 
            booking requests, offers, payments, and reviews - creating a complete ecosystem for service transactions.
          </p>
        </section>

        {/* Technical Timeline */}
        <section className="cosmic-card">
          <h2 className="section-title cosmic-style">
            <span className="title-icon">📅</span>
            Development Timeline
          </h2>
          <div className="journey-timeline">
            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="day-marker">Phase 1</div>
              </div>
              <div className="timeline-content">
                <h3>📋 Analysis & Preparation</h3>
                <p>
                  Analyzed requirements, selected the technology stack, and designed the complete system architecture 
                  including database schema, REST APIs, and user interface flows.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="day-marker">Phase 2</div>
              </div>
              <div className="timeline-content">
                <h3>🗄️ Database Design & Implementation</h3>
                <p>
                  Created a comprehensive relational schema using DBML (dbdiagram.io), implemented tables in PostgreSQL 
                  with proper relationships, and validated using DBeaver.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="day-marker">Phase 3</div>
              </div>
              <div className="timeline-content">
                <h3>⚙️ Backend Development</h3>
                <p>
                  Built modular NestJS backend with complete CRUD endpoints, data validation, security measures, 
                  and comprehensive API testing using Postman.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">
                <div className="day-marker">Phase 4</div>
              </div>
              <div className="timeline-content">
                <h3>📱 Frontend Development (Ongoing)</h3>
                <p>
                  Developing Flutter mobile application with authentication, service browsing, booking creation, 
                  offer management, and real-time updates. Currently in active development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Phase 1: Analysis & Preparation */}
        <section className="cosmic-card">
          <h2 className="section-title cosmic-style">
            <span className="title-icon">🔍</span>
            Phase 1: Analysis & Preparation
          </h2>
          
          <div className="technical-grid">
            <div className="technical-item">
              <span className="tech-icon">📝</span>
              <h3>Requirements Analysis</h3>
              <p>
                Studied the specifications to understand functional needs (user management, services, bookings, authentication) 
                and technical requirements (database reliability, access security, application responsiveness).
              </p>
              <ul className="feature-list">
                <li>Multi-role user account management (customers, providers, admins)</li>
                <li>Service system with descriptions, locations, and availability</li>
                <li>Booking management and customer-provider interaction tracking</li>
              </ul>
            </div>

            <div className="technical-item">
              <span className="tech-icon">🛠️</span>
              <h3>Technology Stack Selection</h3>
              <p>
                Carefully selected modern technologies balancing performance, maintainability, cost-effectiveness, and scalability.
              </p>
              <div className="tech-specs">
                <span><strong>Backend:</strong> NestJS (Node.js) - Robust, modular, REST API ready</span>
                <span><strong>Database:</strong> PostgreSQL via Supabase - Reliable with integrated auth</span>
                <span><strong>Mobile:</strong> Flutter - Multiplatform, fast development, native rendering</span>
                <span><strong>Management:</strong> Trello Kanban - Task organization and progress tracking</span>
              </div>
            </div>

            <div className="technical-item">
              <span className="tech-icon">🏗️</span>
              <h3>Architecture Design</h3>
              <p>
                Designed complete system architecture with clear separation between backend API, relational database, and mobile frontend.
              </p>
              <ul className="feature-list">
                <li>Clean architecture: API REST backend, relational schema, mobile frontend</li>
                <li>Visual database schema creation using dbdiagram.io</li>
                <li>Defined tables, primary keys, relationships, and integrity constraints</li>
                <li>Reduced risks by anticipating entity relationships before coding</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Stack Comparison */}
        <section className="cosmic-card">
          <h2 className="section-title cosmic-style">
            <span className="title-icon">⚖️</span>
            Stack Technologique (Low-Cost & Scalable)
          </h2>
          <p className="section-description">
            The project was designed with a modern, flexible, and cost-effective stack that meets the constraints 
            of an internship project while ensuring easy long-term evolution.
          </p>
          
          <div className="tech-stack-grid">
            <div className="stack-category">
              <h3>🎨 Frontend Mobile</h3>
              <p><strong>Choice:</strong> Flutter</p>
              <p><strong>Why:</strong> Multiplatform, fluid performance, robust framework, strong community support, 
              and ability to extend to web in the future.</p>
            </div>

            <div className="stack-category">
              <h3>⚙️ Backend API</h3>
              <p><strong>Choice:</strong> Node.js + NestJS</p>
              <p><strong>Why:</strong> Strong TypeScript support, modular structure, easy to maintain and scale, 
              excellent documentation and ecosystem.</p>
            </div>

            <div className="stack-category">
              <h3>🗄️ Database</h3>
              <p><strong>Choice:</strong> PostgreSQL</p>
              <p><strong>Why:</strong> Relational database, open-source, reliable, and perfectly integrated with Supabase 
              for authentication and storage.</p>
            </div>

            <div className="stack-category">
              <h3>🔐 Authentication</h3>
              <p><strong>Choice:</strong> Supabase Auth</p>
              <p><strong>Why:</strong> Free alternative to Firebase, fast integration, transparent setup, 
              and seamless database connection.</p>
            </div>

            <div className="stack-category">
              <h3>📦 File Storage</h3>
              <p><strong>Choice:</strong> Supabase Storage</p>
              <p><strong>Why:</strong> Integrated with the database, simple management, economical solution, 
              perfect for profile pictures and service images.</p>
            </div>

            <div className="stack-category">
              <h3>💳 Payment (Morocco)</h3>
              <p><strong>Choice:</strong> CMI</p>
              <p><strong>Why:</strong> Moroccan standard, secure, accepted by majority of local businesses, 
              reliable payment gateway integration.</p>
            </div>
          </div>
        </section>

        {/* Phase 2: Database Design */}
        <section className="cosmic-card">
          <h2 className="section-title cosmic-style">
            <span className="title-icon">🗄️</span>
            Phase 2: Database Design & Implementation
          </h2>
          
          <p className="section-description">
            Used dbdiagram.io to create a clear and documented relational schema. This schema served as the 
            foundation for both backend and frontend development, with multiple iterations and improvements.
          </p>

          <div className="technical-grid">
            <div className="technical-item">
              <span className="tech-icon">👥</span>
              <h3>Users & Roles</h3>
              <p>
                Multi-role system (CUSTOMER, PROVIDER, ADMIN) with authentication managed by Supabase Auth. 
                Removed password field for security, leveraging Supabase's secure authentication system.
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">🛠️</span>
              <h3>Service Providers</h3>
              <p>
                Providers can add their own services with custom pricing, availability schedules, location data, 
                and verification status to build trust with customers.
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">📋</span>
              <h3>Service Requests</h3>
              <p>
                Customer requests include urgency levels, maximum distance radius, detailed descriptions, 
                and support for multimedia attachments (images, documents).
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">📅</span>
              <h3>Bookings</h3>
              <p>
                New table to manage accepted offers with comprehensive status tracking using ENUM values: 
                SCHEDULED, IN_PROGRESS, DELIVERED, COMPLETED, CANCELLED.
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">💰</span>
              <h3>Payments</h3>
              <p>
                Multiple payment methods (credit card, CMI, PayPal, cash, wallet) with direct linkage to bookings 
                for complete transaction tracking and financial reporting.
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">⭐</span>
              <h3>Reviews</h3>
              <p>
                Detailed rating system covering punctuality, communication quality, service quality, and price fairness. 
                Supports bidirectional reviews (customer reviews provider, provider reviews customer).
              </p>
            </div>
          </div>

          <div className="glow-card" style={{marginTop: '2rem'}}>
            <h3>🎯 Database Impact</h3>
            <p>
              These design improvements resulted in a more realistic, robust, and scalable database. Each use case 
              (booking, payment, validation, review) is covered in a structured way. The clear separation between 
              service requests, offers, and bookings ensures better traceability and precise tracking of the user journey.
            </p>
            <p>
              <strong>Tools Used:</strong> DBML (dbdiagram.io) for schema design, PostgreSQL for implementation, 
              DBeaver for SQL testing, validation, and data manipulation.
            </p>
          </div>
        </section>

        {/* Phase 3: Backend Development */}
        <section className="cosmic-card">
          <h2 className="section-title cosmic-style">
            <span className="title-icon">⚙️</span>
            Phase 3: Backend Development
          </h2>
          
          <p className="section-description">
            Built a solid, maintainable, and scalable backend architecture that effectively communicates with 
            Supabase database and exposes reliable REST APIs to the Flutter mobile frontend.
          </p>

          <h3 className="tech-subsection">Environment Setup & Configuration</h3>
          <p className="project-description">
            Installed and configured a NestJS project with TypeScript. Created a <code>.env</code> file containing 
            all sensitive variables (host, username, password, database) to ensure security and portability.
            Integrated directly with Supabase PostgreSQL database using the native Supabase client library.
          </p>

          <div className="code-showcase">
            <h3>Configuration Highlights</h3>
            <div className="code-example">
              code to write...
            </div>
            <p className="code-comment">
              Integration with Supabase using native client library for direct PostgreSQL access,
              authentication, and storage management.
            </p>
          </div>

          <h3 className="tech-subsection">Modular Architecture</h3>
          <p className="project-description">
            Created independent modules for each database entity to ensure clarity, maintainability, and scalability:
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <span className="feature-icon">👤</span>
              <h3>UsersModule</h3>
              <p>User management and role handling (CUSTOMER, PROVIDER, ADMIN)</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🏢</span>
              <h3>ServiceProvidersModule</h3>
              <p>Provider profile management with verification and authentication</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🛠️</span>
              <h3>ServicesModule</h3>
              <p>Service catalog management and categorization</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📝</span>
              <h3>ServiceRequestsModule</h3>
              <p>Customer requests with urgency levels and attachments</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💼</span>
              <h3>OffersModule</h3>
              <p>Provider offer management and submission</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📅</span>
              <h3>BookingsModule</h3>
              <p>Accepted service tracking and scheduling</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💳</span>
              <h3>PaymentsModule</h3>
              <p>Payment processing with multiple methods</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⭐</span>
              <h3>ReviewsModule</h3>
              <p>Review management (quality, punctuality, communication, price)</p>
            </div>
          </div>

          <div className="glow-card" style={{marginTop: '2rem'}}>
            <h3>✅ Benefits of Modular Approach</h3>
            <ul className="feature-list">
              <li><strong>Simpler Maintenance:</strong> Each module is independent and focused</li>
              <li><strong>Easy Evolution:</strong> Adding features means creating new modules</li>
              <li><strong>Frontend Clarity:</strong> Each resource has its own clear routes</li>
            </ul>
          </div>

          <h3 className="tech-subsection">REST API Endpoints</h3>
          <p className="project-description">
            Each module exposes complete CRUD endpoints with consistent patterns:
          </p>

          <div className="code-showcase">
            <h3>Example Endpoints</h3>
            <div className="code-example">
              code to write...
            </div>
          </div>

          <h3 className="tech-subsection">Data Validation & Security</h3>
          <p className="project-description">
            Implemented server-side validation using DTOs (Data Transfer Objects) and NestJS decorators 
            to ensure data consistency and prevent invalid entries:
          </p>

          <ul className="feature-list">
            <li><strong>Sensitive Variables:</strong> Protected via .env files (database credentials, API keys)</li>
            <li><strong>ENUM Validation:</strong> Database-level enums for roles, statuses, payment methods to prevent errors</li>
            <li><strong>Request Validation:</strong> Strict validation rejects invalid requests before database operations</li>
            <li><strong>Access Control:</strong> Middleware-based authorization for admin-only routes and protected resources</li>
          </ul>

          <h3 className="tech-subsection">Testing with Postman</h3>
          <p className="project-description">
            Conducted systematic testing to verify functionality and data integrity:
          </p>

          <div className="technical-grid">
            <div className="technical-item">
              <span className="tech-icon">✅</span>
              <h3>API Response Testing</h3>
              <p>
                Verified all endpoints return correct responses with proper HTTP status codes, 
                headers, and payload structure.
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">🗄️</span>
              <h3>Database Integration</h3>
              <p>
                Confirmed data is correctly inserted into Supabase with proper relationships, 
                constraints, and foreign key validation.
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">🔄</span>
              <h3>Complete Flow Testing</h3>
              <p>
                Tested full user journeys: create service request → receive provider offer → 
                accept offer → process payment → submit review.
              </p>
            </div>
          </div>
        </section>

        {/* Phase 4: Frontend Development */}
        <section className="cosmic-card">
          <h2 className="section-title cosmic-style">
            <span className="title-icon">📱</span>
            Phase 4: Frontend Development (Ongoing)
          </h2>
          
          <p className="section-description">
            The frontend represents the user-facing part of the application. Flutter was chosen to develop 
            a multiplatform app working on both Android and iOS, with potential future web extension.
          </p>

          <div className="status-badge ongoing" style={{marginBottom: '2rem', display: 'inline-block'}}>
            🚧 Currently in Active Development
          </div>

          <h3 className="tech-subsection">Flutter Choice & Backend Integration</h3>
          <p className="project-description">
            Flutter was selected for its rapid development capabilities (hot reload), visual consistency 
            across platforms, and easy integration with the NestJS REST APIs.
          </p>

          <ul className="feature-list">
            <li><strong>Rapid Development:</strong> Hot reload and reusable widgets accelerate iteration</li>
            <li><strong>Visual Consistency:</strong> Uniform design across all platforms</li>
            <li><strong>REST Integration:</strong> HTTP library communicates with NestJS backend</li>
            <li><strong>Multiplatform:</strong> Single codebase for Android, iOS, and future web support</li>
          </ul>

          <h3 className="tech-subsection">MVP Features Implemented</h3>
          <p className="project-description">
            The MVP deliberately focuses on essential features to test the overall functionality and 
            backend-frontend relationship:
          </p>

          <div className="feature-grid">
            <div className="feature-card">
              <span className="feature-icon">🔐</span>
              <h3>User Authentication</h3>
              <p>
                Simple login form for customers and providers. User data retrieval via API. 
                Password management delegated to Supabase for security.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">📋</span>
              <h3>Service Browsing</h3>
              <p>
                Display available services from /services endpoint. Each service shows name, 
                category, and base price in a clean list view.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">➕</span>
              <h3>Request Creation</h3>
              <p>
                Form to create service requests with description, urgency level, and optional 
                image upload. Data sent to /service_requests endpoint.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">💼</span>
              <h3>Offer Management</h3>
              <p>
                Providers submit offers via backend. Customers view offers associated with 
                their requests and can accept them.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">✅</span>
              <h3>Booking Confirmation</h3>
              <p>
                Accepting an offer calls /bookings API. Booking status displayed 
                (Scheduled, In Progress, Delivered) with real-time updates.
              </p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🔄</span>
              <h3>Real-time Updates</h3>
              <p>
                Status changes and new offers update automatically through API polling. 
                Future implementation will use WebSocket for true real-time communication.
              </p>
            </div>
          </div>

          <div className="glow-card" style={{marginTop: '2rem'}}>
            <h3>🎯 Development Status</h3>
            <p>
              The frontend is currently in active development. The core authentication, service browsing, 
              and request creation features are functional. Ongoing work includes refining the UI/UX, 
              implementing advanced features (chat, notifications, payment integration), and optimizing 
              performance for production deployment.
            </p>
          </div>
        </section>

        {/* Challenges & Obstacles */}
        <section className="cosmic-card challenge-card">
          <h2 className="section-title cosmic-style">
            <span className="title-icon">⚠️</span>
            Technical Challenges
          </h2>
          
          <div className="challenge-grid">
            <div className="challenge-box">
              <div className="challenges-list">
                <div className="challenge-item">
                  <div className="challenge-header">
                    <h3>� Authentication & Security</h3>
                    <span className="difficulty-badge high">High</span>
                  </div>
                  <p>
                    Setting up Supabase Auth and managing JWT tokens presented challenges with session 
                    expiration and token refresh mechanisms. 
                    <strong> Solution:</strong> Implemented automatic token refresh logic and proper error 
                    handling for expired sessions.
                  </p>
                </div>

                <div className="challenge-item">
                  <div className="challenge-header">
                    <h3>🏗️ Solo Full-Stack Development</h3>
                    <span className="difficulty-badge high">High</span>
                  </div>
                  <p>
                    Managing a greenfield project solo meant every decision (tech stack, architecture, code organization) 
                    fell on me without team support. 
                    <strong> Solution:</strong> Extensive research, thorough documentation, and incremental development 
                    with regular testing.
                  </p>
                </div>

                <div className="challenge-item">
                  <div className="challenge-header">
                    <h3>� Supabase Integration</h3>
                    <span className="difficulty-badge medium">Medium</span>
                  </div>
                  <p>
                    Initial database configuration and connection with NestJS required significant work, 
                    especially for access rights management and credential handling. 
                    <strong> Solution:</strong> Carefully configured environment variables and SSL settings.
                  </p>
                </div>

                <div className="challenge-item">
                  <div className="challenge-header">
                    <h3>📱 Flutter-API Integration</h3>
                    <span className="difficulty-badge medium">Medium</span>
                  </div>
                  <p>
                    Integration between Flutter and REST endpoints wasn't immediate. Required handling HTTP errors, 
                    timeout cases, and ensuring data model compatibility. 
                    <strong> Solution:</strong> Created consistent data models, implemented robust error handling, 
                    and added retry mechanisms.
                  </p>
                </div>

                <div className="challenge-item">
                  <div className="challenge-header">
                    <h3>⏱️ Time Management</h3>
                    <span className="difficulty-badge medium">Medium</span>
                  </div>
                  <p>
                    Technical blockers consumed more time than initially planned, affecting timeline estimates. 
                    <strong> Solution:</strong> Used Trello for task prioritization and adjusted scope to focus on 
                    MVP features first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Critical Analysis */}
        <section className="cosmic-card outcomes-card">
          <h2 className="section-title cosmic-style">
            <span className="title-icon">🎯</span>
            Critical Analysis
          </h2>
          
          <div className="outcomes-grid">
            <div className="outcome-item">
              <span className="outcome-icon">✅</span>
              <h3>Strengths</h3>
              <ul className="feature-list">
                <li>Modern and scalable technology stack chosen for long-term viability</li>
                <li>Strengthened expertise in NestJS, Supabase, and Flutter frameworks</li>
                <li>Continuous documentation in Google Docs facilitating project understanding</li>
                <li>Modular architecture enabling easy feature additions and maintenance</li>
                <li>Complete full-stack experience gained (database, backend, frontend)</li>
              </ul>
            </div>

            <div className="outcome-item">
              <span className="outcome-icon">⚠️</span>
              <h3>Areas for Improvement</h3>
              <ul className="feature-list">
                <li>Time spent resolving technical issues exceeded initial estimates</li>
                <li>Lack of systematic unit testing early on required later adjustments</li>
                <li>Initial difficulties managing solo full-stack project without team support</li>
                <li>Frontend development took longer than expected due to API integration complexity</li>
                <li>Could benefit from CI/CD pipeline for automated testing and deployment</li>
              </ul>
            </div>

            <div className="outcome-item">
              <span className="outcome-icon">💡</span>
              <h3>Key Learnings</h3>
              <ul className="feature-list">
                <li>Importance of thorough architecture planning before implementation</li>
                <li>Value of comprehensive documentation for solo projects</li>
                <li>Benefits of modular design for scalability and maintainability</li>
                <li>Essential role of testing tools (Postman, DBeaver) in development workflow</li>
                <li>Balance between perfectionism and MVP-focused delivery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="stats-section">
          <h2 className="section-title cosmic-style">
            <span className="title-icon">📊</span>
            Project Metrics
          </h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">8+</div>
              <div className="stat-label">Database Entities</div>
              <p>Comprehensive schema with users, providers, services, requests, offers, bookings, payments, and reviews</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">40+</div>
              <div className="stat-label">REST API Endpoints</div>
              <p>Complete CRUD operations across all modules with validation and error handling</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">8</div>
              <div className="stat-label">NestJS Modules</div>
              <p>Modular architecture for maintainable and scalable backend development</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">3</div>
              <div className="stat-label">User Roles</div>
              <p>Customer, Provider, and Admin roles with distinct permissions and workflows</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Payment Methods</div>
              <p>Credit card, CMI, PayPal, cash, and wallet for Moroccan market compatibility</p>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Solo Development</div>
              <p>Complete project developed independently from architecture to implementation</p>
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section className="cosmic-card">
          <h2 className="section-title cosmic-style">
            <span className="title-icon">📚</span>
            Documentation & Project Management
          </h2>
          
          <div className="technical-grid">
            <div className="technical-item">
              <span className="tech-icon">📝</span>
              <h3>Technical Documentation</h3>
              <p>
                Comprehensive documentation of API structure, available routes, parameters, and response formats. 
                Includes detailed explanations of communication logic between Flutter frontend, NestJS backend, 
                and PostgreSQL database hosted on Supabase.
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">🗂️</span>
              <h3>Database Schema Documentation</h3>
              <p>
                Visual database schema with DBML format showing all entities, relationships, constraints, 
                and ENUM types. Includes annotations explaining design decisions and future extensibility.
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">📋</span>
              <h3>Project Tracking</h3>
              <p>
                Trello board using Kanban methodology to organize tasks, track progress, and manage priorities. 
                Helped visualize workflow and adapt to technical blockers during development.
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">🔄</span>
              <h3>Handover Documentation</h3>
              <p>
                Prepared comprehensive handover document explaining project structure, setup instructions, 
                and development roadmap to facilitate future continuation and team onboarding.
              </p>
            </div>
          </div>
        </section>

        {/* Future Development */}
        <section className="cosmic-card future-feature">
          <h2 className="section-title cosmic-style">
            <span className="title-icon">🚀</span>
            Future Development
          </h2>
          
          <div className="technical-grid">
            <div className="technical-item">
              <span className="tech-icon">💬</span>
              <h3>Real-time Chat</h3>
              <p>
                Implement Socket.IO for real-time communication between customers and providers. 
                Enables instant messaging, negotiation, and support during service delivery.
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">🔔</span>
              <h3>Push Notifications</h3>
              <p>
                Add Firebase Cloud Messaging for push notifications on new offers, booking updates, 
                payment confirmations, and review requests to improve user engagement.
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">🗺️</span>
              <h3>Geolocation & Maps</h3>
              <p>
                Integrate Google Maps API for location-based service discovery, distance calculations, 
                and navigation to service provider locations.
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">📊</span>
              <h3>Admin Dashboard</h3>
              <p>
                Web-based admin panel for platform management, user moderation, analytics, 
                dispute resolution, and system monitoring.
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">🧪</span>
              <h3>Automated Testing</h3>
              <p>
                Implement comprehensive unit, integration, and E2E tests using Jest, Supertest (backend) 
                and Flutter test framework (frontend) with CI/CD pipeline.
              </p>
            </div>

            <div className="technical-item">
              <span className="tech-icon">🌐</span>
              <h3>Web Platform</h3>
              <p>
                Extend Flutter application to web platform for desktop access, enabling broader reach 
                and alternative user interface for complex workflows.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta-section">
          <h2>Interested in Learning More?</h2>
          <p>
            This project demonstrates my ability to architect and develop complete full-stack applications 
            from scratch. I'm continuing to enhance the platform and would love to discuss the technical 
            decisions and challenges in more detail.
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary" onClick={() => window.open('https://github.com/omar-elhallam', '_blank')}>
              View GitHub Profile
            </button>
            <button className="cta-button secondary" onClick={() => window.open('https://www.linkedin.com/in/omar-elhallam', '_blank')}>
              Connect on LinkedIn
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}

export default ServicePlatform;
