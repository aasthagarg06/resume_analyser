import skills from "../data/skills.json" with { type: "json" };

const aliasMap = new Map();

// Build alias map once when server starts
for (const [canonicalName, skill] of Object.entries(skills)) {

    // Canonical name itself
    aliasMap.set(canonicalName.toLowerCase(), canonicalName);

    // Every alias
    for (const alias of skill.aliases) {
        aliasMap.set(alias.toLowerCase(), canonicalName);
    }
}

export function resolveAlias(word) {

    if (!word) return null;

    return aliasMap.get(word.toLowerCase()) || null;

}