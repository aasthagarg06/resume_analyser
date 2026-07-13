import { extractPDF } from "./extractPDF";
import { extractDOCX } from "./extractDOCX";

export async function extractText(file) {
  if (!file) {
    throw new Error("No resume selected.");
  }

  switch (file.type) {
    case "application/pdf":
      return await extractPDF(file);

    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return await extractDOCX(file);

    default:
      throw new Error("Unsupported file type.");
  }
}