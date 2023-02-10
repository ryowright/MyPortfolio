import React, { useState } from 'react';
import { Grid, useMediaQuery } from "@mui/material";
import ProjectCard from './projectcard';
import { motion } from 'framer-motion';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { projectdata } from './projectdata';
import './styles/Projects.css';

const NUM_PROJECTS = projectdata.length
const ProjectSlider = () => {
  const [ index, setIndex ] = useState(0);
  const [ movingLeft, setMovingLeft ] = useState(false);

  const matches1460 = useMediaQuery('(min-width:1460px)');
  const matches1020 = useMediaQuery('(min-width:1020px)');

  const moveLeft = () => {
    setMovingLeft(true)
    if (index < NUM_PROJECTS - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  const moveRight = () => {
    setMovingLeft(false)
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(NUM_PROJECTS - 1)
    }
  }

  const left = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 1, delay: movingLeft ? 0.6 : 0.2 }
    },
    exit: {
      opacity: 0,
    },
  }
  const middle = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 1, delay: matches1460 ? 0.4 : matches1020 ? (movingLeft ? 0.4 : 0.2) : 0.2 }
    },
    exit: {
      opacity: 0,
    },
  }
  const right = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: { duration: 1, delay: matches1460 ? (movingLeft ? 0.2 : 0.6) : (movingLeft ? 0.2 : 0.4) }
    },
    exit: {
      opacity: 0,
    },
  }

  return (
    <Grid container justifyContent='center' alignItems='center'>
      <Grid item display='flex' alignItems='center' sx={{cursor:'pointer'}} onClick={() => moveLeft()}>
        <ArrowCircleLeftIcon sx={{fontSize:'50px', color:'#E0E1DD'}}/>
      </Grid>
      <Grid item display='flex' margin="0 20px">
        {
          matches1460 ?
            <motion.div
              variants={left}
              initial="initial"
              animate="animate"
              exit="exit"
              key={index}
              >
              <Grid item margin="0 20px" maxWidth={"100%"} >
                <ProjectCard project={projectdata[index - 1 >= 0 ? index - 1 : NUM_PROJECTS - 1]} />
              </Grid>
            </motion.div> : null
        }
        <motion.div
          variants={middle}
          initial="initial"
          animate="animate"
          exit="exit"
          key={index + NUM_PROJECTS}
          >
          <Grid item margin="0 20px">
            <ProjectCard project={projectdata[index]} />
          </Grid>
        </motion.div>
        {
          matches1020 ?
          <motion.div
            variants={right}
            initial="initial"
            animate="animate"
            exit="exit"
            key={index + (2 * NUM_PROJECTS)}
            >
            <Grid item margin="0 20px">
              <ProjectCard project={projectdata[index + 1 < NUM_PROJECTS ? index + 1 : 0]} />
            </Grid>
          </motion.div> : null
        }
      </Grid>
      <Grid item display='flex' alignItems='center' sx={{cursor:'pointer'}} onClick={() => moveRight()}>
        <ArrowCircleRightIcon sx={{fontSize:'50px', color:'#E0E1DD'}} />
      </Grid>
    </Grid>
  )
}

export default function Projects() {
  return (
    <section id="projects">
      <div id="projects-container">
        <Grid container flexDirection='column'>
          <Grid item display='flex' flexDirection='column' alignItems='flex-start' margin='100px 0 40px 120px' height='100px'>
            <h1 style={{ color:'white', fontSize:'50px', marginBottom:'50px' }}>
              Check out my projects!
            </h1>
            <p style={{ color:'#E0E1DD', fontSize:'20px', width:'650px', textAlign:'left' }}>
              These projects include personal projects that I have created as well as internship, open-source, and school projects that I have worked on.</p>
          </Grid>
          <Grid item marginTop='40px'>
            <ProjectSlider />
          </Grid>
        </Grid>
      </div>
    </section>
  )
}