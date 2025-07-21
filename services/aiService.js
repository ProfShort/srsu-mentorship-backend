// Mock AI Service with approach-specific recommendations

async function generateRecommendations(scenario, mentorApproach) {
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return approach-specific recommendations
    const recommendations = getApproachSpecificRecommendations(
        mentorApproach, 
        scenario.