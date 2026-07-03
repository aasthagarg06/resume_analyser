import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function HeroSection() {
  return (
    <section
      className="
        py-24
        px-6
        bg-linear-to-br
        from-slate-600
        via-blue-50
        to-violet-100
      "
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <div className="
            inline-block
            px-4
            py-2
            rounded-full
            bg-blue-100
            text-blue-700
            font-medium
            mb-6
          ">
            🚀 AI Powered Resume Analysis
          </div>

          <h1 className="text-6xl font-bold leading-tight text-slate-900">
            Beat ATS Filters &
            <span className="
              bg-linear-to-r
              from-blue-600
              to-violet-600
              bg-clip-text
              text-transparent
            ">
              {" "}Get More Interviews
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
              block
              mt-6
            "
          />

          <p className="mt-8 text-xl text-slate-600 leading-relaxed">
            Analyze your resume using AI,
            discover missing skills,
            improve ATS scores,
            and maximize interview opportunities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button
              className="
                px-8
                py-4
                rounded-2xl
                bg-linear-to-r
                from-blue-600
                to-violet-600
                text-white
                font-bold
                shadow-lg
                shadow-blue-500/30
                hover:scale-105
                hover:shadow-blue-500/60
                transition-all
                duration-300
              "
            >
              Analyze Resume
            </button>

            <button
              className="
                px-8
                py-4
                rounded-2xl
                border
                border-slate-300
                font-semibold
                hover:bg-white
                hover:scale-105
                transition-all
                duration-300
              "
            >
              Watch Demo
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
              backdrop-blur-xl
              rounded-3xl
              p-10
              shadow-2xl
              border
              border-white
            "
          >

            <div className="text-center">

              <div className="text-8xl mb-4">
                📄
              </div>

              <h3 className="text-3xl font-bold">
                Resume Analyzer
              </h3>

              <p className="mt-4 text-slate-600">
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
p-4
rounded-2xl
shadow-xl
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
p-4
rounded-2xl
shadow-xl
"
          >
            📈 Interview Ready
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}

export default HeroSection;