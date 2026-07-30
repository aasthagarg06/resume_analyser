import React from "react";


function ScoreCard({ title, score, color }) {
  return (
    <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</p>
      <div className="mt-4 flex items-end justify-between">
        <span className="text-4xl font-bold" style={{ color }}>{score}%</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{ width: `${score}%`, backgroundColor: color }} />
      </div>
    </div>
  );
}

function Chip({ children, type = "green" }) {
  return (
    <span className={`px-4 py-2 rounded-full text-sm font-medium ${type === "green"
      ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-300"
      : "bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300"
      }`}>
      {children}
    </span>
  );
}

export default function JDResults({ result }) {
  if (!result) return null;

  return (
    <div className="mt-14 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
        <ScoreCard title="Overall Match" score={result.overallScore} color="#2563eb" />
        <ScoreCard title="Skills" score={result.skillsScore} color="#16a34a" />
        <ScoreCard title="Keywords" score={result.keywordScore} color="#ea580c" />
        <ScoreCard title="Experience" score={result.experienceScore} color="#9333ea" />
        <ScoreCard title="Education" score={result.educationScore} color="#dc2626" />
      </div>

      <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Matched Skills</h2>
        <div className="flex flex-wrap gap-3 mt-6">
          {result.matchedSkills.map(skill => <Chip key={skill}>{skill}</Chip>)}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Missing Skills</h2>
        <div className="flex flex-wrap gap-3 mt-6">
          {result.missingSkills.map(skill => <Chip key={skill} type="red">{skill}</Chip>)}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Resume Strength Analysis</h2>
        <div className="mt-6 space-y-4">
          {result.strengths.map((item, index) => (
            <div key={index} className="rounded-2xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 p-4">
              <p className="text-green-700 dark:text-green-300">✓ {item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Areas to Improve</h2>
        <div className="mt-6 space-y-4">
          {result.weaknesses.map((item, index) => (
            <div key={index} className="rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 p-4">
              <p className="text-red-700 dark:text-red-300">✗ {item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-xl p-8">
        <h2 className="text-2xl font-bold">AI Summary</h2>
        <p className="mt-4 text-blue-100">
          Your resume matches approximately <strong>{result.overallScore}%</strong> of the job description. Strengthen the missing skills below to improve your chances for this role.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white/90 dark:bg-slate-900/70 backdrop-blur-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">AI Suggestions</h2>
        <div className="mt-6 space-y-4">
          {result.suggestions.map((item, index) => (
            <div key={index} className="rounded-2xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 p-4">
              <p className="text-blue-700 dark:text-blue-300">💡 {item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

