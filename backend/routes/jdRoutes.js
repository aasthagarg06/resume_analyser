import express from "express";

import { uploadResume } from "../middleware/upload.js";

import { matchJobDescription } from "../controllers/jdController.js";

const router = express.Router();

router.get("/jd-match", (req, res) => {

    res.send("JD Matching API Working");

});

router.post(

    "/jd-match",

    uploadResume,

    matchJobDescription

);

export default router;