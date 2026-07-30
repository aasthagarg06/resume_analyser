import { useNavigate } from "react-router-dom";
import {
  FileCheck,
  ShieldCheck,
  AlertTriangle,
  Scale,
  RefreshCw,
  ArrowRight,
} from "lucide-react";

function TermsOfService() {
    const navigate = useNavigate();
  return (
    <section className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-24">

        {/* Hero */}
        <div className="pb-12 border-b border-slate-200 dark:border-slate-800">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
            <FileCheck className="w-4 h-4" />
            Legal Information
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
            Terms of Service
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            These Terms of Service govern your access to and use of ResumeIQ.
            By accessing or using our platform, you agree to comply with the
            terms outlined below.
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Effective Date • July 2026
          </p>
        </div>

        {/* Highlights */}

        <div className="grid gap-5 md:grid-cols-4 my-14">

          {[
            "Responsible Usage",
            "AI Transparency",
            "Secure Platform",
            "User Rights",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6"
            >
              <ShieldCheck className="w-7 h-7 text-blue-600 mb-4" />

              <h3 className="font-semibold text-slate-900 dark:text-white">
                {item}
              </h3>
            </div>
          ))}

        </div>

        {/* Section 01 */}

        <div className="py-12 border-t border-slate-200 dark:border-slate-800">

          <span className="text-blue-600 font-bold text-sm">
            01
          </span>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            Acceptance of Terms
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            By using ResumeIQ, you acknowledge that you have read,
            understood, and agreed to these Terms of Service together with
            our Privacy Policy. If you do not agree, you should discontinue
            using the platform.
          </p>

        </div>

        {/* Section 02 */}

        <div className="py-12 border-t border-slate-200 dark:border-slate-800">

          <span className="text-blue-600 font-bold text-sm">
            02
          </span>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            Responsible Use
          </h2>

          <div className="mt-8 space-y-4">

            {[
              "Upload only resumes and documents that belong to you.",
              "Do not upload malicious, illegal, or harmful content.",
              "Respect intellectual property rights.",
              "Use the platform responsibly and ethically.",
            ].map((item) => (
              <div
                key={item}
                className="flex gap-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5"
              >
                <ShieldCheck className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />

                <p className="text-slate-600 dark:text-slate-300">
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* AI Disclaimer */}

        <div className="my-12 rounded-2xl border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/10 p-8">

          <div className="flex gap-4">

            <AlertTriangle className="w-7 h-7 text-amber-500 flex-shrink-0" />

            <div>

              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                AI Disclaimer
              </h2>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                Resume analysis, and job matching results are
                generated using AI-powered algorithms. These insights are
                intended to assist users and should not be interpreted as a
                guarantee of interviews, hiring decisions, or employment.
              </p>

            </div>

          </div>

        </div>

        {/* Section 03 */}

        <div className="py-12 border-t border-slate-200 dark:border-slate-800">

          <span className="text-blue-600 font-bold text-sm">
            03
          </span>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <Scale className="w-7 h-7 text-violet-600" />
            Limitation of Liability
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            ResumeIQ is not responsible for hiring decisions, employment
            outcomes, or inaccuracies in external job descriptions. Users
            are responsible for reviewing AI-generated recommendations
            before acting upon them.
          </p>

        </div>

        {/* Section 04 */}

        <div className="py-12 border-t border-slate-200 dark:border-slate-800">

          <span className="text-blue-600 font-bold text-sm">
            04
          </span>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white flex items-center gap-3">
            <RefreshCw className="w-7 h-7 text-pink-600" />
            Updates to These Terms
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
            We may update these Terms periodically to reflect improvements,
            new features, or legal requirements. Continued use of ResumeIQ
            after any updates constitutes acceptance of the revised Terms.
          </p>

        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl bg-slate-900 dark:bg-slate-800 p-10 text-center">

          <h2 className="text-3xl font-bold text-white">
            Questions About These Terms?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-300 leading-8">
            If you have questions regarding these Terms of Service or how
            ResumeIQ operates, our team is happy to help.
          </p>

          <button
    onClick={() => navigate("/contact")}
    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white font-medium transition cursor-pointer"
>
    Contact Us
    <ArrowRight className="w-5 h-5" />
</button>

        </div>

      </div>
    </section>
  );
}

export default TermsOfService;