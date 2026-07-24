import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaBrain,
  FaBullseye,
  FaArrowRight,
} from "react-icons/fa";

function FeatureSection() {
  const features = [
    {
      icon: <FaChartLine />,
      title: "ATS Analysis",
      description:
        "Analyze ATS compatibility, formatting issues, and keyword optimization.",
      points: [
        "ATS Score",
        "Keyword Check",
        "Resume Formatting",
      ],
      color: "from-blue-500 to-cyan-500",
      link: "/ats-analysis",
    },

    {
      icon: <FaBullseye />,
      title: "JD Matching",
      description:
        "Compare resumes against job descriptions and improve relevance.",
      points: [
        "Match Percentage",
        "Missing Keywords",
        "Improvement Areas",
      ],
      color: "from-emerald-500 to-green-500",
      link: "/jd-analysis",
    },
  ];

  return (
    <section
  className="
    py-24
    px-8
    lg:px-12
    bg-white
    dark:bg-slate-950
    transition-colors
    duration-300
  "
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-blue-600 dark:text-blue-400 font-semibold transition-colors">
            FEATURES
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900 dark:text-white transition-colors">
            Everything You Need
          </h2>

          <p className="text-slate-600 dark:text-slate-300 mt-5 max-w-2xl mx-auto text-lg transition-colors">
            Powerful AI tools designed to improve your
            resume and maximize interview opportunities.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.1,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="
                bg-white/80
                dark:bg-slate-900/80
                backdrop-blur-xl
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
                dark:shadow-black/30
                border
                border-slate-200
                dark:border-slate-700
                transition-all
                duration-300
              "
            >

              {/* Icon */}
              <div
                className={`
                  w-16
                  h-16
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  text-white
                  text-2xl
                  bg-linear-to-r
                  ${feature.color}
                `}
              >
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mt-6 text-slate-900 dark:text-white transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 mt-4 leading-relaxed transition-colors">
                {feature.description}
              </p>

              {/* Features List */}
              <ul className="mt-6 space-y-3">

                {feature.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 dark:text-slate-200 transition-colors"
                  >
                    <span className="text-green-500">
                      ✓
                    </span>

                    {point}
                  </li>
                ))}

              </ul>

              {/* Button */}
              <Link
                to={feature.link}
                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  text-blue-600
                  dark:text-blue-400
                  font-semibold
                  hover:gap-4
                  transition-all
                  duration-300
                "
              >
                Learn More
                <FaArrowRight />
              </Link>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default FeatureSection;