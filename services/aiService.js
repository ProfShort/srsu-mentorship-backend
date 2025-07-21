// Mock AI Service - Returns realistic counseling recommendations
// Replace with real AI later by uncommenting the OpenAI code

async function generateRecommendations(scenario, mentorApproach) {
    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Return approach-specific mock recommendations
    const recommendations = getApproachSpecificRecommendations(
        mentorApproach, 
        scenario.ageGroup, 
        scenario.symptoms
    );
    
    return recommendations;
}

function getApproachSpecificRecommendations(approach, ageGroup, symptoms) {
    const approachTechniques = {
        'cbt': [
            {
                techniqueName: "Thought Record Journal",
                steps: "1. Have client identify triggering situation\n2. Record automatic thoughts\n3. Identify emotions and rate intensity\n4. Examine evidence for/against thoughts\n5. Develop balanced alternative thought",
                outcomes: "Increased awareness of thought patterns, reduced emotional intensity, improved rational thinking",
                adaptations: `For ${ageGroup}: Use age-appropriate examples and simplified language. Focus on ${symptoms} by targeting specific negative thought patterns.`
            },
            {
                techniqueName: "Behavioral Activation Schedule",
                steps: "1. Track current daily activities and mood\n2. Identify avoided activities\n3. Schedule pleasant activities\n4. Start with small, achievable goals\n5. Gradually increase activity level",
                outcomes: "Improved mood, increased engagement, reduced avoidance behaviors",
                adaptations: `Tailored for ${symptoms}: Start with low-energy activities if depression is present. Include social activities if isolation is a concern.`
            },
            {
                techniqueName: "Cognitive Restructuring Through Socratic Questioning",
                steps: "1. Identify the problematic thought\n2. Ask 'What's the evidence?'\n3. Explore alternative explanations\n4. Examine worst-case scenarios realistically\n5. Develop coping statements",
                outcomes: "Reduced catastrophic thinking, improved problem-solving, increased cognitive flexibility",
                adaptations: `For ${ageGroup}: Use concrete examples and visual aids. Make questions more direct and simple.`
            },
            {
                techniqueName: "Graded Exposure Hierarchy",
                steps: "1. List feared situations\n2. Rate anxiety level (0-100)\n3. Order from least to most anxiety-provoking\n4. Start with least threatening\n5. Practice relaxation during exposure",
                outcomes: "Reduced anxiety, increased confidence, improved functioning",
                adaptations: `Consider ${ageGroup} developmental level. For ${symptoms}, ensure exposure is gradual and supported.`
            },
            {
                techniqueName: "Problem-Solving Therapy Module",
                steps: "1. Define the problem specifically\n2. Brainstorm all possible solutions\n3. Evaluate pros and cons\n4. Choose and implement solution\n5. Evaluate effectiveness",
                outcomes: "Improved decision-making, reduced overwhelm, increased self-efficacy",
                adaptations: `For ${symptoms}: Break down complex problems. Provide more structure and support in brainstorming.`
            }
        ],
        'person-centered': [
            {
                techniqueName: "Empathic Reflection Exercise",
                steps: "1. Listen without interrupting\n2. Reflect feelings heard\n3. Validate client's experience\n4. Check for accuracy\n5. Allow client to correct or expand",
                outcomes: "Increased self-awareness, feeling heard and understood, improved emotional expression",
                adaptations: `For ${ageGroup}: Use simpler feeling words. With ${symptoms}, be patient with emotional expression.`
            },
            {
                techniqueName: "Unconditional Positive Regard Practice",
                steps: "1. Suspend all judgment\n2. Find something genuinely positive\n3. Express acceptance of the person\n4. Separate person from behavior\n5. Maintain warm, caring presence",
                outcomes: "Increased self-worth, reduced shame, improved therapeutic alliance",
                adaptations: `Essential for ${symptoms} where self-criticism is high. Adapt language for ${ageGroup}.`
            },
            {
                techniqueName: "Self-Concept Exploration",
                steps: "1. Ask 'How do you see yourself?'\n2. Explore ideal self vs. real self\n3. Identify discrepancies gently\n4. Support self-discovery\n5. Celebrate authentic insights",
                outcomes: "Increased self-understanding, reduced internal conflict, authentic self-expression",
                adaptations: `For ${ageGroup}: Use creative methods like art or play. Address ${symptoms} through self-compassion.`
            },
            {
                techniqueName: "Here-and-Now Awareness",
                steps: "1. Focus on present moment\n2. Notice current feelings\n3. Explore body sensations\n4. Share immediate experience\n5. Process in-the-moment reactions",
                outcomes: "Increased present-moment awareness, reduced rumination, improved emotional intelligence",
                adaptations: `With ${symptoms}, start slowly. For ${ageGroup}, use concrete anchors to present.`
            },
            {
                techniqueName: "Feelings Inventory Check-In",
                steps: "1. Provide feelings list or wheel\n2. Client identifies current emotions\n3. Explore each feeling's message\n4. Validate all emotions\n5. Support emotional expression",
                outcomes: "Expanded emotional vocabulary, normalized emotional experience, improved regulation",
                adaptations: `Simplify for ${ageGroup}. With ${symptoms}, focus on building emotional awareness gradually.`
            }
        ],
        'gestalt': [
            {
                techniqueName: "Empty Chair Dialogue",
                steps: "1. Set up empty chair\n2. Identify who/what to address\n3. Express feelings to chair\n4. Switch seats and respond\n5. Process the experience",
                outcomes: "Resolution of unfinished business, integrated perspectives, emotional release",
                adaptations: `For ${ageGroup}: Make it less abstract, use props. With ${symptoms}, ensure emotional safety.`
            },
            {
                techniqueName: "Body Awareness Scan",
                steps: "1. Close eyes and breathe\n2. Scan body from head to toe\n3. Notice areas of tension\n4. Breathe into tense areas\n5. Share physical sensations",
                outcomes: "Increased somatic awareness, mind-body connection, reduced physical tension",
                adaptations: `For ${symptoms} including anxiety, go slowly. Adapt pace for ${ageGroup}.`
            },
            {
                techniqueName: "Contact and Withdrawal Exercise",
                steps: "1. Notice urge to connect or withdraw\n2. Explore what triggers each\n3. Practice healthy contact\n4. Practice healthy withdrawal\n5. Find personal balance",
                outcomes: "Improved boundaries, balanced relationships, self-awareness",
                adaptations: `Critical for ${symptoms} involving relationships. Simplify concepts for ${ageGroup}.`
            },
            {
                techniqueName: "Experimentation with Polarities",
                steps: "1. Identify opposite feelings/behaviors\n2. Exaggerate one polarity\n3. Switch to opposite\n4. Find middle ground\n5. Integrate both aspects",
                outcomes: "Integrated personality aspects, reduced internal conflict, wholeness",
                adaptations: `Make concrete for ${ageGroup}. With ${symptoms}, choose polarities carefully.`
            },
            {
                techniqueName: "Dream Work Exploration",
                steps: "1. Share recent dream\n2. Identify dream elements\n3. 'Become' each element\n4. Speak as that element\n5. Find personal meaning",
                outcomes: "Unconscious insight, symbolic understanding, self-discovery",
                adaptations: `Use drawings for ${ageGroup}. With ${symptoms}, focus on empowering interpretations.`
            }
        ],
        // Default techniques if approach not found
        'default': [
            {
                techniqueName: "Therapeutic Journaling",
                steps: "1. Set aside 15 minutes daily\n2. Write without censoring\n3. Focus on thoughts and feelings\n4. Review patterns weekly\n5. Discuss insights in session",
                outcomes: "Increased self-awareness, emotional processing, pattern recognition",
                adaptations: `Adjust complexity for ${ageGroup}. Focus on ${symptoms} in prompts.`
            },
            {
                techniqueName: "Mindfulness Meditation",
                steps: "1. Find comfortable position\n2. Focus on breath\n3. Notice wandering thoughts\n4. Gently return to breath\n5. Practice for 5-10 minutes",
                outcomes: "Reduced anxiety, improved focus, emotional regulation",
                adaptations: `Shorten duration for ${ageGroup}. Helpful for ${symptoms} including anxiety and depression.`
            },
            {
                techniqueName: "Strengths Identification Exercise",
                steps: "1. List past successes\n2. Identify skills used\n3. Ask others for input\n4. Create strengths inventory\n5. Apply to current challenges",
                outcomes: "Increased confidence, resource awareness, positive self-concept",
                adaptations: `Use examples relevant to ${ageGroup}. Build confidence despite ${symptoms}.`
            },
            {
                techniqueName: "Social Support Mapping",
                steps: "1. Draw self in center\n2. Add support people around\n3. Draw connection lines\n4. Identify gaps\n5. Plan to strengthen network",
                outcomes: "Increased connection, reduced isolation, improved help-seeking",
                adaptations: `Visual approach good for ${ageGroup}. Address ${symptoms} through connection.`
            },
            {
                techniqueName: "Values Clarification Activity",
                steps: "1. List important values\n2. Rank top 5\n3. Assess current alignment\n4. Identify value conflicts\n5. Plan value-based actions",
                outcomes: "Increased purpose, reduced conflict, motivated change",
                adaptations: `Use concrete examples for ${ageGroup}. Connect values to ${symptoms} resolution.`
            }
        ]
    };

    // Get techniques for the specific approach, or use default
    const techniques = approachTechniques[approach] || approachTechniques['default'];
    
    // You could further customize based on symptoms/age here
    // For now, return the techniques as is
    return techniques;
}

module.exports = { generateRecommendations };