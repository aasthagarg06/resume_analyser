function TermsOfService() {
    return (
        <section className="min-h-screen bg-slate-950 text-white px-6 py-24">
            <div className="max-w-4xl mx-auto">

                <h1 className="text-5xl font-bold mb-10">
                    Terms of Service
                </h1>

                <p className="text-slate-400 mb-8">
                    Last Updated: July 2026
                </p>

                <div className="space-y-8 text-slate-300 leading-8">

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-white">
                            Acceptance of Terms
                        </h2>

                        <p>
                            By using ResumeIQ, you agree to these Terms of
                            Service and our Privacy Policy.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-white">
                            Use of the Platform
                        </h2>

                        <ul className="list-disc pl-6 space-y-2">
                            <li>Upload only resumes that belong to you.</li>
                            <li>Do not upload harmful or malicious content.</li>
                            <li>Use the platform responsibly.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-white">
                            Disclaimer
                        </h2>

                        <p>
                            ATS scores, resume analysis, and job matching
                            results are generated using automated algorithms.
                            They are intended for educational purposes and
                            should not be considered a guarantee of interview
                            selection or employment.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-white">
                            Limitation of Liability
                        </h2>

                        <p>
                            ResumeIQ is not responsible for hiring decisions,
                            employment outcomes, or the accuracy of external
                            job descriptions.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3 text-white">
                            Changes to These Terms
                        </h2>

                        <p>
                            These terms may be updated as the platform evolves.
                            Continued use of ResumeIQ indicates acceptance of
                            any future updates.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default TermsOfService;