// import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import JDResults from "../components/JDResults";
import axios from "axios";
function JDMatching() {

  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);
  const scrollPositionRef = useRef(0);

  function handleResumeUpload(e) {
    if (e.target.files.length > 0) {
      setResume(e.target.files[0]);
    }
  }

  // Restore scroll position when result updates
  useEffect(() => {
    if (result) {
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [result]);

  async function handleMatch() {

    if (!resume) {

      alert("Please upload a resume.");

      return;

    }

    if (!jobDescription.trim()) {

      alert("Please paste the Job Description.");

      return;

    }

    // Save current scroll position
    scrollPositionRef.current = window.scrollY;

    try {

      const formData = new FormData();

      formData.append("resume", resume);

      formData.append("jobDescription", jobDescription);

      const response = await axios.post(

        "http://localhost:5000/api/jd-match",

        formData

      );

      setResult(response.data.result);
      document.activeElement?.blur();

    }

    catch (err) {

      console.error(err);

      alert(

        err.response?.data?.message ||

        "Unable to match resume."

      );

    }

  }

  return (
    <section

      className="
        relative
        overflow-hidden
        min-h-[calc(100vh-72px)]
        bg-slate-950
        text-white
        px-6
        py-20
      "
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[140px]" />

      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        <h1 className="text-6xl font-bold text-center">
          Compare Your Resume with a Job Description
        </h1>

        <p className="text-center text-slate-300 mt-6 text-xl max-w-3xl mx-auto">
          Discover how well your profile matches and identify missing
          skills, keywords and experience required for your dream role.
        </p>

        {/* Upload Card */}

        <div className="mt-16 bg-slate-900/70 backdrop-blur rounded-3xl border border-slate-800 shadow-xl p-10">

          <h2 className="text-2xl font-semibold mb-6">
            Upload Resume
          </h2>

          <label
            className="
    group
    flex
    flex-col
    justify-center
    items-center
    text-center
    border-2
    border-dashed
    border-blue-500
    rounded-3xl
    p-12
    cursor-pointer
    bg-slate-900
    hover:bg-slate-800
    hover:border-blue-400
    transition-all
    duration-300
    hover:scale-[1.01]
  "
          >

            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleResumeUpload}
            />

            {resume ? (

              <>

                <div className="text-6xl mb-5">
                  ✅
                </div>

                <h3 className="text-2xl font-bold text-green-400">
                  Resume Uploaded Successfully
                </h3>

                <p className="mt-3 text-slate-300">
                  {resume.name}
                </p>

                <p className="mt-2 text-sm text-slate-500">
                  Click to upload another resume
                </p>

              </>

            ) : (

              <>

                <div className="text-6xl mb-5">
                  📄
                </div>

                <h3 className="text-2xl font-bold">
                  Drag & Drop Your Resume
                </h3>

                <p className="mt-3 text-slate-400">
                  or <span className="text-blue-400 font-semibold">Browse Files</span>
                </p>

                <p className="mt-6 text-sm text-slate-500">
                  Supported format: PDF (.pdf)
                </p>

              </>

            )}

          </label>

          {/* JD */}

          <div className="mt-10">

            <h2 className="text-2xl font-semibold mb-5">
              Job Description
            </h2>

            <textarea
              rows={12}
              placeholder="Paste the complete Job Description here..."
              value={jobDescription}
              onChange={(e) =>
                setJobDescription(e.target.value)
              }
              className="
                w-full
                rounded-2xl
                bg-slate-800
                border
                border-slate-700
                p-5
                resize-none
                outline-none
                focus:border-blue-500
                text-white
              "
            />

          </div>

          {/* Button */}

          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={handleMatch}
            className="
              mt-10
              w-full
              py-4
              rounded-2xl
              bg-gradient-to-r
              from-blue-500
              via-indigo-500
              to-violet-600
              hover:scale-[1.02]
              transition-all
              duration-300
              text-xl
              font-semibold
            "
          >
            Match Resume
          </button>

        </div>
        <JDResults result={result} />
      </div>

    </section>
  );
}

export default JDMatching;



























// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import {
//   Briefcase,
//   Upload,
//   FileText,
//   Search,
//   Cpu,
//   BarChart3,
//   CheckCircle2,
//   Code2,
//   FileSearch,
//   GraduationCap,
//   Lightbulb,
//   Target,
// } from "lucide-react";



// function JDLearnMore() {
//   const navigate = useNavigate();

