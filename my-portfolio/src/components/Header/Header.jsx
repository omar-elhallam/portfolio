import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import pfp from '../../assets/images/pfp/pfp.png';
import linkedinIcon from './linkedin_icon.svg';
import githubIcon from './github_icon.svg';
import emailIcon from './email_icon.svg';

function Header({ showHeader }) {
  return (
    <header className={`header ${showHeader ? 'visible' : 'hidden'}`}>
      <div className="logo">Portfolio</div>
      <nav className="nav">
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="nav-link">
          <img src={linkedinIcon} alt="LinkedIn" className="icon" />
        </a>
        <a href="hhttps://github.com" target="_blank" rel="noopener noreferrer" className="nav-link">
          <img src={githubIcon} alt="GitHub" className="icon" />
        </a>
        <a href="mailto:omar.elhallam8@gmail.com" className="nav-link">
          <img src={emailIcon} alt="Email" className="icon" />
        </a>
      </nav>
      <div className="profile">
        <img src={pfp} alt="Omar pfp" className="profile-pic" />
        <NavLink to="/TestBackground" className="header-name">Omar El Hallam</NavLink>
      </div>
    </header>
  );
}

export default Header;