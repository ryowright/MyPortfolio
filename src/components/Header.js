import React from 'react';
import './styles/Header.css';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Header() {

  return (
    <header id="home">
      <nav id="navbar-container">
        <ul id="navbar-links">
          <li>
            <a className="navbar-smoothscroll" href="#home">
              Home
            </a>
          </li>
          <li>
            <a className="navbar-smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="navbar-smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="navbar-smoothscroll" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="navbar-smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div id="intro-container">
        <div id="intro">
          <h1 id="intro-headline">Hi, I'm Ryo Wright.</h1>
          <h3 id="intro-paragraph">
            I'm an aspiring software engineer and am currently a fourth year
            Computer Science and Engineering major at the 
            <a id="uc-merced" href="https://www.ucmerced.edu/" target="_blank"> University of California, Merced</ a>.
          </h3>
          <hr />
          <ul id="social-media-links">
            <li>
              <a href="https://www.linkedin.com/in/ryo-wright-0a079419a/" target="_blank">
                <LinkedInIcon fontSize="large" />
              </a>
            </li>
            <li>
              <a href="https://github.com/ryowright" target="_blank">
                <GitHubIcon fontSize="large" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <FacebookIcon fontSize="large" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <TwitterIcon fontSize="large" />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <InstagramIcon fontSize="large" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}