import { jdSkillExtractor } from "./jdSkillExtractor.js";

const normalizeSkill = (text = "") =>
    text
        .toLowerCase()

        // Frameworks
        .replace(/react\.js/g, "react")
        .replace(/node\.js/g, "node")
        .replace(/express\.js/g, "express")
        .replace(/vue\.js/g, "vue")

        // HTML/CSS
        .replace(/html5/g, "html")
        .replace(/css3/g, "css")

        // Languages
        .replace(/\bjavascript\b/g, "js")
        .replace(/\btypescript\b/g, "ts")

        // APIs
        .replace(/restful api/g, "api")
        .replace(/rest api/g, "api")
        .replace(/gemini api/g, "api")
        .replace(/openai api/g, "api")
        .replace(/google api/g, "api")
        .replace(/\bapis\b/g, "api")

        // UI Libraries
        .replace(/material ui/g, "mui")
        .replace(/material-ui/g, "mui")
        .replace(/\bmui\b/g, "mui")

        .replace(/tailwindcss/g, "tailwind css")

        .replace(/[^\w\s]/g, "")

        .trim();

export function jdSkillMatcher(resumeText, jobDescription) {

    const resumeSkills = jdSkillExtractor(resumeText);

    const jdSkills = jdSkillExtractor(jobDescription);
    console.log("Resume Skills:", resumeSkills);
    console.log("JD Skills:", jdSkills);
    const resumeSet = new Set(resumeSkills);

    const matchedSkills = [];
    const missingSkills = [];

    jdSkills.forEach(skill => {

        if (resumeSet.has(skill)) {

            matchedSkills.push(skill);

        } else {

            missingSkills.push(skill);

        }

    });
    console.log("Resume Skills:", resumeSkills);
    console.log("JD Skills:", jdSkills);
    const score =
        jdSkills.length === 0
            ? 100
            : Math.round(
                (matchedSkills.length / jdSkills.length) * 100
            );

    return {

        score,

        matchedSkills,

        missingSkills,

        totalRequired: jdSkills.length,

        totalMatched: matchedSkills.length

    };

}