import React from 'react';
import CustomProgress from './CustomProgress';
import './styles/Resume.css';

export default function Resume() {
  const resumeSkills = [
    {percent: 85, label: "Python", color: "red"},
    {percent: 85, label: "JavaScript", color: "red"},
    {percent: 85, label: "PostgreSQL", color: "red"},
    {percent: 85, label: "Git", color: "red"},
    {percent: 75, label: "HTML5", color: "orange"},
    {percent: 75, label: "CSS", color: "orange"},
    {percent: 75, label: "Node JS", color: "orange"},
    {percent: 75, label: "React", color: "orange"},
    {percent: 75, label: "Jest", color: "orange"},
    // {percent: 70, label: "Redux", color: "yellow"},
    {percent: 70, label: "Docker", color: "yellow"},
    {percent: 70, label: "MongoDB", color: "yellow"},
    // {percent: 80, label: "Postman", color: "yellow"},
    // {percent: 60, label: "MySQL", color: "green"},
    {percent: 60, label: "Go", color: "green"},
    // {percent: 60, label: "Java", color: "green"},
    {percent: 50, label: "C++", color: "blue"},
    // {percent: 50, label: "C", color: "blue"},
    // {percent: 40, label: "Django", color: "blue"},
    // {percent: 50, label: "Django REST", color: "blue"},
    // {percent: 40, label: "TensorFlow", color: "blue"},
    // {percent: 30, label: "Webpack", color: "violet"}
  ]

  return (
    <section id="resume">
      <div id="resume-container">
        <div className="sub-container">
          <h2 className="resume-section-header">Education</h2>
          <div className="resume-description">
            <h1>University of California, Merced</h1>
            <p className="sub-heading"><i>B.S in Computer Science and Engineering</i> &#9679; May 2022</p>
            <p className="description">UC Merced was actually listed as one of my safety schools during my senior
              year of high school. I initially dreamt of going to UC Berkeley for computer 
              science. However, I have enjoyed every moment since my freshman year at UC Merced,
              and I believe that it has truly made me a better person and engineer. I have now completed
              my degree in Computer Science and am looking forward to my future in this field.
            </p>
          </div>
        </div>
        <hr />
        <div className="sub-container">
          <h2 className="resume-section-header">Experience</h2>
          <div className="resume-description">
            <h1>Adventure Networks</h1>
            <p className="sub-heading"><i>JavaScript Development Intern</i> &#9679; May 2021 - August 2021</p>
            <p className="description">
              Adventure Networks is a small startup based in Los Angeles, CA. The startup is centered around
              blockchain, artificial intelligence, and the crypto-space. The two greatest feats of Adventure
              Networks is it's <a href="https://zed.run/" target="_blank" rel="noreferrer">Zed Run</a> team and it's core product, 
              <a href="https://trychats.com/#/" target="_blank" rel="noreferrer"> trychats</a>.
              <br />
              <br />
              Trychats is a space where different users can interact with one another and the blockchain. Users 
              can do things such as share their NFTs (non-fungible tokens), shop on an NFT marketplace, watch videos
              and listen to music together, and much more.
              <br />
              <br />
              Given the opportunity to join the JavaScript Development team as an intern, I learned so much about what
              it takes to be a successful software engineer. More specifically, I utilized the YouTube API to allow for 
              users to query videos, pin videos, and watch videos together through web sockets. I also did some research 
              in AI (music generation and chatbot question and answerin) for potential features on trychats. As an aspiring 
              software engineer, this was one of the greatest experiences I have ever had, and I know the things I have 
              learned will benefit me in the future.
            </p>
          </div>
        </div>
        <hr />
        <div className="sub-container">
          <h2 className="resume-section-header">Skills</h2>
          <div className="skills-description">
            {resumeSkills.map((skill) => (
              <CustomProgress percent={skill.percent} label={skill.label} color={skill.color} />
            ))}
          </div>
        </div>
        <hr />
        <div className="sub-container">
          <h2 className="resume-section-header" style={{width: "120px", marginRight: "120px"}}>Tech Stack</h2>
          <p className="tech-stack-description">While I have worked with various tech stacks, these are the technologies I enjoy working with the most. 
            I am very flexible with technologies and enjoy learning new ones as well.
          </p>
        </div>
        <div className="tech-stack-container">
          <div className="tech-stack-row">
            <div className="tech-stack-item">
              <img src="https://img.icons8.com/color/144/000000/javascript--v1.png" alt="JavaScript"/>
              <h2>JavaScript</h2>
              <p>I enjoy JavaScript because it is the language used by my backend and frontend frameworks of choice.
                JavaScript has a very readable syntax and facilitates a fluid web application development process.
              </p>
            </div>
            <div className="tech-stack-item">
              <img src="https://img.icons8.com/color/144/000000/nodejs.png" alt="NodeJS"/>
              <h2>Node JS</h2>
              <p>I enjoy working with Node JS because it offers more flexibility and a rich
                ecosystem of libraries and tools for backend development. The massive developer
                community behind Node JS smooths out the learning curve when it comes to more complex topics.</p>
            </div>
            <div className="tech-stack-item">
              <img src="https://img.icons8.com/color/144/000000/react-native.png" alt="React"/>
              <h2>React</h2>
              <p>React is my frontend framework of choice because it allows for the creation of a more dynamic user
                interface. The core idea behind React, component reuse, prevents much of the repeated work brought on by pure HTML.
              </p>
            </div>
          </div>
          <div className="tech-stack-row">
            <div className="tech-stack-item">
              <img src="https://img.icons8.com/color/144/000000/postgreesql.png" alt="PostgreSQL"/>
              <h2>PostgreSQL</h2>
              <p>My database of choice is PostgreSQL because I am used to and most proficient in the relational 
                structure of SQL databases. However, I also have enjoyed using a NoSQL database such as MongoDB
                due to its flexibility and simplicity.
              </p>
            </div>
            <div className="tech-stack-item">
              <img src="https://img.icons8.com/fluency/144/null/docker.png" alt="Docker"/>
              <h2>Docker</h2>
              <p>Docker has been incredibly helpful in deploying applications, especially when working in a collaborative 
                environment. I have primarily used docker to ease the environment setup process when working with a team.
              </p>
            </div>
            <div className="tech-stack-item">
              <img src="https://img.icons8.com/color/144/000000/git.png" alt="Git"/>
              <h2>Git</h2>
              <p>Git is my preferred version control system, primarily because of how widely used it is.
                It integrates seamlessly with Github, where I store the git repositories containing the source 
                code for all of my projects.
              </p>
            </div>
            {/* <div className="tech-stack-item">
              <img src="https://img.icons8.com/color/144/000000/mongodb.png"/>
              <h2>MongoDB</h2>
              <p>I don't really prefer one database format over another. However, in my projects, I have 
                enjoyed using MongoDB, a NoSQL database, because of its dynamic schema and ability to work 
                with unstructured data. This made it much easier to develop the API for many of my projects.
              </p>
            </div> */}
            {/* <div className="tech-stack-item">
              <img src="https://img.icons8.com/color/144/000000/heroku.png" alt="Heroku"/>
              <h2>Heroku</h2>
              <p>Heroku is the first and only platform I have used for deploying my applications to the cloud. 
                I really like its integration with Github beacuse it allows me to push any changes I make to 
                production with ease.
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}