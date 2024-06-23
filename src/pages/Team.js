// src/pages/Team.js
import React, { useEffect, useState } from 'react';
import '../styles.css'; // Ensure you have your styles imported here
import axios from 'axios';
import teamImage from '../images/2nd years.jpg'; // Import your image

const BASE_URL = process.env.BASE_URL

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/team-members`);
        console.log(response);
        setTeamMembers(response.data);
      } catch (error) {
        console.error('Error fetching team members:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <div className="team">
      <h1>Our Team</h1>
      <img src={teamImage} alt="Team" className="team-image" />
      <div className="team-members">
        {teamMembers.map(member => (
          <div key={member._id} className="team-member">
            {/* <img src={member.image} alt={member.name} /> */}
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            {/* <p>{member.bio}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
