import './App.css';

function App() {
	return (
		<div className="App">
			<header className="header">
				<h1>Omar's Portfolio</h1>
				<p>👋 Hi, I'm Omar! A passionate developer specializing in React & Game Development.</p>
			</header>

			<section className="about">
				<h2>About Me</h2>
				<p>
					I am a computer science student and game developer with experience in React, JavaScript, 
					and Godot. I love building engaging applications and experimenting with new technologies!
				</p>
			</section>

			<section className="projects">
				<h2>My Projects</h2>
				<ul>
					<li>
						<strong>🎮 Game Project:</strong> A 2D Souls-like game using Godot 4
					</li>
					<li>
						<strong>🖥️ Web App:</strong> A student-professor interactive platform inspired by Kahoot
					</li>
					<li>
						<strong>💻 Portfolio Website:</strong> The site you're looking at right now!
					</li>
				</ul>
			</section>

			<section className="contact">
				<h2>Contact Me</h2>
				<p>📧 Email: your.email@example.com</p>
				<p>🔗 GitHub: <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">GitHub Profile</a></p>
			</section>
		</div>
	);
}

export default App;
