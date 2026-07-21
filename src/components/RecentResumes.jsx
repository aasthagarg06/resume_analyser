import React, { useEffect, useState } from "react";

import {

    getRecentResumes,

    deleteResume

} from "../utils/localStorage";

export default function RecentResumes({
    resumes,
    onOpen,
    onDelete

}) {

    function handleDelete(id) {

        deleteResume(id);
        onDelete();

    }

    return (

        <div className="mt-10">

            <h2 className="text-2xl font-bold text-white mb-6">

                Recently Viewed

            </h2>

            {resumes.length === 0 ? (

                <div className="text-gray-400">

                    No recent resumes.

                </div>

            ) : (

                <div className="space-y-4">

                    {resumes.map((resume) => (

                        <div

                            key={resume.id}

                            className="bg-slate-800 rounded-xl p-5 border border-slate-700 flex justify-between items-center"

                        >

                            <div>

                                <h3 className="text-white font-semibold">

                                    {resume.name}

                                </h3>

                                <p className="text-gray-400 text-sm">

                                    ATS Score: {resume.atsScore}

                                </p>

                                <p className="text-gray-500 text-xs">

                                    {resume.uploadedAt}

                                </p>

                            </div>

                            <div className="flex gap-3">

                                <button

                                    onClick={() => onOpen(resume)}

                                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white"

                                >

                                    Open

                                </button>

                                <button

                                    onClick={() => handleDelete(resume.id)}

                                    className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"

                                >

                                    Delete

                                </button>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>

    );

}