import sections from "../../data/sections.json" with { type: "json" };

export function extractSections(resume) {

    let currentSection = "others";

    for (const line of resume.lines) {

        let isHeading = false;

        // Check every section
        for (const [sectionName, headings] of Object.entries(sections)) {

            if (headings.includes(line)) {

                currentSection = sectionName;

                isHeading = true;

                break;
            }
        }

        // Don't store headings
        if (isHeading) {
            continue;
        }

        resume.sections[currentSection].push(line);

    }

    return resume;
}