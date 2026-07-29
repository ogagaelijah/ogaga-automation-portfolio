import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import BusinessOutcomes from "@/components/BusinessOutcomes";
import CaseStudies from "@/components/CaseStudies";
import WhyChooseMe from "@/components/WhyChooseMe";
import Technologies from "@/components/Technologies";
import TrustedTech from "@/components/TrustedTech";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* ================= NAVIGATION ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main>

        {/* Hero Section */}
        <Hero />

        {/* About Me */}
        <About />

        {/* Services */}
        <Services />

        {/* Solutions */}
        <Solutions />

        {/* Business Outcomes */}
        <BusinessOutcomes />

        {/* Case Studies */}
        <CaseStudies />

        {/* Why Choose Me */}
        <WhyChooseMe />

        {/* Technologies */}
        <Technologies />

        {/* Trusted Technology Stack */}
        <TrustedTech />

        {/* Client Testimonials */}
        <Testimonials />

        {/* Contact */}
        <Contact />

      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}