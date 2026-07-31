import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e) => {

        e.preventDefault();

        const form = e.target;

        const formData = new FormData(form);

        try {

            const response = await fetch(
                "https://formsubmit.co/ajax/resumeiq01@gmail.com",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            if (response.ok) {

                setSuccessMessage(
                    "✅ Thank you for your feedback! Your message has been sent successfully."
                );

                form.reset();

                setTimeout(() => {
                    setSuccessMessage("");
                }, 5000);

            } else {

                setSuccessMessage(
                    "❌ Unable to send your message. Please try again."
                );

            }

        }

        catch (error) {

            setSuccessMessage(
                "❌ Unable to send your message. Please try again."
            );

        }

    };
    return (
        <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-[#020617] dark:via-[#0F172A] dark:to-[#111827] transition-colors duration-500">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
                <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[160px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
                <div className="max-w-3xl mx-auto text-center">

                    <h1 className="mt-8 text-5xl md:text-6xl font-bold text-slate-900 dark:text-white">
                        We'd Love to Hear From You
                    </h1>

                    <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
                        Questions, feature requests, bug reports or collaboration—we're always happy to hear from you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-5 gap-10 mt-20">
                    <div className="lg:col-span-3 rounded-[32px] bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl p-10">

                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Send us a Message</h2>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 mt-8"
                        >
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />
                            <input type="hidden" name="_subject" value="ResumeIQ Contact Form" />


                            <div className="grid md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    name="Name"
                                    required
                                    placeholder="Full Name"
                                    className="w-full rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-950/60 px-5 py-4 text-slate-900 dark:text-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                                />

                                <input
                                    type="email"
                                    name="Email"
                                    required
                                    placeholder="Email Address"
                                    className="w-full rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-950/60 px-5 py-4 text-slate-900 dark:text-white outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
                                />
                            </div>

                            <select
                                name="Category"
                                className="w-full rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-950/60 px-5 py-4 text-slate-900 dark:text-white"
                            >
                                <option>General Question</option>
                                <option>Bug Report</option>
                                <option>Feature Request</option>
                                <option>Feedback</option>
                                <option>Collaboration</option>
                            </select>

                            <input
                                type="text"
                                name="Subject"
                                required
                                placeholder="Subject"
                                className="w-full rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-950/60 px-5 py-4 text-slate-900 dark:text-white"
                            />

                            <textarea
                                rows="7"
                                name="Message"
                                required
                                placeholder="Write your message..."
                                className="w-full rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-950/60 px-5 py-4 text-slate-900 dark:text-white resize-none"
                            />
                            {successMessage && (

                                <div
                                    className="
            flex
            items-center
            gap-4
            rounded-2xl
            border
            border-green-200
            bg-gradient-to-r
            from-green-50
            to-emerald-100
            px-6
            py-5
            shadow-lg
            animate-pulse
        "
                                >

                                    <div
                                        className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                bg-green-500
                text-white
                text-2xl
                font-bold
            "
                                    >
                                        ✓
                                    </div>

                                    <div>

                                        <h4 className="font-semibold text-green-800 text-lg">
                                            Message Sent Successfully!
                                        </h4>

                                        <p className="text-green-700">
                                            Thank you for contacting ResumeIQ.
                                            We have received your message and will get back to you as soon as possible.
                                        </p>

                                    </div>

                                </div>

                            )}
                            <button
                                type="submit"
                                className="w-full
    rounded-2xl
    bg-gradient-to-r
    from-blue-600
    via-indigo-600
    to-violet-600
    py-4
    text-white
    font-semibold
    shadow-lg
    hover:scale-105
    hover:shadow-2xl
    hover:from-blue-500
    hover:via-indigo-500
    hover:to-violet-500
    active:scale-95
    transition-all
    cursor-pointer
    duration-300"
                            >
                                Send Message →
                            </button>
                        </form>
                    </div>

                    <div className="lg:col-span-2 space-y-20">
                        <div className="rounded-[32px] bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl p-8">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Contact Information</h3>

                            <div className="mt-8 space-y-6">
                                <div>
                                    <p className="font-semibold text-slate-900 dark:text-white">📧 Email</p>
                                    <a href="mailto:resumeiq01@gmail.com" className="text-blue-600 dark:text-blue-300 hover:underline">
                                        resumeiq01@gmail.com
                                    </a>
                                </div>

                                <div>
                                    <p className="font-semibold text-slate-900 dark:text-white">💼 LinkedIn</p>
                                    <a href="https://www.linkedin.com/in/aastha-garg-144101318/" target="_blank" rel="noreferrer" className="block text-blue-600 dark:text-blue-300 hover:underline">
                                        Aastha Garg
                                    </a>
                                    <a href="https://www.linkedin.com/in/kriti-jangra-286abb2b4/" target="_blank" rel="noreferrer" className="block text-blue-600 dark:text-blue-300 hover:underline">
                                        Kriti Jangra
                                    </a>

                                </div>

                                <div>
                                    <p className="font-semibold text-slate-900 dark:text-white">💻 GitHub</p>
                                    <a href="https://github.com/aasthagarg06" target="_blank" rel="noreferrer" className="block text-blue-600 dark:text-blue-300 hover:underline">
                                        @aasthagarg06
                                    </a>
                                    <a href="https://github.com/Kriti978" target="_blank" rel="noreferrer" className="block text-blue-600 dark:text-blue-300 hover:underline">
                                        @Kriti978
                                    </a>

                                </div>
                            </div>

                        </div>
                        <div className="rounded-[32px] bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl">
                            <h3 className="text-2xl font-bold">Need Quick Help?</h3>
                            <p className="mt-4 text-blue-100">
                                Browse our FAQ, Privacy Policy and Terms of Service for quick answers.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <Link to="/privacy-policy" className="rounded-full bg-white/15 px-4 py-2 hover:bg-white/25 transition">Privacy Policy</Link>
                                <Link to="/terms-of-service" className="rounded-full bg-white/15 px-4 py-2 hover:bg-white/25 transition">Terms</Link>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}
