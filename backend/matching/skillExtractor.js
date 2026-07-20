import { skillsDatabase } from "../constants/skills.js";

function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function skillExtractor(resumeText) {

    const text = resumeText.toLowerCase();

    const matchedSkills = new Set();

    skillsDatabase.forEach(skill => {

        const escapedSkill = escapeRegex(skill.toLowerCase());

        // Multi-word skills
        if (escapedSkill.includes(" ")) {

            const regex = new RegExp(escapedSkill, "i");

            if (regex.test(text)) {

                matchedSkills.add(skill);

            }

        }

        // Skills containing special characters like C++, C#, Node.js
        else if (
            escapedSkill.includes("+") ||
            escapedSkill.includes("#") ||
            escapedSkill.includes(".")
        ) {

            const regex = new RegExp(escapedSkill, "i");

            if (regex.test(text)) {

                matchedSkills.add(skill);

            }

        }

        // Normal words
        else {

            const regex = new RegExp(`\\b${escapedSkill}\\b`, "i");

            if (regex.test(text)) {

                matchedSkills.add(skill);

            }

        }

    });

    const uniqueSkills = [...matchedSkills];

    uniqueSkills.sort((a, b) => a.localeCompare(b));

    const score = Math.min(
        Math.round((uniqueSkills.length / 25) * 100),
        100
    );

    return {

        score,

        matchedSkills: uniqueSkills,

        totalSkills: uniqueSkills.length

    };

}