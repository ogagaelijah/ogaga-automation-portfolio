import Navbar from "@/components/NavbarV2";
import Hero from "@/components/HeroV2";
import TrustedTech from "@/components/TrustedTechV2";
import About from "@/components/AboutV2";
import Services from "@/components/ServicesV2";
import Solutions from "@/components/SolutionsV2";
import BusinessOutcomes from "@/components/BusinessOutcomesV2";
import CaseStudies from "@/components/CaseStudiesV2";
import FeaturedProjects from "@/components/FeaturedProjects";
import Process from "@/components/Process";
import WhyChooseMe from "@/components/WhyChooseMeV2";
import Contact from "@/components/ContactV2";
import Footer from "@/components/FooterV3";

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

      <FeaturedProjects />

      <Process />

      <CaseStudies />

      <WhyChooseMe />

      <Contact />

      <Footer />

    </main>
  );
}