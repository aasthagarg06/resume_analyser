function ATSAnalysis() {
  return (
    <div
      className="
        min-h-screen
        bg-linear-to-br
        from-slate-50
        via-blue-50
        to-violet-100
        dark:from-slate-950
        dark:via-slate-900
        dark:to-slate-950
        transition-colors
        duration-300
      "
    >

      {/* Hero */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-6xl font-bold text-slate-900 dark:text-white transition-colors">
            ATS Analysis
          </h1>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors">
            Understand how Applicant Tracking Systems evaluate
            your resume and learn how to improve your chances
            of getting shortlisted.
          </p>

        </div>

      </section>

      {/* Score Cards */}
      <section className="px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">

          <div
            className="
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-700
              p-8
              rounded-3xl
              shadow-lg
              text-center
              transition-all
              duration-300
            "
          >
            <h2 className="text-5xl font-bold text-green-600">
              87%
            </h2>

            <p className="mt-3 text-slate-700 dark:text-slate-300">
              ATS Score
            </p>
          </div>

          <div
            className="
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-700
              p-8
              rounded-3xl
              shadow-lg
              text-center
              transition-all
              duration-300
            "
          >
            <h2 className="text-5xl font-bold text-blue-600">
              95%
            </h2>

            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Formatting
            </p>
          </div>

          <div
            className="
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-700
              p-8
              rounded-3xl
              shadow-lg
              text-center
              transition-all
              duration-300
            "
          >
            <h2 className="text-5xl font-bold text-violet-600">
              80%
            </h2>

            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Keywords
            </p>
          </div>

          <div
            className="
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-700
              p-8
              rounded-3xl
              shadow-lg
              text-center
              transition-all
              duration-300
            "
          >
            <h2 className="text-5xl font-bold text-orange-600">
              90%
            </h2>

            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Skills
            </p>
          </div>

        </div>

      </section>

      {/* What ATS Checks */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            What ATS Systems Check
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div
              className="
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-700
                p-8
                rounded-3xl
                shadow-lg
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Resume Formatting
              </h3>

              <p className="text-slate-600 dark:text-slate-300">
                ATS systems prefer clean layouts,
                proper section headings, and
                readable resume structures.
              </p>
            </div>

            <div
              className="
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-700
                p-8
                rounded-3xl
                shadow-lg
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Keyword Matching
              </h3>

              <p className="text-slate-600 dark:text-slate-300">
                Relevant keywords help recruiters
                find candidates whose skills match
                job requirements.
              </p>
            </div>

            <div
              className="
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-700
                p-8
                rounded-3xl
                shadow-lg
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Skills Analysis
              </h3>

              <p className="text-slate-600 dark:text-slate-300">
                ATS software identifies technical
                and soft skills to determine
                candidate suitability.
              </p>
            </div>

            <div
              className="
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-700
                p-8
                rounded-3xl
                shadow-lg
                transition-all
                duration-300
              "
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
                Resume Structure
              </h3>

              <p className="text-slate-600 dark:text-slate-300">
                Properly organized resumes are easier
                for ATS systems to parse accurately.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Common Mistakes */}
      <section className="pb-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            Common ATS Mistakes
          </h2>

          <div
            className="
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-700
              p-10
              rounded-3xl
              shadow-lg
              transition-all
              duration-300
            "
          >

            <ul className="space-y-4 text-lg text-slate-700 dark:text-slate-300">

              <li>❌ Missing keywords from the job description</li>

              <li>❌ Using images and graphics inside resumes</li>

              <li>❌ Poor formatting and inconsistent headings</li>

              <li>❌ Missing skills section</li>

              <li>❌ Generic resume for every application</li>

            </ul>

          </div>

        </div>

      </section>

    </div>
  );
}

export default ATSAnalysis;