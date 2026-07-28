
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Briefcase,
  Upload,
  FileText,
  Search,
  Cpu,
  BarChart3,
  CheckCircle2,
  Code2,
  FileSearch,
  GraduationCap,
  Lightbulb,
  Target,
  ClipboardCheck,
  SearchCheck,
  Puzzle,
  Rocket,
} from "lucide-react";


function JDLearnMore() {
  const navigate = useNavigate();

  const workflow = [
    {
      icon: Upload,
      title: "Upload Resume",
      desc: "Upload your resume in PDF format. ResumeIQ extracts the content while preserving important information required for comparison.",
    },
    {
      icon: FileText,
      title: "Paste Job Description",
      desc: "Paste the complete job description from any internship or full-time opportunity.",
    },
    {
      icon: Search,
      title: "Resume Text Extraction",
      desc: "Your resume is converted into structured text so that skills, education, projects, and experience can be analyzed.",
    },
    {
      icon: Cpu,
      title: "AI Comparison Engine",
      desc: "ResumeIQ compares your resume against the job description using AI-powered analysis and keyword matching.",
    },
    {
      icon: BarChart3,
      title: "Generate Compatibility Scores",
      desc: "Receive detailed scores for skills, keywords, experience, education, and overall compatibility.",
    },
    {
      icon: CheckCircle2,
      title: "Receive Actionable Insights",
      desc: "Discover your strengths, missing skills, weaknesses, and personalized suggestions to improve your resume.",
    },
  ];

  const analysisCards = [
    {
      icon: Code2,
      title: "Skills Matching",
      desc: "Compare programming languages, frameworks, tools, databases, and technologies mentioned in your resume with the job description.",
      bullets: [
        "Programming Languages",
        "Frameworks & Libraries",
        "Developer Tools",
        "Databases",
      ],
    },
    {
      icon: FileSearch,
      title: "Keyword Analysis",
      desc: "Identify important ATS keywords and measure how effectively they appear throughout your resume.",
      bullets: [
        "Technical Keywords",
        "Industry Terms",
        "Role-Specific Skills",
        "ATS Optimization",
      ],
    },
    {
      icon: Briefcase,
      title: "Experience Evaluation",
      desc: "Analyze internships, projects, and work experience to determine how well they align with the job requirements.",
      bullets: [
        "Projects",
        "Internships",
        "Responsibilities",
        "Achievements",
      ],
    },
    {
      icon: GraduationCap,
      title: "Education Matching",
      desc: "Verify whether your educational qualifications satisfy the requirements mentioned in the job description.",
      bullets: [
        "Degree",
        "Branch",
        "Academic Background",
        "Qualifications",
      ],
    },
    {
      icon: Target,
      title: "Strength & Gap Analysis",
      desc: "Highlight where your resume already matches the role and identify missing qualifications.",
      bullets: [
        "Matched Skills",
        "Missing Skills",
        "Strengths",
        "Weaknesses",
      ],
    },
    {
      icon: Lightbulb,
      title: "Personalized Suggestions",
      desc: "Receive practical recommendations to improve your resume specifically for the selected job description.",
      bullets: [
        "Resume Improvements",
        "Missing Keywords",
        "Skill Recommendations",
        "Optimization Tips",
      ],
    },
  ];

  return (
    <section
  className="
    bg-white
    text-slate-900
    dark:bg-slate-950
    dark:text-white
    transition-colors
    duration-300
  "
>

      {/* ================= HERO ================= */}

      <section
  className="
    relative
    overflow-hidden
    py-28
    px-6
    bg-white
    dark:bg-slate-950
    transition-colors
    duration-300
"
>
  {/* Background Blur */}
  <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[140px]" />
  <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[140px]" />

  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative max-w-5xl mx-auto text-center"
  >
    <h1
      className="
        text-5xl
        md:text-7xl
        font-extrabold
        leading-tight
        text-slate-900
        dark:text-white
        transition-colors
        duration-300
      "
    >
      Compare Your Resume

      <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
        {" "}With Any Job Description
      </span>
    </h1>

    <p
      className="
        mt-8
        text-xl
        max-w-3xl
        mx-auto
        leading-relaxed
        text-slate-600
        dark:text-slate-300
        transition-colors
        duration-300
      "
    >
      ResumeIQ intelligently compares your resume against any job
      description to measure compatibility, identify missing skills,
      evaluate experience, and provide AI-powered recommendations that
      help you tailor your resume for every opportunity.
    </p>

    <button
      onClick={() => navigate("/jd-matching")}
      className="
        mt-12
        px-10
        py-4
        rounded-2xl
        bg-gradient-to-r
        from-blue-600
        to-violet-600
        text-white
        text-lg
        font-bold
        shadow-lg
        hover:scale-[1.02]
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
      Compare Resume
    </button>
  </motion.div>
</section>

      {/* ================= WHAT WE ANALYZE ================= */}

      <section
  className="
    py-24
    px-6
    bg-slate-50
    dark:bg-slate-900/40
    transition-colors
    duration-300
  "
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center">

      <h2
        className="
          text-4xl
          font-bold
          text-slate-900
          dark:text-white
          transition-colors
          duration-300
        "
      >
        What We Analyze
      </h2>

      <p
        className="
          mt-5
          max-w-3xl
          mx-auto
          text-slate-600
          dark:text-slate-400
          transition-colors
          duration-300
        "
      >
        ResumeIQ evaluates multiple aspects of your resume to determine
        how closely it aligns with the job description.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      {analysisCards.map((card, index) => {

        const Icon = card.icon;

        return (

          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}

            className="
              group

              rounded-3xl

              bg-white
              dark:bg-slate-900

              border
              border-slate-200
              dark:border-slate-700

              shadow-lg
              dark:shadow-black/30

              p-8

              transition-all
              duration-300

              hover:scale-[1.01]
              hover:-translate-y-1
              hover:border-blue-500
              hover:shadow-2xl
            "
          >

            <div
              className="
                w-14
                h-14
                rounded-2xl

                bg-blue-100
                dark:bg-blue-500/15

                flex
                items-center
                justify-center

                transition-colors
                duration-300
              "
            >
              <Icon
                className="
                  text-blue-600
                  dark:text-blue-400
                  group-hover:scale-110
                  transition
                "
              />
            </div>

            <h3
              className="
                mt-6
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
                transition-colors
                duration-300
              "
            >
              {card.title}
            </h3>

            <p
              className="
                mt-4
                leading-7
                text-slate-600
                dark:text-slate-300
                transition-colors
                duration-300
              "
            >
              {card.desc}
            </p>

            <ul className="mt-6 space-y-3">

              {card.bullets.map((item) => (

                <li
                  key={item}
                  className="
                    flex
                    items-center
                    gap-3

                    text-slate-600
                    dark:text-slate-400

                    transition-colors
                    duration-300
                  "
                >
                  <CheckCircle2
                    size={18}
                    className="text-green-500"
                  />

                  {item}

                </li>

              ))}

            </ul>

          </motion.div>

        );

      })}

    </div>

  </div>
</section>



            {/* ================= UNDERSTANDING YOUR REPORT ================= */}

      <section
  className="
    py-24
    px-6
    bg-white
    dark:bg-slate-950
    transition-colors
    duration-300
  "
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center">

      <h2
        className="
          text-4xl
          font-bold
          text-slate-900
          dark:text-white
          transition-colors
          duration-300
        "
      >
        Understanding Your JD Match Report
      </h2>

      <p
        className="
          mt-5
          max-w-3xl
          mx-auto
          text-slate-600
          dark:text-slate-400
          transition-colors
          duration-300
        "
      >
        ResumeIQ generates multiple compatibility scores so you can
        understand exactly how your resume aligns with a specific job
        description.
      </p>

    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

      {[
        {
          title: "Overall Match Score",
          desc:
            "Represents the overall compatibility between your resume and the job description by combining multiple evaluation factors.",
        },
        {
          title: "Skills Score",
          desc:
            "Measures how many required technical skills from the job description are found in your resume.",
        },
        {
          title: "Keyword Score",
          desc:
            "Evaluates whether important ATS keywords appear naturally throughout your resume.",
        },
        {
          title: "Experience Score",
          desc:
            "Analyzes internships, projects, work experience, and responsibilities against the employer's expectations.",
        },
        {
          title: "Education Score",
          desc:
            "Checks whether your educational qualifications satisfy the degree or branch requirements mentioned in the job description.",
        },
        {
          title: "Compatibility Analysis",
          desc:
            "Combines all evaluation factors to generate actionable insights that help improve your resume for the selected role.",
        },
      ].map((item) => (

        <div
          key={item.title}
          className="
            group

            rounded-3xl

            bg-white
            dark:bg-slate-900

            border
            border-slate-200
            dark:border-slate-700

            shadow-lg
            dark:shadow-black/30

            p-8

            transition-all
            duration-300

            hover:scale-[1.01]
            hover:-translate-y-1
            hover:border-blue-500
            hover:shadow-2xl
          "
        >

          <h3
            className="
              text-2xl
              font-bold
              text-slate-900
              dark:text-white
              transition-colors
              duration-300
            "
          >
            {item.title}
          </h3>

          <p
            className="
              mt-5
              leading-8
              text-slate-600
              dark:text-slate-300
              transition-colors
              duration-300
            "
          >
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>

      {/* ================= UNDERSTANDING YOUR ANALYSIS ================= */}

      <section
  className="
    py-24
    px-6
    bg-slate-50
    dark:bg-slate-900/40
    transition-colors
    duration-300
  "
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center">

      <h2
        className="
          text-4xl
          font-bold
          text-slate-900
          dark:text-white
          transition-colors
          duration-300
        "
      >
        Understanding Your Analysis
      </h2>

      <p
        className="
          mt-5
          max-w-3xl
          mx-auto
          text-slate-600
          dark:text-slate-400
          transition-colors
          duration-300
        "
      >
        Beyond scores, ResumeIQ explains why your resume matches or
        doesn't match the selected job.
      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-8 mt-16">

      {/* Matched Skills */}

      <div
        className="
          group
          rounded-3xl
          bg-white
          dark:bg-slate-900
          border
          border-slate-200
          dark:border-slate-700
          shadow-lg
          dark:shadow-black/30
          p-8
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-500
          hover:shadow-2xl
        "
      >

        <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
          Matched Skills
        </h3>

        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
          Displays technical skills and technologies that appear in both
          your resume and the job description.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">

          {[
            "React",
            "JavaScript",
            "Git",
            "SQL",
            "REST API",
          ].map((item) => (

            <span
              key={item}
              className="
                px-4
                py-2
                rounded-full
                bg-green-100
                dark:bg-green-500/20
                text-green-700
                dark:text-green-300
                font-medium
              "
            >
              {item}
            </span>

          ))}

        </div>

      </div>

      {/* Missing Skills */}

      <div
        className="
          group
          rounded-3xl
          bg-white
          dark:bg-slate-900
          border
          border-slate-200
          dark:border-slate-700
          shadow-lg
          dark:shadow-black/30
          p-8
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-500
          hover:shadow-2xl
        "
      >

        <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">
          Missing Skills
        </h3>

        <p className="mt-5 leading-8 text-slate-600 dark:text-slate-300">
          Highlights technologies or qualifications required by the job
          description but not detected in your resume.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">

          {[
            "Docker",
            "AWS",
            "MongoDB",
            "TypeScript",
          ].map((item) => (

            <span
              key={item}
              className="
                px-4
                py-2
                rounded-full
                bg-red-100
                dark:bg-red-500/20
                text-red-700
                dark:text-red-300
                font-medium
              "
            >
              {item}
            </span>

          ))}

        </div>

      </div>

      {/* Strengths */}

      <div
        className="
          group
          rounded-3xl
          bg-white
          dark:bg-slate-900
          border
          border-slate-200
          dark:border-slate-700
          shadow-lg
          dark:shadow-black/30
          p-8
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-500
          hover:shadow-2xl
        "
      >

        <h3 className="text-2xl font-bold text-green-600 dark:text-green-400">
          Strengths
        </h3>

        <ul className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">

          <li>✓ Strong React development experience.</li>

          <li>✓ Relevant frontend projects.</li>

          <li>✓ Good alignment with required skills.</li>

          <li>✓ Solid educational background.</li>

        </ul>

      </div>

      {/* Weaknesses */}

      <div
        className="
          group
          rounded-3xl
          bg-white
          dark:bg-slate-900
          border
          border-slate-200
          dark:border-slate-700
          shadow-lg
          dark:shadow-black/30
          p-8
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-500
          hover:shadow-2xl
        "
      >

        <h3 className="text-2xl font-bold text-red-600 dark:text-red-400">
          Weaknesses
        </h3>

        <ul className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">

          <li>✗ Missing cloud technologies.</li>

          <li>✗ Limited backend exposure.</li>

          <li>✗ Missing several ATS keywords.</li>

          <li>✗ Resume lacks measurable achievements.</li>

        </ul>

      </div>

      {/* Suggestions */}

      <div
        className="
          md:col-span-2
          group
          rounded-3xl
          bg-white
          dark:bg-slate-900
          border
          border-slate-200
          dark:border-slate-700
          shadow-lg
          dark:shadow-black/30
          p-8
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-blue-500
          hover:shadow-2xl
        "
      >

        <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Personalized Suggestions
        </h3>

        <ul className="mt-6 space-y-4 text-slate-600 dark:text-slate-300">

          <li>• Add missing technical skills if you have experience with them.</li>

          <li>• Include more measurable project achievements.</li>

          <li>• Mention important ATS keywords naturally throughout your resume.</li>

          <li>• Tailor your projects and experience for the specific role.</li>

          <li>• Keep your resume concise and relevant to the position.</li>

        </ul>

      </div>

    </div>

  </div>

</section>

      {/* ================= SCORE CALCULATION ================= */}

      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto">

          <div className="text-center">

            <h2 className="text-4xl font-bold">

              How Match Scores Are Calculated

            </h2>

            <p className="mt-5 text-slate-400">

              ResumeIQ evaluates multiple factors to estimate how well your
              resume aligns with the selected job description.

            </p>

          </div>

          <div className="space-y-8 mt-16">

            {[
              ["Skills Match",30],
              ["Keyword Match",25],
              ["Experience",20],
              ["Education",15],
              ["Overall Resume Alignment",10],
            ].map(([label,value]) => (

              <div key={label}>

                <div className="flex justify-between mb-3">

                  <span className="font-semibold">

                    {label}

                  </span>

                  <span className="font-bold">

                    {value}%

                  </span>

                </div>

                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                    style={{ width: `${value}%` }}
                  />

                </div>

              </div>

            ))}

          </div>

          <p className="mt-12 text-center text-slate-400 leading-8">

            The final compatibility score combines skills, keyword relevance,
            experience, education, and overall alignment with the job
            description to provide a balanced evaluation.

          </p>

        </div>

      </section>
      

            {/* ================= WHY JD MATCHING MATTERS ================= */}

<section
  className="
    py-24
    px-6
    bg-slate-50
    dark:bg-slate-900/40
    transition-colors
    duration-300
  "
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center">
      <h2
        className="
          text-4xl
          font-bold
          text-slate-900
          dark:text-white
          transition-colors
          duration-300
        "
      >
        Why Job Description Matching Matters
      </h2>

      <p
        className="
          mt-5
          max-w-3xl
          mx-auto
          text-slate-600
          dark:text-slate-400
          transition-colors
          duration-300
        "
      >
        Every employer looks for different skills and qualifications.
        Tailoring your resume to each job description can significantly
        improve your chances of getting shortlisted.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

      {[
        {
          icon: ClipboardCheck,
          title: "Tailor Every Application",
          desc: "Customize your resume for every internship or job instead of sending the same resume everywhere.",
        },
        {
          icon: SearchCheck,
          title: "Improve ATS Compatibility",
          desc: "Include the keywords and technical skills recruiters and ATS systems expect to see.",
        },
        {
          icon: Puzzle,
          title: "Identify Missing Skills",
          desc: "Discover which technologies, tools, or qualifications are missing before you apply.",
        },
        {
          icon: Rocket,
          title: "Increase Interview Chances",
          desc: "A resume that closely matches the job description has a better chance of progressing through the screening process.",
        },
      ].map((card) => {

        const Icon = card.icon;

        return (

          <div
            key={card.title}
            className="
              group
              rounded-3xl
              bg-white
              dark:bg-slate-900
              border
              border-slate-200
              dark:border-slate-700
              shadow-lg
              dark:shadow-black/30
              p-8
              transition-all
              duration-300
              hover:scale-[1.02]
              hover:-translate-y-1
              hover:border-blue-500
              hover:shadow-2xl
            "
          >

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-blue-100
                dark:bg-blue-500/15
                flex
                items-center
                justify-center
                transition-all
                duration-300
                group-hover:scale-110
              "
            >
              <Icon
                size={30}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>

            <h3
              className="
                mt-6
                text-2xl
                font-bold
                text-slate-900
                dark:text-white
              "
            >
              {card.title}
            </h3>

            <p
              className="
                mt-5
                leading-8
                text-slate-600
                dark:text-slate-300
              "
            >
              {card.desc}
            </p>

          </div>

        );

      })}

    </div>

  </div>
</section>

      {/* ================= FAQ ================= */}

      <section
  className="
    py-24
    px-6
    bg-slate-50
    dark:bg-slate-900/40
    transition-colors
    duration-300
  "
>
  <div className="max-w-5xl mx-auto">

    <div className="text-center">

      <h2
        className="
          text-4xl
          font-bold
          text-slate-900
          dark:text-white
          transition-colors
          duration-300
        "
      >
        Frequently Asked Questions
      </h2>

    </div>

    <div className="space-y-8 mt-16">

      {[
        {
          q: "Why is my match score low?",
          a: "A low score usually means your resume is missing important skills, keywords, experience, or educational qualifications mentioned in the job description.",
        },
        {
          q: "Can I compare my resume with different job descriptions?",
          a: "Yes. ResumeIQ allows you to compare the same resume against multiple job descriptions so you can tailor your application for each role.",
        },
        {
          q: "Does a high match score guarantee an interview?",
          a: "No. A high compatibility score improves your resume's relevance, but interview decisions also depend on recruiters, technical assessments, and other evaluation criteria.",
        },
        {
          q: "Should I customize my resume for every application?",
          a: "Yes. Tailoring your resume for each job helps highlight the most relevant skills, projects, and experience while improving ATS compatibility.",
        },
      ].map((faq) => (

        <div
          key={faq.q}
          className="
            group
            rounded-3xl

            bg-white
            dark:bg-slate-900

            border
            border-slate-200
            dark:border-slate-700

            shadow-lg
            dark:shadow-black/30

            p-8

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-blue-500
            hover:shadow-2xl
          "
        >

          <h3
            className="
              text-2xl
              font-bold
              text-slate-900
              dark:text-white
              transition-colors
              duration-300
            "
          >
            {faq.q}
          </h3>

          <p
            className="
              mt-5
              leading-8
              text-slate-600
              dark:text-slate-300
              transition-colors
              duration-300
            "
          >
            {faq.a}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>

      {/* ================= CTA ================= */}

      <section
  className="
    py-28
    px-6
    bg-white
    dark:bg-slate-950
    transition-colors
    duration-300
  "
>
  <div className="max-w-5xl mx-auto">

    <div
      className="
        rounded-[40px]
        bg-gradient-to-r
        from-blue-600
        via-indigo-600
        to-violet-600

        p-14
        text-center

        shadow-2xl

        transition-all
        duration-300

        hover:shadow-blue-500/20
      "
    >

      <h2 className="text-5xl font-bold text-white">
        Ready to Compare Your Resume?
      </h2>

      <p
        className="
          mt-8
          max-w-3xl
          mx-auto

          text-xl
          leading-8

          text-blue-100
        "
      >
        Upload your resume, paste a job description, and receive
        AI-powered compatibility scores, matched skills, missing
        technologies, strengths, weaknesses, and personalized
        recommendations within seconds.
      </p>

      <button
        onClick={() => navigate("/jd-matching")}
        className="
          mt-12

          inline-flex
          items-center
          justify-center

          px-10
          py-4

          rounded-2xl

          bg-white
          text-blue-700

          font-bold
          text-lg

          shadow-xl

          transition-all
          duration-300

          hover:scale-105
          hover:shadow-2xl

          active:scale-95
        "
      >
        Compare Resume
      </button>

    </div>

  </div>
</section>

      {/* ================= DISCLAIMER ================= */}

      <section
  className="
    pb-24
    px-6
    bg-white
    dark:bg-slate-950
    transition-colors
    duration-300
  "
>
  <div className="max-w-5xl mx-auto">

    <div
      className="
        rounded-3xl

        bg-blue-50
        dark:bg-blue-500/10

        border
        border-blue-200
        dark:border-blue-500/30

        shadow-lg
        dark:shadow-black/30

        p-8

        transition-all
        duration-300

        hover:border-blue-500
        hover:shadow-2xl
      "
    >

      <h3
        className="
          text-2xl
          font-bold
          text-blue-700
          dark:text-blue-300
          transition-colors
          duration-300
        "
      >
        Important Note
      </h3>

      <p
        className="
          mt-5
          leading-8
          text-slate-600
          dark:text-slate-300
          transition-colors
          duration-300
        "
      >
        ResumeIQ provides an AI-powered compatibility estimate based on
        the information available in your resume and the supplied job
        description. Different organizations use different Applicant
        Tracking Systems (ATS), screening methods, and hiring criteria.
        Therefore, the match score should be considered as guidance to
        help improve your resume rather than a guarantee of interview
        selection or job offers.
      </p>

    </div>

  </div>
</section>

</section>
  );

}

export default JDLearnMore;