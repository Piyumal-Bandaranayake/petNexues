import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import AppDeviceExperience from "@/components/AppDeviceExperience";
import FeaturesGrid from "@/components/FeaturesGrid";
import BenefitsSection from "@/components/BenefitsSection";
import Testimonials from "@/components/Testimonials";
import SetupSteps from "@/components/SetupSteps";
import WhatsInBox from "@/components/WhatsInBox";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <AppDeviceExperience />
        <FeaturesGrid />
        <BenefitsSection />
        <Testimonials />
        <SetupSteps />
        <WhatsInBox />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
