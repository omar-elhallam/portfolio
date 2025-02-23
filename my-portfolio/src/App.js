import './App.css';

function App() {
  return (
    <div className="portfolio">
      <header className="portfolio-header">
        <h1>Omar's Portfolio</h1>
        <p>Game Developer | Software Engineer | Tech Enthusiast</p>
      </header>
      <section className="about">
        <h2>About Me</h2>
        <p>
          Passionate developer with expertise in game development and web technologies.
          I create immersive experiences through pixel art, animation, and clean code.
        </p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Godot / Pygame</li>
          <li>React / JavaScript</li>
          <li>SQL / Database Management</li>
          <li>Game & Level Design</li>
          <li>Pixel Art & Animation</li>
        </ul>
      </section>
      <section className="contact">
        <h2>Contact</h2>
        <p>Let's connect! Reach out via <a href="mailto:your.email@example.com">email</a>.</p>
      </section>
    </div>
  );
}

export default App;
