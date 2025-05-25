import './App.css';
import { useEffect, useState } from 'react';
import profile from "./assets/prof.jpg";

function App() {
  const titles = [
    "a Software Developer",
    "a Full Stack Developer",
    "a Penetration Tester",
    "a Cybersecurity Analyst",
    "an SOC Analyst"
  ];

  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentTitle = titles[loopIndex % titles.length];

    const typingSpeed = isDeleting ? 50 : 100;

    const handler = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex <= currentTitle.length) {
          setText(currentTitle.substring(0, charIndex));
          setCharIndex(charIndex + 1);
        }

        if (charIndex === currentTitle.length + 1) {
          setTimeout(() => setIsDeleting(true), 500);
        }
      } else {
        if (charIndex >= 0) {
          setText(currentTitle.substring(0, charIndex));
          setCharIndex(charIndex - 1);
        }

        if (charIndex === 0) {
          setIsDeleting(false);
          setLoopIndex(loopIndex + 1);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(handler);
  }, [charIndex, isDeleting, loopIndex]);

  return (
    <div className="portfolio-container">
    {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hello! I'm Lancelot Grafilo</h1>
            <div className="typing-title">
              <span className="typewriter">{text}</span>
              <span className="cursor">|</span>
            </div>
          </div>
          <div className="hero-image">
            <img src={profile} alt="Lancelot Grafilo" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate Software Developer and Cybersecurity Analyst with hands-on experience in Full Stack Development, Penetration Testing, and Security Operations Center (SOC) operations.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript, React, Node.js</li>
          <li>Python, Django, Flask</li>
          <li>Penetration Testing & Vulnerability Assessment</li>
          <li>Cybersecurity Analysis & SOC Monitoring</li>
          <li>Cloud Security & CI/CD Pipelines</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Secure Web Application</h3>
            <p>A full-stack app with JWT authentication and OWASP security practices.</p>
          </div>
          <div className="project-card">
            <h3>Network Intrusion Detection System</h3>
            <p>Built with Python and machine learning to detect anomalies in traffic.</p>
          </div>
          <div className="project-card">
            <h3>DevSecOps Pipeline</h3>
            <p>CI/CD integration with GitHub Actions and automated security scanning.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Email: lancelot.grafilo@example.com</p>
        <p>LinkedIn: /in/lancelotgrafilo</p>
        <p>GitHub: github.com/lancelotgrafilo</p>
      </section>
    </div>
  );
}

export default App;