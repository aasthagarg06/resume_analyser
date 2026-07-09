import fs from "fs";
import { parsePDF } from "../utils/pdfParser.js";
import { analyzeWithGemini } from "../services/geminiService.js";
export const analyzeResume = async (req, res) => {
  try {

    const resumeText = await parsePDF(req.file.path);

    const aiResponse = await analyzeWithGemini(
      resumeText,
      req.body.jobDescription
    );

    
   console.log("TYPE:", typeof aiResponse);
console.log("VALUE:", aiResponse);

    if (typeof aiResponse !== "string") {
  console.log("Not a string:", aiResponse);

  return res.json({
    success: false,
    aiResponse,
    type: typeof aiResponse,
  });
}

if (typeof aiResponse !== "string") {
  console.log("Not a string:", aiResponse);

  return res.json({
    success: false,
    aiResponse,
    type: typeof aiResponse,
  });
}

if (typeof aiResponse !== "string") {
  console.log("Not a string:", aiResponse);

  return res.json({
    success: false,
    aiResponse,
    type: typeof aiResponse,
  });
}

const cleaned = aiResponse.trim();

const aiResult = JSON.parse(cleaned);

// Delete uploaded PDF
fs.unlinkSync(req.file.path);

    res.json({
      success: true,
      analysis: aiResult,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  } finally {

    if (req.file && fs.existsSync(req.file.path)) {
        fs.unlinkSync(req.file.path);
    }

}
};