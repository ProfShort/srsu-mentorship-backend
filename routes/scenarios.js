const router = require('express').Router();
const pool = require('../db');

// Match scenario to get recommendations
router.post('/match', async (req, res) => {
    try {
        console.log('Received scenario:', req.body);
        const { description, symptoms, ageGroup } = req.body;
        
        // For now, return some recommendations based on simple matching
        let query = `
            SELECT DISTINCT
                t.id as theory_id,
                t.name,
                t.philosophy,
                t.category,
                tech.name as technique_name,
                tech.description as technique_description,
                tech.id as technique_id
            FROM theories t
            JOIN techniques tech ON tech.theory_id = t.id
        `;
        
        // Simple keyword matching
        const searchText = `${description} ${symptoms}`.toLowerCase();
        
        if (searchText.includes('anxiety') || searchText.includes('worry') || searchText.includes('stress')) {
            query += ` WHERE t.code = 'cbt' LIMIT 2`;
        } else if (searchText.includes('relationship') || searchText.includes('conflict')) {
            query += ` WHERE t.code IN ('person-centered', 'gestalt') LIMIT 2`;
        } else if (searchText.includes('responsibility') || searchText.includes('choice') || searchText.includes('blame') || searchText.includes('control')) {
            query += ` WHERE t.code = 'reality' LIMIT 2`;
        } else {
            // Return a mix of approaches if no specific match
            query += ` LIMIT 3`;
        }
        
        console.log('Running query:', query);
        const result = await pool.query(query);
        
        console.log('Found recommendations:', result.rows.length);
        
        res.json({
            recommendations: result.rows,
            message: 'Based on the scenario, these approaches may be helpful'
        });
    } catch (error) {
        console.error('Error in scenario matching:', error);
        res.status(500).json({ error: 'Server error', details: error.message });
    }
});

module.exports = router;