import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

export async function parsePDF(buffer) {
  try {
    const data = await pdfParse(buffer);

    return data.text;
  } catch (error) {
    console.error(error);
    throw new Error("Unable to parse PDF");
  }
}