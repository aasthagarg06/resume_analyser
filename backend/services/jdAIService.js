import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

export async function analyzeJD({

    overall,
    skills,
    keywords,
    experience,
    education,
    resumeText,
    jobDescription

}) {

    const prompt = `

You are an experienced Technical Recruiter and ATS Specialist.

Your job is NOT to re-parse the resume.

Instead, explain the results produced by the rule-based ATS engine.

Use ONLY the information provided below.

========================
MATCH RESULTS
========================

Overall Match Score:
${overall.overallScore}/100

Skills Score:
${overall.skillsScore}/100

Keyword Score:
${overall.keywordScore}/100

Experience Score:
${overall.experienceScore}/100

Education Score:
${overall.educationScore}/100

========================
MATCHED SKILLS
========================

${skills.matchedSkills.length
            ? skills.matchedSkills.join(", ")
            : "None"}

========================
MISSING SKILLS
========================

${skills.missingSkills.length
            ? skills.missingSkills.join(", ")
            : "None"}

========================
MATCHED KEYWORDS
========================

${keywords.matchedKeywords.length
            ? keywords.matchedKeywords.join(", ")
            : "None"}

========================
MISSING KEYWORDS
========================

${keywords.missingKeywords.length
            ? keywords.missingKeywords.join(", ")
            : "None"}

========================
EXPERIENCE
========================

Required Years:
${experience.requiredYears}

Resume Years:
${experience.resumeYears}

Remark:
${experience.remark}

========================
EDUCATION
========================

Matched:
${education.matchedEducation.length
            ? education.matchedEducation.join(", ")
            : "None"}

Missing:
${education.missingEducation.length
            ? education.missingEducation.join(", ")
            : "None"}

========================
JOB DESCRIPTION
========================

${jobDescription}

========================
RESUME
========================

${resumeText}

========================
TASK
========================

Generate:

1. A recruiter-style summary (2-3 sentences).

2. Exactly 4 strengths.

3. Exactly 4 weaknesses.

4. Exactly 6 actionable suggestions.

========================
STRICT RULES
========================

- NEVER invent technologies.

- NEVER invent certifications.

- NEVER invent projects.

- NEVER invent work experience.

- NEVER mention GitHub, LinkedIn, Portfolio, Certifications, Docker, AWS, Kubernetes, etc. unless they are present in the provided analysis.

- Use ONLY matched skills and missing skills.

- Suggestions must improve the candidate's match for THIS job.

- Do not repeat the same suggestion.

- Be professional.

- Return ONLY valid JSON.

Return exactly:

{
  "summary":"",
  "strengths":[],
  "weaknesses":[],
  "suggestions":[]
}

`;

    const completion = await groq.chat.completions.create({

        model: "llama-3.3-70b-versatile",

        temperature: 0.15,

        response_format: {
            type: "json_object"
        },

        messages: [

            {
                role: "system",
                content:
                    "You are a senior recruiter. Return only valid JSON."
            },

            {
                role: "user",
                content: prompt
            }

        ]

    });

    return completion.choices[0].message.content;

}