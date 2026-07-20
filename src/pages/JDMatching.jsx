import { motion } from "framer-motion";

function JDMatching() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="
        relative
        overflow-hidden
        min-h-[calc(100vh-72px)]
        flex
        items-center
        px-6
        bg-slate-950
        text-white
      "
    >

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[140px]" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full text-center relative z-10 py-24">

        <h1 className="text-6xl font-bold leading-tight text-white">
          Compare Your Resume with a Job Description
        </h1>

        <p className="mt-6 text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Discover how well your profile matches and get guidance on missing skills, keywords, and role fit.
        </p>

      </div>
    </motion.section>
  );
}

export default JDMatching;