//   const workflow = [
//     {
//       icon: Upload,
//       title: "Upload Resume",
//       desc: "Upload your resume in PDF format. ResumeIQ extracts the content while preserving important information required for comparison.",
//     },
//     {
//       icon: FileText,
//       title: "Paste Job Description",
//       desc: "Paste the complete job description from any internship or full-time opportunity.",
//     },
//     {
//       icon: Search,
//       title: "Resume Text Extraction",
//       desc: "Your resume is converted into structured text so that skills, education, projects, and experience can be analyzed.",
//     },
//     {
//       icon: Cpu,
//       title: "AI Comparison Engine",
//       desc: "ResumeIQ compares your resume against the job description using AI-powered analysis and keyword matching.",
//     },
//     {
//       icon: BarChart3,
//       title: "Generate Compatibility Scores",
//       desc: "Receive detailed scores for skills, keywords, experience, education, and overall compatibility.",
//     },
//     {
//       icon: CheckCircle2,
//       title: "Receive Actionable Insights",
//       desc: "Discover your strengths, missing skills, weaknesses, and personalized suggestions to improve your resume.",
//     },
//   ];

//   const analysisCards = [
//     {
//       icon: Code2,
//       title: "Skills Matching",
//       desc: "Compare programming languages, frameworks, tools, databases, and technologies mentioned in your resume with the job description.",
//       bullets: [
//         "Programming Languages",
//         "Frameworks & Libraries",
//         "Developer Tools",
//         "Databases",
//       ],
//     },
//     {
//       icon: FileSearch,
//       title: "Keyword Analysis",
//       desc: "Identify important ATS keywords and measure how effectively they appear throughout your resume.",
//       bullets: [
//         "Technical Keywords",
//         "Industry Terms",
//         "Role-Specific Skills",
//         "ATS Optimization",
//       ],
//     },
//     {
//       icon: Briefcase,
//       title: "Experience Evaluation",
//       desc: "Analyze internships, projects, and work experience to determine how well they align with the job requirements.",
//       bullets: [
//         "Projects",
//         "Internships",
//         "Responsibilities",
//         "Achievements",
//       ],
//     },
//     {
//       icon: GraduationCap,
//       title: "Education Matching",
//       desc: "Verify whether your educational qualifications satisfy the requirements mentioned in the job description.",
//       bullets: [
//         "Degree",
//         "Branch",
//         "Academic Background",
//         "Qualifications",
//       ],
//     },
//     {
//       icon: Target,
//       title: "Strength & Gap Analysis",
//       desc: "Highlight where your resume already matches the role and identify missing qualifications.",
//       bullets: [
//         "Matched Skills",
//         "Missing Skills",
//         "Strengths",
//         "Weaknesses",
//       ],
//     },
//     {
//       icon: Lightbulb,
//       title: "Personalized Suggestions",
//       desc: "Receive practical recommendations to improve your resume specifically for the selected job description.",
//       bullets: [
//         "Resume Improvements",
//         "Missing Keywords",
//         "Skill Recommendations",
//         "Optimization Tips",
//       ],
//     },
//   ];

//   return (
//     <section className="bg-slate-950 text-white">

//       {/* ================= HERO ================= */}

//       <section className="relative overflow-hidden py-28 px-6">

//         <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />

//         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px]" />

//         <motion.div
//           initial={{ opacity: 0, y: 35 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative max-w-5xl mx-auto text-center"
//         >

//           <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-500/30 rounded-full px-5 py-2 mb-8">

//             <Briefcase className="text-blue-400" size={20} />

//             <span className="text-blue-300 font-semibold">
//               AI Job Description Matching
//             </span>

//           </div>

//           <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">

//             Compare Your Resume

//             <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">

//               {" "}With Any Job Description

//             </span>

//           </h1>

//           <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">

//             ResumeIQ intelligently compares your resume against any job
//             description to measure compatibility, identify missing skills,
//             evaluate experience, and provide AI-powered recommendations that
//             help you tailor your resume for every opportunity.

//           </p>

//           <button
//             onClick={() => navigate("/jd-matching")}
//             className="
//               mt-12
//               px-10
//               py-4
//               rounded-2xl
//               bg-gradient-to-r
//               from-blue-600
//               to-violet-600
//               text-lg
//               font-bold
//               shadow-lg
//               hover:scale-[1.02]
//               hover:shadow-2xl
//               transition-all
//               duration-300
//             "
//           >
//             Compare Resume
//           </button>

//         </motion.div>

