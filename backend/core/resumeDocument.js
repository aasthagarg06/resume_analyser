export function createResumeDocument(rawText = "") {

    return {

        // Original resume text from PDF parser
        rawText,

        // Cleaned version of the resume
        normalizedText: "",

        // Individual lines
        lines: [],

        // Paragraphs
        paragraphs: [],

        // Resume metadata
        metadata: {

            wordCount: 0,

            characterCount: 0,

            lineCount: 0,

            paragraphCount: 0

        },

        // Resume Sections
        sections: {

            summary: [],

            skills: [],

            experience: [],

            projects: [],

            education: [],

            certifications: [],

            achievements: [],

            others: []

        },

        // Information extracted from resume
        extracted: {

            skills: [],

            projects: [],

            experience: [],

            education: [],

            certifications: [],

            keywords: []

        },

        // Analysis Results
        analysis: {

            skillMatch: {},

            keywordMatch: {},

            formatting: {},

            readability: {},

            experience: {},

            projects: {},

            score: {}

        },

        // Final response
        report: {}

    };

}