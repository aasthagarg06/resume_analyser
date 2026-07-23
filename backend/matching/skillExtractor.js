import { skillsDatabase } from "../constants/skills.js";

function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function skillExtractor(resumeText) {

    const text = resumeText.toLowerCase();

    const matchedSkills = new Set();

    skillsDatabase.forEach(skill => {

        const escapedSkill = escapeRegex(skill.toLowerCase());

        let regex;

        // Multi-word skills
        if (escapedSkill.includes(" ")) {

            regex = new RegExp(escapedSkill, "i");

        }

        // Skills with special characters
        else if (
            escapedSkill.includes("+") ||
            escapedSkill.includes("#") ||
            escapedSkill.includes(".")
        ) {

            regex = new RegExp(escapedSkill, "i");

        }

        // Normal words
        else {

            regex = new RegExp(`\\b${escapedSkill}\\b`, "i");

        }

        if (regex.test(text)) {

            matchedSkills.add(skill);

        }

    });

    const uniqueSkills = [...matchedSkills].sort((a, b) =>
        a.localeCompare(b)
    );

    const total = uniqueSkills.length;

    let score = 0;

    if (total <= 4)
        score = 20;

    else if (total <= 8)
        score = 40;

    else if (total <= 12)
        score = 55;

    else if (total <= 16)
        score = 70;

    else if (total <= 20)
        score = 80;

    else if (total <= 25)
        score = 88;

    else if (total <= 30)
        score = 92;

    else
        score = 95;

    return {

        score,

        matchedSkills: uniqueSkills,

        totalSkills: total

    };

}