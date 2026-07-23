export function experienceMatcher(resumeText, jobDescription) {

    const resume = resumeText.toLowerCase();

    const jd = jobDescription.toLowerCase();

    // Find years mentioned in JD
    const jdYearsMatch =
        jd.match(/(\d+)\s*\+?\s*(years?|yrs?)/i);

    // Find years mentioned in Resume
    const resumeYearsMatch =
        resume.match(/(\d+)\s*\+?\s*(years?|yrs?)/i);

    let requiredYears = 0;
    let resumeYears = 0;

    if (jdYearsMatch) {

        requiredYears = parseInt(jdYearsMatch[1]);

    }

    if (resumeYearsMatch) {

        resumeYears = parseInt(resumeYearsMatch[1]);

    }

    // Fresher / Internship detection
    const fresherJD =
        jd.includes("fresher") ||
        jd.includes("entry level") ||
        jd.includes("intern");

    const fresherResume =
        resume.includes("fresher") ||
        resume.includes("internship") ||
        resume.includes("intern");

    let score = 100;

    let remark = "Experience requirement satisfied.";

    if (requiredYears > 0) {

        if (resumeYears >= requiredYears) {

            score = 100;

            remark = "Required experience matched.";

        }

        else if (resumeYears > 0) {

            score = Math.round(
                (resumeYears / requiredYears) * 100
            );

            remark =
                "Resume has less experience than required.";

        }

        else {

            score = 30;

            remark =
                "No experience found in resume.";

        }

    }

    else if (fresherJD) {

        if (fresherResume) {

            score = 100;

            remark =
                "Suitable for fresher role.";

        }

        else {

            score = 90;

            remark =
                "No internship/fresher information detected.";

        }

    }

    return {

        score,

        requiredYears,

        resumeYears,

        remark

    };

}