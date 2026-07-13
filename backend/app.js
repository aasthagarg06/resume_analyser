import express from "express";
import cors from "cors";
import analyzeRoutes from "./routes/analyzeRoutes.js";

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api", analyzeRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Resume Analyzer Backend Running");
});

export default app;