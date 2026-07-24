// function Contact() {
//     return (
//         <section className="min-h-screen bg-slate-950 text-white py-24 px-6">

//             <div className="max-w-6xl mx-auto">

//                 {/* Heading */}

//                 <div className="text-center mb-16">

//                     <h1 className="text-6xl font-bold">
//                         Contact Us
//                     </h1>

//                     <p className="mt-6 text-xl text-slate-300 max-w-2xl mx-auto">
//                         Have questions, feedback, or suggestions? We'd love to hear from you.
//                     </p>

//                 </div>

//                 <div className="grid lg:grid-cols-2 gap-12">

//                     {/* Contact Form */}

//                     <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-10 shadow-xl">

//                         <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-8">
//                             Send Us a Message
//                         </h2>

//                         <form
//                             action="https://formsubmit.co/gargaastha161@gmail.com"
//                             method="POST"
//                             className="space-y-6"
//                         >

//                             {/* FormSubmit Settings */}

//                             <input
//                                 type="hidden"
//                                 name="_captcha"
//                                 value="false"
//                             />

//                             <input
//                                 type="hidden"
//                                 name="_template"
//                                 value="table"
//                             />

//                             <input
//                                 type="hidden"
//                                 name="_subject"
//                                 value="New Contact Form Submission - ResumeIQ"
//                             />

//                             <input
//                                 type="hidden"
//                                 name="_next"
//                                 value="http://localhost:5173/contact"
//                             />

//                             {/* Name */}

//                             <input
//                                 type="text"
//                                 name="Name"
//                                 placeholder="Your Name"
//                                 required
//                                 className="
//                                     w-full
//                                     rounded-xl
//                                     border
//                                     border-slate-300
//                                     dark:border-slate-700
//                                     bg-slate-50
//                                     dark:bg-slate-950
//                                     px-5
//                                     py-4
//                                     text-slate-900
//                                     dark:text-white
//                                     outline-none
//                                     focus:border-blue-500
//                                 "
//                             />

//                             {/* Email */}

//                             <input
//                                 type="email"
//                                 name="Email"
//                                 placeholder="Your Email"
//                                 required
//                                 className="
//                                     w-full
//                                     rounded-xl
//                                     border
//                                     border-slate-300
//                                     dark:border-slate-700
//                                     bg-slate-50
//                                     dark:bg-slate-950
//                                     px-5
//                                     py-4
//                                     text-slate-900
//                                     dark:text-white
//                                     outline-none
//                                     focus:border-blue-500
//                                 "
//                             />

//                             {/* Subject */}

//                             <input
//                                 type="text"
//                                 name="Subject"
//                                 placeholder="Subject"
//                                 required
//                                 className="
//                                     w-full
//                                     rounded-xl
//                                     border
//                                     border-slate-300
//                                     dark:border-slate-700
//                                     bg-slate-50
//                                     dark:bg-slate-950
//                                     px-5
//                                     py-4
//                                     text-slate-900
//                                     dark:text-white
//                                     outline-none
//                                     focus:border-blue-500
//                                 "
//                             />

//                             {/* Message */}

//                             <textarea
//                                 rows="6"
//                                 name="Message"
//                                 placeholder="Write your message..."
//                                 required
//                                 className="
//                                     w-full
//                                     rounded-xl
//                                     border
//                                     border-slate-300
//                                     dark:border-slate-700
//                                     bg-slate-50
//                                     dark:bg-slate-950
//                                     px-5
//                                     py-4
//                                     text-slate-900
//                                     dark:text-white
//                                     resize-none
//                                     outline-none
//                                     focus:border-blue-500
//                                 "
//                             />

//                             <button
//                                 type="submit"
//                                 className="
//                                     w-full
//                                     py-4
//                                     rounded-xl
//                                     bg-gradient-to-r
//                                     from-blue-500
//                                     via-indigo-500
//                                     to-violet-600
//                                     text-white
//                                     font-semibold
//                                     text-lg
//                                     hover:scale-[1.02]
//                                     transition-all
//                                     duration-300
//                                 "
//                             >
//                                 Send Message
//                             </button>

//                         </form>

//                     </div>

//                     {/* Contact Information */}

//                     <div className="space-y-8">

//                         <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">

//                             <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
//                                 📧 Email
//                             </h3>

//                             <div className="mt-5 space-y-3">

