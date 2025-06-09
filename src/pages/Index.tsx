import CountdownBanner from "@/components/CountdownBanner";
import Hero from "@/components/Hero";
import SchoolLogos from "@/components/SchoolLogos";
import Install from "@/components/Install";
import Features from "@/components/Features";
import SmartAnnotations from "@/components/SmartAnnotations";
import GradeBreakdown from "@/components/GradeBreakdown";
import PlaybackWriting from "@/components/PlaybackWriting";
import PlagiarismCheck from "@/components/PlagiarismCheck";
import AIWritingDetection from "@/components/AIWritingDetection";
import DataSecurity from "@/components/DataSecurity";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <CountdownBanner />
      <Hero />
      <SchoolLogos />
      <Install />
      <Features />
      <SmartAnnotations />
      <GradeBreakdown />
      <PlaybackWriting />
      <PlagiarismCheck />
      <AIWritingDetection />
      <DataSecurity />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
