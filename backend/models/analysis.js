import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema({
  clerkId: String,
  jobDescription: String,
  overallScore: Number,

  formatting: Object,

  keywordMatch: Object,

  skills: Object,

  sections: Object,

  experience: Object,

  projects: Object,

  grammar: Object,

  readability: Object,

  strengths: [String],

  weaknesses: [String],

  suggestions: [String],

  summary: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Analysis", analysisSchema);