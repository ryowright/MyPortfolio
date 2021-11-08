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
            <p id="email-me">Email Me: <a href="mailto: ryow.college@gmail.com">ryow.college@gmail.com</a></p>
            </div>
        </div>
        <div id="about-me">
          <h2>About Me</h2>
          <p>I am a 21 year old computer science student with a passion for coding. I was born and raised in the city of
            Concord, California, just northeast of San Francisco. I consider myself to be a mix of introverted and extroverted,
            but a little more on the introverted side. Outside of school and project work, I enjoy playing videogames, 
            learning to play piano, and going to the gym. I aspire to work as a software engineer at a company that 
            offers opportunities to learn and grow alongside other like-minded, hard-working, and friendly team members.
            I would also like to travel the world with and visit some beautiful places with my family and friends in the future.
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