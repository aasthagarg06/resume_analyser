import {
  ShieldCheck,
  Database,
  Lock,
  Sparkles,
  Mail,
  FileText,
  Brain,
} from "lucide-react";

const sections = [
  {
    id: "collect",
    title: "Information We Collect",
    icon: Database,
    body:
      "ResumeIQ collects only the information required to analyze resumes, compare them with job descriptions, and securely authenticate users.",
  },
  {
    id: "usage",
    title: "How We Use Your Data",
    icon: Brain,
    bullets: [
      "Generate ATS compatibility reports",
      "Identify skills and keywords",
      "Compare resumes with job descriptions",
      "Generate AI-powered recommendations",
    ],
  },
  {
    id: "security",
    title: "Security",
    icon: Lock,
    body:
      "Your uploaded files are processed securely. We use trusted authentication providers and industry-standard security practices.",
  },
  {
    id: "storage",
    title: "Data Storage",
    icon: FileText,
    body:
      "Uploaded resumes are processed for analysis. They are not permanently stored by ResumeIQ unless explicitly stated.",
  },
  {
    id: "third-party",
    title: "Third-Party Services",
    icon: Sparkles,
    body:
      "ResumeIQ integrates Clerk for authentication and Google Gemini API for AI-powered analysis.",
  },
  {
    id: "contact",
    title: "Contact",
    icon: Mail,
    body:
      "For any questions regarding this Privacy Policy, please contact us through the Contact page.",
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-950 transition-colors">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            <ShieldCheck className="h-4 w-4 text-blue-600" />
            Privacy & Security
          </div>

          <h1 className="mt-6 text-5xl font-bold tracking-tight text-slate-900 dark:text-white md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-400">
            Your privacy matters to us. This page explains how ResumeIQ
            collects, processes and protects your information while providing
            AI-powered resume analysis.
          </p>

          <p className="mt-6 text-sm text-slate-500">
            Last Updated • July 2026
          </p>
        </div>

        <div className="mt-14 grid gap-14 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <h2 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
                Contents
              </h2>

              <nav className="space-y-3">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block rounded-lg px-3 py-2 text-slate-600 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-blue-400"
                  >
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          <article className="max-w-4xl">
            {sections.map((section) => {
              const Icon = section.icon;

              return (
                <section
                  id={section.id}
                  key={section.id}
                  className="scroll-mt-28 border-b border-slate-200 py-12 last:border-none dark:border-slate-800"
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className="rounded-xl bg-blue-50 p-3 dark:bg-slate-900">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>

                    <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                      {section.title}
                    </h2>
                  </div>

                  {section.body && (
                    <p className="leading-8 text-slate-600 dark:text-slate-300">
                      {section.body}
                    </p>
                  )}

                  {section.bullets && (
                    <ul className="mt-6 space-y-4">
                      {section.bullets.map((item) => (
                        <li
                          key={item}
                          className="flex gap-3 text-slate-600 dark:text-slate-300"
                        >
                          <span className="mt-2 h-2 w-2 rounded-full bg-blue-600"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              );
            })}

            <section className="mt-16 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900">
              <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Our Commitment
              </h2>

              <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
                ResumeIQ is committed to building transparent, secure, and
                trustworthy AI tools. We continuously improve our security
                practices to keep your information safe while providing a
                seamless resume analysis experience.
              </p>
            </section>
          </article>
        </div>
      </div>
    </main>
  );
}
