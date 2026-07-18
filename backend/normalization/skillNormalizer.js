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

export function normalizeSkills(skillList) {

  const normalized = [];

  skillList.forEach(skill => {

    let found = false;

    for (const [name, data] of Object.entries(skills)) {

      if (
        data.aliases.some(alias =>
          alias.toLowerCase() === skill.toLowerCase()
        )
      ) {
        normalized.push(name);
        found = true;
        break;
      }

    }

    if (!found) {
      normalized.push(skill);
    }

  });

  return [...new Set(normalized)];

}