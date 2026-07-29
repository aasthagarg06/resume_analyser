import { parsePDF } from "../utils/pdfParser.js";
import buildResume from "../core/resumeBuilder.js";

import { jdSkillMatcher } from "../matching/jdSkillMatcher.js";
import { keywordMatcher } from "../matching/keywordMatcher.js";

import { experienceMatcher } from "../analysis/experienceMatcher.js";
import { educationMatcher } from "../analysis/educationMatcher.js";

import { overallMatcher } from "../matching/overallMatcher.js";

import { jdReportGenerator } from "../reporting/jdReportGenerator.js";

export async function jdService(file, jobDescription) {

    if (!file) {
        throw new Error("Resume is required.");
    }

    if (!jobDescription || jobDescription.trim() === "") {
        throw new Error("Job Description is required.");
    }

    const parsedResume = await parsePDF(file.buffer);

    const resume = buildResume(parsedResume.text);

    // Matchers
    const skills = jdSkillMatcher(
        resume.normalizedText,
        jobDescription
    );

    const keywords = keywordMatcher(
        resume.normalizedText,
        jobDescription
    );

    const experience = experienceMatcher(
        resume.normalizedText,
        jobDescription
    );

    const education = educationMatcher(
        resume.normalizedText,
        jobDescription
    );

    // Overall Score
    const overall = overallMatcher({

        skills,

        keywords,

        experience,

        education

    });
    console.log(parsedResume.text);
    // Final Report
    return jdReportGenerator({

        overall,

        skills,

        keywords,

        experience,

        education

    });

}