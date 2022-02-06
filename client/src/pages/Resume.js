import React from 'react';

import ResumePdf from '../assets/resume/Christian_Beam_Resume.pdf';

function Resume() {
  return (
    <section className="resume-section">
      <h1>Resume</h1>
      <div className="download-resume">
        <iframe
          src="https://drive.google.com/file/d/14jT5iti14_z7zdk3akk4mfWjv9Wbb7FYEEWpD_6MC7g/preview"
          className="resume"
          allow="autoplay"
          title="resume-iframe"
        ></iframe>
        <a href={ResumePdf} download={'Christian-Beam-Resume'}>
          <button className="resume-button">Download Christian's Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Resume;
