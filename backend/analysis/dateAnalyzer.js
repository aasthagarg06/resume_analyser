import * as chrono from "chrono-node";

export function dateAnalyzer(resumeText) {

    const currentYear = new Date().getFullYear();

    const parsedDates = chrono.parse(resumeText);

    const futureDates = [];

    const validDates = [];

    parsedDates.forEach(result => {

        if (!result.start) return;

        const date = result.start.date();

        const year = date.getFullYear();

        if (year > currentYear + 1) {

            futureDates.push({
                text: result.text,
                year
            });

        } else {

            validDates.push({
                text: result.text,
                year
            });

        }

    });

    // Find year ranges like 2024 - 2028
    const yearRanges = resumeText.match(/\b(19|20)\d{2}\s*[-–]\s*(19|20)\d{2}\b/g) || [];

    const invalidRanges = [];

    yearRanges.forEach(range => {

        const years = range.match(/\d{4}/g);

        if (!years) return;

        const start = parseInt(years[0]);
        const end = parseInt(years[1]);

        if (start > end) {

            invalidRanges.push(range);

        }

    });

    return {

        score:
            futureDates.length === 0 &&
                invalidRanges.length === 0
                ? 100
                : 70,

        valid: futureDates.length === 0 &&
            invalidRanges.length === 0,

        futureDates,

        invalidRanges,

        suggestions: [

            ...(futureDates.length
                ? ["Verify future dates in education or experience."]
                : []),

            ...(invalidRanges.length
                ? ["Correct invalid date ranges."]
                : [])

        ]

    };

}