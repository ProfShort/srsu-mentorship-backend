const router = require('express').Router();
const pool = require('../db');

// Get all activities
router.get('/', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT a.*, t.name as theory_name, tech.name as technique_name
            FROM activities a
            JOIN theories t ON a.theory_id = t.id
            LEFT JOIN techniques tech ON a.technique_id = tech.id
            ORDER BY a.name
        `);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get activities by theory
router.get('/theory/:theoryId', async (req, res) => {
    try {
        const { theoryId } = req.params;
        const result = await pool.query(
            'SELECT * FROM activities WHERE theory_id = $1 ORDER BY name',
            [theoryId]
        );
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// Get single activity
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = await pool.query(
            `SELECT a.*, t.name as theory_name, tech.name as technique_name
             FROM activities a
             JOIN theories t ON a.theory_id = t.id
             LEFT JOIN techniques tech ON a.technique_id = tech.id
             WHERE a.id = $1`,
            [id]
        );
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Activity not found' });
        }
        
        res.json(result.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;