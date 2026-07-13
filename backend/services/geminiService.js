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
  "overallScore": 0,
  "formatting": {
    "score": 0,
    "feedback": "",
    "checks": {
      "contactInfo": true,
      "email": true,
      "phone": true,
      "linkedin": false,
      "github": false,
      "headings": true,
      "bulletPoints": true,
      "atsFriendly": true,
      "tables": false,
      "images": false
    }
  },
  "keywordMatch": {
    "score": 0,
    "matched": [],
    "missing": []
  },
  "skills": {
    "score": 0,
    "matchedSkills": [],
    "missingSkills": []
  },
  "sections": {
    "score": 0,
    "summary": true,
    "education": true,
    "experience": true,
    "projects": true,
    "skills": true,
    "certifications": false
  },
  "experience": {
    "score": 0,
    "feedback": ""
  },
  "projects": {
    "score": 0,
    "feedback": ""
  },
  "grammar": {
    "score": 0
  },
  "readability": {
    "score": 0
  },
  "strengths": [],
  "weaknesses": [],
  "suggestions": [],
  "summary": ""
}
`;

  const response = await ai.models.generateContent({
  model: "gemini-2.5-flash",
  contents: prompt,
});

  return response.text;
}