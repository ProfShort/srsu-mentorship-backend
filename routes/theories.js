const router = require('express').Router();
const pool = require('../db');

// Get all theories
router.get('/', async (req, res) => {
    try {
        console.log('Attempting to fetch theories...');
        const result = await pool.query('SELECT * FROM theories ORDER BY name');
        console.log('Query result:', result.rows);
        res.json(result.rows);
    } catch (error) {
        console.error('Detailed error:', error.message);
        console.error('Full error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get single theory
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log('Fetching theory with id:', id);
        const result = await pool.query('SELECT * FROM theories WHERE id = $1', [id]);
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Theory not found' });
        }
        
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Detailed error:', error.message);
        console.error('Full error:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
