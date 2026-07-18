const STOP_WORDS = new Set([
  "the","and","for","with","you","your",
  "candidate","experience","required",
  "preferred","knowledge","skills","ability",
  "working","good","strong","must","have"
]);

export function extractSkills(text) {

  const words = text
    .replace(/[^\w#+.-]/g, " ")
    .split(/\s+/)
    .filter(Boolean);

  return [...new Set(

    words
      .filter(word => word.length > 1)
      .filter(word => !STOP_WORDS.has(word.toLowerCase()))

  )];

}