import React from 'react';
import './styles/Contact.css';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Contact() {
  return (
    <section id="contact">
      <div id="contact-container">
        <h2 id="contact-me">Want to contact me? Feel free to email me at <a id="email-link" href="mailto: ryow.college@gmail.com">ryow.college@gmail.com</a></h2>
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
        <p id="site-credits">Website designed and created by Anthony (Ryo) Wright</p>
      </div>
    </section>
  )
}