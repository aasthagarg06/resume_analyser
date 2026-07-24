function PrivacyPolicy() {
    return (
        <section className="min-h-screen bg-slate-950 text-white px-6 py-24">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-5xl font-bold mb-10">
                    Privacy Policy
                </h1>

                <p className="text-slate-400 mb-8">
                    Last Updated: July 2026
                </p>

                <div className="space-y-8 text-slate-300 leading-8">

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-white">
                            Information We Collect
                        </h2>

                        <p>
                            ResumeIQ collects only the information required
                            to analyze resumes and compare them with job
                            descriptions. This may include resume files,
                            job descriptions, and basic authentication
                            information provided through Clerk.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-white">
                            How We Use Your Information
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Analyze ATS compatibility.</li>
                            <li>Detect skills and keywords.</li>
                            <li>Compare resumes with job descriptions.</li>
                            <li>Generate AI-powered recommendations.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-white">
                            Data Storage
                        </h2>

                        <p>
                            Uploaded resumes are processed only for analysis.
                            ResumeIQ does not permanently store uploaded
                            resumes or job descriptions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-white">
                            Third-Party Services
                        </h2>

                        <p>
                            ResumeIQ uses Clerk for authentication and
                            Google Gemini API to generate AI-powered
                            suggestions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-white">
                            Contact Us
                        </h2>

                        <p>
                            If you have any questions regarding this Privacy
                            Policy, please contact us through the Contact page.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default PrivacyPolicy;