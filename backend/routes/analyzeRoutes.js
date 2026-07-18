import express from "express";
import { uploadResume } from "../middleware/upload.js";
import { analyzeResume } from "../controllers/analyzeController.js";

const router = express.Router();

router.get("/analyze", (req, res) => {
  console.log("✅ GET route working");
  res.send("GET Working");
});

router.post(
  "/analyze",

  (req, res, next) => {
    console.log("1️⃣ Route reached");
    next();
  },

  uploadResume,

  (req, res, next) => {
    console.log("2️⃣ Upload finished");
    console.log(req.file);
    next();
  },

  analyzeResume
);

export default router;