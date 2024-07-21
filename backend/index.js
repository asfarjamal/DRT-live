const express = require('express');
const dotenv = require('dotenv');
const teamRoutes = require('./routes/teamRoutes');
const contactRoutes = require('./routes/contact');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
//const { fileURLToPath } = require('url');

dotenv.config(); // Load environment variables from .env file

const app = express();

//  __filename = fileURLToPath(import.meta.url);
//  __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// Middleware
app.use(express.json());

// Define a simple route
// app.get('/', (req, res) => {
//   res.send('Hello, Drift Racing Team!');
// });

// Routes
app.use('/api/team', teamRoutes);
app.use('/api/contact', contactRoutes);

app.use(express.static(path.join(__dirname, '/frontend/build')));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, '/frontend/build/index.html')));

// Start the server
//const PORT = process.env.PORT || 5000;
app.listen(5000, () => {
  console.log(`Server running on port 5000`);
});
