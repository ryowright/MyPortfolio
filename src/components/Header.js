import React from 'react';
import './styles/Header.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';

export default function Header() {

  return (
    <header id="home">
      <nav id="navbar-container">
        <ul id="navbar-links">
          <li className="home active">
            <a className="navbar-smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li className="about active">
            <a className="navbar-smoothscroll" href="#about">
              About
            </a>
          </li>
          <li className="resume active">
            <a className="navbar-smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li className="projects active">
            <a className="navbar-smoothscroll" href="#projects">
              Projects
            </a>
          </li>
          <li className="contact active">
            <a className="navbar-smoothscroll" href="#contact">
              Contact
            </a>
          </li>
          {/* <li className="learn">
            <a className="navbar-smoothscroll" href="#learn">
              Learn
            </a>
          </li> */}
        </ul>
      </nav>

      <section id="home">
        <div id="intro-container">
          <div id="intro">
            <h1 id="intro-headline">Hi, I'm Ryo.</h1>
            <h3 id="intro-paragraph">
              I am an aspiring Software Engineer and
              a recent Computer Science graduate of the 
              <a id="uc-merced" href="https://www.ucmerced.edu/" target="_blank" rel="noreferrer"> University of California, Merced</ a>.
            </h3>
            <hr />
            <ul id="social-media-links">
              <li>
                <a href="https://www.linkedin.com/in/ryo-wright-0a079419a/" target="_blank" rel="noreferrer">
                  <LinkedInIcon fontSize="large" />
                </a>
              </li>
              <li>
                <a href="https://github.com/ryowright" target="_blank" rel="noreferrer">
                  <GitHubIcon fontSize="large" />
                </a>
              </li>
              {/* <li>
                <a href="#" target="_blank">
                  <FacebookIcon fontSize="large" />
                </a>
              </li> */}
              {/* <li>
                <a href="#" target="_blank">
                  <TwitterIcon fontSize="large" />
                </a>
              </li> */}
              {/* <li>
                <a href="https://www.instagram.com/ryowright/" target="_blank" rel="noreferrer">
                  <InstagramIcon fontSize="large" />
                </a>
              </li> */}
              <li>
                <a href="https://www.youtube.com/@SWEwithRyo" target="_blank" rel="noreferrer">
                  <YouTubeIcon fontSize="large" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </header>
  )
}