//                                 <a
//                                     href="mailto:gargaastha161@gmail.com"
//                                     className="block text-slate-600 dark:text-slate-300 hover:text-blue-500"
//                                 >
//                                     gargaastha161@gmail.com
//                                 </a>

//                                 <a
//                                     href="mailto:kritijangra2006@gmail.com"
//                                     className="block text-slate-600 dark:text-slate-300 hover:text-blue-500"
//                                 >
//                                     kritijangra2006@gmail.com
//                                 </a>

//                             </div>

//                         </div>

//                         <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">

//                             <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
//                                 💼 LinkedIn
//                             </h3>

//                             <div className="mt-5 space-y-3">

//                                 <a
//                                     href="https://www.linkedin.com/in/aastha-garg-144101318/"
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className="block text-slate-600 dark:text-slate-300 hover:text-blue-500"
//                                 >
//                                     Aastha Garg
//                                 </a>

//                                 <a
//                                     href="https://www.linkedin.com/in/kriti-jangra-286abb2b4/"
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className="block text-slate-600 dark:text-slate-300 hover:text-blue-500"
//                                 >
//                                     Kriti Jangra
//                                 </a>

//                             </div>

//                         </div>

//                         <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 p-8">

//                             <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
//                                 💻 GitHub
//                             </h3>

//                             <div className="mt-5 space-y-3">

//                                 <a
//                                     href="https://github.com/aasthagarg06"
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className="block text-slate-600 dark:text-slate-300 hover:text-blue-500"
//                                 >
//                                     @aasthagarg06
//                                 </a>

//                                 <a
//                                     href="https://github.com/Kriti978"
//                                     target="_blank"
//                                     rel="noreferrer"
//                                     className="block text-slate-600 dark:text-slate-300 hover:text-blue-500"
//                                 >
//                                     @Kriti978
//                                 </a>

//                             </div>

//                         </div>

//                     </div>

//                 </div>

//             </div>

//         </section>
//     );
// }

// export default Contact;
























// import React from "react";

// export default function Contact() {
//   return (
//     <section className="relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-[#020617] dark:via-[#0F172A] dark:to-[#111827] transition-colors duration-500">

//       {/* Background glow */}
//       <div className="pointer-events-none absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-[140px]" />
//         <div className="absolute bottom-0 right-0 h-[30rem] w-[30rem] rounded-full bg-violet-500/10 blur-[160px]" />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

//         <div className="max-w-3xl mx-auto text-center">
//           <span className="inline-flex rounded-full border border-blue-200 dark:border-blue-700 bg-blue-100/70 dark:bg-blue-900/20 px-5 py-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
//             CONTACT • RESUMEIQ
//           </span>

//           <h1 className="mt-8 text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
//             We'd Love to Hear From You
//           </h1>

//           <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
//             Questions, feature requests, bug reports or collaboration—we're always happy to hear from you.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-10 mt-20">

//           <div className="lg:col-span-3 rounded-[32px] bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-black/40 p-10">

//             <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
//               Send us a Message
//             </h2>

//             <p className="mt-2 text-slate-600 dark:text-slate-400">
//               Fill in the form below and we'll get back to you within 24 hours.
//             </p>

//             <form
//               action="https://formsubmit.co/resumeiq01@gmail.com"
//               method="POST"
//               className="space-y-6 mt-10"
//             >
//               <input type="hidden" name="_captcha" value="false" />
//               <input type="hidden" name="_template" value="table" />
//               <input type="hidden" name="_subject" value="ResumeIQ Contact Form" />

//               <div className="grid md:grid-cols-2 gap-6">
//                 {["Full Name","Email Address"].map((ph,i)=>(
//                   <input
//                     key={ph}
//                     required
//                     type={i===1?"email":"text"}
//                     placeholder={ph}
//                     className="w-full rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-950/60 px-5 py-4 text-slate-900 dark:text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
//                   />
//                 ))}
//               </div>

//               <select className="w-full rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-950/60 px-5 py-4 text-slate-900 dark:text-white outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20">
//                 <option>General Question</option>
//                 <option>Bug Report</option>
//                 <option>Feature Request</option>
//                 <option>Feedback</option>
//                 <option>Collaboration</option>
//               </select>

