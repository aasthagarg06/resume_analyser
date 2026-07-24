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
        {/* ================= HERO ================= */}

<div className="text-center mb-24">

  <h2
    className="
      mt-8
      text-5xl
      md:text-6xl
      font-bold
      text-slate-900
      dark:text-white
      leading-tight
    "
  >
    AI-Powered Resume Intelligence
  </h2>

  <p
    className="
      mt-8
      max-w-4xl
      mx-auto
      text-xl
      leading-9
      text-slate-600
      dark:text-slate-300
    "
  >
    ResumeIQ helps students, fresh graduates, and professionals
    optimize their resumes with intelligent ATS analysis,
    job description matching, and AI-powered recommendations—
    making every application stronger before it reaches recruiters.
  </p>

</div>

{/* ================= WHY RESUMEIQ EXISTS ================= */}

<div className="grid lg:grid-cols-2 gap-10 items-center mb-24">

  {/* Left */}

  <div>

    <p
      className="
        uppercase
        tracking-[0.2em]
        text-blue-600
        dark:text-blue-400
        font-semibold
        mb-4
      "
    >
      Why ResumeIQ
    </p>

    <h3
      className="
        text-4xl
        font-bold
        text-slate-900
        dark:text-white
        mb-6
      "
    >
      Built to Help Every Resume Stand Out
    </h3>

    <p
      className="
        text-lg
        leading-8
        text-slate-600
        dark:text-slate-300
        mb-6
      "
    >
      Many qualified candidates never reach recruiters because
      Applicant Tracking Systems (ATS) reject resumes with poor
      formatting, weak keyword optimization, or insufficient
      alignment with job descriptions.
    </p>

    <p
      className="
        text-lg
        leading-8
        text-slate-600
        dark:text-slate-300
      "
    >
      ResumeIQ identifies these issues before you apply. It
      analyzes your resume, compares it against job
      descriptions, and provides clear, actionable suggestions
      to help improve ATS compatibility and overall resume
      quality.
    </p>

  </div>

  {/* Right */}

  <div className="space-y-6">

    <div
      className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-700
        rounded-3xl
        p-6
        shadow-lg
        hover:border-blue-500
        hover:shadow-2xl
        transition
      "
    >

      <h4
        className="
          text-xl
          font-bold
          text-slate-900
          dark:text-white
          mb-2
        "
      >
        📄 Resume Analysis
      </h4>

      <p
        className="
          text-slate-600
          dark:text-slate-300
        "
      >
        Evaluate resume formatting, readability, and ATS
        compatibility to uncover hidden issues.
      </p>

    </div>

    <div
      className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-700
        rounded-3xl
        p-6
        shadow-lg
        hover:border-violet-500
        hover:shadow-2xl
        transition
      "
    >

      <h4
        className="
          text-xl
          font-bold
          text-slate-900
          dark:text-white
          mb-2
        "
      >
        🎯 Job Description Matching
      </h4>

      <p
        className="
          text-slate-600
          dark:text-slate-300
        "
      >
        Compare your resume with a target job description to
        identify missing skills, keywords, and qualifications.
      </p>

    </div>

    <div
      className="
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-700
        rounded-3xl
        p-6
        shadow-lg
        hover:border-emerald-500
        hover:shadow-2xl
        transition
      "
    >

      <h4
        className="
          text-xl
          font-bold
          text-slate-900
          dark:text-white
          mb-2
        "
      >
        💡 AI Recommendations
      </h4>

      <p
        className="
          text-slate-600
          dark:text-slate-300
        "
      >
        Receive personalized suggestions to improve your resume
        and increase your chances of passing ATS screening.
      </p>

    </div>

  </div>

</div>

        {/* Who We Help */}
        {/* ================= WHO WE HELP ================= */}

