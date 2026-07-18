export function keywordMatcher(resume, jobDescription) {
  const stopWords = new Set([
    "the", "and", "for", "with", "you", "your",
    "this", "that", "from", "have", "will",
    "are", "our", "job", "role", "candidate",
    "experience", "required", "preferred"
  ]);

  const normalize = (text) =>
    text
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 2 && !stopWords.has(word));

  const resumeWords = new Set(normalize(resume.normalizedText));

  const jdWords = normalize(jobDescription);

  const matched = [];
  const missing = [];

  jdWords.forEach((word) => {
    if (resumeWords.has(word)) {
      matched.push(word);
    } else {
      missing.push(word);
    }
  });

  const uniqueKeywords = [...new Set(jdWords)];

  const score =
    uniqueKeywords.length === 0
      ? 0
      : Math.round((matched.length / uniqueKeywords.length) * 100);

  return {
    score,
    matched,
    missing,
    totalKeywords: uniqueKeywords.length
  };
}