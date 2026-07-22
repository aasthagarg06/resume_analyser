export function educationMatcher(resumeText, jobDescription) {

    const resume = resumeText.toLowerCase();

    const jd = jobDescription.toLowerCase();

    const degrees = [

        "b.tech",
        "btech",
        "be",
        "b.e",
        "bachelor",
        "computer science",
        "information technology",
        "software engineering",
        "electronics",
        "electrical",
        "mechanical",
        "civil",
        "m.tech",
        "mtech",
        "mca",
        "msc",
        "bsc",
        "artificial intelligence",
        "machine learning",
        "data science"

    ];

    const matched = [];
    const missing = [];

    degrees.forEach(degree => {

        const jdRequires = jd.includes(degree);

        const resumeHas = resume.includes(degree);

        if (jdRequires && resumeHas) {

            matched.push(degree);

        }

        else if (jdRequires) {

            missing.push(degree);

        }

    });

    let score;

    if (matched.length + missing.length === 0) {

        score = 100;

    }

    else {

        score = Math.round(

            (matched.length / (matched.length + missing.length)) * 100

        );

    }

    return {

        score,

        matchedEducation: matched,

        missingEducation: missing,

        totalRequired: matched.length + missing.length

    };

}