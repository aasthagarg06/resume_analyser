import { skillsDatabase, skillAliases } from "../constants/skills.js";

function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function skillExtractor(resumeText) {

    const text = resumeText.toLowerCase();

    const matchedSkills = new Set();

    // Match canonical skills first
    skillsDatabase.forEach(skill => {

        const escaped = escapeRegex(skill.toLowerCase());

        let regex;

        if (
            escaped.includes(" ") ||
            escaped.includes("+") ||
            escaped.includes("#") ||
            escaped.includes(".")
        ) {
            regex = new RegExp(escaped, "i");
        } else {
            regex = new RegExp(`\\b${escaped}\\b`, "i");
        }

        if (regex.test(text)) {
            matchedSkills.add(skill);
        }

    });

    // Match aliases and map them to the canonical skill
    Object.entries(skillAliases).forEach(([canonical, aliases]) => {

        aliases.forEach(alias => {

            const escaped = escapeRegex(alias.toLowerCase());

            let regex;

            if (
                escaped.includes(" ") ||
                escaped.includes("+") ||
                escaped.includes("#") ||
                escaped.includes(".")
            ) {
                regex = new RegExp(escaped, "i");
            } else {
                regex = new RegExp(`\\b${escaped}\\b`, "i");
            }

            if (regex.test(text)) {
                matchedSkills.add(canonical);
            }

        });

    });

    const uniqueSkills = [...matchedSkills].sort((a, b) =>
        a.localeCompare(b)
    );

    const total = uniqueSkills.length;

    // -----------------------------
    // More realistic scoring
    // -----------------------------

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