//       </section>

//       {/* ================= WORKFLOW ================= */}

//       <section className="py-24 px-6">

//         <div className="max-w-6xl mx-auto">

//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="text-center"
//           >

//             <h2 className="text-4xl font-bold">

//               How JD Matching Works

//             </h2>

//             <p className="mt-5 text-slate-400 max-w-3xl mx-auto">

//               ResumeIQ follows a structured analysis pipeline to compare your
//               resume with the job description and generate meaningful insights.

//             </p>

//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-8 mt-16">

//             {workflow.map((step, index) => {

//               const Icon = step.icon;

//               return (

//                 <motion.div
//                   key={step.title}
//                   initial={{ opacity: 0, y: 25 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="
//                     group
//                     bg-slate-900
//                     border
//                     border-slate-800
//                     rounded-3xl
//                     p-8
//                     transition-all
//                     duration-300
//                     hover:scale-[1.01]
//                     hover:-translate-y-1
//                     hover:border-blue-500
//                     hover:shadow-xl
//                   "
//                 >

//                   <div className="flex items-center gap-5">

//                     <div className="w-14 h-14 rounded-2xl bg-blue-500/15 flex items-center justify-center">

//                       <Icon className="text-blue-400 group-hover:scale-110 transition" />

//                     </div>

//                     <div>

//                       <p className="text-sm text-blue-400 font-semibold">
//                         Step {index + 1}
//                       </p>

//                       <h3 className="text-2xl font-bold">
//                         {step.title}
//                       </h3>

//                     </div>

//                   </div>

//                   <p className="mt-6 text-slate-300 leading-8">
//                     {step.desc}
//                   </p>

//                 </motion.div>

//               );

//             })}

//           </div>

//         </div>

//       </section>

//       {/* ================= WHAT WE ANALYZE ================= */}

//       <section className="py-24 px-6 bg-slate-900/40">

//         <div className="max-w-7xl mx-auto">

//           <div className="text-center">

//             <h2 className="text-4xl font-bold">
//               What We Analyze
//             </h2>

//             <p className="mt-5 text-slate-400 max-w-3xl mx-auto">
//               ResumeIQ evaluates multiple aspects of your resume to determine
//               how closely it aligns with the job description.
//             </p>

//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

//             {analysisCards.map((card, index) => {

//               const Icon = card.icon;

//               return (

//                 <motion.div
//                   key={card.title}
//                   initial={{ opacity: 0, y: 25 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.08 }}
//                   className="
//                     group
//                     rounded-3xl
//                     bg-slate-900
//                     border
//                     border-slate-800
//                     p-8
//                     transition-all
//                     duration-300
//                     hover:scale-[1.01]
//                     hover:-translate-y-1
//                     hover:border-blue-500
//                   "
//                 >

//                   <div className="w-14 h-14 rounded-2xl bg-blue-500/15 flex items-center justify-center">

//                     <Icon className="text-blue-400 group-hover:scale-110 transition" />

//                   </div>

//                   <h3 className="mt-6 text-2xl font-bold">
//                     {card.title}
//                   </h3>

//                   <p className="mt-4 text-slate-300 leading-7">
//                     {card.desc}
//                   </p>

//                   <ul className="mt-6 space-y-3">

//                     {card.bullets.map((item) => (

//                       <li
//                         key={item}
//                         className="flex items-center gap-3 text-slate-400"
//                       >
//                         <CheckCircle2
//                           size={18}
//                           className="text-green-400"
//                         />

//                         {item}

//                       </li>

//                     ))}

//                   </ul>

//                 </motion.div>

//               );

//             })}

//           </div>

//         </div>

//       </section>




//             {/* ================= UNDERSTANDING YOUR REPORT ================= */}

//       <section className="py-24 px-6">

//         <div className="max-w-7xl mx-auto">

//           <div className="text-center">

//             <h2 className="text-4xl font-bold">
//               Understanding Your JD Match Report
//             </h2>

//             <p className="mt-5 text-slate-400 max-w-3xl mx-auto">
//               ResumeIQ generates multiple compatibility scores so you can
//               understand exactly how your resume aligns with a specific job
//               description.
//             </p>

//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

