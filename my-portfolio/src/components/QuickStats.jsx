import React, { useState } from 'react';
import { FaCode, FaRocket, FaAward, FaLaptopCode } from 'react-icons/fa';
import './QuickStats.css';

const stats = [
  {
    icon: <FaCode />, label: 'Projects', value: 6,
    details: (
      <ul>
        <li>Personal & Academic Projects</li>
        <li>Web, Mobile, and Desktop</li>
        <li>Open Source Contributions</li>
      </ul>
    )
  },
  {
    icon: <FaRocket />, label: 'Years of Coding', value: 4,
    details: (
      <ul>
        <li>Started in 2021</li>
        <li>Consistent learning & growth</li>
      </ul>
    )
  },
  {
    icon: <FaAward />, label: 'Certifications', value: 3,
    details: (
      <ul>
        <li>Hackathon Winner</li>
        <li>Dean's List</li>
        <li>Best UI Project</li>
      </ul>
    )
  },
  {
    icon: <FaLaptopCode />, label: 'Technologies', value: 8,
    details: (
      <ul>
        <li>React, Flutter, Python, C++</li>
        <li>SQL, Firebase, Java, MIPS</li>
      </ul>
    )
  },
];

export default function QuickStats() {
  const [active, setActive] = useState(null);

  return (
    <section className="quick-stats">
      {stats.map((stat, i) => {
        let cardClass = "stat-card";
        if (active === i) cardClass += " active";
        else if (active !== null && i < active) cardClass += " left-of-active";
        else if (active !== null && i > active) cardClass += " right-of-active";

        return (
          <div
            className={cardClass}
            key={i}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
            {active === i && (
              <div className="stat-details">
                {stat.details}
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
