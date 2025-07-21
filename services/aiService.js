// Mock AI Service - Returns realistic counseling recommendations

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
    console.log('Getting recommendations for approach:', approach);
    
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
        'adlerian': [
            {
                techniqueName: "Lifestyle Assessment",
                steps: "1. Explore early childhood memories\n2. Identify family constellation position\n3. Examine life goals and priorities\n4. Uncover private logic patterns\n5. Connect past to present behaviors",
                outcomes: "Understanding of life patterns, increased self-awareness, identification of maladaptive beliefs",
                adaptations: `For ${ageGroup}: Use age-appropriate methods to explore family dynamics. Focus on ${symptoms} as they relate to lifestyle patterns.`
            },
            {
                techniqueName: "Encouragement Intervention",
                steps: "1. Identify client's strengths\n2. Highlight past successes\n3. Reframe failures as learning\n4. Set achievable goals\n5. Celebrate small victories",
                outcomes: "Increased self-confidence, motivation for change, reduced discouragement",
                adaptations: `Essential for ${symptoms} involving low self-esteem. Adjust encouragement style for ${ageGroup}.`
            },
            {
                techniqueName: "Social Interest Development",
                steps: "1. Explore current social connections\n2. Identify ways to contribute\n3. Plan community involvement\n4. Practice helping behaviors\n5. Reflect on social impact",
                outcomes: "Increased sense of belonging, reduced isolation, improved social functioning",
                adaptations: `For ${ageGroup}: Find age-appropriate ways to contribute. Address ${symptoms} through social connection.`
            },
            {
                techniqueName: "Acting 'As If' Technique",
                steps: "1. Identify desired behavior/feeling\n2. Describe how that person would act\n3. Practice 'as if' for one day\n4. Notice different responses\n5. Gradually increase practice",
                outcomes: "Behavior change, increased confidence, new self-perception",
                adaptations: `Make it playful for ${ageGroup}. Use for ${symptoms} by acting 'as if' recovered.`
            },
            {
                techniqueName: "Birth Order Exploration",
                steps: "1. Identify birth order position\n2. Explore typical characteristics\n3. Examine family dynamics\n4. Challenge birth order myths\n5. Develop individual identity",
                outcomes: "Understanding family influence, reduced limiting beliefs, increased autonomy",
                adaptations: `Consider cultural factors for ${ageGroup}. Connect birth order to current ${symptoms}.`
            }
        ],
        'existential': [
            {
                techniqueName: "Meaning-Making Dialogue",
                steps: "1. Explore what gives life meaning\n2. Identify current meaning voids\n3. Examine values and priorities\n4. Create personal meaning\n5. Commit to meaningful action",
                outcomes: "Increased sense of purpose, reduced existential anxiety, motivated behavior change",
                adaptations: `For ${ageGroup}: Use concrete examples of meaning. Address ${symptoms} by finding purpose in struggle.`
            },
            {
                techniqueName: "Freedom and Responsibility Exercise",
                steps: "1. List current life constraints\n2. Identify actual vs. perceived limits\n3. Explore freedom within limits\n4. Take responsibility for choices\n5. Make conscious decisions",
                outcomes: "Increased personal agency, reduced victimhood, empowered decision-making",
                adaptations: `Adjust complexity for ${ageGroup}. Help see freedom despite ${symptoms}.`
            },
            {
                techniqueName: "Death Awareness Meditation",
                steps: "1. Reflect on life's finite nature\n2. Consider unlived life\n3. Identify priorities\n4. Make peace with mortality\n5. Commit to authentic living",
                outcomes: "Reduced death anxiety, increased life appreciation, motivated authentic choices",
                adaptations: `Handle sensitively for ${ageGroup}. Avoid if ${symptoms} include suicidal ideation.`
            },
            {
                techniqueName: "Isolation vs. Connection Exploration",
                steps: "1. Acknowledge existential aloneness\n2. Differentiate isolation types\n3. Build authentic connections\n4. Accept ultimate aloneness\n5. Find balance",
                outcomes: "Improved relationships, reduced loneliness, acceptance of human condition",
                adaptations: `For ${ageGroup}: Focus on connection. Address ${symptoms} related to isolation.`
            },
            {
                techniqueName: "Authenticity Practice",
                steps: "1. Identify false self behaviors\n2. Explore fears of authenticity\n3. Practice genuine expression\n4. Notice others' responses\n5. Commit to authentic living",
                outcomes: "Increased self-acceptance, improved relationships, reduced anxiety",
                adaptations: `Make concrete for ${ageGroup}. Use authenticity to address ${symptoms}.`
            }
        ],
        'reality': [
            {
                techniqueName: "WDEP System Implementation",
                steps: "1. Wants: What do you want?\n2. Doing: What are you doing?\n3. Evaluation: Is it working?\n4. Planning: Make specific plan\n5. Commit to follow through",
                outcomes: "Clear goals, reality-based thinking, actionable plans, increased success",
                adaptations: `Simplify questions for ${ageGroup}. Focus WDEP on ${symptoms} specifically.`
            },
            {
                techniqueName: "Quality World Exploration",
                steps: "1. Identify ideal life picture\n2. List important people/values\n3. Compare to current reality\n4. Identify gaps\n5. Plan to align reality",
                outcomes: "Clarified values, motivated change, reduced frustration",
                adaptations: `Use visuals for ${ageGroup}. Help adjust quality world to address ${symptoms}.`
            },
            {
                techniqueName: "Choice Theory Application",
                steps: "1. Identify current behaviors\n2. Recognize as choices\n3. Evaluate effectiveness\n4. Choose better behaviors\n5. Take responsibility",
                outcomes: "Increased personal responsibility, empowerment, behavior change",
                adaptations: `For ${ageGroup}: Make choices concrete. Apply to ${symptoms} as chosen behaviors.`
            },
            {
                techniqueName: "Total Behavior Assessment",
                steps: "1. Identify acting behaviors\n2. Explore thinking patterns\n3. Notice feelings\n4. Observe physiology\n5. Change actions to change all",
                outcomes: "Holistic understanding, integrated change, symptom reduction",
                adaptations: `Break down for ${ageGroup} understanding. Show how actions affect ${symptoms}.`
            },
            {
                techniqueName: "Commitment and Follow-Through",
                steps: "1. Make specific commitment\n2. Write detailed plan\n3. Identify obstacles\n4. Plan for obstacles\n5. Review and adjust",
                outcomes: "Increased follow-through, goal achievement, self-efficacy",
                adaptations: `Keep commitments small for ${ageGroup}. Focus on ${symptoms}-related goals.`
            }
        ],
        'act': [
            {
                techniqueName: "Values Clarification Exercise",
                steps: "1. Identify life values\n2. Rate current alignment\n3. Notice value-behavior gaps\n4. Choose valued actions\n5. Commit despite discomfort",
                outcomes: "Clear life direction, motivated behavior change, increased life satisfaction",
                adaptations: `Use concrete examples for ${ageGroup}. Connect values to overcoming ${symptoms}.`
            },
            {
                techniqueName: "Mindfulness and Defusion Practice",
                steps: "1. Notice thoughts without believing\n2. Label 'thinking' vs. reality\n3. Use defusion techniques\n4. Create space from thoughts\n5. Choose actions freely",
                outcomes: "Reduced thought fusion, decreased rumination, psychological flexibility",
                adaptations: `Simplify metaphors for ${ageGroup}. Apply to specific ${symptoms}-related thoughts.`
            },
            {
                techniqueName: "Acceptance and Willingness Training",
                steps: "1. Identify avoided experiences\n2. Practice willingness\n3. Drop the struggle\n4. Make room for discomfort\n5. Act with feelings present",
                outcomes: "Reduced avoidance, increased psychological flexibility, improved functioning",
                adaptations: `Start small for ${ageGroup}. Focus on accepting ${symptoms} while taking action.`
            },
            {
                techniqueName: "Committed Action Planning",
                steps: "1. Link actions to values\n2. Set specific goals\n3. Identify barriers\n4. Plan for barriers\n5. Act with commitment",
                outcomes: "Value-consistent behavior, increased meaning, goal achievement",
                adaptations: `Make actions concrete for ${ageGroup}. Focus on actions despite ${symptoms}.`
            },
            {
                techniqueName: "Self-as-Context Exercise",
                steps: "1. Notice observing self\n2. Distinguish from thoughts/feelings\n3. Find stable sense of self\n4. Rest in awareness\n5. Act from this space",
                outcomes: "Increased self-awareness, reduced identification with symptoms, stability",
                adaptations: `Use simple exercises for ${ageGroup}. Help see self as more than ${symptoms}.`
            }
        ],
        'rebt': [
            {
                techniqueName: "ABC Model Analysis",
                steps: "1. A: Identify activating event\n2. B: Uncover beliefs about A\n3. C: Notice consequences\n4. D: Dispute irrational beliefs\n5. E: Establish effective beliefs",
                outcomes: "Reduced emotional disturbance, rational thinking, improved coping",
                adaptations: `Simplify for ${ageGroup}. Apply ABC specifically to ${symptoms} triggers.`
            },
            {
                techniqueName: "Disputation Techniques",
                steps: "1. Identify irrational belief\n2. Challenge with evidence\n3. Question belief logic\n4. Examine helpfulness\n5. Replace with rational belief",
                outcomes: "Changed thinking patterns, reduced distress, logical thinking",
                adaptations: `Use ${ageGroup}-appropriate disputes. Focus on beliefs maintaining ${symptoms}.`
            },
            {
                techniqueName: "Shame-Attacking Exercise",
                steps: "1. Identify shame-inducing situation\n2. Deliberately do it (safely)\n3. Notice world doesn't end\n4. Challenge shame beliefs\n5. Build shame resilience",
                outcomes: "Reduced shame, increased confidence, social freedom",
                adaptations: `Choose appropriate challenges for ${ageGroup}. Avoid if ${symptoms} include severe anxiety.`
            },
            {
                techniqueName: "Unconditional Self-Acceptance",
                steps: "1. Separate actions from worth\n2. Accept self with flaws\n3. Rate behaviors, not self\n4. Practice self-compassion\n5. Maintain despite failures",
                outcomes: "Improved self-esteem, reduced self-criticism, emotional stability",
                adaptations: `Essential for ${symptoms} with self-blame. Teach ${ageGroup} self-acceptance.`
            },
            {
                techniqueName: "Rational Emotive Imagery",
                steps: "1. Imagine problematic situation\n2. Feel the disturbed emotion\n3. Change to healthy emotion\n4. Notice belief changes\n5. Practice regularly",
                outcomes: "Emotional regulation, changed emotional patterns, coping skills",
                adaptations: `Guide imagery for ${ageGroup}. Apply to specific ${symptoms} situations.`
            }
        ]
    };

    // Return techniques for the specific approach, or default to CBT if not found
    const techniques = approachTechniques[approach] || approachTechniques['cbt'];
    
    console.log(`Returning ${techniques.length} techniques for ${approach} approach`);
    
    return techniques;
}

module.exports = { generateRecommendations };