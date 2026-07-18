export function calculateScore({
  formatting,
  keywords,
  skills,
  sections,
  experience,
  projects
}) {

  const weights = {
    formatting: 20,
    keywords: 25,
    skills: 20,
    sections: 15,
    experience: 10,
    projects: 10
  };

  const overall = Math.round(
      formatting.score * weights.formatting +
      keywords.score * weights.keywords +
      skills.score * weights.skills +
      sections.score * weights.sections +
      experience.score * weights.experience +
      projects.score * weights.projects
  /100);

  return overall;
}