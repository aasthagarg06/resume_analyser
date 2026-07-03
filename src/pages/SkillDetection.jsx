function SkillDetection() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-violet-100">

      <section className="py-24 px-6 text-center">

        <h1 className="text-6xl font-bold">
          Skill Detection
        </h1>

        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
          Discover the skills present in your resume,
          identify missing competencies, and improve
          your profile for better opportunities.
        </p>

      </section>

      <section className="px-6 pb-20">

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Technical Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              <span className="bg-blue-100 px-4 py-2 rounded-full">React</span>
              <span className="bg-blue-100 px-4 py-2 rounded-full">JavaScript</span>
              <span className="bg-blue-100 px-4 py-2 rounded-full">Node.js</span>
              <span className="bg-blue-100 px-4 py-2 rounded-full">MongoDB</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Soft Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              <span className="bg-violet-100 px-4 py-2 rounded-full">Leadership</span>
              <span className="bg-violet-100 px-4 py-2 rounded-full">Communication</span>
              <span className="bg-violet-100 px-4 py-2 rounded-full">Teamwork</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">
              Missing Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              <span className="bg-red-100 px-4 py-2 rounded-full">Docker</span>
              <span className="bg-red-100 px-4 py-2 rounded-full">AWS</span>
              <span className="bg-red-100 px-4 py-2 rounded-full">TypeScript</span>
            </div>
          </div>

        </div>

      </section>

    </div>
  );
}

export default SkillDetection;