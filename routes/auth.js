// routes/auth.js
const router = require('express').Router();
const pool = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register new mentor
router.post('/register', async (req, res) => {
    try {
        console.log('Registration attempt:', req.body);
        const { email, password, firstName, lastName, primaryApproach } = req.body;
        
        // Check if user exists
        const userExists = await pool.query(
            'SELECT * FROM mentors WHERE email = $1',
            [email]
        );
        
        if (userExists.rows.length > 0) {
            return res.status(400).json({ error: 'Email already registered' });
        }
        
        // Hash password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        
        // Create user
        const newUser = await pool.query(
            `INSERT INTO mentors (email, password, first_name, last_name, primary_approach)
             VALUES ($1, $2, $3, $4, $5) 
             RETURNING id, email, first_name, last_name, primary_approach`,
            [email, hashedPassword, firstName, lastName, primaryApproach]
        );
        
        console.log('User created:', newUser.rows[0]);
        
        // Create token
        const token = jwt.sign(
            { 
                id: newUser.rows[0].id, 
                email: newUser.rows[0].email 
            },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '24h' }
        );
        
        res.status(201).json({
            message: 'Registration successful',
            token,
            user: {
                id: newUser.rows[0].id,
                email: newUser.rows[0].email,
                name: `${newUser.rows[0].first_name} ${newUser.rows[0].last_name}`,
                primaryApproach: newUser.rows[0].primary_approach
            }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ error: 'Registration failed' });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        console.log('Login attempt:', req.body.email);
        const { email, password } = req.body;
        
        // Find user
        const user = await pool.query(
            'SELECT * FROM mentors WHERE email = $1',
            [email]
        );
        
        if (user.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        // Check password
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        
        // Create token
        const token = jwt.sign(
            { 
                id: user.rows[0].id, 
                email: user.rows[0].email 
            },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '24h' }
        );
        
        console.log('Login successful for:', email);
        
        res.json({
            message: 'Login successful',
            token,
            user: {
                id: user.rows[0].id,
                email: user.rows[0].email,
                name: `${user.rows[0].first_name} ${user.rows[0].last_name}`,
                primaryApproach: user.rows[0].primary_approach
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Login failed' });
    }
});

module.exports = router;