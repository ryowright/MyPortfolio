import React, {useState} from 'react';
import './styles/Projects.css';

import GoalsAppPic from './styles/images/GoalSettingApp.jpg';
import LiveChatAppPic from './styles/images/LiveChatApp.png';
import trychatsPic from './styles/images/trychats.png';
import portfolioPic from './styles/images/PortfolioWebsite.png';

const projectList = ['Goal Setting App', 'Simple Live Chat App', 
  'Personal Website', 'Trychats', 'Django Framework', 'Wger (Workout App)'
]

export default function Projects() {
  const defaultTitle = "";

  const [title, setTitle] = useState("Hover over a project.");
  const [description, setDescription] = useState("");

  const projectHeader = {
    defaultTitle: "",
    "Goal Setting App": "An app that allows users to set and manage personal goals. Created using Node, React, MongoDB, and Heroku.",
    "Live Chat App": "A simple app that allows users to text chat in real-time through websockets. Created using Node, React, and MongoDB.",
    "trychats": "A blockchain-based app that allows users to interact with one another and the blockchain. I contributed to this massive project during my internship in summer 2021. Created using Node, React, and Firebase.",
    "Personal Portfolio Website": "My personal portfolio to showcase my work and express who I am as a person, student, and software engineer. Created using Node, React, and Heroku."
  }

  const setProjectHeader = (title) => {
    setTitle(title);
    setDescription(projectHeader[title]);
  }

  return (
    <section id="projects">
      <div id="projects-container">
        <div id="projects-container-left">
          <div id="projects-header">
            <h2 id="projects-intro">Here are some of the projects I have worked on.</h2>
          </div>
          <div id="projects-display">
            <div className="projects-row">
              <div className="projects-item">
                <a href="https://github.com/ryowright/Goals-App" target="_blank">
                  <img src={GoalsAppPic} width="220" height="120" alt="Project Image Missing"
                    onMouseEnter={() => {setProjectHeader("Goal Setting App")}}
                    onMouseLeave={() => {setProjectHeader(defaultTitle)}}
                  />
                </a>
              </div>
              <div className="projects-item">
                <a href="https://github.com/ryowright/Live-Chat-App" target="_blank">
                  <img src={LiveChatAppPic} width="220" height="120" alt="Project Image Missing" 
                    onMouseEnter={() => {setProjectHeader("Live Chat App")}}
                    onMouseLeave={() => {setProjectHeader(defaultTitle)}}
                  />
                </a>
              </div>
              <div className="projects-item">
                <a href="https://trychats.com/#/" target="_blank">
                  <img src={trychatsPic} width="220" height="120" alt="Project Image Missing"
                    onMouseEnter={() => {setProjectHeader("trychats")}}
                    onMouseLeave={() => {setProjectHeader(defaultTitle)}}
                  />
                </a>
              </div>
            </div>
            <div className="projects-row">
              <div className="projects-item">
                <a href="#home">
                  <img src={portfolioPic} width="220" height="120" alt="Project Image Missing"
                    onMouseEnter={() => {setProjectHeader("Personal Portfolio Website")}}
                    onMouseLeave={() => {setProjectHeader(defaultTitle)}}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="projects-container-right">
          <div className="projects-descriptions">
            <h2 id="project-title">
              {title}
              {/* test title */}
            </h2>
            <p>
              {description}
              {/* test description */}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}