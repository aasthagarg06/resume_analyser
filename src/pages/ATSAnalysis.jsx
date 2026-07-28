import { useNavigate } from "react-router-dom";
import {
  FileUp,
  FileSearch,
  Bot,
  FolderKanban,
  BrainCircuit,
  Search,
  FileText,
  Lightbulb,
  BadgeCheck,
  LayoutList,
  ShieldCheck,
  Target,
  Briefcase,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
function ATSAnalysis() {
  const navigate = useNavigate();
  const steps = [
    {
      icon: FileUp,
      title: "Resume Upload",
      description:
        "Upload your resume in PDF format. ResumeIQ securely processes the document while preserving the original file.",
    },
    {
      icon: FileSearch,
      title: "Text Extraction",
      description:
        "The resume text is extracted from the uploaded document so it can be analyzed accurately by our AI engine.",
    },
    {
      icon: Bot,
      title: "AI Resume Analysis",
      description:
        "Our AI evaluates your resume's structure, formatting, skills, keywords, and overall ATS compatibility.",
    },
    {
      icon: FolderKanban,
      title: "Section Detection",
      description:
        "ResumeIQ identifies important sections such as Contact Information, Education, Experience, Skills, Projects, and Certifications.",
    },
    {
      icon: BrainCircuit,
      title: "Skill Detection",
      description:
        "Technical and professional skills are detected to understand your strengths and identify missing competencies.",
    },
    {
      icon: Search,
      title: "Keyword Analysis",
      description:
        "Relevant keywords are analyzed to determine how well your resume aligns with modern Applicant Tracking Systems.",
    },
    {
      icon: FileText,
      title: "Formatting Review",
      description:
        "The system reviews your resume for ATS-friendly formatting, clean organization, readability, and standard section headings.",
    },
    {
      icon: Lightbulb,
      title: "Personalized Suggestions",
      description:
        "AI-generated recommendations help improve resume quality by highlighting missing skills, weak sections, and optimization opportunities.",
    },
    {
      icon: BadgeCheck,
      title: "Final ATS Report",
      description:
        "Receive a comprehensive report including ATS score, skill analysis, formatting insights, keyword evaluation, and improvement suggestions.",
    },
  ];

  const reports = [
  {
    icon: Target,
    title: "Overall ATS Score",
    desc: "A combined score based on formatting, keywords, sections, and resume quality.",
  },
  {
    icon: BrainCircuit,
    title: "Skills Analysis",
    desc: "Identifies technical and professional skills detected within your resume.",
  },
  {
    icon: Search,
    title: "Keyword Insights",
    desc: "Highlights relevant keywords and identifies missing ones.",
  },
  {
    icon: FolderKanban,
    title: "Section Analysis",
    desc: "Checks whether important resume sections are present and well organized.",
  },
  {
    icon: ShieldCheck,
    title: "Contact Validation",
    desc: "Verifies essential contact information like email, phone, LinkedIn, and GitHub.",
  },
  {
    icon: Lightbulb,
    title: "AI Recommendations",
    desc: "Provides personalized suggestions to improve ATS compatibility.",
  },
];

  return (
    <div
      className="
      min-h-screen
      bg-gradient-to-br
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
        <div className="max-w-5xl mx-auto text-center">

          <h1 className="mt-6 text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
            How Our ATS Checker Works
          </h1>

          <p className="mt-6 text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            ResumeIQ uses AI to analyze your resume, evaluate ATS compatibility,
            identify strengths and weaknesses, and generate personalized
            recommendations to help improve your chances of getting shortlisted.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 pb-24">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-14 text-slate-900 dark:text-white">
            ATS Analysis Workflow
          </h2>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="
group
bg-white
dark:bg-slate-900
rounded-3xl
border
border-slate-200
dark:border-slate-700
shadow-lg
p-8

transform
transition-all
duration-300
ease-out

hover:scale-[1.015]
hover:-translate-y-1
hover:shadow-xl
hover:border-blue-500
"
              >
                <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
  {(() => { const Icon = step.icon; return <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />; })()}
</div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {index + 1}. {step.title}
                  </h3>

                  <p className="mt-3 text-slate-600 dark:text-slate-300 leading-7">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* What We Analyze */}

<section className="px-6 pb-24">

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-14 text-slate-900 dark:text-white">

What We Analyze

</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{[
{
icon: FileText,
title:"Resume Formatting",
items:["Layout","ATS Compatibility","Readability"]
},
{
icon: Search,
title:"Keyword Matching",
items:["Important Keywords","Missing Keywords","Optimization"]
},
{
icon: BrainCircuit,
title:"Skills Detection",
items:["Technical Skills","Soft Skills","Missing Skills"]
},
{
icon: LayoutList,
title:"Section Analysis",
items:["Experience","Education","Projects"]
},
{
icon: ShieldCheck,
title:"Contact Validation",
items:["Email","Phone","LinkedIn"]
},
{
icon: Sparkles,
title:"AI Suggestions",
items:["Weaknesses","Improvements","Recommendations"]
},
].map((card,index)=>(
<div
key={index}
className="
group
bg-white
dark:bg-slate-900
rounded-3xl
border
border-slate-200
dark:border-slate-700
shadow-lg
p-8

transform
transition-all
duration-300
ease-out

hover:scale-[1.015]
hover:-translate-y-1
hover:shadow-xl
hover:border-blue-500
">

<div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
  {(() => { const Icon = card.icon; return <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />; })()}
</div>

<h3 className="text-2xl font-bold mb-5 text-slate-900 dark:text-white">
{card.title}
</h3>

<ul className="space-y-3">

{card.items.map((item,i)=>(
<li
key={i}
className="flex items-center gap-3 text-slate-600 dark:text-slate-300"
>

<CheckCircle2 className="w-5 h-5 text-green-500" />

{item}

</li>
))}

</ul>

</div>
))}

</div>

</div>

</section>



{/* ATS Score Calculation */}

<section className="px-6 pb-24">

<div className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-3xl shadow-lg p-10 border border-slate-200 dark:border-slate-700">

<h2 className="text-4xl font-bold mb-10 text-slate-900 dark:text-white">

How Your ATS Score is Calculated

</h2>

{[
["Formatting",20],
["Keywords",20],
["Skills",20],
["Sections",20],
["Content Quality",20],
].map(([name,value])=>(

<div key={name} className="mb-8">

<div className="flex justify-between mb-2">

<span className="font-semibold text-slate-900 dark:text-white">

{name}

</span>

<span className="font-bold text-slate-900 dark:text-white">
  {value}%
</span>

</div>

<div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4">

<div
className="bg-blue-600 h-4 rounded-full"
style={{width:`${value*5}%`}}
/>

</div>

</div>

))}

<p className="mt-8 text-slate-600 dark:text-slate-300 leading-7">

Your ATS score is generated by combining formatting, keywords,
skills, sections, and overall resume quality into one AI-assisted
evaluation.

</p>

</div>

</section>


<section className="px-6 pb-24">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-14 text-slate-900 dark:text-white">
      Understanding Your ATS Report
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

      {[
        {
          icon: Target,
          title:"Overall ATS Score",
          desc:"Represents how well your resume follows common ATS best practices. It combines formatting, skills, sections, experience, and content quality."
        },
        {
          icon: FileText,
          title:"Formatting Score",
          desc:"Checks layout, headings, spacing, readability, and ATS-friendly formatting."
        },
        {
          icon: LayoutList,
          title:"Sections Score",
          desc:"Evaluates whether important sections like Education, Experience, Skills, Projects, Certifications, and Achievements are included."
        },
        {
          icon: Briefcase,
          title:"Experience Score",
          desc:"Measures how well your experience demonstrates responsibilities, achievements, action verbs, and measurable impact."
        }

      ].map((item,index)=>(
        <div
          key={index}
className="
group
bg-white
dark:bg-slate-900
rounded-3xl
border
border-slate-200
dark:border-slate-700
shadow-lg
p-8

transform
transition-all
duration-300
ease-out

hover:scale-[1.015]
hover:-translate-y-1
hover:shadow-xl
hover:border-blue-500
"        >
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
  {(() => { const Icon = item.icon; return <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />; })()}
</div>

          <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
            {item.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-300 leading-7">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>


{/* Understanding AI Insights */}

<section className="px-6 pb-24">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-14 text-slate-900 dark:text-white">
      Understanding AI Insights
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {[
        {
          icon: Bot,
          title:"AI Summary",
          desc:"Provides a recruiter-friendly overview of your resume, highlighting your education, technical skills, and overall profile."
        },
        {
          icon: BrainCircuit,
          title:"Skills Found",
          desc:"Automatically detects technical and professional skills mentioned in your resume."
        },
        {
          icon: TrendingUp,
          title:"Strengths",
          desc:"Highlights the strongest ATS-friendly aspects of your resume."
        },
        {
          icon: AlertTriangle,
          title:"Weaknesses",
          desc:"Identifies missing information, weak content, or formatting issues that may reduce ATS compatibility."
        },
        {
          icon: Sparkles,
          title:"AI Suggestions",
          desc:"Provides personalized recommendations to improve your resume before applying."
        },
        {
          icon: Target,
          title:"Resume Improvement",
          desc:"Use the AI recommendations to continuously improve your resume and increase ATS compatibility."
        }
      ].map((item,index)=>(
        <div
          key={index}
className="
group
bg-white
dark:bg-slate-900
rounded-3xl
border
border-slate-200
dark:border-slate-700
shadow-lg
p-8

transform
transition-all
duration-300
ease-out

hover:scale-[1.015]
hover:-translate-y-1
hover:shadow-xl
hover:border-blue-500
"        >
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
  {(() => { const Icon = item.icon; return <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />; })()}
</div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {item.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-300 leading-7">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>

{/* How to Interpret Your ATS Score */}

<section className="px-6 pb-24">

<div className="max-w-5xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">

How to Interpret Your ATS Score

</h2>

<div className="grid gap-6">

{[
{
score:"90 - 100",
label:"Excellent",
color:"bg-green-100 text-green-700"
},
{
score:"75 - 89",
label:"Good",
color:"bg-blue-100 text-blue-700"
},
{
score:"60 - 74",
label:"Needs Improvement",
color:"bg-yellow-100 text-yellow-700"
},
{
score:"Below 60",
label:"Major Improvements Required",
color:"bg-red-100 text-red-700"
}
].map((item,index)=>(

<div
  key={index}
  className="
  group
  bg-white
  dark:bg-slate-900
  rounded-3xl
  border
  border-slate-200
  dark:border-slate-700
  shadow-lg
  p-8

  flex
  justify-between
  items-center

  transform
  transition-all
  duration-300
  ease-out

  hover:scale-[1.015]
  hover:-translate-y-1
  hover:shadow-xl
  hover:border-blue-500
"
>

<div>

<h3 className="text-xl font-bold text-slate-900 dark:text-white">

{item.score}

</h3>

<p className="mt-2 text-slate-600 dark:text-slate-300">

{item.label}

</p>

</div>

<span className={`px-4 py-2 rounded-full font-semibold ${item.color}`}>

{item.label}

</span>

</div>

))}

</div>

</div>

</section>  


      {/* Report */}
      {/* What You'll Receive */}

<section className="px-6 pb-24">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
      What You'll Receive
    </h2>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {reports.map((item, index) => (
        <div
          key={index}
className="
group
bg-white
dark:bg-slate-900
rounded-3xl
border
border-slate-200
dark:border-slate-700
shadow-lg
p-8

transform
transition-all
duration-300
ease-out

hover:scale-[1.015]
hover:-translate-y-1
hover:shadow-xl
hover:border-blue-500
"        >
          <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
  {(() => { const Icon = item.icon; return <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />; })()}
</div>

          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
            {item.title}
          </h3>

          <p className="text-slate-600 dark:text-slate-300 leading-7">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* Why ATS Matters */}
      <section className="px-6 pb-24">
        <div
          className="
          max-w-6xl
          mx-auto
          bg-white
          dark:bg-slate-900
          rounded-3xl
          border
          border-slate-200
          dark:border-slate-700
          shadow-lg
          p-10
        "
        >
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">
            Why ATS Analysis Matters
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Many employers use Applicant Tracking Systems (ATS) to screen
            resumes before they are reviewed by recruiters. ResumeIQ helps you
            identify formatting issues, missing sections, weak keywords, and
            skill gaps so you can improve your resume before applying for jobs.
          </p>
        </div>
      </section>


{/* FAQ */}

<section className="px-6 pb-24">

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">

Frequently Asked Questions

</h2>

<div className="space-y-6">

{[
{
q:"Can ResumeIQ guarantee interview calls?",
a:"No. ResumeIQ improves ATS compatibility but cannot guarantee interview invitations."
},
{
q:"Can I analyze multiple resumes?",
a:"Yes. You can upload and analyze different resumes anytime."
},
{
q:"Why is my ATS score low?",
a:"Missing sections, weak experience descriptions, formatting issues, or missing keywords may reduce your score."
},
{
q:"How accurate is the ATS score?",
a:"The ATS score is AI-assisted and based on common resume screening best practices."
}
].map((faq,index)=>(

<div
key={index}
className="
group
bg-white
dark:bg-slate-900
rounded-3xl
border
border-slate-200
dark:border-slate-700
shadow-lg
p-8

transform
transition-all
duration-300
ease-out

hover:scale-[1.015]
hover:-translate-y-1
hover:shadow-xl
hover:border-blue-500
">

<h3 className="text-xl font-bold text-slate-900 dark:text-white">

{faq.q}

</h3>

<p className="mt-3 text-slate-600 dark:text-slate-300 leading-7">

{faq.a}

</p>

</div>

))}

</div>

</div>

</section>

{/* CTA */}

<section className="px-6 pb-24">

<div className="max-w-6xl mx-auto bg-gradient-to-r from-blue-600 to-violet-600 rounded-3xl p-12 text-center shadow-xl">

<h2 className="text-4xl font-bold text-white">

Ready to Improve Your Resume?

</h2>

<p className="mt-6 text-blue-100 text-lg">

Upload your resume and receive an AI-powered ATS analysis in seconds.

</p>

<button
onClick={() => navigate("/ats-checker")}
className="mt-8 px-8 py-4 rounded-full bg-white text-blue-600 font-bold hover:scale-105 transition cursor-pointer duration-300"
>
Analyze Resume
</button>

</div>

</section>  


      {/* Disclaimer */}
      <section className="px-6 pb-24">
        <div
          className="
          max-w-6xl
          mx-auto
          rounded-3xl
          bg-blue-600
          text-white
          p-10
          shadow-xl
        "
        >
          <h2 className="text-3xl font-bold">
            Important Disclaimer
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            ResumeIQ provides an AI-assisted ATS compatibility analysis designed
            to help improve resume quality. Different companies use different
            Applicant Tracking Systems with proprietary algorithms, so results
            should be considered guidance rather than an exact prediction of
            hiring outcomes.
          </p>
        </div>
      </section>
    </div>
  );
}

export default ATSAnalysis;