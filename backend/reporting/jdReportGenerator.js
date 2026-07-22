export function jdReportGenerator({

    overall,

    skills,

    keywords,

    experience,

    education

}) {

    const suggestions = [];
    const strengths = [];
    const weaknesses = [];
    // Missing Skills Suggestions
    skills.missingSkills.forEach(skill => {

        suggestions.push(
            `Add ${skill} to your resume if you have worked with it.`
        );

    });

    // Missing Education Suggestions
    education.missingEducation.forEach(item => {

        suggestions.push(
            `Mention your ${item} qualification if applicable.`
        );

    });

    // Experience Suggestion
    if (experience.score < 100) {

        suggestions.push(
            experience.remark
        );

    }

    // Keyword Suggestions
    keywords.missingKeywords
        .slice(0, 5)
        .forEach(keyword => {

            suggestions.push(
                `Include "${keyword}" naturally in your resume where relevant.`
            );

        });
    // -------------------------
    // Strengths
    // -------------------------

    if (skills.matchedSkills.length >= 5) {

        strengths.push(
            "Strong alignment with the technical skills required for this role."
        );

    }

    if (skills.matchedSkills.length > 0) {

        strengths.push(
            `Your resume demonstrates experience with ${skills.matchedSkills.slice(0, 5).join(", ")}.`
        );

    }

    if (experience.score === 100) {

        strengths.push(
            "Your experience closely matches the job requirements."
        );

    }

    if (education.score === 100) {

        strengths.push(
            "Your educational background meets the required qualifications."
        );

    }

    if (keywords.score >= 75) {

        strengths.push(
            "Your resume contains a good number of relevant job description keywords."
        );

    }

    // -------------------------
    // Weaknesses
    // -------------------------

    if (skills.missingSkills.length > 0) {

        weaknesses.push(
            `Missing important technical skills such as ${skills.missingSkills
                .slice(0, 5)
                .join(", ")}.`
        );

    }

    if (experience.score < 100) {

        weaknesses.push(
            experience.remark
        );

    }

    if (education.missingEducation.length > 0) {

        weaknesses.push(
            `Educational requirement not detected: ${education.missingEducation.join(", ")}.`
        );

    }

    if (keywords.missingKeywords.length > 0) {

        weaknesses.push(
            "Your resume is missing several important keywords from the job description."
        );

    }
    return {

        overallScore: overall.overallScore,

        skillsScore: overall.skillsScore,

        keywordScore: overall.keywordScore,

        experienceScore: overall.experienceScore,

        educationScore: overall.educationScore,

        matchedSkills: skills.matchedSkills,

        missingSkills: skills.missingSkills,
        strengths,

        weaknesses,

        matchedKeywords: keywords.matchedKeywords,

        missingKeywords: keywords.missingKeywords,

        matchedEducation: education.matchedEducation,

        missingEducation: education.missingEducation,

        totalSkillsRequired: skills.totalRequired,

        matchedSkillsCount: skills.totalMatched,

        totalKeywords: keywords.totalKeywords,

        requiredYears: experience.requiredYears,

        resumeYears: experience.resumeYears,

        suggestions

    };

}