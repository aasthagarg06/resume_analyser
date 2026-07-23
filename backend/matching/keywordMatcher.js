export function keywordMatcher(resumeText, jobDescription) {

  const stopWords = new Set([

    "the",
    "and",
    "for",
    "with",
    "you",
    "your",
    "this",
    "that",
    "from",
    "have",
    "will",
    "are",
    "our",
    "job",
    "role",
    "candidate",
    "experience",
    "required",
    "preferred",
    "years",
    "year",
    "work",
    "using",
    "ability",
    "skills"

  ]);

  function normalize(text = "") {

    return text
      .toLowerCase()

      // JS Frameworks
      .replace(/react\.js/g, "react")
      .replace(/node\.js/g, "node")
      .replace(/express\.js/g, "express")
      .replace(/vue\.js/g, "vue")

      // HTML/CSS
      .replace(/html5/g, "html")
      .replace(/css3/g, "css")

      // Languages
      .replace(/\bjavascript\b/g, "js")
      .replace(/\btypescript\b/g, "ts")

      // API variations
      .replace(/restful api/g, "api")
      .replace(/rest api/g, "api")
      .replace(/gemini api/g, "api")
      .replace(/openai api/g, "api")
      .replace(/google api/g, "api")
      .replace(/\bapis\b/g, "api")

      // UI libraries
      .replace(/material-ui/g, "mui")
      .replace(/material ui/g, "mui")
      .replace(/tailwindcss/g, "tailwind css")

      // Remove punctuation
      .replace(/[^\w\s]/g, " ")

      // Tokenize
      .split(/\s+/)

      // Remove empty strings and stop words
      .filter(
        word =>
          word.length > 2 &&
          !stopWords.has(word)
      );

  }

  const resumeWords = new Set(normalize(resumeText));

  const jdWords = [...new Set(normalize(jobDescription))];

  const matchedKeywords = [];
  const missingKeywords = [];

  jdWords.forEach(word => {

    if (resumeWords.has(word)) {

      matchedKeywords.push(word);

    } else {

      missingKeywords.push(word);

    }

  });

  const score =
    jdWords.length === 0
      ? 100
      : Math.round(
        (matchedKeywords.length / jdWords.length) * 100
      );

  return {

    score,

    matchedKeywords,

    missingKeywords,

    totalKeywords: jdWords.length

  };

}