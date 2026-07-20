export function generateReport({

  overallScore,

  formatting,

  contact,

  sections,

  skills,

  dates,

  experience,

  projects,

  readability = { score: 0 },

  grammar = { score: 0 },

  strengths = [],

  weaknesses = [],

  suggestions = [],

  summary = "",

  fileName

}) {

  return {

    metadata: {

      generatedAt: new Date(),

      fileName,

      reportVersion: "3.0"

    },

    // Main ATS Score
    overallScore,

    // Individual Scores
    scores: {

      overall: overallScore,

      formatting: formatting?.score ?? 0,

      contact: contact?.score ?? 0,

      sections: sections?.score ?? 0,

      skills: skills?.score ?? 0,

      dates: dates?.score ?? 0,

      experience: experience?.score ?? 0,

      projects: projects?.score ?? 0,

      readability: readability?.score ?? 0,

      grammar: grammar?.score ?? 0

    },

    // Analysis Objects

    formatting,

    contact,

    sections,

    skills,

    dates,

    experience,

    projects,

    readability,

    grammar,

    // AI Insights

    strengths,

    weaknesses,

    suggestions,

    summary,

    // Extra Stats

    detectedSkills:

      skills?.matchedSkills?.length ?? 0,

    foundSections:

      sections?.found ?? [],

    missingSections:

      sections?.missing ?? [],

    contactInformation: {

      email: contact?.email,

      phone: contact?.phone,

      linkedin: contact?.linkedin,

      github: contact?.github,

      portfolio: contact?.portfolio

    },

    dateValidation: {

      valid: dates?.valid,

      futureDates: dates?.futureDates ?? [],

      invalidRanges: dates?.invalidRanges ?? []

    }

  };

}