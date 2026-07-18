import { parsePDF } from "../utils/pdfParser.js";

import buildResume from "../core/resumeBuilder.js";

import { formattingAnalyzer } from "../analysis/formattingAnalyzer.js";

import { keywordMatcher } from "../matching/keywordMatcher.js";

import { skillMatcher } from "../matching/skillMatcher.js";

import { calculateScore } from "../analysis/scoreCalculator.js";

import { analyzeWithGemini } from "./geminiService.js";

import { generateReport } from "../reporting/reportGenerator.js";

export async function analyzeResumeService(file,jobDescription){

    const resumeText=await parsePDF(file.buffer);

    const resume=buildResume(resumeText);

    const formatting=formattingAnalyzer(resume);

    const keywords=keywordMatcher(

        resume,

        jobDescription

    );

    const skills=skillMatcher(

        resume,

        jobDescription

    );

    const sections={

        score:resume.sections?100:0

    };

    const experience={

        score:resume.sections?.experience?100:50

    };

    const projects={

        score:resume.sections?.projects?100:50

    };

    const overallScore=calculateScore({

        formatting,

        keywords,

        skills,

        sections,

        experience,

        projects

    });

    const gemini=JSON.parse(

        (

            await analyzeWithGemini(

                resumeText,

                jobDescription

            )

        ).trim()

    );

    return generateReport({

        overallScore,

        formatting,

        keywords,

        skills,

        sections,

        experience,

        projects,

        readability:gemini.readability,

        grammar:gemini.grammar,

        gemini,

        fileName:file.originalname

    });

}