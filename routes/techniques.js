const router = require('express').Router();
const pool = require('../db');

// Get all techniques
router.get('/', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT t.*, th.name as theory_name 
            FROM techniques t
            JOIN theories th ON t.theory_id = th.id
            ORDER BY t.name
        `);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get techniques by theory
router.get('/theory/:theoryId', async (req, res) => {
    try {
        const { theoryId } = req.params;
        const result = await pool.query(
            'SELECT * FROM techniques WHERE theory_id = $1 ORDER BY name',
            [theoryId]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get single technique with activities
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const techniqueResult = await pool.query(
            'SELECT t.*, th.name as theory_name FROM techniques t JOIN theories th ON t.theory_id = th.id WHERE t.id = $1',
            [id]
        );
        
        if (techniqueResult.rows.length === 0) {
            return res.status(404).json({ error: 'Technique not found' });
        }
        
        const activitiesResult = await pool.query(
            'SELECT * FROM activities WHERE technique_id = $1',
            [id]
        );
        
        res.json({
            ...techniqueResult.rows[0],
            activities: activitiesResult.rows
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;