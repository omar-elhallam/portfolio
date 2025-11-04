import React from "react";
import './MyWork.css';

const MyWork = () => {
  return (
    <div className="mywork-container">
      <h1 className="mywork-title">My Work</h1>
      <div className="mywork-section">
        <h2>Professional Experience</h2>
        <div className="mywork-card">
          <h3>Alliances</h3>
          <p>June 2023 – August 2023</p>
          <ul>
            <li>Collaborated with the IT project manager to understand database and network systems management.</li>
            <li>Used SQL to extract client contact sources and created an interactive web page with Python to present data visually.</li>
            <li>Assisted in integrating and updating large Excel datasets into databases using SQL commands.</li>
          </ul>
        </div>
        <div className="mywork-card">
          <h3>Exakis Nelite</h3>
          <p>February 2020 – March 2020</p>
          <ul>
            <li>Explored the IT consulting industry through observation and hands-on learning.</li>
          </ul>
        </div>
      </div>

      <div className="mywork-section">
        <h2>Projects</h2>
        <div className="mywork-card">
          <h3>Web Service with Crow Framework</h3>
          <p>Developed a web service in C++ using advanced OOP principles, templates, and unit testing.</p>
        </div>
        <div className="mywork-card">
          <h3>Assembler and Functional Computer</h3>
          <p>Designed an assembler and a functional computer on Logisim, including a processor, RAM, and kernel.</p>
        </div>
        <div className="mywork-card">
          <h3>Games Website</h3>
          <p>Created a website with React and JavaScript to host games developed using Godot.</p>
        </div>
        <div className="mywork-card">
          <h3>Social Media Mobile App</h3>
          <p>Developing a social media app with Flutter, Firebase, and Android Studio.</p>
        </div>
      </div>

      <div className="mywork-section">
        <h2>Skills</h2>
        <ul>
          <li>Programming Languages: C++, Python, Java, SQL, MIPS Assembly</li>
          <li>Frameworks: React, Flutter</li>
          <li>Database Management: SQL, Firebase</li>
          <li>Other: Unix/Linux, OOP, API Development</li>
        </ul>
      </div>

      <div className="mywork-section">
        <h2>Education</h2>
        <div className="mywork-card">
          <h3>Université de Richmond</h3>
          <p>Computer Science (August 2021 – May 2024)</p>
        </div>
        <div className="mywork-card">
          <h3>Lycée Maimonide</h3>
          <p>Baccalauréat Français Général avec Mention Bien (June 2021)</p>
        </div>
        <div className="mywork-card">
          <h3>SAT</h3>
          <p>Score of 770/800 in math | top 1% worldwide</p>
        </div>
      </div>
    </div>
  );
};

export default MyWork;