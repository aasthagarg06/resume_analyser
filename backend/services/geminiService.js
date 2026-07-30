import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();
console.log("Groq key loaded:", !!process.env.GROQ_API_KEY);
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function analyzeATS({
  resumeText,
  overallScore,
  formatting,
  contact,
  sections,
  skills,
  dates,
  experience,
  projects,
}) {
  console.log("USING GROQ SERVICE");
  const prompt = `
You are an experienced ATS Resume Reviewer.

The ATS score has ALREADY been calculated.
Never recalculate or modify it.

Your job is ONLY to generate human-readable feedback based on the structured analysis.

========================
ATS SCORE
========================
${overallScore}

========================
ANALYSIS
========================

Formatting:
${JSON.stringify(formatting)}

Contact:
${JSON.stringify(contact)}

Sections:
${JSON.stringify(sections)}

Skills:
${JSON.stringify(skills)}

Dates:
${JSON.stringify(dates)}

Experience:
${JSON.stringify(experience)}

Projects:
${JSON.stringify(projects)}

========================
Resume (Context Only)
========================

${resumeText}

========================
Instructions
========================

Generate:

1. 4-6 personalized strengths
2. 3-5 realistic weaknesses
3. 5 actionable suggestions
4. One professional summary (80-120 words)

Rules:

- Never invent skills.
- Never invent experience.
- Never invent projects.
- Never change the ATS score.
- Never recommend something already present.
- Mention missing skills only if they actually appear in missingSkills.
- Suggestions must be specific to THIS resume.
- Avoid generic advice like "improve your resume".
- Sound like a professional recruiter.

Return ONLY valid JSON.

{
  "strengths": [],
  "weaknesses": [],
  "suggestions": [],
  "summary": ""
}
`;

  const completion = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",

    temperature: 0.2,

    response_format: {
      type: "json_object",
    },

    messages: [
      {
        role: "system",
        content:
          "You are a senior ATS recruiter. Return valid JSON only.",
      },
      {
        role: "user",
        content: prompt,
      },
    ],
  });
  console.log("========== GROQ RESPONSE ==========");
  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content;
}