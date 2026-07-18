export function formattingAnalyzer(resume) {
  const result = {
    score: 100,

    checks: {
      email: false,
      phone: false,
      linkedin: false,
      github: false,
      portfolio: false,
      headings: false,
      bulletPoints: false,
      atsFriendly: true,
    },

    deductions: [],
  };

  const text = resume.rawText || "";

  // -----------------------
  // Email
  // -----------------------
  const emailRegex =
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i;

  if (emailRegex.test(text)) {
    result.checks.email = true;
  } else {
    result.score -= 10;
    result.deductions.push("Email address is missing.");
  }

  // -----------------------
  // Phone
  // -----------------------
  const phoneRegex =
    /(\+?\d[\d\s()-]{8,})/;

  if (phoneRegex.test(text)) {
    result.checks.phone = true;
  } else {
    result.score -= 10;
    result.deductions.push("Phone number is missing.");
  }

  // -----------------------
  // LinkedIn
  // -----------------------
  if (/linkedin\.com/i.test(text)) {
    result.checks.linkedin = true;
  } else {
    result.score -= 5;
    result.deductions.push("LinkedIn profile is missing.");
  }

  // -----------------------
  // GitHub
  // -----------------------
  if (/github\.com/i.test(text)) {
    result.checks.github = true;
  } else {
    result.score -= 5;
    result.deductions.push("GitHub profile is missing.");
  }

  // -----------------------
  // Portfolio (optional)
  // -----------------------
  if (
    /https?:\/\/(?!.*linkedin)(?!.*github).+/i.test(text)
  ) {
    result.checks.portfolio = true;
  }

  // -----------------------
  // Headings
  // -----------------------
  if (
    resume.sections.education &&
    resume.sections.projects &&
    resume.sections.skills
  ) {
    result.checks.headings = true;
  } else {
    result.score -= 10;
    result.deductions.push("Important resume sections are missing.");
  }

  // -----------------------
  // Bullet Points
  // -----------------------
  if (/•|-|\*/.test(text)) {
    result.checks.bulletPoints = true;
  } else {
    result.score -= 5;
    result.deductions.push("Bullet points not found.");
  }

  // -----------------------
  // ATS Friendly
  // -----------------------
  const forbiddenPatterns = [
    /table/i,
    /image/i,
  ];

  for (const pattern of forbiddenPatterns) {
    if (pattern.test(text)) {
      result.checks.atsFriendly = false;
      result.score -= 10;
      result.deductions.push(
        "Possible ATS-unfriendly formatting detected."
      );
      break;
    }
  }

  result.score = Math.max(result.score, 0);

  return result;
}