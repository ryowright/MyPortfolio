import React from 'react';
import './styles/Contact.css';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';

export default function Contact() {
  return (
    <section id="contact">
      <div id="contact-container">
        <h2 id="contact-me">Want to contact me? Feel free to email me at <a id="email-link" href="mailto: ryogwright@gmail.com">ryogwright@gmail.com</a></h2>
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
        <p id="site-credits">Website designed and created by Anthony (Ryo) Wright</p>
      </div>
    </section>
  )
}