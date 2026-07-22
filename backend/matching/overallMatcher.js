export function overallMatcher({

    skills,

    keywords,

    experience,

    education

}) {

    const overallScore = Math.round(

        skills.score * 0.45 +

        keywords.score * 0.25 +

        experience.score * 0.20 +

        education.score * 0.10

    );

    return {

        overallScore,

        skillsScore: skills.score,

        keywordScore: keywords.score,

        experienceScore: experience.score,

        educationScore: education.score

    };

}