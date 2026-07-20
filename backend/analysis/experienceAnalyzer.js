const actionVerbs = [
    "developed",
    "built",
    "designed",
    "implemented",
    "created",
    "optimized",
    "improved",
    "reduced",
    "increased",
    "automated",
    "managed",
    "led",
    "collaborated",
    "integrated",
    "deployed",
    "engineered"
];

export function experienceAnalyzer(resumeText) {

    const text = resumeText.toLowerCase();

    const experienceMatch = text.match(
        /experience([\s\S]*?)(projects|education|skills|certifications|achievements|extra|$)/i
    );

    if (!experienceMatch) {

        return {
            score: 0,
            feedback: "No experience section found."
        };

    }

    const experience = experienceMatch[1];

    let score = 0;

    // Section exists
    score += 20;

    // Dates
    const dates = experience.match(/\b(20\d{2}|19\d{2})\b/g);

    if (dates?.length >= 2)
        score += 10;

    // Bullet Points
    const bullets = experience.match(/[•*-]/g);

    if (bullets?.length >= 3)
        score += 20;
    else if (bullets?.length >= 1)
        score += 10;

    // Action Verbs
    let verbs = 0;

    actionVerbs.forEach(v => {

        if (experience.includes(v))
            verbs++;

    });

    score += Math.min(20, verbs * 4);

    // Numbers / measurable impact
    const numbers = experience.match(/\d+%|\d+\+?|\d+x/gi);

    if (numbers?.length)
        score += 20;

    // Company Name
    if (experience.length > 80)
        score += 10;

    return {

        score: Math.min(score, 100),

        feedback:
            score >= 80
                ? "Strong experience section."
                : "Experience can be improved."

    };

}