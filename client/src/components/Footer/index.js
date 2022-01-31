import React from 'react';

function Footer() {
  function fullYear() {
    const yearFormat = new Date();
    return yearFormat.getFullYear();
  }

  return (
    <footer className="flex-row">
      <h2>
        <a className="footer-atag" href="/">
          &copy; <span>{fullYear()}</span> Christian Beam
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li>
            <a
              className="li-footerdesign"
              href="https://github.com/beamchristian/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-links"
                src="https://img.icons8.com/nolan/64/github.png"
                alt="github icon"
              />
            </a>
          </li>
          <li>
            <a
              className="li-footerdesign"
              href="https://www.linkedin.com/in/christian-beam-64b5b5a0/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="social-links"
                src="https://img.icons8.com/color/48/000000/linkedin-circled--v5.png"
                alt="linked-in icon"
              />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
