import React from 'react';
import './styles/About.css';

import profilePic from './styles/images/professionalpicture.jpg';

export default function About() {
  return (
    <section id="about">
      <div id="about-container">
        <div id="about-contact-container">
          <div id="about-contact">
            <div id="profile-picture">
              <img src={profilePic} alt="Profile Picture Here" height="300" />
            </div>
            {/* <p id="email-me">Email me: <a href="mailto: ryogwright@gmail.com">ryogwright@gmail.com</a></p> */}
          </div>
        </div>
        <div id="about-me">
          <h2>About Me</h2>
          <p>I am a 22 year old computer science student with a passion for coding and software engineering. I was born and raised in the city of
            Concord, California, just northeast of San Francisco. I consider myself to be a mix of introverted and extroverted,
            but a little more on the introverted side. I usually spend my time working on coding projects, creating educational YouTube videos,
            and engaging with a community of early career/aspiring software engineers. In the frequently changing world of software engineering,
            I make sure to stay up to date with the latest software engineering technologies and trends through articles and YouTube.
            I aspire to work as a software engineer at a company that offers opportunities to learn and grow alongside other open-minded, 
            hard-working, and friendly team members. Apart from anything software engineering-related, I enjoy going to the gym and spending time with my family.
          </p>
          <div id="personality-btn-container">
            <a id="personality-link" href="https://www.16personalities.com/infj-personality" target="_blank">
              <button className="personality-btn"><span>My Personality Type </span></button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}