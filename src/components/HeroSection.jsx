import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function HeroSection() {
  const navigate = useNavigate();
  return (
    <section
      className="
relative
overflow-hidden
min-h-[calc(100vh-72px)]
flex
items-center
px-6
bg-slate-50
dark:bg-[#020617]
"
    >

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px]" />

        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-500/10 blur-[140px]" />
      </div>
      <div className="relative z-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div className="relative z-30 max-w-xl"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div
            className="
    inline-block
    px-4
    py-2
    rounded-full
    bg-blue-100
    dark:bg-blue-900/40
    text-blue-700
    dark:text-blue-300
    font-medium
    mb-4
    transition-colors
  "
          >
            🚀 AI Powered Resume Analysis
          </div>

          <h1 className="text-[56px]
leading-[1.1] font-bold leading-tight text-slate-900 dark:text-white transition-colors">
            From Resume to Offer: <br />
            <span className="
              bg-linear-to-r
              from-blue-600
              to-violet-600
              bg-clip-text
              text-transparent
            ">
              {" "}Powered By AI
            </span>
          </h1>

          <TypeAnimation
            sequence={[
              "Analyze Your Resume",
              2000,
              "Improve ATS Score",
              2000,
              "Get More Interviews",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="
text-2xl
font-semibold
text-blue-600
dark:text-blue-400
block
mt-4
transition-colors
py-0
"
          />

          <p className="mt-5
text-lg
max-w-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors">
            Analyze your resume using AI,
            discover missing skills,
            improve ATS scores,
            and maximize interview opportunities.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

            <button
              onClick={() => navigate("/ats-checker")}
              className="
    px-8
    py-4
    rounded-2xl
    bg-linear-to-r
    from-blue-600
    to-violet-600
    text-white
    font-bold
    cursor-pointer
    hover:scale-105
    transition-all
    duration-300
  "
            >
              Analyze Resume
            </button>



          </div>

        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-0"
        >

          <motion.div
            animate={{
              y: [0, -15, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
            className="
bg-white/70
dark:bg-slate-900/70
backdrop-blur-xl
rounded-3xl
p-10
shadow-2xl
border
border-white
dark:border-slate-700
transition-colors
duration-300
"
          >

            <div className="text-center">

              <div className="text-8xl mb-4">
                📄
              </div>

              <h3 className="text-3xl font-bold text-slate-900 dark:text-white transition-colors">
                Resume Analyzer
              </h3>

              <p className="mt-4 text-slate-600 dark:text-slate-300 transition-colors">
                AI Powered Resume Insights
              </p>

            </div>

          </motion.div>

          <motion.div
            animate={{
              y: [0, -10, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity
            }}
            className="
absolute
z-0
top-0
-left-8
bg-white
dark:bg-slate-800
text-slate-900
dark:text-white
p-4
rounded-2xl
shadow-xl
border
border-slate-200
dark:border-slate-700
transition-colors
duration-300
"
          >
            🚀 ATS Optimized
          </motion.div>

          <motion.div
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity
            }}
            className="
absolute
z-0
bottom-0
-right-8
bg-white
dark:bg-slate-800
text-slate-900
dark:text-white
p-4
rounded-2xl
shadow-xl
border
border-slate-200
dark:border-slate-700
transition-colors
duration-300
"
          >
            📈 Interview Ready
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default HeroSection