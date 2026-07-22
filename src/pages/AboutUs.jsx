function AboutSection() {
  return (
    <section
      id="about"
      className="
        min-h-screen
  py-24
  px-6
  bg-gradient-to-br
  from-slate-300
  via-blue-50
  to-violet-100
  dark:from-slate-950
  dark:via-slate-900
  dark:to-slate-950
  transition-colors
  duration-300
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white transition-colors">
            About ResumeIQ
          </h2>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto transition-colors">
            ResumeIQ helps students and job seekers
            create stronger resumes through ATS
            analysis, skill gap detection, and
            AI-powered recommendations.
          </p>

        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">

          <div
            className="
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-700
              p-8
              rounded-3xl
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
              hover:scale-105
  hover:shadow-2xl
  hover:border-blue-500
  cursor-pointer
            "
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              🎯 Our Mission
            </h3>

            <p className="text-slate-600 dark:text-slate-300">
              Help every student understand how
              recruiters and ATS systems evaluate
              resumes before applying.
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
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
              hover:scale-105
  hover:shadow-2xl
  hover:border-blue-500
  cursor-pointer
            "
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              🚀 Our Vision
            </h3>

            <p className="text-slate-600 dark:text-slate-300">
              Build a complete AI career assistant
              that helps users improve resumes,
              prepare for interviews, and identify
              skill gaps.
            </p>
          </div>

        </div>

        {/* Who We Help */}
        <div className="mb-16">

          <h3 className="text-4xl font-bold text-center mb-10 text-slate-900 dark:text-white">
            Who We Help
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <div
              className="
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-700
                p-8
                rounded-3xl
                shadow-md
                transition-all
                duration-300
                hover:scale-105
  hover:shadow-2xl
  hover:border-blue-500
  cursor-pointer
              "
            >
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                👩‍🎓 Students
              </h4>

              <p className="text-slate-600 dark:text-slate-300">
                Build internship-ready resumes.
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
                shadow-md
                transition-all
                duration-300
                hover:scale-105
  hover:shadow-2xl
  hover:border-blue-500
  cursor-pointer
              "
            >
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                👨‍💼 Freshers
              </h4>

              <p className="text-slate-600 dark:text-slate-300">
                Improve placement opportunities.
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
                shadow-md
                transition-all
                duration-300
                hover:scale-105
  hover:shadow-2xl
  hover:border-blue-500
  cursor-pointer
              "
            >
              <h4 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">
                🚀 Professionals
              </h4>

              <p className="text-slate-600 dark:text-slate-300">
                Optimize resumes for career growth.
              </p>
            </div>

          </div>

        </div>

        {/* Features */}
        <div className="mb-16">

          <h3 className="text-4xl font-bold text-center mb-10 text-slate-900 dark:text-white">
            What We Offer
          </h3>

          <div className="grid md:grid-cols-4 gap-6">

            <div
              className="
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-700
                p-6
                rounded-2xl
                shadow-md
                text-slate-900
                dark:text-white
                transition-all
                duration-300
                hover:scale-105
  hover:shadow-2xl
  hover:border-blue-500
  cursor-pointer
              "
            >
              ATS Analysis
            </div>

            <div
              className="
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-700
                p-6
                rounded-2xl
                shadow-md
                text-slate-900
                dark:text-white
                transition-all
                duration-300
                hover:scale-105
  hover:shadow-2xl
  hover:border-blue-500
  cursor-pointer
              "
            >
              Skill Detection
            </div>

            <div
              className="
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-700
                p-6
                rounded-2xl
                shadow-md
                text-slate-900
                dark:text-white
                transition-all
                duration-300
                hover:scale-105
  hover:shadow-2xl
  hover:border-blue-500
  cursor-pointer
              "
            >
              JD Matching
            </div>

            <div
              className="
                bg-white
                dark:bg-slate-900
                border
                border-slate-200
                dark:border-slate-700
                p-6
                rounded-2xl
                shadow-md
                text-slate-900
                dark:text-white
                transition-all
                duration-300
                hover:scale-105
  hover:shadow-2xl
  hover:border-blue-500
  cursor-pointer
              "
            >
              AI Suggestions
            </div>

          </div>

        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white p-10 rounded-3xl text-center shadow-xl">
            <h4 className="text-5xl font-bold">
              1000+
            </h4>

            <p className="mt-3">
              Resumes Analyzed
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white p-10 rounded-3xl text-center shadow-xl">
            <h4 className="text-5xl font-bold">
              95%
            </h4>

            <p className="mt-3">
              ATS Accuracy
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-violet-600 text-white p-10 rounded-3xl text-center shadow-xl">
            <h4 className="text-5xl font-bold">
              24/7
            </h4>

            <p className="mt-3">
              AI Insights
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutSection;