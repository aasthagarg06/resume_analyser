import { useState } from "react";

function UploadResume() {
  const [file, setFile] = useState(null);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  return (
    <section
      className="
        py-16
        px-6
        bg-white
        dark:bg-slate-950
        transition-colors
        duration-300
      "
    >
      <div
        className="
          max-w-4xl
          mx-auto
          bg-white
          dark:bg-slate-900
          rounded-3xl
          shadow-2xl
          p-10
          border
          border-slate-200
          dark:border-slate-700
          transition-all
          duration-300
        "
      >
        {/* Heading */}
        <div className="text-center">

          <div className="text-7xl mb-4">
            📄
          </div>

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white transition-colors">
            Upload Your Resume
          </h2>

          <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg transition-colors">
            Get ATS analysis, skill detection,
            JD matching, and AI-powered suggestions.
          </p>

        </div>

        {/* Upload Area */}
        <div className="mt-10">

          <input
            type="file"
            accept=".pdf"
            onChange={handleChange}
            className="
              w-full
              p-10
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
              cursor-pointer
              transition-all
              duration-300
            "
          />

        </div>

        {/* Supported Formats */}
        <div className="mt-4 text-center text-slate-500 dark:text-slate-400 transition-colors">
          Supported Format: PDF
        </div>

        {/* Selected File */}
        {file && (
          <div className="mt-8">

            <div
              className="
                p-5
                bg-green-50
                dark:bg-green-900/20
                border
                border-green-300
                dark:border-green-700
                rounded-2xl
                flex
                justify-between
                items-center
                transition-colors
                duration-300
              "
            >
              <div>

                <p className="font-semibold text-green-700 dark:text-green-400">
                  ✅ Resume Selected
                </p>

                <p className="text-slate-600 dark:text-slate-300">
                  {file.name}
                </p>

              </div>

              <div className="text-4xl">
                📑
              </div>

            </div>

            {/* Analyze Button */}
            <button
              className="
                mt-6
                w-full
                py-4
                rounded-2xl
                bg-linear-to-r
                from-blue-600
                to-violet-600
                text-white
                text-lg
                font-bold
                shadow-lg
                hover:scale-105
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >
              🚀 Analyze Resume
            </button>

          </div>
        )}

        {/* Bottom Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div
            className="
              bg-slate-50
              dark:bg-slate-800
              border
              border-slate-200
              dark:border-slate-700
              p-5
              rounded-2xl
              transition-colors
              duration-300
            "
          >
            <h3 className="font-bold mb-2 text-slate-900 dark:text-white">
              📊 ATS Score
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Measure resume compatibility with ATS systems.
            </p>
          </div>

          <div
            className="
              bg-slate-50
              dark:bg-slate-800
              border
              border-slate-200
              dark:border-slate-700
              p-5
              rounded-2xl
              transition-colors
              duration-300
            "
          >
            <h3 className="font-bold mb-2 text-slate-900 dark:text-white">
              🎯 JD Match
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Compare your resume against job descriptions.
            </p>
          </div>

          <div
            className="
              bg-slate-50
              dark:bg-slate-800
              border
              border-slate-200
              dark:border-slate-700
              p-5
              rounded-2xl
              transition-colors
              duration-300
            "
          >
            <h3 className="font-bold mb-2 text-slate-900 dark:text-white">
              ✨ AI Suggestions
            </h3>

            <p className="text-slate-600 dark:text-slate-300 text-sm">
              Receive personalized improvement recommendations.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default UploadResume;