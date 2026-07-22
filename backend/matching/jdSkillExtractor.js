import { skillsDatabase, skillAliases } from "../constants/skills.js";
function escapeRegex(text) {
    return text.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function normalize(text = "") {
    return text
        .toLowerCase()

        .replace(/react\.js/g, "react")
        .replace(/node\.js/g, "node")
        .replace(/express\.js/g, "express")
        .replace(/vue\.js/g, "vue")

        .replace(/html5/g, "html")
        .replace(/css3/g, "css")

        .replace(/tailwindcss/g, "tailwind css")

        .replace(/material-ui/g, "material ui")

        .replace(/restful api/g, "api")
        .replace(/rest api/g, "api")
        .replace(/gemini api/g, "api")
        .replace(/openai api/g, "api")
        .replace(/google api/g, "api")
        .replace(/\bapis\b/g, "api")
        .replace(/([a-z])html/g, "$1 html")
        .replace(/([a-z])css/g, "$1 css")
        .replace(/([a-z])javascript/g, "$1 javascript")
        .replace(/([a-z])typescript/g, "$1 typescript")
        .replace(/([a-z])react/g, "$1 react")
        .replace(/([a-z])firebase/g, "$1 firebase")

        .replace(/problem-solving/g, "problem solving")
        .replace(/problemsolving/g, "problem solving")
        .replace(/problem-solving/g, "problem solving")
        .replace(/problemsolver/g, "problem solving")
        .replace(/problem solving skills/g, "problem solving")
        .replace(/[^\w#+.\s]/g, " ")

        .replace(/\s+/g, " ")

        .trim();
}

export function jdSkillExtractor(text = "") {

    const normalizedText = normalize(text);

    const matchedSkills = new Set();
    console.log("===== JD TEXT =====");
    console.log(normalizedText);
    console.log(normalizedText.includes("problem solving"));
    // Match canonical skills
    skillsDatabase.forEach(skill => {

        const normalizedSkill = normalize(skill);

        if (normalizedSkill.includes(" ")) {

            if (normalizedText.includes(normalizedSkill)) {

                matchedSkills.add(skill);

            }

        } else {

            const escapedSkill = escapeRegex(normalizedSkill);

            let regex;

            if (
                normalizedSkill.includes("+") ||
                normalizedSkill.includes("#") ||
                normalizedSkill.includes(".")
            ) {

                regex = new RegExp(escapedSkill, "i");

            } else {

                regex = new RegExp(`\\b${escapedSkill}\\b`, "i");

            }

            if (regex.test(normalizedText)) {

                matchedSkills.add(skill);

            }

        }


    });

    // Match aliases
    Object.entries(skillAliases).forEach(([canonical, aliases]) => {

        aliases.forEach(alias => {

            const normalizedAlias = normalize(alias);

            if (normalizedAlias.includes(" ")) {

                if (normalizedText.includes(normalizedAlias)) {

                    matchedSkills.add(canonical);

                }

            } else {

                const escapedAlias = escapeRegex(normalizedAlias);

                let regex;

                if (
                    normalizedAlias.includes("+") ||
                    normalizedAlias.includes("#") ||
                    normalizedAlias.includes(".")
                ) {

                    regex = new RegExp(escapedAlias, "i");

                } else {

                    regex = new RegExp(`\\b${escapedAlias}\\b`, "i");

                }

                if (regex.test(normalizedText)) {

                    matchedSkills.add(canonical);

                }

            }

        });

    });

    return [...matchedSkills].sort((a, b) => a.localeCompare(b));

}