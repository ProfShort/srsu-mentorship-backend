// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./db');

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import routes
const theoriesRoutes = require('./routes/theories');
const authRoutes = require('./routes/auth'); 
const techniquesRoutes = require('./routes/techniques');
const activitiesRoutes = require('./routes/activities');
// Use routes
const scenariosRoutes = require('./routes/scenarios');
app.use('/api/theories', theoriesRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/techniques', techniquesRoutes);
app.use('/api/activities', activitiesRoutes);
app.use('/api/scenarios', scenariosRoutes);
console.log('Scenarios routes loaded');
// Test route
app.get('/api/test', (req, res) => {
    res.json({ message: 'Server is working great!' });
});

// Basic route
app.get('/', (req, res) => {
    res.send('Counseling Resource Center API');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

