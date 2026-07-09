import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function analyzeWithGemini(resumeText, jobDescription) {
  const prompt = `
You are an ATS Resume Analyzer.

Analyze the resume against the job description.

IMPORTANT RULES:
- Return ONLY ONE valid JSON object.
- Do NOT return markdown.
- Do NOT use \`\`\`.
- Do NOT explain anything.
- Do NOT return multiple JSON objects.

Resume:
${resumeText}

Job Description:
${jobDescription}

Return exactly:

{
  "atsScore": 0,
  "matchedSkills": [],
  "missingSkills": [],
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
  });

  return response.text;
}