import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  return (
    <>
      <nav
        className="
        sticky top-0 z-50
        bg-white/80 dark:bg-slate-900/80
        backdrop-blur-md
        border-b border-slate-200 dark:border-slate-700
        shadow-sm
        transition-all duration-300
      "
      >
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="w-10 h-10 rounded-xl bg-linear-to-r from-blue-600 to-violet-600 flex items-center justify-center text-white font-bold text-xl">
              R
            </div>

            <div>

              <h1 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">
                ResumeIQ
              </h1>

              <p className="text-xs text-slate-500 dark:text-slate-400 transition-colors">
                Analyze. Improve. Get Hired.
              </p>

            </div>

          </div>

          {/* Navigation */}

          <ul
            className="
            hidden lg:flex
            items-center
            gap-8
            text-slate-700
            dark:text-slate-200
            font-medium
            transition-colors
          "
          >

            <li className="hover:text-blue-600 dark:hover:text-violet-400 transition-colors duration-300">
              <Link to="/">Home</Link>
            </li>

            <li className="hover:text-blue-600 dark:hover:text-violet-400 transition-colors duration-300">
              <Link to="/ats-checker">ATS Checker</Link>
            </li>

            <li className="hover:text-blue-600 dark:hover:text-violet-400 transition-colors duration-300">
              JD Match
            </li>

            <li className="hover:text-blue-600 dark:hover:text-violet-400 transition-colors duration-300">
              Blog
            </li>

            <li className="hover:text-blue-600 dark:hover:text-violet-400 transition-colors duration-300">
              Job Alerts
            </li>

            <li className="hover:text-blue-600 dark:hover:text-violet-400 transition-colors duration-300">
              <Link to="/about">About</Link>
            </li>

          </ul>

          {/* Right Side */}

          <div className="flex items-center gap-4">

            <ThemeToggle />

            {/* Logged Out */}

            <SignedOut>

              <SignInButton mode="modal">

                <button
                  className="
                  px-5 py-2
                  rounded-full
                  border
                  border-slate-300 dark:border-slate-600
                  bg-white dark:bg-slate-800
                  text-slate-700 dark:text-white
                  font-medium
                  hover:bg-slate-100
                  dark:hover:bg-slate-700
                  transition-all duration-300
                "
                >
                  Login
                </button>

              </SignInButton>

              <SignUpButton mode="modal">

                <button
                  className="
                  px-5 py-2
                  rounded-full
                  bg-linear-to-r
                  from-blue-600
                  to-violet-600
                  text-white
                  font-medium
                  hover:scale-105
                  hover:shadow-lg
                  transition-all duration-300
                "
                >
                  Sign Up
                </button>

              </SignUpButton>

            </SignedOut>

            {/* Logged In */}

            <SignedIn>

              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  variables: {
                    borderRadius: "14px",
                  },

                  elements: {
                    avatarBox: {
                      width: "44px",
                      height: "44px",
                      border: "2px solid #7C3AED",
                    },

                    userButtonPopoverCard:
                      "rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 dark:bg-slate-900",

                    userButtonPopoverActions:
                      "py-2",

                    userButtonPopoverActionButton:
                      "rounded-xl hover:bg-violet-50 dark:hover:bg-slate-800 transition",

                    userButtonPopoverFooter:
                      "hidden",
                  },
                }}
              />

            </SignedIn>

          </div>

        </div>

      </nav>
    </>
  );
}

export default Navbar;