import React, { useState } from 'react';
import { Button, createTheme, ThemeProvider } from "@mui/material";
import ProjectCard from './projectcard';
import Box from '@mui/material/Box';
import ProjectSlider from './ProjectSlider';
import Stack from '@mui/material/Stack';
import { projectdata } from './projectdata';
import './styles/Projects.css';

const projectsTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: "white",
          backgroundColor: "#26a641",
          "&:hover": {
            backgroundColor: "#26a641",
            color: "white"
          }
        },
      }
    }
  }
})

export default function Projects() {
  const [ showProjects, setShowProjects ] = useState(true);

  return (
    <section id="projects">
      <div id="projects-container">
        <ThemeProvider theme={projectsTheme}>
        <div style={{ width: '100%' }}>
          <Box
            sx={{
              flexDirection: 'row',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              p: 2,
              m: 2,
              borderRadius: 1,
            }}
            >
            {projectdata.slice(0, 3).map((project, index) => {
              return <ProjectCard project={project}/>
            })}
          </Box>
          <Box
            sx={{
              flexDirection: 'row',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
              p: 2,
              m: 2,
              borderRadius: 1,
            }}
            >
            {projectdata.slice(3).map((project, index) => {
              return <ProjectCard project={project}/>
            })}
          </Box>
        </div>
          {/* <div className='project-row'>
            <Stack direction="row" spacing={5}>
            {projectdata.slice(0, 3).map((project, index) => {
              return <ProjectCard project={project}/>
            })}
            </Stack>
            </div>
            <div className='project-row'>
            <Stack direction="row" spacing={5}>
            {projectdata.slice(3).map((project, index) => {
              return <ProjectCard project={project}/>
            })}
            </Stack>
          </div> */}
        </ThemeProvider>
      </div>
    </section>
  )
}