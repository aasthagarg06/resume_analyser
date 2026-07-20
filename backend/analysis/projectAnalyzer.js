const technologies = [

    "react", "node", "express", "mongodb", "firebase",

    "python", "java", "c++", "javascript", "typescript",

    "sql", "aws", "docker", "git", "github", "html", "css"

];

export function projectAnalyzer(resumeText) {

    const text = resumeText.toLowerCase();

    const match = text.match(

        /projects([\s\S]*?)(education|experience|skills|certifications|achievements|extra|$)/i

    );

    if (!match) {

        return {

            score: 0,

            feedback: "No projects found."

        };

    }

    const projects = match[1];

    let score = 0;

    score += 20;

    const bullets = projects.match(/[•*-]/g);

    if (bullets?.length >= 4)

        score += 20;

    else if (bullets?.length >= 2)

        score += 10;

    let techCount = 0;

    technologies.forEach(t => {

        if (projects.includes(t))

            techCount++;

    });

    score += Math.min(20, techCount * 2);

    if (/github|demo|live|check out/i.test(projects))

        score += 15;

    const metrics = projects.match(/\d+%|\d+\+?|\d+x/gi);

    if (metrics?.length)

        score += 15;

    if (projects.length > 300)

        score += 10;

    return {

        score: Math.min(score, 100),

        feedback:

            score >= 80

                ? "Excellent projects."

                : "Projects need stronger descriptions."

    };

}