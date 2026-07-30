import { parsePDF } from "../utils/pdfParser.js";
import buildResume from "../core/resumeBuilder.js";

import { jdSkillMatcher } from "../matching/jdSkillMatcher.js";
import { keywordMatcher } from "../matching/keywordMatcher.js";

import { experienceMatcher } from "../analysis/experienceMatcher.js";
import { educationMatcher } from "../analysis/educationMatcher.js";

import { overallMatcher } from "../matching/overallMatcher.js";

import { analyzeJD } from "./jdAIService.js";

import { jdReportGenerator } from "../reporting/jdReportGenerator.js";

export async function jdService(file, jobDescription) {

    if (!file) {
        throw new Error("Resume is required.");
    }

    if (!jobDescription || jobDescription.trim() === "") {
        throw new Error("Job Description is required.");
    }

    // -----------------------------
    // Parse Resume
    // -----------------------------
    const parsedResume = await parsePDF(file.buffer);

    const resumeText = parsedResume.text;

    const resume = buildResume(resumeText);

    // -----------------------------
    // Rule-Based Matching
    // -----------------------------
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

    // -----------------------------
    // Overall Match Score
    // -----------------------------
    const overall = overallMatcher({

        skills,

        keywords,

        experience,

        education

    });

    console.log("========== JD MATCH ==========");
    console.log({
        overall,
        skills,
        keywords,
        experience,
        education
    });

    // -----------------------------
    // AI Analysis (Groq)
    // -----------------------------
    const raw = await analyzeJD({

        resumeText,

        jobDescription,

        overall,

        skills,

        keywords,

        experience,

        education

    });

    console.log("========== GROQ JD RESPONSE ==========");
    console.log(raw);

    let ai;

    try {

        ai = JSON.parse(raw);

        console.log("========== PARSED JD AI ==========");
        console.log(ai);

    } catch (err) {

        console.error("JD AI Parse Error");
        console.error(raw);

        throw new Error("JD AI returned invalid JSON.");

    }

    // -----------------------------
    // Final Report
    // -----------------------------
    return jdReportGenerator({

        overall,

        skills,

        keywords,

        experience,

        education,

        summary: ai.summary || "",

        aiStrengths: ai.strengths || [],

        aiWeaknesses: ai.weaknesses || [],

        aiSuggestions: ai.suggestions || []

    });

}