const express = require('express');
const router = express.Router();

const teamMembers = [
  { name: "Arshit Kumar", role: "Captain" },
  { name: "Venkatesh Mishra", role: "Vice Captain" },
  { name: "Priyanshu Raj", role: "Team Manager" },
  { name: "Aman Mani Jha", role: "Technical Head" },
  { name: "Ujjawal Singh", role: "Sponsorship and Finance Manager" },
  { name: "Umang", role: "Suspension Head" },
  { name: "Shivam Anand", role: "Chassis Head" },
  { name: "Sonu Vishnoi", role: "Design Head" },
  { name: "Bittu Yadav", role: "Manufacturing Head" },
  { name: "Kumar Appu", role: "Steering Head" },
  { name: "Harshini", role: "Transmission Head" },
  { name: "Ankit", role: "Electrical Head" },
  { name: "Sushil", role: "Breaking Head" },
  { name: "Asfar Jamal", role: "Web Head" },
  { name: "Akash Ranjan", role: "Web Co-Head" },
  { name: "Sanika", role: "Content & Creative Head" },
  { name: "Akash Singh", role: "Member" },
  { name: "Ayush Laal", role: "Member" },
  { name: "Likhit Reddy", role: "Member" }
];

// Get all team members
router.get('/', (req, res) => {
  res.json(teamMembers);
});

module.exports = router;
