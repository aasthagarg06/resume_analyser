/**
 * Converts normalized text into an array of unique tokens.
 * Example:
 * "react nodejs mongodb react"
 * ↓
 * ["react", "nodejs", "mongodb"]
 */

export function tokenize(text = "") {

    if (!text) {
        return {
            words: [],
            uniqueWords: [],
            lines: [],
            sentences: [],
            wordCount: 0
        };
    }

    const lines = text
        .split("\n")
        .map(line => line.trim())
        .filter(Boolean);

    const words = text
        .split(/\s+/)
        .filter(Boolean);

    const uniqueWords = [...new Set(words)];

    const sentences =
        text.match(/[^.!?]+[.!?]*/g)?.map(sentence => sentence.trim()) || [];

    return {
        words,
        uniqueWords,
        lines,
        sentences,
        wordCount: words.length
    };
}