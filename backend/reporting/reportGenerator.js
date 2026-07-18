export function generateReport({
  overallScore,
  formatting,
  keywords,
  skills,
  sections,
  experience,
  projects,
  readability,
  grammar,
  gemini,
  fileName
}) {
  return {
    metadata: {
      generatedAt: new Date(),
      fileName,
      reportVersion: "1.0"
    },

    scores: {
      overall: overallScore,
      formatting: formatting.score,
      keywords: keywords.score,
      skills: skills.score,
      sections: sections.score,
      experience: experience.score,
      projects: projects.score,
      readability: readability.score,
      grammar: grammar.score
    },

    formatting,

    keywordMatch: keywords,

    skills,

    sections,

    experience,

    projects,

    readability,

    grammar,

    strengths: gemini.strengths || [],

    weaknesses: gemini.weaknesses || [],

    suggestions: gemini.suggestions || [],

    summary: gemini.summary || ""
  };
}