//             {[
//               {
//                 title: "Overall Match Score",
//                 desc:
//                   "Represents the overall compatibility between your resume and the job description by combining multiple evaluation factors.",
//               },
//               {
//                 title: "Skills Score",
//                 desc:
//                   "Measures how many required technical skills from the job description are found in your resume.",
//               },
//               {
//                 title: "Keyword Score",
//                 desc:
//                   "Evaluates whether important ATS keywords appear naturally throughout your resume.",
//               },
//               {
//                 title: "Experience Score",
//                 desc:
//                   "Analyzes internships, projects, work experience, and responsibilities against the employer's expectations.",
//               },
//               {
//                 title: "Education Score",
//                 desc:
//                   "Checks whether your educational qualifications satisfy the degree or branch requirements mentioned in the job description.",
//               },
//               {
//                 title: "Compatibility Analysis",
//                 desc:
//                   "Combines all evaluation factors to generate actionable insights that help improve your resume for the selected role.",
//               },
//             ].map((item) => (

//               <div
//                 key={item.title}
//                 className="
//                   group
//                   bg-slate-900
//                   rounded-3xl
//                   border
//                   border-slate-800
//                   p-8
//                   transition-all
//                   duration-300
//                   hover:scale-[1.01]
//                   hover:-translate-y-1
//                   hover:border-blue-500
//                 "
//               >

//                 <h3 className="text-2xl font-bold text-white">

//                   {item.title}

//                 </h3>

//                 <p className="mt-5 leading-8 text-slate-300">

//                   {item.desc}

//                 </p>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//       {/* ================= UNDERSTANDING YOUR ANALYSIS ================= */}

//       <section className="py-24 px-6 bg-slate-900/40">

//         <div className="max-w-7xl mx-auto">

//           <div className="text-center">

//             <h2 className="text-4xl font-bold">

//               Understanding Your Analysis

//             </h2>

//             <p className="mt-5 text-slate-400 max-w-3xl mx-auto">

//               Beyond scores, ResumeIQ explains why your resume matches or
//               doesn't match the selected job.

//             </p>

//           </div>

//           <div className="grid md:grid-cols-2 gap-8 mt-16">

//             <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

//               <h3 className="text-2xl font-bold text-green-400">

//                 Matched Skills

//               </h3>

//               <p className="mt-5 text-slate-300 leading-8">

//                 Displays technical skills and technologies that appear in both
//                 your resume and the job description.

//               </p>

//               <div className="flex flex-wrap gap-3 mt-8">

//                 {[
//                   "React",
//                   "JavaScript",
//                   "Git",
//                   "SQL",
//                   "REST API",
//                 ].map((item) => (

//                   <span
//                     key={item}
//                     className="px-4 py-2 rounded-full bg-green-500/20 text-green-300"
//                   >

//                     {item}

//                   </span>

//                 ))}

//               </div>

//             </div>

//             <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

//               <h3 className="text-2xl font-bold text-red-400">

//                 Missing Skills

//               </h3>

//               <p className="mt-5 text-slate-300 leading-8">

//                 Highlights technologies or qualifications required by the job
//                 description but not detected in your resume.

//               </p>

//               <div className="flex flex-wrap gap-3 mt-8">

//                 {[
//                   "Docker",
//                   "AWS",
//                   "MongoDB",
//                   "TypeScript",
//                 ].map((item) => (

//                   <span
//                     key={item}
//                     className="px-4 py-2 rounded-full bg-red-500/20 text-red-300"
//                   >

//                     {item}

//                   </span>

//                 ))}

//               </div>

//             </div>

//             <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

//               <h3 className="text-2xl font-bold text-green-400">

//                 Strengths

//               </h3>

//               <ul className="mt-6 space-y-4 text-slate-300">

//                 <li>✓ Strong React development experience.</li>

//                 <li>✓ Relevant frontend projects.</li>

//                 <li>✓ Good alignment with required skills.</li>

//                 <li>✓ Solid educational background.</li>

//               </ul>

//             </div>

//             <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">

//               <h3 className="text-2xl font-bold text-red-400">

//                 Weaknesses

//               </h3>

//               <ul className="mt-6 space-y-4 text-slate-300">

//                 <li>✗ Missing cloud technologies.</li>

//                 <li>✗ Limited backend exposure.</li>

//                 <li>✗ Missing several ATS keywords.</li>

//                 <li>✗ Resume lacks measurable achievements.</li>

//               </ul>

//             </div>

//             <div className="md:col-span-2 rounded-3xl border border-slate-800 bg-slate-900 p-8">

//               <h3 className="text-2xl font-bold text-blue-400">

//                 Personalized Suggestions

//               </h3>

//               <ul className="mt-6 space-y-4 text-slate-300">

