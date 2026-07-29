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
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <Navbar />

      <Hero />

      <FadeIn delay={0.05}>
        <TrustedTech />
      </FadeIn>

      <FadeIn delay={0.10}>
        <About />
      </FadeIn>

      <FadeIn delay={0.15}>
        <Services />
      </FadeIn>

      <FadeIn delay={0.20}>
        <Solutions />
      </FadeIn>

      <FadeIn delay={0.25}>
        <BusinessOutcomes />
      </FadeIn>

      <FadeIn delay={0.30}>
        <CaseStudies />
      </FadeIn>

      <FadeIn delay={0.35}>
        <WhyChooseMe />
      </FadeIn>

      <FadeIn delay={0.40}>
        <Testimonials />
      </FadeIn>

      <FadeIn delay={0.45}>
        <Contact />
      </FadeIn>

      <Footer />
    </main>
  );
}