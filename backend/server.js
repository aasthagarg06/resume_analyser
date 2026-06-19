const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Backend Working");
});

app.get("/ats", (req, res) => {
  res.json({
    score: 87,
    skills: [
      "React",
      "JavaScript",
      "Node.js"
    ],
    suggestions: [
      "Add more projects",
      "Include achievements",
      "Improve summary section"
    ]
  });
});

app.listen(5000, () => {
  console.log("Server Started");
});