import { motion } from "framer-motion";
import { useState } from "react";
import JDResults from "../components/JDResults";
import axios from "axios";
function JDMatching() {

  const [resume, setResume] = useState(null);
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState(null);

  function handleResumeUpload(e) {
    if (e.target.files.length > 0) {
      setResume(e.target.files[0]);
    }
  }

  async function handleMatch() {

    if (!resume) {

      alert("Please upload a resume.");

      return;

    }

    if (!jobDescription.trim()) {

      alert("Please paste the Job Description.");

      return;

    }

    try {

      const formData = new FormData();

      formData.append("resume", resume);

      formData.append("jobDescription", jobDescription);

      const response = await axios.post(

        "http://localhost:5000/api/jd-match",

        formData

      );

      setResult(response.data.result);

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
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
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
              flex
              justify-center
              items-center
              border-2
              border-dashed
              border-slate-600
              rounded-2xl
              p-10
              cursor-pointer
              hover:border-blue-500
              transition
            "
          >

            <input
              type="file"
              accept=".pdf"
              className="hidden"
              onChange={handleResumeUpload}
            />

            {resume ? (

              <div className="text-center">

                <p className="text-green-400 text-lg font-semibold">
                  Resume Uploaded
                </p>

                <p className="mt-2 text-slate-300">
                  {resume.name}
                </p>

              </div>

            ) : (

              <div className="text-center">

                <p className="text-lg">
                  Click to upload your Resume
                </p>

                <p className="text-slate-400 mt-2">
                  PDF only
                </p>

              </div>

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

    </motion.section>
  );
}

export default JDMatching;