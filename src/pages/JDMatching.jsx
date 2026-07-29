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

        "https://resumeiq-wghn.onrender.com/api/jd-match",

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
bg-gradient-to-br
from-slate-50
via-blue-50
to-violet-100
dark:from-slate-950
dark:via-slate-900
dark:to-slate-950
text-slate-900
dark:text-white
px-6
py-20
transition-colors
duration-300
"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-400/20 dark:bg-blue-500/10 blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-violet-400/20 dark:bg-violet-500/10 blur-[140px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        <h1 className="text-6xl font-bold text-center">
          Compare Your Resume with a Job Description
        </h1>

        <p className="text-center text-slate-600 dark:text-slate-300 mt-6 text-xl max-w-3xl mx-auto">
          Discover how well your profile matches and identify missing
          skills, keywords and experience required for your dream role.
        </p>

        {/* Upload Card */}

        <div
          className="
  mt-16
  bg-white/90
  dark:bg-slate-900/70
  backdrop-blur-xl
  rounded-3xl
  border
  border-slate-200
  dark:border-white/10
  shadow-xl
  p-10
"
        >
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
    bg-slate-50
dark:bg-slate-900
hover:bg-blue-50
dark:hover:bg-slate-800
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

                <p className="mt-3 text-slate-700 dark:text-slate-300">
                  {resume.name}
                </p>

                <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
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

                <p className="mt-3 text-slate-600 dark:text-slate-400">
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
bg-white
dark:bg-slate-800
border
border-slate-300
dark:border-slate-700
p-5
resize-none
outline-none
text-slate-900
dark:text-white
placeholder:text-slate-400
dark:placeholder:text-slate-500
focus:border-blue-500
focus:ring-4
focus:ring-blue-500/20
transition-all
duration-300
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
from-blue-600
via-indigo-600
to-violet-600
text-white
text-xl
font-semibold
transition-all
duration-300
hover:-translate-y-1
hover:shadow-2xl
hover:shadow-blue-500/20
active:scale-[0.98]
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



























