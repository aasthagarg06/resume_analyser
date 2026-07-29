import { normalizeText } from "../Utils/normalizeText.js";
import { tokenize } from "../Utils/tokenizer.js";
import detectSections from "./sectionDetector.js";

export default function buildResume(rawText) {
    const normalizedText = normalizeText(rawText);

    const tokens = tokenize(normalizedText);

    const sections = detectSections(normalizedText);

    return {
        rawText,
        normalizedText,
        tokens,
        sections
    };
}