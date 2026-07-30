import axios from "axios";
import { extractText } from "../Utils/extractText";
import { validateResume } from "../Utils/fileValidation";
import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
import {
  saveResume,
  getRecentResumes
} from "../Utils/localStorage";
import RecentResumes from "../components/RecentResumes";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
// import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "react-circular-progressbar/dist/styles.css";
function ATSChecker() {
  const [resume, setResume] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [recentResumes, setRecentResumes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {

    setRecentResumes(getRecentResumes());

  }, []);
  async function handleResumeUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const validationError = validateResume(file);
    if (validationError) {
      setError(validationError);
      return;
    }

    setResume(file);
    setError("");

    try {
      setLoading(true);
      await extractText(file); // validates readability
    } catch (err) {
      setError(err.message || "Unable to read resume.");
    } finally {
      setLoading(false);
    }
  }
  async function fileToBase64(file) {

    return new Promise((resolve, reject) => {

      const reader = new FileReader();

      reader.onload = () => resolve(reader.result);

      reader.onerror = reject;

      reader.readAsDataURL(file);

    });

  }
  function handleOpenResume(savedResume) {

    setAnalysis(savedResume.analysis);

    setResume({
      name: savedResume.name,
      size: 0
    });

    // Smoothly scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }
  function refreshRecentResumes() {

    setRecentResumes(getRecentResumes());

  }
  async function handleAnalyze() {
    if (!resume) {
      setError("Please upload a resume first.");
      return;
    }

    setLoading(true);

    setError("");

    try {
      const formData = new FormData();
      formData.append("resume", resume);

      const response = await axios.post(
        "http://localhost:5000/api/analyze",
        formData
      );

      const data = response.data.analysis;
      const pdfBase64 = await fileToBase64(resume);

      saveResume({

        id: crypto.randomUUID(),

        name: resume.name,

        uploadedAt: new Date().toLocaleString(),

        atsScore: data.overallScore,

        analysis: data,

        pdf: pdfBase64

      });
      setRecentResumes(getRecentResumes());
      console.log("Backend Response:");
      console.log(data);

      setAnalysis({

        overallScore: data.overallScore ?? data.scores?.overall ?? 0,

        formatting: data.formatting,

        contact: data.contact,

        sections: data.sections,

        skills: data.skills,

        dates: data.dates,

        experience: data.experience,

        projects: data.projects,

        readability: data.readability,

        grammar: data.grammar,

        summary: data.summary,

        strengths: data.strengths ?? [],

        weaknesses: data.weaknesses ?? [],

        suggestions: data.suggestions ?? []

      });

    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message ||
        "Failed to analyze resume."
      );
    } finally {
      setLoading(false);
    }
  }
  const downloadPDF = () => {

    if (!analysis) return;

    const pdf = new jsPDF();

    let y = 20;

    pdf.setFontSize(22);
    pdf.text("ATS Resume Report", 20, y);

    y += 15;

    pdf.setFontSize(14);

    pdf.text(`Overall ATS Score: ${analysis.overallScore}%`, 20, y);

    y += 10;

    pdf.text(`Formatting Score: ${analysis.formatting?.score || 0}%`, 20, y);

    y += 10;

    pdf.text(`Sections Score: ${analysis.sections?.score || 0}%`, 20, y);

    y += 10;

    pdf.text(`Experience Score: ${analysis.experience?.score || 0}%`, 20, y);

    y += 20;

    // AI Summary
    if (analysis.summary) {

      pdf.setFontSize(18);
      pdf.text("AI Summary", 20, y);

      y += 10;

      pdf.setFontSize(12);

      const summary = pdf.splitTextToSize(analysis.summary, 170);

      pdf.text(summary, 20, y);

      y += summary.length * 7 + 10;

    }

    // Skills
    pdf.setFontSize(18);
    pdf.text("Skills Found", 20, y);

    y += 10;

    pdf.setFontSize(12);

    analysis.skills?.matchedSkills?.forEach((skill) => {

      const lines = pdf.splitTextToSize(`• ${skill}`, 165);

      if (y + lines.length * 7 > 280) {
        pdf.addPage();
        y = 20;
      }

      pdf.text(lines, 25, y);

      y += lines.length * 7;

    });

    y += 10;

    // Strengths
    pdf.setFontSize(18);
    pdf.text("Strengths", 20, y);

    y += 10;

    pdf.setFontSize(12);

    analysis.strengths?.forEach((item) => {

      const lines = pdf.splitTextToSize(`• ${item}`, 165);

      if (y + lines.length * 7 > 280) {
        pdf.addPage();
        y = 20;
      }

      pdf.text(lines, 25, y);

      y += lines.length * 7;

    });

    y += 10;

    // Weaknesses
    pdf.setFontSize(18);
    pdf.text("Weaknesses", 20, y);

    y += 10;

    pdf.setFontSize(12);

    analysis.weaknesses?.forEach((item) => {

      const lines = pdf.splitTextToSize(`• ${item}`, 165);

      if (y + lines.length * 7 > 280) {
        pdf.addPage();
        y = 20;
      }

      pdf.text(lines, 25, y);

      y += lines.length * 7;

    });

    y += 10;

    // Suggestions
    pdf.setFontSize(18);
    pdf.text("Suggestions", 20, y);

    y += 10;

    pdf.setFontSize(12);

    analysis.suggestions?.forEach((item) => {

      const lines = pdf.splitTextToSize(`• ${item}`, 165);

      if (y + lines.length * 7 > 280) {
        pdf.addPage();
        y = 20;
      }

      pdf.text(lines, 25, y);

      y += lines.length * 7;

    });

    y += 15;

    pdf.setFontSize(10);

    pdf.text(
      `Generated on ${new Date().toLocaleString()}`,
      20,
      y
    );

    pdf.save("ATS_Report.pdf");

  };
  return (
    <section
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        min-h-screen
        py-16
        px-8 lg:px-16
        bg-gradient-to-br
        from-slate-50
        via-blue-50
        to-violet-100
        dark:from-[#0F172A]
        dark:via-[#111827]
        dark:to-[#020617]
        transition-all
        duration-300
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* Hero */}
        <div className="text-center mb-14">

          <h1 className="text-6xl font-bold text-slate-900 dark:text-white transition-colors">
            ATS Resume Checker
          </h1>

          <p className="mt-5 text-xl text-slate-600 dark:text-slate-300 transition-colors max-w-3xl mx-auto">
            Analyze your resume, improve ATS compatibility,
            detect missing keywords, and receive AI-powered
            recommendations.
          </p>

        </div>

        {/* Upload Section */}
        <div
          className="
bg-white/90
dark:bg-slate-900/80
backdrop-blur-xl
rounded-3xl
shadow-2xl
shadow-slate-900/10
border
border-slate-200
dark:border-slate-800
transition-all
duration-300
p-10
mb-12
"
        >

          {!resume ? (

            <div
              onClick={() => document.getElementById("resumeInput").click()}
              className="
mt-8
border-2
border-dashed
border-blue-400
rounded-3xl
bg-blue-50
dark:bg-slate-800
hover:bg-blue-100
dark:hover:bg-slate-700
cursor-pointer
p-10
text-center
transition-all
"
            >

              <div className="text-6xl">
                📄
              </div>

              <h3 className="mt-4 text-2xl font-bold dark:text-white">

                Drag & Drop Resume

              </h3>

              <p className="mt-2 text-slate-500">

                or Click to Browse

              </p>

              <input
                id="resumeInput"
                hidden
                type="file"
                accept=".pdf"
                onChange={handleResumeUpload}
              />

            </div>

          ) : (

            <div
              className="
mt-8
rounded-3xl
bg-green-50
dark:bg-green-900/20
border-2
border-green-500
p-10
text-center
shadow-lg
"
            >

              <div className="text-6xl">
                ✅
              </div>

              <h2 className="mt-4 text-2xl font-bold text-green-700">

                Resume Uploaded Successfully

              </h2>
              <div className="mt-5 text-slate-700 dark:text-white">

                <p>
                  Pages : 1
                </p>

                <p>
                  Detected Skills : {analysis?.skills?.matchedSkills?.length}
                </p>

              </div>

              <p className="mt-2 text-slate-700 dark:text-slate-300">
                {resume.name}
              </p>

              <p className="text-slate-700 dark:text-white">
                {(resume.size / (1024 * 1024)).toFixed(2)} MB
              </p>

              <button

                onClick={() => {
                  setResume(null);
                }}

                className="
mt-5
px-5
py-2
rounded-xl
bg-red-500
text-white
"

              >

                Remove Resume

              </button>

            </div>

          )}

          {loading && (
            <div className="mt-4 text-center">
              <p className="text-blue-600 font-semibold">
                🤖 Analyzing Resume...
              </p>
            </div>
          )}



          {error && (
            <p className="text-red-600 mt-4 font-medium">
              {error}
            </p>
          )}

          <button
            onClick={handleAnalyze}
            className="
    mt-6
    w-full
    py-4
    rounded-2xl
    bg-linear-to-r
    from-blue-600
    to-violet-600
    text-white
    font-bold
    text-lg
    hover:scale-[1.02]
    transition-all
    duration-300
    shadow-lg
    hover:shadow-blue-500/30

  "
          >
            Analyze Resume
          </button>

        </div>

        {/* ATS Score */}
        {analysis && (
          <div id="report-content">
            {/* ATS Score */}
            <div
              className="
      bg-white/90
      dark:bg-slate-900/80
      backdrop-blur-xl
      rounded-3xl
      border
      border-slate-200
      dark:border-slate-800
      shadow-2xl
      p-10
      mb-12
      text-center
      transition-all"
            >
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                ATS Score
              </h2>

              <div className="w-56 h-56 mx-auto">
                <CircularProgressbar
                  value={analysis.overallScore || 0}
                  text={`${analysis.overallScore || 0}%`}
                  styles={buildStyles({
                    textSize: "18px",
                    pathColor: "#2563eb",
                    trailColor: "#e5e7eb",

                    textColor: document.documentElement.classList.contains("dark")
                      ? "#ffffff"
                      : "#111827",

                    textWeight: "700",
                  })}
                />
              </div>

              <p className="text-slate-500 mt-4">
                AI Generated ATS Score
              </p>

              <p className="mt-4 text-xl font-bold text-blue-600">
                {analysis.overallScore >= 90
                  ? "⭐⭐⭐⭐⭐ Excellent"
                  : analysis.overallScore >= 80
                    ? "⭐⭐⭐⭐ Very Good"
                    : analysis.overallScore >= 70
                      ? "⭐⭐⭐ Good"
                      : analysis.overallScore >= 60
                        ? "⭐⭐ Average"
                        : "⭐ Needs Improvement"}
              </p>
            </div>

            {/* Score Breakdown */}
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">

              <div className="bg-white rounded-2xl p-6 shadow text-center">
                <h3>Formatting</h3>
                <p className="text-3xl font-bold text-blue-600">
                  {analysis.formatting?.score || 0}%
                </p>
                <p className="text-sm mt-3 text-gray-500">

                  {analysis.formatting?.feedback}

                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow text-center">
                <h3>Contact</h3>
                <p className="text-3xl font-bold text-green-600">
                  {analysis.contact?.score || 0}%
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow text-center">
                <h3>Sections</h3>
                <p className="text-3xl font-bold text-orange-600">
                  {analysis.sections?.score || 0}%
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow text-center">
                <h3>Skills</h3>
                <p className="text-3xl font-bold text-indigo-600">
                  {analysis.skills?.score || 0}%
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow text-center">
                <h3>Dates</h3>
                <p className="text-3xl font-bold text-red-600">
                  {analysis.dates?.score || 0}%
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow text-center">
                <h3>Experience</h3>
                <p className="text-3xl font-bold text-purple-600">
                  {analysis.experience?.score || 0}%
                </p>
              </div>

            </div>
          </div>

        )}
        {analysis && (

          <div className="bg-white/90
    dark:bg-slate-900/80
    backdrop-blur-xl
    rounded-3xl
    border
    border-slate-200
    dark:border-slate-800
    shadow-xl
    p-8
    mb-12">

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">

              Contact Analysis

            </h2>

            <div className="grid md:grid-cols-5 gap-6">

              <div>
                <h3 className="text-slate-900 dark:text-white">Email</h3>
                <p className="text-slate-700 dark:text-slate-300">{analysis.contact?.email ? "✅ Found" : "❌ Missing"}</p>
              </div>

              <div>
                <h3 className="text-slate-900 dark:text-white">Phone</h3>
                <p className="text-slate-700 dark:text-slate-300">{analysis.contact?.phone ? "✅ Found" : "❌ Missing"}</p>
              </div>

              <div>
                <h3 className="text-slate-900 dark:text-white">LinkedIn</h3>
                <p className="text-slate-700 dark:text-slate-300">{analysis.contact?.linkedin ? "✅ Found" : "❌ Missing"}</p>
              </div>

              <div>
                <h3 className="text-slate-900 dark:text-white">GitHub</h3>
                <p className="text-slate-700 dark:text-slate-300">{analysis.contact?.github ? "✅ Found" : "❌ Missing"}</p>
              </div>


            </div>

          </div>

        )}

        {analysis?.sections?.missing?.length > 0 && (

          <div className="bg-white/90
    dark:bg-slate-900/80
    backdrop-blur-xl
    rounded-3xl
    border
    border-slate-200
    dark:border-slate-800
    shadow-xl
    p-8
    mb-12">

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">

              Missing Sections

            </h2>

            <div className="flex flex-wrap gap-3">

              {analysis.sections.missing.map((item, index) => (

                <span

                  key={index}

                  className="px-4 py-2 rounded-full bg-red-100 text-red-700"

                >

                  {item}

                </span>

              ))}

            </div>

          </div>

        )}
        {/* Skills */}

        {analysis && (

          <div className="grid md:grid-cols-2 gap-8 mb-12">

            {/* Matched Skills */}

            <div
              className="
md:col-span-2
bg-white/90
dark:bg-slate-900/80
backdrop-blur-xl
rounded-3xl
border
border-slate-200
dark:border-slate-800
shadow-xl
p-8
transition-all
hover:-translate-y-1
hover:shadow-2xl
"
            >

              <h3 className="text-2xl text-slate-900 dark:text-white font-bold mb-5">
                ✅ Skills Found
              </h3>

              <div className="flex flex-wrap gap-3">

                {analysis.skills?.matchedSkills?.map((skill, index) => (

                  <span
                    key={index}
                    className="
px-4
py-2
rounded-full
bg-emerald-100
text-emerald-700
dark:bg-emerald-500/20
dark:text-emerald-300
border
border-emerald-300
dark:border-emerald-600
font-medium
">
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          </div>

        )}

        {/* Resume Strength */}
        <div
          className="
bg-white/90
dark:bg-slate-900/80
backdrop-blur-xl
rounded-3xl
border
border-slate-200
dark:border-slate-800
shadow-xl
p-10
mb-12
"
        >

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Resume Strength Analysis
          </h2>

          <div className="grid md:grid-cols-4 text-slate-900 dark:text-white gap-6">

            {analysis?.strengths?.map((item, index) => (

              <div
                key={index}
                className="
bg-emerald-50
dark:bg-emerald-900/20
border
border-emerald-200
dark:border-emerald-700
p-6
rounded-2xl
transition
hover:scale-105
">

                {item}

              </div>

            ))}

          </div>

        </div>


        {analysis && (

          <div
            className="
bg-white/90
dark:bg-slate-900/80
backdrop-blur-xl
rounded-3xl
border
border-slate-200
dark:border-slate-800
shadow-xl
p-10
mb-12
"
          >

            <h2 className="text-3xl text-slate-900 dark:text-white font-bold mb-8">

              ⚠ Weaknesses

            </h2>

            <div className="space-y-4">

              {analysis?.weaknesses?.map((item, index) => (

                <div
                  key={index}
                  className="
bg-red-50
dark:bg-red-900/20
border
border-red-200
dark:border-red-700
rounded-2xl
text-slate-900 dark:text-white
p-5
transition
hover:scale-[1.02]
"
                >

                  {item}

                </div>

              ))}

            </div>

          </div>

        )}


        {/* Suggestions */}
        <div
          className="
bg-white/90
dark:bg-slate-900/80
backdrop-blur-xl
rounded-3xl
border
border-slate-200
dark:border-slate-800
shadow-xl
p-10
mb-12
"
        >

          {analysis?.summary && (

            <div
              className="

bg-indigo-50

rounded-2xl

p-6

mb-8

">

              <h3 className="font-bold text-2xl">

                AI Summary

              </h3>

              <p>

                {analysis.summary}

              </p>

            </div>

          )}
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
            ✨ AI Suggestions
          </h2>

          <div className="space-y-4">

            {analysis?.suggestions?.map((item, index) => (

              <div
                key={index}
                className="
group
bg-blue-50
dark:bg-slate-800/70
border
border-blue-100
dark:border-slate-700
rounded-2xl
p-5
text-slate-900 dark:text-white
transition-all
duration-300
hover:-translate-y-1
hover:border-blue-500
hover:shadow-lg
"
              >

                {item}

              </div>

            ))}

          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6">

          <button
            className="
              flex-1
              py-4
              rounded-2xl
              bg-gradient-to-r
            from-blue-500
            via-indigo-500
            to-violet-600
            hover:scale-[1.02]
            transition-all
            duration-300
            shadow-lg
            hover:shadow-blue-500/30
            "
            onClick={downloadPDF}>
            Download Report
          </button>
        </div>
        {/* Recently Viewed */}
        <RecentResumes
          resumes={recentResumes}
          onOpen={handleOpenResume}
          onDelete={refreshRecentResumes}
        />
      </div>

    </section >
  );
}

export default ATSChecker;