<div className="mb-24">

  <div className="text-center mb-14">

    <span className="uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold">
      Who We Serve
    </span>

    <h3 className="mt-4 text-5xl font-bold text-slate-900 dark:text-white">
      Designed for Every Stage of Your Career
    </h3>

    <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-8">
      Whether you're applying for your first internship or your next leadership
      role, ResumeIQ helps you create resumes that are clear, ATS-friendly, and
      tailored to your goals.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Students */}

    <div
      className="
        bg-white
        dark:bg-slate-900
        rounded-3xl
        border
        border-slate-200
        dark:border-slate-700
        p-8
        shadow-md
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-blue-500
        transition-all
        duration-300
      "
    >

      <div className="text-5xl mb-6">
        👩‍🎓
      </div>

      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
        Students
      </h4>

      <p className="text-slate-600 dark:text-slate-300 leading-7 mb-6">
        Build internship-ready resumes with strong formatting,
        ATS optimization, and industry-relevant keywords.
      </p>

      <ul className="space-y-3 text-slate-600 dark:text-slate-300">

        <li>✓ Internship Applications</li>

        <li>✓ Campus Placements</li>

        <li>✓ Resume Building</li>

      </ul>

    </div>

    {/* Early Career */}

    <div
      className="
        bg-white
        dark:bg-slate-900
        rounded-3xl
        border
        border-slate-200
        dark:border-slate-700
        p-8
        shadow-md
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-violet-500
        transition-all
        duration-300
      "
    >

      <div className="text-5xl mb-6">
        💼
      </div>

      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
        Early-Career Professionals
      </h4>

      <p className="text-slate-600 dark:text-slate-300 leading-7 mb-6">
        Improve your resume before applying for full-time roles
        by aligning it with job descriptions and ATS requirements.
      </p>

      <ul className="space-y-3 text-slate-600 dark:text-slate-300">

        <li>✓ Entry-Level Jobs</li>

        <li>✓ ATS Optimization</li>

        <li>✓ Resume Enhancement</li>

      </ul>

    </div>

    {/* Experienced */}

    <div
      className="
        bg-white
        dark:bg-slate-900
        rounded-3xl
        border
        border-slate-200
        dark:border-slate-700
        p-8
        shadow-md
        hover:-translate-y-2
        hover:shadow-2xl
        hover:border-emerald-500
        transition-all
        duration-300
      "
    >

      <div className="text-5xl mb-6">
        🚀
      </div>

      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
        Experienced Professionals
      </h4>

      <p className="text-slate-600 dark:text-slate-300 leading-7 mb-6">
        Tailor resumes for promotions, career transitions,
        and specialized roles with AI-powered recommendations.
      </p>

      <ul className="space-y-3 text-slate-600 dark:text-slate-300">

        <li>✓ Career Growth</li>

        <li>✓ Role Transitions</li>

        <li>✓ Executive Resume Quality</li>

      </ul>

    </div>

  </div>

</div>

        {/* Features */}
        {/* ================= CORE FEATURES ================= */}

<div className="mb-24">

  <div className="text-center mb-14">

    <span className="uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold">
      Core Features
    </span>

    <h3 className="mt-4 text-5xl font-bold text-slate-900 dark:text-white">
      Everything You Need to Build a Better Resume
    </h3>

    <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-8">
      ResumeIQ combines intelligent resume analysis with practical
      recommendations to help you submit stronger job applications.
    </p>

  </div>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Card 1 */}

    <div
      className="
        group
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-700
        rounded-3xl
        p-8
        shadow-md
        hover:shadow-2xl
        hover:border-blue-500
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >

      <div className="text-5xl mb-6">
        📊
      </div>

      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
        ATS Analysis
      </h4>

      <p className="text-slate-600 dark:text-slate-300 leading-7 mb-6">
        Analyze formatting, structure, keyword usage, and ATS compatibility
        to identify issues that could prevent your resume from reaching recruiters.
      </p>

      <ul className="space-y-3 text-slate-600 dark:text-slate-300">

        <li>✓ ATS Compatibility Score</li>

        <li>✓ Formatting Review</li>

        <li>✓ Resume Structure Analysis</li>

      </ul>

    </div>

    {/* Card 2 */}

    <div
      className="
        group
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-700
        rounded-3xl
        p-8
        shadow-md
        hover:shadow-2xl
        hover:border-violet-500
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >

      <div className="text-5xl mb-6">
        🎯
      </div>

      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
        Job Description Matching
      </h4>

      <p className="text-slate-600 dark:text-slate-300 leading-7 mb-6">
        Compare your resume against a target job description and discover
        missing skills, keywords, and qualifications.
      </p>

      <ul className="space-y-3 text-slate-600 dark:text-slate-300">

        <li>✓ Keyword Matching</li>

        <li>✓ Skill Gap Detection</li>

        <li>✓ Job Alignment Analysis</li>

      </ul>

    </div>

    {/* Card 3 */}

    <div
      className="
        group
        bg-white
        dark:bg-slate-900
        border
        border-slate-200
        dark:border-slate-700
        rounded-3xl
        p-8
        shadow-md
        hover:shadow-2xl
        hover:border-emerald-500
        transition-all
        duration-300
        hover:-translate-y-2
      "
    >

      <div className="text-5xl mb-6">
        💡
      </div>

      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
        AI Suggestions
      </h4>

      <p className="text-slate-600 dark:text-slate-300 leading-7 mb-6">
        Receive personalized recommendations that help improve clarity,
        impact, keyword relevance, and overall resume quality.
      </p>

      <ul className="space-y-3 text-slate-600 dark:text-slate-300">

        <li>✓ Resume Improvements</li>

        <li>✓ Better Content Suggestions</li>

        <li>✓ Actionable Recommendations</li>

      </ul>

    </div>

  </div>