//                 <li>• Add missing technical skills if you have experience with them.</li>

//                 <li>• Include more measurable project achievements.</li>

//                 <li>• Mention important ATS keywords naturally throughout your resume.</li>

//                 <li>• Tailor your projects and experience for the specific role.</li>

//                 <li>• Keep your resume concise and relevant to the position.</li>

//               </ul>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* ================= SCORE CALCULATION ================= */}

//       <section className="py-24 px-6">

//         <div className="max-w-5xl mx-auto">

//           <div className="text-center">

//             <h2 className="text-4xl font-bold">

//               How Match Scores Are Calculated

//             </h2>

//             <p className="mt-5 text-slate-400">

//               ResumeIQ evaluates multiple factors to estimate how well your
//               resume aligns with the selected job description.

//             </p>

//           </div>

//           <div className="space-y-8 mt-16">

//             {[
//               ["Skills Match",30],
//               ["Keyword Match",25],
//               ["Experience",20],
//               ["Education",15],
//               ["Overall Resume Alignment",10],
//             ].map(([label,value]) => (

//               <div key={label}>

//                 <div className="flex justify-between mb-3">

//                   <span className="font-semibold">

//                     {label}

//                   </span>

//                   <span className="font-bold">

//                     {value}%

//                   </span>

//                 </div>

//                 <div className="h-3 bg-slate-800 rounded-full overflow-hidden">

//                   <div
//                     className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
//                     style={{ width: `${value}%` }}
//                   />

//                 </div>

//               </div>

//             ))}

//           </div>

//           <p className="mt-12 text-center text-slate-400 leading-8">

//             The final compatibility score combines skills, keyword relevance,
//             experience, education, and overall alignment with the job
//             description to provide a balanced evaluation.

//           </p>

//         </div>

//       </section>

//       {/* ================= INTERPRET SCORE ================= */}

//       <section className="py-24 px-6 bg-slate-900/40">

//         <div className="max-w-6xl mx-auto">

//           <div className="text-center">

//             <h2 className="text-4xl font-bold">

//               How to Interpret Your Match Score

//             </h2>

//           </div>

//           <div className="grid md:grid-cols-2 gap-8 mt-16">

//             {[
//               ["90–100%","Excellent Match","Highly compatible with the role.","bg-green-500"],
//               ["75–89%","Strong Match","Minor improvements recommended.","bg-blue-500"],
//               ["60–74%","Moderate Match","Several skills or keywords are missing.","bg-yellow-500"],
//               ["Below 60%","Needs Improvement","Tailor your resume before applying.","bg-red-500"],
//             ].map(([range,title,desc,color]) => (

//               <div
//                 key={title}
//                 className="
//                   rounded-3xl
//                   bg-slate-900
//                   border
//                   border-slate-800
//                   p-8
//                   flex
//                   justify-between
//                   items-center
//                   hover:border-blue-500
//                   transition
//                 "
//               >

//                 <div>

//                   <h3 className="text-2xl font-bold">

//                     {title}

//                   </h3>

//                   <p className="mt-3 text-slate-300">

//                     {desc}

//                   </p>

//                 </div>

//                 <span
//                   className={`${color} px-5 py-2 rounded-full font-bold`}
//                 >

//                   {range}

//                 </span>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>


//             {/* ================= WHY JD MATCHING MATTERS ================= */}

//       <section className="py-24 px-6">

//         <div className="max-w-7xl mx-auto">

//           <div className="text-center">

//             <h2 className="text-4xl font-bold">
//               Why Job Description Matching Matters
//             </h2>

//             <p className="mt-5 text-slate-400 max-w-3xl mx-auto">
//               Every employer looks for different skills and qualifications.
//               Tailoring your resume to each job description can significantly
//               improve your chances of getting shortlisted.
//             </p>

//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

//             {[
//               {
//                 emoji: "🎯",
//                 title: "Tailor Every Application",
//                 desc: "Customize your resume for every internship or job instead of sending the same resume everywhere.",
//               },
//               {
//                 emoji: "📈",
//                 title: "Improve ATS Compatibility",
//                 desc: "Include the keywords and technical skills recruiters and ATS systems expect to see.",
//               },
//               {
//                 emoji: "🧩",
//                 title: "Identify Missing Skills",
//                 desc: "Discover which technologies, tools, or qualifications are missing before you apply.",
//               },
//               {
//                 emoji: "🚀",
//                 title: "Increase Interview Chances",
//                 desc: "A resume that closely matches the job description has a better chance of progressing through the screening process.",
//               },
//             ].map((card) => (

