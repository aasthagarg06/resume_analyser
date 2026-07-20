import { createRequire } from "module";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

export async function parsePDF(buffer) {

  try {

    // Extract text
    const parsed = await pdfParse(buffer);

    const text = parsed.text;

    // Extract hyperlinks
    const loadingTask = pdfjsLib.getDocument({
      data: new Uint8Array(buffer)
    });

    const pdf = await loadingTask.promise;

    const links = [];

    for (let i = 1; i <= pdf.numPages; i++) {

      const page = await pdf.getPage(i);

      const annotations = await page.getAnnotations();

      annotations.forEach((annotation) => {

        if (annotation.url) {

          links.push(annotation.url);

        }

      });

    }

    return {

      text,

      links

    };

  }

  catch (err) {

    console.error(err);

    throw new Error("Unable to parse PDF");

  }

}