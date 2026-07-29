import { Link } from "react-router-dom";
import { useState } from "react";
function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (event) => {
    if (event?.preventDefault) {
      event.preventDefault();
    }

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError("Please enter a valid email.");
      return;
    }

    setError("");
    setLoading(true);

    // Fake API request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setSuccess(true);
    setEmail("");

    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  };
  return (
    <footer className="bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>

            <div className="flex items-center gap-3 mb-4">

              <div className="w-12 h-12 rounded-xl bg-linear-to-r from-blue-600 to-violet-600 flex items-center justify-center font-bold text-xl">
                R
              </div>

              <h2 className="text-3xl font-bold">
                ResumeIQ
              </h2>

            </div>

            <p className="text-slate-400">
              Analyze. Improve. Get Hired.
            </p>

            <p className="text-slate-500 mt-4 leading-relaxed">
              AI-powered resume analysis platform
              helping students and professionals
              improve ATS scores and land more interviews.
            </p>

            <div className="flex gap-4 mt-6 text-2xl">

              <button className="hover:scale-110 transition">
                💻
              </button>

              <button className="hover:scale-110 transition">
                🔗
              </button>

              <button className="hover:scale-110 transition">
                🐦
              </button>

            </div>

          </div>

          {/* Features */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Features
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link to="/ats-checker" className="hover:text-white transition"> ATS Checker </Link>
              </li>

              <li>
                <Link to="/jd-matching" className="hover:text-white transition"> JD Matching </Link>
              </li>

            </ul>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">

              <li>
                <Link to="/" className="hover:text-white transition">Home</Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-white transition"> About Us </Link>
              </li>

              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Newsletter */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Stay Updated
            </h3>

            <p className="text-slate-400 mb-4">
              Get career tips and resume insights.
            </p>

            <form onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                className="
                  w-full
                  p-3
                  rounded-xl
                  bg-slate-800
                  border
                  border-slate-700
                  text-white
                  outline-none
                "
              />

              {error && (
                <p className="text-red-400 text-sm mt-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full
    mt-3
    py-3
    rounded-xl
    bg-linear-to-r
    from-blue-600
    to-violet-600
    font-semibold
    hover:scale-105
    transition
    disabled:opacity-60
    cursor-pointer
                "
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </button>
            </form>


            {success && (
              <div className="mt-4 rounded-xl bg-green-500/20 border border-green-500 p-3 text-green-300 text-center">
                ✅ Thanks for subscribing!

                <p className="text-sm mt-1 text-green-200">
                  Newsletter integration will be available in a future update.
                </p>
              </div>
            )}

          </div>

        </div>

        <div className="border-t border-slate-800 mt-12 pt-8">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-slate-500 text-sm">
              © 2026 ResumeIQ. All rights reserved.
            </p>

            <div className="flex gap-6 text-slate-400 text-sm">

              <Link
                to="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>

              <Link
                to="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;