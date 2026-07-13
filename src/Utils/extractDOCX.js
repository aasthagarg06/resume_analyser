import mammoth from "mammoth";

export async function extractDOCX(file) {
  try {
    const buffer = await file.arrayBuffer();

    const result = await mammoth.extractRawText({
      arrayBuffer: buffer,
    });

    return result.value.trim();
  } catch (error) {
    throw new Error("Unable to extract DOCX text.");
  }
}