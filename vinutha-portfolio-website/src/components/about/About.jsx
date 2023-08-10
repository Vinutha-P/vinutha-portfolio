import React from "react";
import "./about.css";
import ME from "../../assets/me2.jpeg";
import { FaAward } from "react-icons/fa";
import {FaLaptopCode} from 'react-icons/fa';
import {PiFolderUserBold} from 'react-icons/pi';


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About pic" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article className="about_card">
              <FaLaptopCode className="about_icon" />
              <h5>Skills</h5>
              <small>FrontEnd Development</small>
            </article>
            <article className="about_card">
              <PiFolderUserBold className="about_icon" />
              <h5>Projects</h5>
              <small>4+ Projects</small>
            </article>
          </div>

          <p>
          Enthusiastic and highly skilled software developer with a strong focus on front-end technologies.
          Proficient in JavaScript and experienced in building dynamic and responsive user interfaces using React, React Native, and Angular frameworks. A quick learner with a passion for staying up-to-date with the latest industry trends and best practices. Possesses excellent problem-solving abilities and a track record of delivering high-quality software solutions.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
