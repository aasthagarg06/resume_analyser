const STORAGE_KEY = "recentResumes";

const MAX_RECENT = 5;

// Save Resume
export function saveResume(resume) {

    const resumes = getRecentResumes();

    // Remove duplicate (same file name)
    const filtered = resumes.filter(

        item => item.name !== resume.name

    );

    // Add newest at top
    filtered.unshift(resume);

    // Keep only latest 5
    const latest = filtered.slice(0, MAX_RECENT);

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(latest)

    );

}

// Get All Resumes
export function getRecentResumes() {

    return JSON.parse(

        localStorage.getItem(STORAGE_KEY)

    ) || [];

}

// Delete Resume
export function deleteResume(id) {

    const resumes = getRecentResumes().filter(

        item => item.id !== id

    );

    localStorage.setItem(

        STORAGE_KEY,

        JSON.stringify(resumes)

    );

}

// Clear Everything (optional)
export function clearRecentResumes() {

    localStorage.removeItem(STORAGE_KEY);

}