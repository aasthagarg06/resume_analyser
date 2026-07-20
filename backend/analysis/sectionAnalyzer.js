export function sectionAnalyzer(resumeText) {

    const sections = {

        contact: /(email|phone|mobile|contact)/i.test(resumeText),


        education: /education/i.test(resumeText),

        experience: /(experience|internship|work experience)/i.test(resumeText),

        projects: /projects?/i.test(resumeText),

        skills: /skills?/i.test(resumeText),

        certifications: /certification|certifications/i.test(resumeText),

        achievements: /(achievement|achievements|awards)/i.test(resumeText),

        languages: /(languages|language)/i.test(resumeText)

    };

    const found = [];
    const missing = [];

    Object.entries(sections).forEach(([key, value]) => {

        if (value)
            found.push(key);

        else
            missing.push(key);

    });

    const score = Math.round((found.length / Object.keys(sections).length) * 100);

    return {

        score,

        found,

        missing,

        checks: sections

    };

}