import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ScoreCard({ title, score, color }) {

    return (

        <div className="bg-white rounded-3xl shadow-xl p-6 text-center">

            <h3 className="text-lg font-semibold text-gray-700 mb-5">

                {title}

            </h3>

            <div className="w-28 h-28 mx-auto">

                <CircularProgressbar
                    value={score}
                    text={`${score}%`}
                    styles={buildStyles({
                        textSize: "18px",
                        pathColor: color,
                        textColor: color,
                        trailColor: "#e5e7eb"
                    })}
                />

            </div>

        </div>

    );

}

export default function JDResults({ result }) {

    if (!result) return null;

    return (

        <div className="mt-14">

            {/* Scores */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

                <ScoreCard
                    title="Overall"
                    score={result.overallScore}
                    color="#2563eb"
                />

                <ScoreCard
                    title="Skills"
                    score={result.skillsScore}
                    color="#9333ea"
                />

                <ScoreCard
                    title="Keywords"
                    score={result.keywordScore}
                    color="#ea580c"
                />

                <ScoreCard
                    title="Experience"
                    score={result.experienceScore}
                    color="#16a34a"
                />

                <ScoreCard
                    title="Education"
                    score={result.educationScore}
                    color="#dc2626"
                />

            </div>

            {/* Matched Skills */}

            <div className="mt-10 bg-slate-900 rounded-3xl border border-slate-800 p-8">

                <h2 className="text-3xl font-bold text-white">

                    Matched Skills

                </h2>

                <div className="flex flex-wrap gap-3 mt-6">

                    {result.matchedSkills.map((skill) => (

                        <span
                            key={skill}
                            className="bg-green-500/20 text-green-300 px-5 py-2 rounded-full"
                        >

                            {skill}

                        </span>

                    ))}

                </div>

            </div>

            {/* Missing Skills */}

            <div className="mt-8 bg-slate-900 rounded-3xl border border-slate-800 p-8">

                <h2 className="text-3xl font-bold text-white">

                    Missing Skills

                </h2>

                <div className="flex flex-wrap gap-3 mt-6">

                    {result.missingSkills.map((skill) => (

                        <span
                            key={skill}
                            className="bg-red-500/20 text-red-300 px-5 py-2 rounded-full"
                        >

                            {skill}

                        </span>

                    ))}

                </div>

            </div>
            <div className="mt-8 bg-slate-900 rounded-3xl border border-slate-800 p-8">

                <h2 className="text-3xl font-bold text-white">
                    Strengths
                </h2>

                <ul className="mt-6 space-y-4">

                    {result.strengths.map((item, index) => (

                        <li
                            key={index}
                            className="text-green-300"
                        >
                            ✓ {item}
                        </li>

                    ))}

                </ul>

            </div>
            <div className="mt-8 bg-slate-900 rounded-3xl border border-slate-800 p-8">

                <h2 className="text-3xl font-bold text-white">
                    Weaknesses
                </h2>

                <ul className="mt-6 space-y-4">

                    {result.weaknesses.map((item, index) => (

                        <li
                            key={index}
                            className="text-red-300"
                        >
                            ✗ {item}
                        </li>

                    ))}

                </ul>

            </div>

            {/* Suggestions */}

            <div className="mt-8 bg-slate-900 rounded-3xl border border-slate-800 p-8">

                <h2 className="text-3xl font-bold text-white">

                    Suggestions

                </h2>

                <ul className="mt-6 space-y-4">

                    {result.suggestions.map((item, index) => (

                        <li
                            key={index}
                            className="text-slate-300"
                        >

                            • {item}

                        </li>

                    ))}

                </ul>

            </div>

        </div>

    );

}