import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">

      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-linear-to-r from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-xl">
            R
          </div>

          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              ResumeIQ
            </h1>

            <p className="text-xs text-slate-500">
              Analyze. Improve. Get Hired.
            </p>
          </div>

        </div>

        {/* Menu */}
        <ul className="hidden lg:flex items-center gap-8 text-slate-700 font-medium">

          <li className="hover:text-blue-600 transition">
            <Link to="/">Home</Link>
          </li>

          <li className="hover:text-blue-600 transition">
            <Link to="/ats-checker"> ATS Checker </Link>
          </li>

          <li className="hover:text-blue-600 transition">
            JD Match
          </li>

          <li className="hover:text-blue-600 transition">
            Blog
          </li>

          <li className="hover:text-blue-600 transition">
            Job Alerts
          </li>

          <li className="hover:text-blue-600 transition">
            <Link to="/about">About</Link>
          </li>

        </ul>

        <button className="px-5 py-2 rounded-lg bg-linear-to-r from-blue-600 to-violet-600 text-white font-semibold hover:scale-105 transition">
          Login
        </button>

      </div>

    </nav>
  );
}

export default Navbar;



