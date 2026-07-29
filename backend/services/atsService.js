import { parsePDF } from "../Utils/pdfParser.js";
import buildResume from "../core/resumeBuilder.js";

import { formattingAnalyzer } from "../analysis/formattingAnalyzer.js";
import { contactAnalyzer } from "../analysis/contactAnalyzer.js";
import { sectionAnalyzer } from "../analysis/sectionAnalyzer.js";
import { dateAnalyzer } from "../analysis/dateAnalyzer.js";
import { calculateScore } from "../analysis/scoreCalculator.js";

import { skillExtractor } from "../matching/skillExtractor.js";
import { experienceAnalyzer } from "../analysis/experienceAnalyzer.js";

import { projectAnalyzer } from "../analysis/projectAnalyzer.js";
import { analyzeATS } from "./geminiService.js";

import { generateReport } from "../reporting/reportGenerator.js";

export async function analyzeResumeService(file) {

    // Extract Resume Text
    const parsed = await parsePDF(file.buffer);

    const resumeText = parsed.text;

    const links = parsed.links;

    // Build Resume Object
    const resume = buildResume(resumeText);

    // Rule-Based Analysis
    const formatting = formattingAnalyzer(resume);

    const contact = contactAnalyzer(resumeText, links);

    const sections = sectionAnalyzer(resumeText);

    const skills = skillExtractor(resumeText);

    const dates = dateAnalyzer(resumeText);

    const experience = experienceAnalyzer(resumeText);

    const projects = projectAnalyzer(resumeText);

    // Calculate ATS Score
    const overallScore = calculateScore({

        formatting,

        contact,

        sections,

        skills,

        dates,

        experience,

        projects

    });

    console.log("========== ATS ANALYSIS ==========");
    console.log({
        formatting,
        contact,
        sections,
        skills,
        dates,
        experience,
        projects,
        overallScore
    });

    // Gemini AI Analysis
    const raw = await analyzeATS({

        resumeText,

        overallScore,

        formatting,

        contact,

        sections,

        skills,

        dates,

        experience,

        projects

    });

    let gemini;

    try {

        const cleaned = raw
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        gemini = JSON.parse(cleaned);

    } catch (err) {

        console.error("Gemini Parse Error");
        console.error(raw);

        throw new Error("Gemini returned invalid JSON.");

    }

    return generateReport({

        overallScore,

        formatting,

        contact,

        sections,

        skills,

        dates,

        experience,

        projects,

        strengths: gemini.strengths || [],

        weaknesses: gemini.weaknesses || [],

        suggestions: gemini.suggestions || [],

        summary: gemini.summary || "",

        readability: gemini.readability || { score: 0 },

        grammar: gemini.grammar || { score: 0 },

        fileName: file.originalname

    });

}