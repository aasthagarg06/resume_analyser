import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const skills = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../data/skills.json"),
    "utf8"
  )
);

export function skillMatcher(resume, jobDescription) {
  const resumeText = resume.normalizedText.toLowerCase();
  const jdText = jobDescription.toLowerCase();

  const matchedSkills = [];
  const missingSkills = [];

  for (const [skillName, skillData] of Object.entries(skills)) {

    const aliases = skillData.aliases || [];

    const foundInResume = aliases.some(alias =>
      resumeText.includes(alias.toLowerCase())
    );

    const requiredInJD = aliases.some(alias =>
      jdText.includes(alias.toLowerCase())
    );

    if (requiredInJD && foundInResume) {
      matchedSkills.push(skillName);
    }

    if (requiredInJD && !foundInResume) {
      missingSkills.push(skillName);
    }
  }

  const total = matchedSkills.length + missingSkills.length;

  const score =
    total === 0
      ? 100
      : Math.round((matchedSkills.length / total) * 100);

  return {
    score,
    matchedSkills,
    missingSkills
  };
}