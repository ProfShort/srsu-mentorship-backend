
const router = require('express').Router();
const pool = require('../db');

// Simple version without AI service for now
router.post('/match', async (req, res) => {
    try {
        const { description, symptoms, ageGroup, mentorApproach } = req.body;
        
        console.log('Received request:', { description, symptoms, ageGroup, mentorApproach });
        
        // Mock recommendations for testing
        const recommendations = [
            {
                techniqueName: "Cognitive Restructuring",
                steps: "1. Identify negative thoughts\n2. Challenge the thoughts\n3. Replace with balanced thoughts",
                outcomes: "Reduced anxiety and improved thinking patterns",
                adaptations: `Adapted for ${ageGroup} with focus on ${symptoms}`
            },
            {
                techniqueName: "Behavioral Activation",
                steps: "1. Schedule pleasant activities\n2. Start small\n3. Gradually increase",
                outcomes: "Improved mood and increased engagement",
                adaptations: `Modified for ${ageGroup} developmental level`
            },
            {
                techniqueName: "Relaxation Training",
                steps: "1. Deep breathing\n2. Progressive muscle relaxation\n3. Practice daily",
                outcomes: "Decreased physical tension and anxiety",
                adaptations: `Simplified for ${ageGroup} understanding`
            },
            {
                techniqueName: "Social Skills Training",
                steps: "1. Model appropriate behavior\n2. Role-play scenarios\n3. Practice in real life",
                outcomes: "Improved social interactions",
                adaptations: `Using age-appropriate scenarios for ${ageGroup}`
            },
            {
                techniqueName: "Mindfulness Exercises",
                steps: "1. Focus on present moment\n2. Notice without judgment\n3. Return to breath",
                outcomes: "Increased awareness and emotional regulation",
                adaptations: `Made concrete and tangible for ${ageGroup}`
            }
        ];
        
        res.json({ recommendations });
    } catch (error) {
        console.error('Match error:', error);
        res.status(500).json({ error: 'Failed to generate recommendations' });
    }
});

module.exports = router;