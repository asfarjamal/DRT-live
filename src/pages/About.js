// src/components/About.js
import React from 'react';
import '../styles.css';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <p className="subheading">Innovate, Design and Manufacture. Performance is Passion.</p>
      <div className="about-columns">
        <section className="about-section history">
          <h2>What is DRT?</h2>
          <p>
          Drift Racing Team is one of the oldest and dynamic student Formula racing automotive team of National Institute of Technology, Jamshedpur. We have a team of enthusiastic technocrats who'll leave no stone unturned to prove their calibre and capabilities.
          </p>
          <Link to="/Learn" className="learn-more-btn">Learn More</Link>
        </section>

        <section className="about-section mission">
          <h2>What does DRT do?</h2>
          <p>
          Initiated in the year 2009, the objective of Drift Racing Team is to design, simulate and fabricate a formula style electric race car under certain rules and regulations provided by the organising committee and take part in various competitions all across the globe.
          </p>
          <Link to="/Learn" className="learn-more-btn">Learn More</Link>
        </section>

        <section className="about-section team">
          <h2>Our Achievements</h2>
          <p>
          The team has not only participated and won in several events all over India but has also glistened the name of the Institution internationally by winning competetions and bringing laurels to the college as well as the country and scaling great heights so far.
          </p>
          <Link to="/Learn" className="learn-more-btn">Learn More</Link>
        </section>
      </div>
    </div>
  );
};

export default About;
