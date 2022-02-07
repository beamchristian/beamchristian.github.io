import React from 'react';
import img from '../assets/large/self/self.jpg';

function About() {
  return (
    <div>
      <h1 className="section-title">About Me</h1>
      <section className="about">
        <div className="self-portrait">
          <img src={img} alt="self-portrait" />
        </div>
        <div className="about-description">
          <p>
            Hi there! I'm Christian Beam and I am a Web Developer, pleased to
            meet you. I specialize in the MERN Stack and have 1 year of
            experience with multiple programming technologies. I have completed
            a Full Stack Certification from the University Of Central
            Florida(UCF) and am proficient with: HTML5, CSS3, JavaScript,
            jQuery, Express.js, React.js, Node.js, MongoDB, MySQL, and Git.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
