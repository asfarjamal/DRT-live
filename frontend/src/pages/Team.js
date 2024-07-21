import React, { useEffect, useState } from 'react';
import '../styles.css'; // Ensure you have your styles imported here
import axios from 'axios';
import teamImage from '../images/2nd years.jpg'; // Import your image

const BASE_URL = 'http://localhost:5000/api';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/team`);
        setTeamMembers(response.data);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="team-container">
      <h1>Our Team</h1>
      <img src={teamImage} alt="Team" className="team-image" />
      <div className="team-members">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
