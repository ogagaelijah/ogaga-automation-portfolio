import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedTech from "@/components/TrustedTech";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import CaseStudies from "@/components/CaseStudies";
import WhyChooseMe from "@/components/WhyChooseMe";
import Testimonials from "@/components/Testimonials";
import Technologies from "@/components/Technologies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <TrustedTech />

      <Solutions />

      <Services />

      <BusinessOutcomes />

      <CaseStudies />

      <WhyChooseMe />

      <Testimonials />

      <Technologies />

      <Contact />

      <Footer />
    </>
  );
}