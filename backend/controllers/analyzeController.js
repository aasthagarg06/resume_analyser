// import { analyzeResumeService } from "../services/atsService.js";

// export const analyzeResume = async (req, res) => {
//   try {
//     const result = await analyzeResumeService(
//       req.file,
//       req.body.jobDescription
//     );

//     res.json({
//       success: true,
//       ...result
//     });

//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message
//     });
//   }
// };






import { analyzeResumeService } from "../services/atsService.js";

export const analyzeResume = async (req, res) => {
  try {
    console.log("========== CONTROLLER STARTED ==========");
    console.log(req.file);
    console.log(req.body);

    const result = await analyzeResumeService(
      req.file,
      req.body.jobDescription
    );

    res.json({
      success: true,
      analysis: result,
    });

  } catch (error) {
    console.error("🔥 BACKEND ERROR:");
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
      stack: error.stack,
    });
  }
};