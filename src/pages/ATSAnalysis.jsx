function ATSAnalysis() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-violet-100">

      {/* Hero */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-6xl font-bold text-slate-900">
            ATS Analysis
          </h1>

          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            Understand how Applicant Tracking Systems evaluate
            your resume and learn how to improve your chances
            of getting shortlisted.
          </p>

        </div>

      </section>

      {/* Score Cards */}
      <section className="px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6">

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-5xl font-bold text-green-600">
              87%
            </h2>

            <p className="mt-3">
              ATS Score
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-5xl font-bold text-blue-600">
              95%
            </h2>

            <p className="mt-3">
              Formatting
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-5xl font-bold text-violet-600">
              80%
            </h2>

            <p className="mt-3">
              Keywords
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg text-center">
            <h2 className="text-5xl font-bold text-orange-600">
              90%
            </h2>

            <p className="mt-3">
              Skills
            </p>
          </div>

        </div>

      </section>

      {/* What ATS Checks */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            What ATS Systems Check
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Resume Formatting
              </h3>

              <p className="text-slate-600">
                ATS systems prefer clean layouts,
                proper section headings, and
                readable resume structures.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Keyword Matching
              </h3>

              <p className="text-slate-600">
                Relevant keywords help recruiters
                find candidates whose skills match
                job requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Skills Analysis
              </h3>

              <p className="text-slate-600">
                ATS software identifies technical
                and soft skills to determine
                candidate suitability.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4">
                Resume Structure
              </h3>

              <p className="text-slate-600">
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

          <h2 className="text-4xl font-bold text-center mb-12">
            Common ATS Mistakes
          </h2>

          <div className="bg-white p-10 rounded-3xl shadow-lg">

            <ul className="space-y-4 text-lg">

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