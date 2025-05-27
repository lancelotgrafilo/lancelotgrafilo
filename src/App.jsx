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
            <a href="/GrafiloLancelotCV.pdf" download className="download-cv-btn">
              Download CV
            </a>
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
          I'm a passionate software developer and cybersecurity analyst with hands-on experience in full-stack development, penetration testing, and Security Operations Center (SOC) operations.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript, React, Node.js</li>
          <li>Python</li>
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
            <p>A full-stack application featuring JWT authentication and OWASP security best practices.</p>
          </div>
          <div className="project-card">
            <h3>Network Intrusion Detection System</h3>
            <p>Built using Python and machine learning to detect anomalies in network traffic.</p>
          </div>
          <div className="project-card">
            <h3>DevSecOps Pipeline</h3>
            <p>CI/CD integration with GitHub Actions and automated security scanning tools like OWASP ZAP and Snyk.</p>
          </div>
        </div>
      </section>

      {/* Certifications / Trainings / Achievements Section */}
      <section className="cta" id="cta">
        <h2>Certifications, Trainings, and Achievements</h2>
        <ul>
          <li>Python Essentials I – Cisco Networking Academy</li>
          <li>Introduction to Cybersecurity – Cisco Networking Academy</li>
          <li>Ethical Hacking: Understanding the Thin Line – DICT R9 & BASULTA Training Division via Zoom</li>
          <li>DICT-ICT018 Basic Level of Software Engineering – DICT-LMS</li>
          <li>DICT-ICT013 Intermediate Level of Software Engineering – DICT-LMS</li>
          <li>DICT-ICT017 Advanced Level of Software Engineering – DICT-LMS</li>
          <li>Securing Web Applications – DICT Camarines Norte, Region V via Zoom</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p>Email: grafilolancelot@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/lancelot-grafilo</p>
        <p>GitHub: github.com/lancelotgrafilo</p>
      </section>
    </div>
  );
}

export default App;