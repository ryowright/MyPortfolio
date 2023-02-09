import React, { useState } from 'react';
import { createTheme, ThemeProvider, Grid } from "@mui/material";
import ProjectCard from './projectcard';
import { motion } from 'framer-motion';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
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

const NUM_PROJECTS = projectdata.length
const ProjectSlider = () => {
  const [ index, setIndex ] = useState(0);

  const increment = () => {
    if (index < NUM_PROJECTS - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  const decrement = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(NUM_PROJECTS - 1)
    }
  }

  const variants = {
    initial: {
      opacity: 0.4,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    },
    exit: {
      opacity: 0.4,
      scale: 0.8,
    },
  }

  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item display='flex' alignItems='center' sx={{cursor:'pointer'}} onClick={() => decrement()}>
        <ArrowCircleLeftIcon sx={{fontSize:'50px'}}/>
      </Grid>
      <Grid item margin="0 20px">
        <motion.div
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          key={index}
        >
          <ProjectCard project={projectdata[index]} />
        </motion.div>
      </Grid>
      <Grid item display='flex' alignItems='center' sx={{cursor:'pointer'}} onClick={() => increment()}>
        <ArrowCircleRightIcon sx={{fontSize:'50px'}} />
      </Grid>
    </Grid>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div id="projects-container">
        <ThemeProvider theme={projectsTheme}>
        <div style={{ width: '100%' }}>
          <ProjectSlider />
        </div>
        </ThemeProvider>
      </div>
    </section>
  )
}