import { normalizeText } from "../../utils/normalizeText.js";

export function parseResume(resume) {

    resume.normalizedText = normalizeText(resume.rawText);

    resume.lines = resume.normalizedText
        .split(/\r?\n/)
        .map(line => line.trim())
        .filter(Boolean);

    resume.paragraphs = resume.normalizedText
        .split(/\n\s*\n/)
        .map(p => p.trim())
        .filter(Boolean);

    resume.metadata = {

        wordCount: resume.normalizedText
            .split(/\s+/)
            .filter(Boolean).length,

        characterCount: resume.normalizedText.length,

        lineCount: resume.lines.length,

        paragraphCount: resume.paragraphs.length

    };

    return resume;

}