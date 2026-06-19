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
    },
    {
      icon: <FaBrain />,
      title: "Skill Detection",
      description:
        "Extract technical and soft skills and identify missing competencies.",
      points: [
        "Technical Skills",
        "Missing Skills",
        "Skill Categories",
      ],
      color: "from-violet-500 to-purple-500",
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
    },
  ];

  return (
    <section className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold">
            FEATURES
          </span>

          <h2 className="text-5xl font-bold mt-4 text-slate-900">
            Everything You Need
          </h2>

          <p className="text-slate-600 mt-5 max-w-2xl mx-auto text-lg">
            Powerful AI tools designed to improve your
            resume and maximize interview opportunities.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
              }}
              className="
                bg-white
                rounded-3xl
                p-8
                shadow-lg
                hover:shadow-2xl
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
              <h3 className="text-3xl font-bold mt-6">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 mt-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Features List */}
              <ul className="mt-6 space-y-3">

                {feature.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700"
                  >
                    <span className="text-green-500">
                      ✓
                    </span>

                    {point}
                  </li>
                ))}

              </ul>

              {/* Button */}
              <button
                className="
                  mt-8
                  flex
                  items-center
                  gap-2
                  text-blue-600
                  font-semibold
                  hover:gap-4
                  transition-all
                "
              >
                Learn More
                <FaArrowRight />
              </button>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeatureSection;