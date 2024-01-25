import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import "./index.css";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Header />
      <About />
      <Skillset />
      <Experience />
      <Education />
      <Project />
      <Article />
      <Contact />
    </div>
  );
}
function NavBar() {
  return (
    <div id="navBar">
      <a href="#Home">Home</a>
      <a href="#about">About</a>
      <a href="#education">Work</a>
      <a href="#project">Writings</a>
    </div>
  );
}

function Header() {
  return (
    <div id="header">
      <h1>Hi I am Sujal</h1>
      <h2>A passionate Web developer.</h2>
      <p>I am an 19 years old Engineering Student</p>
      <p>from South East Asia Interested In MERN stack.</p>
    </div>
  );
}

function About() {
  return (
    <div id="about">
      <h1 className="title">About</h1>
      <p>
        I am a dedicated Electronics, Communication, and Information Engineering
        student at Paschimanchal College with a stellar academic record,
        including a 4.0 GPA in SEE and a scholarship secured through a good rank
        in the IOE exam. Passionate about coding, problem-solving, and
        innovative ideas, I thrive on continuous learning and embrace
        challenges. Though I lack formal job experience, I am actively seeking
        internships in Pokhara Valley or remote opportunities. My tech stack
        proficiency, showcased through various completed projects, positions me
        as an aspiring full-stack developer. Equipped with strong soft skills
        such as communication, collaboration, leadership, and team management, I
        am poised to contribute effectively to any team. My goals include
        bringing innovative ideas to life using technology, securing a prominent
        position in the software industry within 1-2 years, pursuing a Master's
        in Software Engineering, contributing to AI development, and educating
        others in its use. Ultimately, I dream of establishing my own venture in
        Nepal, creating infrastructure to empower aspiring tech enthusiasts and
        curbing brain drain.
      </p>
    </div>
  );
}
function Skillset() {
  return (
    <div id="skillset">
      <h1>Skillset</h1>
      <div class="skills-wrapper">
        <span>React</span>
        <span>Next.js</span>
        <span>JavaScript</span>
        <span>TypeScript</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Sass</span>
        <span>Tailwind</span>
        <span>Material-UI</span>
        <span>Git</span>
        <span>Framer-Motion</span>
        <span>Firebase</span>
        <span>Jira</span>
        <span>Cypress</span>
        <span>Playwright</span>
        <span>Storybook</span>
        <span>Styled-Components</span>
        <span>Zustand</span>
        <span>GraphQL</span>
        <span>GitLab</span>
        <span>Web Accessibility</span>
        <span>Nest.js</span>
        <span>Postman</span>
        <span>Insomnia</span>
        <span>Scrum</span>
        <span>Bitbucket</span>
        <span>Confluence</span>
      </div>
    </div>
  );
}
function Experience() {
  return (
    <div id="experience">
      <h1>Experience</h1>
      <p>1 year experience in web development.</p>
    </div>
  );
}
function Education() {
  return (
    <div id="education">
      <h1>Education</h1>
      <p>Bachelor in Computer Science and Information Technology</p>
    </div>
  );
}
function Project() {
  return (
    <div id="project">
      <h1>Project</h1>
      <p>Project 1</p>
      <p>Project 2</p>
      <p>Project 3</p>
    </div>
  );
}
function Article() {
  return (
    <div id="article">
      <h1>Article</h1>
      <p>Article 1</p>
      <p>Article 2</p>
      <p>Article 3</p>
    </div>
  );
}
function Contact() {
  return (
    <div id="contact">
      <h1>Contact</h1>
      <p>Phone: 9841234567</p>
    </div>
  );
}

export default App;