//               <div
//                 key={card.title}
//                 className="
//                   group
//                   bg-slate-900
//                   rounded-3xl
//                   border
//                   border-slate-800
//                   p-8
//                   transition-all
//                   duration-300
//                   hover:scale-[1.01]
//                   hover:-translate-y-1
//                   hover:border-blue-500
//                 "
//               >

//                 <div className="text-5xl">

//                   {card.emoji}

//                 </div>

//                 <h3 className="mt-6 text-2xl font-bold">

//                   {card.title}

//                 </h3>

//                 <p className="mt-5 text-slate-300 leading-8">

//                   {card.desc}

//                 </p>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//       {/* ================= FAQ ================= */}

//       <section className="py-24 px-6 bg-slate-900/40">

//         <div className="max-w-5xl mx-auto">

//           <div className="text-center">

//             <h2 className="text-4xl font-bold">

//               Frequently Asked Questions

//             </h2>

//           </div>

//           <div className="space-y-8 mt-16">

//             {[
//               {
//                 q: "Why is my match score low?",
//                 a: "A low score usually means your resume is missing important skills, keywords, experience, or educational qualifications mentioned in the job description.",
//               },
//               {
//                 q: "Can I compare my resume with different job descriptions?",
//                 a: "Yes. ResumeIQ allows you to compare the same resume against multiple job descriptions so you can tailor your application for each role.",
//               },
//               {
//                 q: "Does a high match score guarantee an interview?",
//                 a: "No. A high compatibility score improves your resume's relevance, but interview decisions also depend on recruiters, technical assessments, and other evaluation criteria.",
//               },
//               {
//                 q: "Should I customize my resume for every application?",
//                 a: "Yes. Tailoring your resume for each job helps highlight the most relevant skills, projects, and experience while improving ATS compatibility.",
//               },
//             ].map((faq) => (

//               <div
//                 key={faq.q}
//                 className="
//                   rounded-3xl
//                   border
//                   border-slate-800
//                   bg-slate-900
//                   p-8
//                   hover:border-blue-500
//                   transition
//                 "
//               >

//                 <h3 className="text-2xl font-bold">

//                   {faq.q}

//                 </h3>

//                 <p className="mt-5 text-slate-300 leading-8">

//                   {faq.a}

//                 </p>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//       {/* ================= CTA ================= */}

//       <section className="py-28 px-6">

//         <div className="max-w-5xl mx-auto">

//           <div
//             className="
//               rounded-[40px]
//               bg-gradient-to-r
//               from-blue-600
//               via-indigo-600
//               to-violet-600
//               p-14
//               text-center
//               shadow-2xl
//             "
//           >

//             <h2 className="text-5xl font-bold">

//               Ready to Compare Your Resume?

//             </h2>

//             <p className="mt-8 text-xl text-blue-100 max-w-3xl mx-auto leading-8">

//               Upload your resume, paste a job description, and receive
//               AI-powered compatibility scores, matched skills, missing
//               technologies, strengths, weaknesses, and personalized
//               recommendations within seconds.

//             </p>

//             <button
//               onClick={() => navigate("/jd-matching")}
//               className="
//                 mt-12
//                 px-10
//                 py-4
//                 rounded-2xl
//                 bg-white
//                 text-blue-700
//                 font-bold
//                 text-lg
//                 hover:scale-[1.02]
//                 transition-all
//                 duration-300
//                 shadow-xl
//               "
//             >
//               Compare Resume
//             </button>

//           </div>

//         </div>

//       </section>

//       {/* ================= DISCLAIMER ================= */}

//       <section className="pb-24 px-6">

//         <div className="max-w-5xl mx-auto">

//           <div className="rounded-3xl bg-blue-500/10 border border-blue-500/30 p-8">

//             <h3 className="text-2xl font-bold text-blue-300">

//               Important Note

//             </h3>

//             <p className="mt-5 leading-8 text-slate-300">

//               ResumeIQ provides an AI-powered compatibility estimate based on
//               the information available in your resume and the supplied job
//               description. Different organizations use different Applicant
//               Tracking Systems (ATS), screening methods, and hiring criteria.
//               Therefore, the match score should be considered as guidance to
//               help improve your resume rather than a guarantee of interview
//               selection or job offers.

//             </p>

//           </div>

//         </div>

//       </section>

//     </section>

//   );

// }

// export default JDLearnMore;