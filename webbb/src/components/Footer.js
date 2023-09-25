import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>

      <div id="footer-content">
        {/* Social Media Links */}
        <div id="social-media">
          <a href="https://www.linkedin.com/in/your-linkedin-handle/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/your-github-handle" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Contact Info */}
        <div id="contact-info">
          <p>Email: your-email@example.com</p>
          <p>Phone: +1234567890</p>
        </div>

        {/* Download Resume */}
        <div id="resume-download">
          <a href="path/to/your-resume.pdf" download>
            <button>Download Resume</button>
          </a>
        </div>



      </div>
    </footer>
  );
};

export default Footer;
