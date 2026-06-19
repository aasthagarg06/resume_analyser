
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import AboutSection from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import ATSChecker from "./pages/ATSChecker";
function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
  <div className="min-h-screen bg-linear-to-br from-slate-300 via-blue-50 to-violet-50">
    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutSection />} />
      <Route path="/ats-checker" element={<ATSChecker />}
/>
    </Routes>

    <Footer />
  </div>
</BrowserRouter>
  );
}

export default App;