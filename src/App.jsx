import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import AboutSection from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import ATSChecker from "./pages/ATSChecker";
import ATSAnalysis from "./pages/ATSAnalysis";
import SkillDetection from "./pages/SkillDetection";
import JDMatching from "./pages/JDMatching";
import Dashboard from "./pages/Dashboard";
import Contact from "./pages/Contact";
import Login from "./components/LoginModal";
import signup from "./components/SignupModal";
import JDLearnMore from "./pages/JDLearnMore";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-linear-to-br from-slate-300 via-blue-50 to-violet-50">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutSection />} />
          <Route
            path="/ats-checker"
            element={
              <>
                <SignedIn>
                  <ATSChecker />
                </SignedIn>

                <SignedOut>
                  <RedirectToSignIn />
                </SignedOut>
              </>
            }
          />
          <Route
            path="/ats-analysis"
            element={<ATSAnalysis />}
          />

          <Route
            path="/skill-detection"
            element={<SkillDetection />}
          />

          <Route
  path="/jd-analysis"
  element={<JDLearnMore />}
/>

<Route
  path="/jd-matching"
  element={<JDMatching />}
/>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;




