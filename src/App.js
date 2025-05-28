import React from "react";
import "./App.css";
import avatar from "./assets/avatar.jpg";
import cv from "./assets/cv-demo.pdf";
import project1 from "./assets/projects/project1.jpg";
import project2 from "./assets/projects/project2.jpg";
import project3 from "./assets/projects/project3.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const projects = [
  {
    image: project1,
    title: "Minimalist E-Commerce",
    desc: "A modern online shop built with React and styled-components.",
    demo: "https://your-demo-link.com/",
    code: "https://github.com/demo/ecommerce"
  },
  {
    image: project2,
    title: "SaaS Landing Page",
    desc: "Landing page template for SaaS products, with a clean layout.",
    demo: "https://your-demo-link.com/",
    code: "https://github.com/demo/saas-landing"
  },
  {
    image: project3,
    title: "Portfolio Website",
    desc: "Professional portfolio template to showcase your skills and projects.",
    demo: "https://your-demo-link.com/",
    code: "https://github.com/demo/portfolio"
  }
];

function App() {
  return (
    <div className="portfolio-root">
      <header className="portfolio-header">
        <div className="avatar-block">
          <img src={avatar} alt="Alex Carter" className="avatar-img" />
        </div>
        <div>
          <h1>Alex Carter</h1>
          <p className="subtitle">Full-Stack Developer</p>
          <div className="social-links">
  <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
    <FaGithub />
  </a>
  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
    <FaLinkedin />
  </a>
  <a href="mailto:alex.carter@email.com" aria-label="Email">
    <FaEnvelope />
  </a>
</div>

          <a className="btn-main" href={cv} target="_blank" rel="noopener noreferrer" download>
            Download CV
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <h2>Modern Freelancer Portfolio Template</h2>
          <p>
            Present your work and skills in style. This portfolio template is fully responsive, easy to customize, and perfect for developers and freelancers looking to impress clients and land more projects.
          </p>
        </section>

        <section className="skills" id="skills">
          <h3>Skills</h3>
          <div className="skills-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>UI/UX Design</span>
          </div>
        </section>

        <section className="projects" id="portfolio">
          <h3>Featured Projects</h3>
          <div className="project-cards">
            {projects.map((proj, idx) => (
              <div className="project-card" key={idx}>
                <img src={proj.image} alt={proj.title} className="project-img" />
                <div className="project-info">
                  <h4>{proj.title}</h4>
                  <p>{proj.desc}</p>
                  <div>
                    <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="btn-proj">Live Demo</a>
                    <a href={proj.code} target="_blank" rel="noopener noreferrer" className="btn-proj btn-secondary">Code</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <h3>About Me</h3>
          <p>
            Hi! I’m <b>Alex Carter</b>, a passionate full-stack developer with a focus on crafting modern web applications and beautiful interfaces.
            <br />
            With 4+ years’ experience, I help startups, agencies, and creatives turn ideas into scalable products.
            <br />
            <b>Available for freelance work & collaborations!</b>
          </p>
        </section>

        <section className="contact" id="contact">
          <h3>Contact</h3>
          <form
            onSubmit={e => {
              e.preventDefault();
              alert("This is a demo form. You can connect it to EmailJS or your own backend!");
            }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={5} required />
            <button type="submit" className="btn-main">Send Message</button>
          </form>
        </section>
      </main>

      <footer>
        &copy; {new Date().getFullYear()} Alex Carter. Modern Portfolio Template for sale. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
