
const router = require('express').Router();
const pool = require('../db');
const { generateRecommendations } = require('../services/aiService');

router.post('/match', async (req, res) => {
    try {
        const { description, symptoms, ageGroup, mentorApproach } = req.body;
        
        console.log('Generating recommendations for:', { ageGroup, mentorApproach });
        
        const recommendations = await generateRecommendations(
            { description, symptoms, ageGroup },
            mentorApproach || 'CBT'
        );
        
        res.json({ recommendations });
    } catch (error) {
        console.error('Match error:', error);
        res.status(500).json({ error: 'Failed to generate recommendations' });
    }
});

module.exports = router;
