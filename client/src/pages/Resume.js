import React from 'react';

import ResumePdf from '../assets/resume/Christian-Beam-Resume.pdf';

function Resume() {
  return (
    <section className="resume-section">
      <h1>Resume</h1>
      <div className="download-resume">
        <iframe
          src="https://drive.google.com/file/d/1QsepJ_afeh9NbdHHMymM7E8LVSvt-1TfxWfGUt5pH_s/preview"
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
