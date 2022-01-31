import React from 'react';
import img from '../assets/large/self/self.jpg';

function About() {
  return (
    <section className="about">
      <h1>Who am I?</h1>
      <div className="self-portrait">
        <img src={img} alt="self-portrait" />
      </div>
      <div className="about-description">
        <p>
          My name is Christian Beam and I am a Web Developer. I specialize in
          the MERN Stack. I have 1 year of experience with multiple programming
          technologies. I have completed a Full Stack Certification from the
          University Of Central Florida(UCF) and am proficient with: HTML5,
          CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, MongoDB,
          MySQL, and Git.
        </p>
      </div>
    </section>
  );
}

export default About;
