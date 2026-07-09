import analyzeRoutes from "./routes/analyzeRoutes.js";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const result = dotenv.config();

console.log(result);

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", analyzeRoutes);

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Resume Analyzer Backend Running");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});