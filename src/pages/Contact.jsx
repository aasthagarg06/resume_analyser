function Contact() {
    return (
        <section className="min-h-screen bg-slate-950 text-white py-24 px-6">

            <div className="max-w-6xl mx-auto">

                {/* Heading */}

                <div className="text-center mb-16">

                    <h1 className="text-6xl font-bold">
                        Contact Us
                    </h1>

                    <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
                        Have questions, feedback, or suggestions? We'd love to hear from you.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Contact Form */}

                    <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-10 shadow-xl">

                        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-8">
                            Send Us a Message
                        </h2>

                        <form
                            action="https://formsubmit.co/gargaastha161@gmail.com"
                            method="POST"
                            className="space-y-6"
                        >

                            {/* FormSubmit Settings */}

                            <input
                                type="hidden"
                                name="_captcha"
                                value="false"
                            />

                            <input
                                type="hidden"
                                name="_template"
                                value="table"
                            />

                            <input
                                type="hidden"
                                name="_subject"
                                value="New Contact Form Submission - ResumeIQ"
                            />

                            <input
                                type="hidden"
                                name="_next"
                                value="http://localhost:5173/contact"
                            />

                            {/* Name */}

                            <input
                                type="text"
                                name="Name"
                                placeholder="Your Name"
                                required
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-300
                                    dark:border-slate-700
                                    bg-slate-50
                                    dark:bg-slate-950
                                    px-5
                                    py-4
                                    text-slate-900
                                    dark:text-white
                                    outline-none
                                    focus:border-blue-500
                                "
                            />

                            {/* Email */}

                            <input
                                type="email"
                                name="Email"
                                placeholder="Your Email"
                                required
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-300
                                    dark:border-slate-700
                                    bg-slate-50
                                    dark:bg-slate-950
                                    px-5
                                    py-4
                                    text-slate-900
                                    dark:text-white
                                    outline-none
                                    focus:border-blue-500
                                "
                            />

                            {/* Subject */}

                            <input
                                type="text"
                                name="Subject"
                                placeholder="Subject"
                                required
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-300
                                    dark:border-slate-700
                                    bg-slate-50
                                    dark:bg-slate-950
                                    px-5
                                    py-4
                                    text-slate-900
                                    dark:text-white
                                    outline-none
                                    focus:border-blue-500
                                "
                            />

                            {/* Message */}

                            <textarea
                                rows="6"
                                name="Message"
                                placeholder="Write your message..."
                                required
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-300
                                    dark:border-slate-700
                                    bg-slate-50
                                    dark:bg-slate-950
                                    px-5
                                    py-4
                                    text-slate-900
                                    dark:text-white
                                    resize-none
                                    outline-none
                                    focus:border-blue-500
                                "
                            />

                            <button
                                type="submit"
                                className="
                                    w-full
                                    py-4
                                    rounded-xl
                                    bg-gradient-to-r
                                    from-blue-500
                                    via-indigo-500
                                    to-violet-600
                                    text-white
                                    font-semibold
                                    text-lg
                                    hover:scale-[1.02]
                                    transition-all
                                    duration-300
                                "
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                    {/* Contact Information */}

                    <div className="space-y-8">

                        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">

                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                📧 Email
                            </h3>

                            <div className="mt-5 space-y-3">

                                <a
                                    href="mailto:gargaastha161@gmail.com"
                                    className="block text-slate-600 dark:text-slate-300 hover:text-blue-500"
                                >
                                    gargaastha161@gmail.com
                                </a>

                                <a
                                    href="mailto:kritijangra2006@gmail.com"
                                    className="block text-slate-600 dark:text-slate-300 hover:text-blue-500"
                                >
                                    kritijangra2006@gmail.com
                                </a>

                            </div>

                        </div>

                        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">

                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                💼 LinkedIn
                            </h3>

                            <div className="mt-5 space-y-3">

                                <a
                                    href="https://www.linkedin.com/in/aastha-garg-144101318/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block text-slate-600 dark:text-slate-300 hover:text-blue-500"
                                >
                                    Aastha Garg
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/kriti-jangra-286abb2b4/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block text-slate-600 dark:text-slate-300 hover:text-blue-500"
                                >
                                    Kriti Jangra
                                </a>

                            </div>

                        </div>

                        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">

                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                                💻 GitHub
                            </h3>

                            <div className="mt-5 space-y-3">

                                <a
                                    href="https://github.com/aasthagarg06"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block text-slate-600 dark:text-slate-300 hover:text-blue-500"
                                >
                                    @aasthagarg06
                                </a>

                                <a
                                    href="https://github.com/Kriti978"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block text-slate-600 dark:text-slate-300 hover:text-blue-500"
                                >
                                    @Kriti978
                                </a>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Contact;