//               <input
//                 required
//                 placeholder="Subject"
//                 className="w-full rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-950/60 px-5 py-4 text-slate-900 dark:text-white outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
//               />

//               <textarea
//                 rows={7}
//                 required
//                 placeholder="Write your message..."
//                 className="w-full resize-none rounded-2xl border border-slate-300 dark:border-white/10 bg-white dark:bg-slate-950/60 px-5 py-4 text-slate-900 dark:text-white outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
//               />

//               <button
//                 type="submit"
//                 className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/30 active:scale-[0.98]"
//               >
//                 Send Message →
//               </button>
//             </form>
//           </div>

//           <div className="lg:col-span-2 space-y-6">

//             <div className="rounded-[32px] bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200 dark:border-white/10 shadow-xl dark:shadow-black/40 p-8">

//               <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
//                 Contact Information
//               </h3>

//               <div className="mt-8 space-y-8">

//                 <div>
//                   <h4 className="font-semibold text-slate-900 dark:text-white">📧 Email</h4>
//                   <a href="mailto:resumeiq01@gmail.com" className="block text-blue-300 hover:underline">resumeiq01@gmail.com</a>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-slate-900 dark:text-white">💼 LinkedIn</h4>
//                   <a href="https://www.linkedin.com/in/aastha-garg-144101318/" target="_blank" rel="noreferrer" className="block mt-2 text-blue-300 hover:underline">Aastha Garg</a>
//                   <a href="https://www.linkedin.com/in/kriti-jangra-286abb2b4/" target="_blank" rel="noreferrer" className="block text-blue-300 hover:underline">Kriti Jangra</a>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-slate-900 dark:text-white">💻 GitHub</h4>
//                   <a href="https://github.com/aasthagarg06" target="_blank" rel="noreferrer" className="block mt-2 text-blue-300 hover:underline">@aasthagarg06</a>
//                   <a href="https://github.com/Kriti978" target="_blank" rel="noreferrer" className="block text-blue-300 hover:underline">@Kriti978</a>
//                 </div>

//               </div>
//             </div>

//             <div className="rounded-[32px] bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-xl">
//               <h3 className="text-2xl font-bold">Need Quick Help?</h3>
//               <p className="mt-4 text-blue-100">
//                 Browse our FAQ, Privacy Policy and Terms of Service for quick answers.
//               </p>
//               <div className="mt-6 flex flex-wrap gap-3">
//                 <a href="/faq" className="rounded-full bg-white/15 px-4 py-2 hover:bg-white/25 transition">FAQ</a>
//                 <a href="/privacy-policy" className="rounded-full bg-white/15 px-4 py-2 hover:bg-white/25 transition">Privacy Policy</a>
//                 <a href="/terms" className="rounded-full bg-white/15 px-4 py-2 hover:bg-white/25 transition">Terms</a>
//               </div>
//             </div>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }































import React from "react";

export default function Contact() {
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
              action="https://formsubmit.co/resumeiq01@gmail.com"
              method="POST"
              className="space-y-6 mt-8"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="ResumeIQ Contact Form" />
              <input type="hidden" name="_next" value="http://localhost:5173/contact" />

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

              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 py-4 text-white font-semibold hover:opacity-95"
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
                  <a href="https://www.linkedin.com/in/kriti-jangra-286abb2b4/" target="_blank" rel="noreferrer" className="block text-blue-600 dark:text-blue-300 hover:underline">
                    Kriti Jangra
                  </a>
                  <a href="https://www.linkedin.com/in/aastha-garg-144101318/" target="_blank" rel="noreferrer" className="block text-blue-600 dark:text-blue-300 hover:underline">
                    Aastha Garg
                  </a>
                </div>

                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">💻 GitHub</p>
                  <a href="https://github.com/Kriti978" target="_blank" rel="noreferrer" className="block text-blue-600 dark:text-blue-300 hover:underline">
                    @Kriti978
                  </a>
                  <a href="https://github.com/aasthagarg06" target="_blank" rel="noreferrer" className="block text-blue-600 dark:text-blue-300 hover:underline">
                    @aasthagarg06
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
                 <a href="/privacy-policy" className="rounded-full bg-white/15 px-4 py-2 hover:bg-white/25 transition">Privacy Policy</a>
                 <a href="/terms" className="rounded-full bg-white/15 px-4 py-2 hover:bg-white/25 transition">Terms</a>
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
