export function contactAnalyzer(resumeText, links = []) {

    const emailRegex =
        /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/i;

    const phoneRegex =
        /(?:\+91[\s-]?)?[6-9]\d{4}[\s-]?\d{5}/;

    const linkedinRegex =
        /(https?:\/\/)?(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+\/?/i;

    const githubRegex =
        /(https?:\/\/)?(www\.)?github\.com\/[A-Za-z0-9_-]+\/?/i;

    const email = resumeText.match(emailRegex);
    const phone = resumeText.match(phoneRegex);

    // CHANGE const -> let
    let linkedin = resumeText.match(linkedinRegex);
    let github = resumeText.match(githubRegex);

    // If regex didn't find them in the text,
    // search the extracted hyperlinks
    if (!linkedin) {

        const found = links.find(link =>
            link.toLowerCase().includes("linkedin.com")
        );

        if (found) {
            linkedin = [found];
        }

    }

    if (!github) {

        const found = links.find(link =>
            link.toLowerCase().includes("github.com")
        );

        if (found) {
            github = [found];
        }

    }

    let score = 0;

    if (email) score += 35;
    if (phone) score += 25;
    if (linkedin) score += 20;
    if (github) score += 20;

    const suggestions = [];

    if (!email)
        suggestions.push("Add a professional email address.");

    if (!phone)
        suggestions.push("Add a phone number.");

    if (!linkedin)
        suggestions.push("Include your LinkedIn profile.");

    if (!github)
        suggestions.push("Include your GitHub profile.");

    return {

        score,

        email: email?.[0] ?? null,

        phone: phone?.[0] ?? null,

        linkedin: linkedin?.[0] ?? null,

        github: github?.[0] ?? null,

        suggestions

    };

}