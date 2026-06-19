// import {
//   FaRobot,
//   FaFileAlt,
//   FaBriefcase,
//   FaLightbulb,
// } from "react-icons/fa";

// function WhyChooseUs() {
//   const features = [
//     {
//       icon: <FaFileAlt />,
//       title: "ATS Analysis",
//       description:
//         "Evaluate how well your resume performs with Applicant Tracking Systems.",
//     },

//     {
//       icon: <FaRobot />,
//       title: "AI Suggestions",
//       description:
//         "Receive intelligent recommendations to improve your resume instantly.",
//     },

//     {
//       icon: <FaBriefcase />,
//       title: "JD Matching",
//       description:
//         "Compare your resume with job descriptions and identify missing requirements.",
//     },

//     {
//       icon: <FaLightbulb />,
//       title: "Skill Detection",
//       description:
//         "Automatically identify technical and soft skills from your resume.",
//     },
//   ];

//   return (
//     <section className="py-24 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-6">

//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold text-gray-900">
//             Why Choose ResumeAI?
//           </h2>

//           <p className="mt-5 text-lg text-gray-600 max-w-2xl mx-auto">
//             Powerful tools designed to help job seekers
//             create recruiter-friendly resumes and improve
//             interview opportunities.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="
//               bg-white
//               p-8
//               rounded-3xl
//               shadow-md
//               hover:shadow-xl
//               hover:-translate-y-2
//               transition-all
//               duration-300
//               "
//             >
//               <div
//                 className="
//                 text-4xl
//                 text-violet-600
//                 mb-5
//                 "
//               >
//                 {feature.icon}
//               </div>

//               <h3 className="text-xl font-semibold mb-3">
//                 {feature.title}
//               </h3>

//               <p className="text-gray-600">
//                 {feature.description}
//               </p>

//               <button
//                 className="
//                 mt-5
//                 text-violet-600
//                 font-semibold
//                 hover:underline
//                 "
//               >
//                 Learn More →
//               </button>
//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// }

// export default WhyChooseUs;