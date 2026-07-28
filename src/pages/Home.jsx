
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import HowItWorks from "../components/HowItWorks";
import FAQ from "../components/FAQ";
function Home() {
  return (
    <div className="
        min-h-screen
        bg-linear-to-br
        from-slate-400
        via-blue-50
        to-violet-100
      ">

      <HeroSection />
      <FeatureSection />
      <HowItWorks />
      <FAQ />
    </div>
  );
}

export default Home;



