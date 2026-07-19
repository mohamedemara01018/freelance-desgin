import CtaBanner from "@/components/features/landing/Ctabanner";
import Features from "@/components/features/landing/Features";
import Hero from "@/components/features/landing/Hero";
import PartnersBar from "@/components/features/landing/Partnersbar";
import Stats from "@/components/features/landing/Stats";
import Testimonial from "@/components/features/landing/Testimonial";
import Workflow from "@/components/features/landing/Workflow";
import Footer from "@/components/layout/footer/Footer";
import Navbar from "@/components/layout/navbar/Navbar";



export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-surface transition-colors duration-200">
      <Navbar />
      <Hero />
      <PartnersBar />
      <Features />
      <Workflow />
      <Stats />
      <Testimonial />
      <CtaBanner />
      <Footer />
    </div>
  );
}