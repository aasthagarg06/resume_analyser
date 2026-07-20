export function keywordMatcher(resume, jobDescription) {
  const stopWords = new Set([
    "the", "and", "for", "with", "you", "your",
    "this", "that", "from", "have", "will",
    "are", "our", "job", "role", "candidate",
    "experience", "required", "preferred"
  ]);

  const normalize = (text = "") =>
    text
      .toLowerCase()
      .replace(/[^\w\s]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 2 && !stopWords.has(word));

  const resumeWords = new Set(normalize(resume.normalizedText));

  const jdWords = normalize(jobDescription);

  if (jdWords.length === 0) {
    return {
      score: 100,
      matched: [],
      missing: [],
      totalKeywords: 0,
      note: "No job description provided."
    };
  }

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

  const score = Math.round((matched.length / uniqueKeywords.length) * 100);

  return {
    score,
    matched,
    missing,
    totalKeywords: uniqueKeywords.length
  };
}