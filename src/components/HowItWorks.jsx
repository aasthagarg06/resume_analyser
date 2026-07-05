import { FaUpload, FaSearch, FaChartLine, FaRocket } from "react-icons/fa";

function HowItWorks() {
  const steps = [
    {
      icon: <FaUpload />,
      title: "Upload Resume",
      desc: "Upload your PDF resume securely."
    },
    {
      icon: <FaSearch />,
      title: "AI Analysis",
      desc: "Our AI scans formatting, keywords and skills."
    },
    {
      icon: <FaChartLine />,
      title: "Get ATS Score",
      desc: "Receive ATS compatibility insights."
    },
    {
      icon: <FaRocket />,
      title: "Improve Resume",
      desc: "Follow recommendations and boost interviews."
    }
  ];

  return (
    <section
      className="
        py-24
        px-6
        bg-white
        dark:bg-slate-950
        transition-colors
        duration-300
      "
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <h2 className="text-5xl font-bold text-center mb-4 text-slate-900 dark:text-white transition-colors">
          How It Works
        </h2>

        <p className="text-center text-slate-500 dark:text-slate-400 mb-16 transition-colors">
          Four simple steps to improve your resume.
        </p>

        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (

            <div
              key={index}
              className="
                bg-white/80
                dark:bg-slate-900/80
                backdrop-blur-xl
                p-8
                rounded-3xl
                shadow-lg
                hover:shadow-2xl
                dark:shadow-black/30
                border
                border-slate-200
                dark:border-slate-700
                hover:-translate-y-3
                transition-all
                duration-300
                text-center
              "
            >

              <div
                className="
                  text-5xl
                  text-blue-600
                  dark:text-blue-400
                  mb-6
                  flex
                  justify-center
                  transition-colors
                "
              >
                {step.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white transition-colors">
                {step.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 transition-colors">
                {step.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorks;