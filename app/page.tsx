import Navbar from "@/components/NavbarV2";
import Hero from "@/components/HeroV2";
import TrustedTech from "@/components/TrustedTechV2";
import About from "@/components/AboutV2";
import Services from "@/components/ServicesV2";
import Solutions from "@/components/Solutions";
import BusinessOutcomes from "@/components/BusinessOutcomesV2";
import CaseStudies from "@/components/CaseStudiesV2";
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