import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is an ATS and why does it matter?",
      answer:
        "An Applicant Tracking System (ATS) is software used by companies to scan, organize, and filter resumes before they reach a recruiter. Many organizations receive hundreds of applications for a single role, so ATS helps them identify the most relevant candidates. If your resume is not optimized for ATS, it may never be seen by a human recruiter even if you are qualified for the position."
    },
    {
      question: "How does ResumeIQ calculate my ATS score?",
      answer:
        "ResumeIQ evaluates multiple aspects of your resume, including keyword relevance, formatting, readability, section organization, skills, and overall ATS compatibility. The score is designed to help you understand how effectively your resume aligns with common ATS requirements and recruiter expectations."
    },
    {
      question: "How can I improve my ATS score?",
      answer:
        "You can improve your ATS score by including job-relevant keywords, using a clear and consistent format, adding measurable achievements, highlighting important skills, and ensuring that your resume sections are properly structured. ResumeIQ also provides personalized recommendations to help strengthen weak areas."
    },
    {
      question: "Can I compare my resume with a job description?",
      answer:
        "Yes. ResumeIQ performs Job Description (JD) Matching by comparing your resume against the requirements of a target role. It identifies missing keywords, important skills, and areas where your resume can be better aligned with the job description, helping you tailor your application more effectively."
    },
    {
      question: "What types of skills can ResumeIQ detect?",
      answer:
        "ResumeIQ can identify technical skills, programming languages, frameworks, software tools, certifications, and relevant soft skills. It organizes these skills into categories and highlights missing competencies that employers may be looking for in a specific role."
    },
    {
      question: "Is my resume secure and private?",
      answer:
        "Yes. Protecting user data is a priority. Uploaded resumes are processed securely, and personal information is handled responsibly. ResumeIQ focuses only on resume analysis and recommendations and does not share your data with third parties."
    },
    {
      question: "Who should use ResumeIQ?",
      answer:
        "ResumeIQ is designed for students, fresh graduates, internship applicants, job seekers, and working professionals. Whether you are applying for your first internship or preparing for a career transition, ResumeIQ helps you create a stronger and more competitive resume."
    },
    {
      question: "Why am I not getting interview calls despite applying to many jobs?",
      answer:
        "A common reason is that resumes fail ATS screening or do not closely match job requirements. Missing keywords, weak project descriptions, poor formatting, or unclear achievements can reduce visibility. ResumeIQ helps identify these issues and provides actionable suggestions to improve your chances of being shortlisted."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
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
      <div className="max-w-5xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-blue-600 dark:text-blue-400 font-semibold tracking-wider transition-colors">
            FAQ
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900 dark:text-white transition-colors">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-slate-600 dark:text-slate-300 text-lg max-w-3xl mx-auto transition-colors">
            Everything you need to know about ATS scoring,
            resume optimization, job description matching,
            and improving your interview opportunities.
          </p>

        </div>

        {/* FAQ Cards */}

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="
                bg-white
                dark:bg-slate-900
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                border
                border-slate-200
                dark:border-slate-700
                transition-all
                duration-300
                overflow-hidden
              "
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="
                  w-full
                  text-left
                  p-7
                  flex
                  justify-between
                  items-center
                  group
                "
              >

                <h3 className="text-xl font-semibold text-slate-900 dark:text-white transition-colors">
                  {faq.question}
                </h3>

                <span className={`text-3xl text-blue-600 dark:text-blue-400 transition-transform duration-500 ease-out ${openIndex === index ? "rotate-45 scale-110" : ""}`}>
                  {openIndex === index ? "−" : "+"}
                </span>

              </button>

              <div className={`px-7 pb-7 overflow-hidden transition-all duration-500 ease-out ${openIndex === index ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}>

                <div className="h-px bg-slate-200 dark:bg-slate-700 mb-5 transition-colors"></div>

                <p className={`text-slate-600 dark:text-slate-300 leading-8 text-lg transition-all duration-500 ease-out ${openIndex === index ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}>
                  {faq.answer}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FAQ;