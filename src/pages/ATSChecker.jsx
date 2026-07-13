import axios from "axios";
import { extractText } from "../utils/extractText";
import { validateResume } from "../utils/fileValidation";
import { useState } from "react";
function ATSChecker() {
    const [jobDescription, setJobDescription] = useState("");
    const [resume, setResume] = useState(null);
    const [analysis, setAnalysis] = useState(null);
    const [resumeText, setResumeText] = useState("");
    const [loading, setLoading] = useState(false);
    const [showResults, setShowResults] = useState(false);

const [error, setError] = useState("");
async function handleResumeUpload(e) {
  const file = e.target.files[0];

  if (!file) return;

  setResume(file);

  const validationError = validateResume(file);

  if (validationError) {
    setError(validationError);
    return;
  }

  setLoading(true);
  setError("");

  try {
    const text = await extractText(file);

    console.log("Extracted Text:", text);

    setResumeText(text);

  } catch (err) {
    console.error("Extraction Error:", err);

    setResumeText("Unable to extract text.");

    setError(err.message);
  } finally {
    setLoading(false);
  }
}
const handleAnalyze = async () => {

    if (!resume) {
        setError("Please upload a resume first.");
        return;
    }

    if (!jobDescription.trim()) {
        setError("Please enter a job description.");
        return;
    }

    setLoading(true);
    setError("");

    try {

        const formData = new FormData();

        formData.append("resume", resume);
        formData.append("jobDescription", jobDescription);

        const response = await axios.post(
    "http://localhost:5000/api/analyze",
    formData
);

console.log(
  "Backend Response:",
  JSON.stringify(response.data, null, 2)
);
console.log("Type:", typeof response.data);

// Save AI response
setAnalysis(response.data.analysis);
// Show Results
setShowResults(true);

    } catch (err) {

        console.error(err);

        setError(
            err.response?.data?.message ||
            "Something went wrong while analyzing the resume."
        );

    } finally {

        setLoading(false);

    }
};
  return (
    <section
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

<p className="mt-2">

{resume.name}

</p>

<p className="text-slate-500">

{(resume.size / (1024 * 1024)).toFixed(2)} MB

</p>

<button

onClick={()=>{
setResume(null);
setResumeText("");
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
      📖 Reading Resume...
    </p>
  </div>
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
transition-all
"
>

<h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">

ATS Score

</h2>

<div
className="
text-8xl
font-extrabold
bg-linear-to-r
from-emerald-400
to-green-600
bg-clip-text
text-transparent
"
>

{analysis?.overallScore ?? analysis?.atsScore ?? 0}%

</div>

<p className="text-slate-500 mt-4">

AI Generated ATS Score

</p>

</div>

)}


{/* Skills */}

{analysis && (

<div className="grid md:grid-cols-2 gap-8 mb-12">

  {/* Matched Skills */}

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

  {/* Missing Skills */}

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
p-8
transition-all
hover:-translate-y-1
hover:shadow-2xl
"
>

    <h3 className="text-2xl text-slate-900 dark:text-white font-bold mb-5">
      ❌ Missing Skills
    </h3>

    <div className="flex flex-wrap gap-3">

      {analysis.skills?.missingSkills?.map((skill, index) => (

        <span
          key={index}
          className="
px-4
py-2
rounded-full
bg-red-100
text-red-700
dark:bg-red-500/20
dark:text-red-300
border
border-red-300
dark:border-red-600
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

{analysis?.weaknesses?.map((item,index)=>(

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




