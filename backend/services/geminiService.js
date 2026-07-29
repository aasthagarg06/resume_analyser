import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();
console.log("Has GEMINI_API_KEY:", !!process.env.GEMINI_API_KEY);
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
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

  projects

}) {

  const prompt = `

You are an expert ATS Resume Reviewer.

IMPORTANT RULES

You are NOT allowed to calculate the ATS score.

The ATS score has already been calculated by the system.

DO NOT change it.

DO NOT recalculate it.

DO NOT invent missing skills.

DO NOT invent future dates.

DO NOT claim contact information is missing if the analysis says it exists.

Use ONLY the structured analysis below.

--------------------------------------------------

ATS SCORE

${overallScore}

--------------------------------------------------

FORMATTING

${JSON.stringify(formatting, null, 2)}

--------------------------------------------------

CONTACT INFORMATION

${JSON.stringify(contact, null, 2)}

--------------------------------------------------

SECTIONS

${JSON.stringify(sections, null, 2)}

--------------------------------------------------

SKILLS

${JSON.stringify(skills, null, 2)}

--------------------------------------------------

DATE ANALYSIS

${JSON.stringify(dates, null, 2)}

--------------------------------------------------

EXPERIENCE

${JSON.stringify(experience, null, 2)}

--------------------------------------------------

PROJECTS

${JSON.stringify(projects, null, 2)}

--------------------------------------------------

RESUME

${resumeText}

--------------------------------------------------

TASK

Using ONLY the information above,

generate

1. Strengths

2. Weaknesses

3. Suggestions

4. Professional Summary

Rules

• Do not invent facts.

• Do not mention missing GitHub if GitHub exists.

• Do not mention future dates unless date analysis reports them.

• Do not mention placeholder information.

• Keep suggestions practical.

• Keep strengths resume-specific.

• Keep weaknesses genuine.

Return ONLY JSON.

{

"strengths":[
"..."
],

"weaknesses":[
"..."
],

"suggestions":[
"..."
],

"summary":""

}

`;

  const response = await ai.models.generateContent({

    model: "gemini-2.5-flash-lite",

    contents: prompt

  });

  return response.text;

}