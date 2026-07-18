console.log("RUNNING SERVER:", import.meta.url);
console.log("🔥 REAL SERVER STARTED");
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import analyzeRoutes from "./routes/analyzeRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("KRITI_BACKEND_12345");
});

app.use("/api", (req, res, next) => {
  console.log("🔥 API REQUEST:", req.method, req.url);
  next();
});

app.use("/api", analyzeRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});