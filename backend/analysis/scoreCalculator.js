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

    formatting.score * 0.10 +

    contact.score * 0.05 +

    sections.score * 0.08 +

    skills.score * 0.30 +

    dates.score * 0.02 +

    experience.score * 0.20 +

    projects.score * 0.25;

  return Math.round(
    Math.max(0, Math.min(score, 100)))

}