</div>

        {/* Stats */}
        {/* ================= WHY CHOOSE RESUMEIQ ================= */}

<div className="mb-24">

  <div className="text-center mb-14">

    <span className="uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 font-semibold">
      Why Choose ResumeIQ
    </span>

    <h3 className="mt-4 text-5xl font-bold text-slate-900 dark:text-white">
      Built to Help You Apply with Confidence
    </h3>

    <p className="mt-5 max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-8">
      ResumeIQ combines intelligent analysis with a modern user experience,
      helping you understand your resume and improve it before submitting
      your next job application.
    </p>

  </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Card 1 */}

    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl hover:border-blue-500 hover:-translate-y-2 transition-all duration-300">

      <div className="text-5xl mb-5">⚡</div>

      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
        Fast Analysis
      </h4>

      <p className="text-slate-600 dark:text-slate-300 leading-7">
        Upload your resume and receive detailed ATS insights within seconds.
      </p>

    </div>

    {/* Card 2 */}

    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl hover:border-violet-500 hover:-translate-y-2 transition-all duration-300">

      <div className="text-5xl mb-5">🤖</div>

      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
        AI-Powered Suggestions
      </h4>

      <p className="text-slate-600 dark:text-slate-300 leading-7">
        Receive practical recommendations to improve clarity, keywords,
        formatting, and resume impact.
      </p>

    </div>

    {/* Card 3 */}

    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl hover:border-emerald-500 hover:-translate-y-2 transition-all duration-300">

      <div className="text-5xl mb-5">🎯</div>

      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
        Job Description Matching
      </h4>

      <p className="text-slate-600 dark:text-slate-300 leading-7">
        Compare your resume against a target job description and discover
        missing skills and keywords.
      </p>

    </div>

    {/* Card 4 */}

    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300">

      <div className="text-5xl mb-5">📄</div>

      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
        ATS-Friendly Reports
      </h4>

      <p className="text-slate-600 dark:text-slate-300 leading-7">
        Understand formatting issues, resume structure, and keyword optimization
        through detailed reports.
      </p>

    </div>

    {/* Card 5 */}

    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl hover:border-orange-500 hover:-translate-y-2 transition-all duration-300">

      <div className="text-5xl mb-5">🔒</div>

      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
        Secure Resume Processing
      </h4>

      <p className="text-slate-600 dark:text-slate-300 leading-7">
        Your resume is processed securely, ensuring a safe and reliable
        analysis experience.
      </p>

    </div>

    {/* Card 6 */}

    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-700 shadow-md hover:shadow-2xl hover:border-pink-500 hover:-translate-y-2 transition-all duration-300">

      <div className="text-5xl mb-5">💻</div>

      <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
        Modern User Experience
      </h4>

      <p className="text-slate-600 dark:text-slate-300 leading-7">
        Enjoy a responsive interface with dark mode support and an intuitive
        workflow across all devices.
      </p>

    </div>

  </div>

</div>

      </div>
    </section>
  );
}

export default AboutSection;