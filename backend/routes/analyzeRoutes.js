import express from "express";
import { uploadResume } from "../middleware/upload.js";
import { analyzeResume } from "../controllers/analyzeController.js";

const router = express.Router();

router.post(
    "/analyze",
    uploadResume,
    analyzeResume
);
export default router;