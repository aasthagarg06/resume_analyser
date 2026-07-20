export function calculateScore({

  formatting,
  contact,
  sections,
  skills,
  dates,
  experience,
  projects

}) {

  /*
  Weight Distribution

  Formatting        20%
  Contact           10%
  Sections          15%
  Skills            20%
  Dates             10%
  Experience        10%
  Projects          15%

  Total             100%
  */

  const score =

    formatting.score * 0.20 +

    contact.score * 0.10 +

    sections.score * 0.15 +

    skills.score * 0.20 +

    dates.score * 0.10 +

    experience.score * 0.10 +

    projects.score * 0.15;

  return Math.min(100, Math.max(0, Math.round(score)));

}