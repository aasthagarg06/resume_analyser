import sectionAliases from "../data/sections.json" with { type: "json" };

export default function detectSections(text) {
    const sections = {};

    for (const key of Object.keys(sectionAliases)) {
        sections[key] = "";
    }

    const lines = text
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean);

    let currentSection = null;

    for (const line of lines) {

        const cleanedLine = line
            .toLowerCase()
            .replace(/[:\-]/g, "")
            .trim();

        let detectedSection = null;

        for (const [section, aliases] of Object.entries(sectionAliases)) {

            if (aliases.some(alias => alias.toLowerCase() === cleanedLine)) {
                detectedSection = section;
                break;
            }

        }

        if (detectedSection) {
            currentSection = detectedSection;
            continue;
        }

        if (currentSection) {
            sections[currentSection] += line + "\n";
        }
    }

    return sections;
}