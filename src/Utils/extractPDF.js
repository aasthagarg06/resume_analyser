import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export async function extractPDF(file) {
  try {
    console.log("STEP 1");

    const arrayBuffer = await file.arrayBuffer();

    console.log("STEP 2");

    const loadingTask = pdfjsLib.getDocument({
      data: arrayBuffer,
    });

    console.log("STEP 3");

    const pdf = await loadingTask.promise;

    console.log("STEP 4");

    let text = "";

    for (let i = 1; i <= pdf.numPages; i++) {
      console.log("Reading page", i);

      const page = await pdf.getPage(i);

      const content = await page.getTextContent();

      text += content.items.map((item) => item.str).join(" ");
    }

    console.log("STEP 5");

    return text;

  } catch (err) {
    console.error("PDF ERROR:", err);
    throw err;
  }
}