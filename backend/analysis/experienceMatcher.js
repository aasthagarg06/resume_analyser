export function experienceMatcher(resumeText, jobDescription) {

    const resume = resumeText.toLowerCase();
    const jd = jobDescription.toLowerCase();

    // -----------------------------
    // Extract years
    // -----------------------------

    const jdYearsMatch =
        jd.match(/(\d+)\s*\+?\s*(years?|yrs?)/i);

    const resumeYearsMatch =
        resume.match(/(\d+)\s*\+?\s*(years?|yrs?)/i);

    const requiredYears =
        jdYearsMatch ? parseInt(jdYearsMatch[1]) : 0;

    const resumeYears =
        resumeYearsMatch ? parseInt(resumeYearsMatch[1]) : 0;

    // -----------------------------
    // Detect job type
    // -----------------------------

    const internshipJD =
        jd.includes("intern") ||
        jd.includes("internship");

    const fresherJD =
        jd.includes("fresher") ||
        jd.includes("entry level") ||
        jd.includes("graduate") ||
        jd.includes("new grad");

    // -----------------------------
    // Detect resume experience
    // -----------------------------

    const internship =
        resume.includes("intern") ||
        resume.includes("internship");

    const project =
        resume.includes("project");

    const research =
        resume.includes("research");

    const freelance =
        resume.includes("freelance");

    const openSource =
        resume.includes("open source") ||
        resume.includes("opensource");

    const hackathon =
        resume.includes("hackathon");

    const practicalExperience =
        internship ||
        project ||
        research ||
        freelance ||
        openSource ||
        hackathon;

    let score = 0;
    let remark = "";

    // =====================================================
    // Internship / Fresher Roles
    // =====================================================

    if (internshipJD || fresherJD || requiredYears === 0) {

        if (internship && project) {

            score = 100;
            remark =
                "Excellent practical experience for an internship role.";

        }

        else if (internship) {

            score = 90;
            remark =
                "Internship experience matches the role well.";

        }

        else if (project) {

            score = 80;
            remark =
                "Good project experience for a fresher role.";

        }

        else if (practicalExperience) {

            score = 70;
            remark =
                "Relevant practical experience detected.";

        }

        else {

            score = 40;
            remark =
                "Add projects or internships to strengthen your resume.";

        }

    }

    // =====================================================
    // Experienced Roles
    // =====================================================

    else {

        if (resumeYears >= requiredYears) {

            score = 100;

            remark =
                "Professional experience fully satisfies the requirement.";

        }

        else if (resumeYears > 0) {

            score = Math.max(
                20,
                Math.round(
                    (resumeYears / requiredYears) * 100
                )
            );

            remark =
                "Professional experience is below the required level.";

        }

        else if (practicalExperience) {

            // Candidate has projects but no professional experience.

            if (requiredYears === 1)
                score = 70;

            else if (requiredYears === 2)
                score = 50;

            else if (requiredYears === 3)
                score = 35;

            else if (requiredYears === 4)
                score = 20;

            else
                score = 10;

            remark =
                "Projects and internships are valuable, but professional experience required by the job is missing.";

        }

        else {

            score = 0;

            remark =
                "No relevant professional experience found.";

        }

    }

    return {

        score,

        requiredYears,

        resumeYears,

        remark

    };

}