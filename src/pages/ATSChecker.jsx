import { useState } from "react";
function ATSChecker() {
    const [jobDescription, setJobDescription] = useState("");
    const [resume, setResume] = useState(null);
    const [showResults, setShowResults] = useState(false);

const [error, setError] = useState("");
const handleAnalyze = () => {

  if (!resume) {
    setError("Please upload a resume.");
    return;
  }

  if (!jobDescription.trim()) {
    setError("Please enter a job description.");
    return;
  }

  setError("");

  setShowResults(true);
};
  return (
    <section
  className="
    min-h-screen
    py-16
    px-18
    bg-linear-to-br
    from-slate-100
    via-blue-50
    to-violet-50
    dark:from-slate-950
    dark:via-slate-900
    dark:to-slate-950
    transition-colors
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
        <div className="bg-white
dark:bg-slate-900
rounded-3xl
shadow-xl
border
border-slate-200
dark:border-slate-700
transition-all
duration-300 p-10 mb-12">

          <div className="text-center">

            <div className="text-7xl mb-4">
              📄
            </div>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Upload Resume
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-3">
              PDF Format Supported
            </p>

          </div>

          <input
  type="file"
  accept=".pdf"
  onChange={(e) => setResume(e.target.files[0])}
  className="
    mt-8
    w-full
    p-8
    border-2
    border-dashed
    border-blue-400
dark:border-blue-500
rounded-3xl
bg-blue-50
dark:bg-slate-800
hover:bg-blue-100
dark:hover:bg-slate-700
text-slate-900
dark:text-white
transition-all
    cursor-pointer
  "
/>


{resume && (
  <p className="mt-3 text-green-600 font-medium">
    Selected File: {resume.name}
  </p>
)}

{/* Job Description */}

<div className="mt-8">

  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
    Job Description
  </h3>

  <textarea
  value={jobDescription}
  onChange={(e) =>
    setJobDescription(e.target.value)
  }
  placeholder="Paste the complete job description here..."
  rows="12"
  className="
    w-full
    p-5
    border-2
    border-slate-200
dark:border-slate-700
bg-slate-50
dark:bg-slate-800
text-slate-900
dark:text-white
placeholder:text-slate-400
  "
/>

</div>

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
  "
>
  Analyze Resume
</button>

        </div>

        {/* ATS Score */}
        <div className="bg-white
dark:bg-slate-900
rounded-3xl
shadow-xl
p-10
mb-12
text-center">

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
            ATS Score
          </h2>

          <div className="text-8xl font-bold text-green-600">
            87%
          </div>

          <p className="text-slate-500 dark:text-slate-400 mt-4">
            Excellent ATS Compatibility
          </p>

        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <h3 className="text-2xl font-bold mb-5">
              ✅ Skills Found
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="bg-green-100 dark:bg-green-900/40 px-4 py-2 rounded-full">
                React
              </span>

              <span className="bg-green-100 px-4 py-2 rounded-full">
                JavaScript
              </span>

              <span className="bg-green-100 px-4 py-2 rounded-full">
                SQL
              </span>

              <span className="bg-green-100 px-4 py-2 rounded-full">
                Git
              </span>

            </div>

          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl">

            <h3 className="text-2xl font-bold mb-5">
              ❌ Missing Skills
            </h3>

            <div className="flex flex-wrap gap-3">

              <span className="bg-red-100 dark:bg-red-900/40 px-4 py-2 rounded-full">
                Docker
              </span>

              <span className="bg-red-100 px-4 py-2 rounded-full">
                AWS
              </span>

              <span className="bg-red-100 px-4 py-2 rounded-full">
                MongoDB
              </span>

            </div>

          </div>

        </div>

        {/* Resume Strength */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-12">

          <h2 className="text-3xl font-bold mb-8">
            Resume Strength Analysis
          </h2>

          <div className="grid md:grid-cols-4 gap-6">

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-2xl">
              ✓ Formatting
            </div>

            <div className="bg-green-50 p-6 rounded-2xl">
              ✓ Projects
            </div>

            <div className="bg-green-50 p-6 rounded-2xl">
              ✓ Skills
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-2xl">
              ✗ Achievements
            </div>

          </div>

        </div>

        {/* Suggestions */}
        <div className="bg-white rounded-3xl shadow-xl p-10 mb-12">

          <h2 className="text-3xl font-bold mb-8">
            ✨ AI Suggestions
          </h2>

          <div className="space-y-4">

            <div className="bg-blue-50 dark:bg-slate-800 p-5 rounded-2xl">
              Add quantified achievements.
            </div>

            <div className="bg-blue-50 p-5 rounded-2xl">
              Include more ATS keywords.
            </div>

            <div className="bg-blue-50 p-5 rounded-2xl">
              Strengthen professional summary.
            </div>

          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-6">

          <button
            className="
              flex-1
              py-4
              rounded-2xl
              bg-linear-to-r
              from-blue-600
              to-violet-600
              text-white
              font-bold
            "
          >
            Download Report
          </button>

          <button
            className="
              flex-1
              py-4
              rounded-2xl
              border-2
              border-blue-600
dark:border-blue-400
text-blue-600
dark:text-blue-400
              font-bold
            "
          >
            Improve Resume
          </button>

        </div>

      </div>

    </section>
  );
}

export default ATSChecker;




