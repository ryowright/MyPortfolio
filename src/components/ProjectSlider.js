import React, { useState } from "react"
import Button from "@mui/material/Button"
import "./styles/ProjectSlider.css"

export default function ProjectSlider({ projectdata, showProjects }) {
  const [ index, setIndex ] = useState(0);
  const [ showProjectData, setShowProjectData ] = useState(false);
  const numProjects = projectdata.length;

  return (
    <div id="project-slider-container">
      {
        showProjects ? 
        <div className="project-item-container" >
        {index > 0 ?
          <div className="project-item-prev" onClick={() => setIndex(index - 1)}>
            <img src={projectdata[index - 1].image} width="100%" height="100%" alt="Project Image Missing" />
          </div> : null}
          <div className="project-item" 
            onMouseLeave={() => setShowProjectData(false)}
            >
            <div className="project-data-display" >
              <h1>{projectdata[index].title}</h1>
              <p>{projectdata[index].description}</p>
              <div className="project-data-buttons">
                {
                  projectdata[index].githubRepo !== "" ?
                  <Button 
                    variant="contained" 
                    href={projectdata[index].githubRepo}
                    target="_blank"
                    style={ showProjectData ? { textDecoration: "none", zIndex: 5 } : { textDecoration: "none", zIndex: 2 } }
                    >
                    Gihub Repo
                  </Button> : null
                }
                {
                  projectdata[index].demoLink !== "" ?
                  <Button 
                    variant="contained"
                    href={projectdata[index].demoLink}
                    target="_blank"
                    style={ showProjectData ? { textDecoration: "none", zIndex: 5 } : { textDecoration: "none", zIndex: 2 } }
                  >
                    Demo
                  </Button> : null
                }
              </div>
            </div>
            <img src={projectdata[index].image} width="100%" height="100%" alt="Project Image Missing"
              style={ showProjectData ? { opacity: "0.08"} : { opacity: "1" }}
              onMouseEnter={() => setShowProjectData(true)}
              />
          </div>
        {index < numProjects - 1 ? 
          <div className="project-item-next" onClick={() => setIndex(index + 1)}>
            <img src={projectdata[index + 1].image} width="100%" height="100%" alt="Project Image Missing" />
          </div> : null}
      </div>
      : null}
    </div>
  )
}