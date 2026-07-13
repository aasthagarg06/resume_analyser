export function normalizeText(text = "") {

    if (!text) return "";

    let normalized = text;

    // Unicode normalization
    normalized = normalized.normalize("NFKC");

    // Lowercase
    normalized = normalized.toLowerCase();

    // Preserve C++ and C#
    normalized = normalized
        .replace(/c\+\+/g, "__cplusplus__")
        .replace(/c#/g, "__csharp__");

    // Remove punctuation
    normalized = normalized.replace(/[^\w\s]/g, " ");

    // Restore C++ and C#
    normalized = normalized
        .replace(/__cplusplus__/g, "c++")
        .replace(/__csharp__/g, "c#");

    // Clean spaces while preserving new lines
    normalized = normalized
        .replace(/[ \t]+/g, " ")
        .replace(/ *\n */g, "\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

    return normalized;
}