import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedTech from "@/components/TrustedTech";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import CaseStudies from "@/components/CaseStudies";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />
      <Hero />
      <TrustedTech />
      <About />
      <Services />
      <Solutions />
      <BusinessOutcomes />
      <CaseStudies />
      <WhyChooseMe />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}