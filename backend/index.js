const express = require('express');
const dotenv = require('dotenv');
const teamRoutes = require('./routes/teamRoutes');
const contactRoutes = require('./routes/contact');
const cors = require('cors');
const bodyParser = require('body-parser');
dotenv.config(); // Load environment variables from .env file

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Middleware
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, Drift Racing Team!');
});

// Routes
app.use('/api/team', teamRoutes);
app.use('/api/contact', contactRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
