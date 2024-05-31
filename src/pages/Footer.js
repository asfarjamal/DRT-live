// src/components/Footer.js
import React from 'react';
import '../styles.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>DRIFT RACING TEAM</h2>
        <p className="tagline">Performance in Passion</p>
        <p>National Institute of Technology, Jamshedpur - 831014</p>
        <p>Email: <a href="mailto:driftracingteam@nitjsr.ac.in" className="footer-link">driftracingteam@nitjsr.ac.in</a></p>
        <p>Copyright &copy; 2024 | Designed by <a href="https://www.linkedin.com/in/asfar-jamal" target="_blank" rel="noopener noreferrer" className="footer-link">Asfar Jamal</a></p>
      </div>
    </footer>
  );
};

export default Footer;
