import gsap from "gsap";
import Services from "@/components/services/index";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";
import { TestimonialsSection } from "@/components/Testimonials/TestimonialsSection";
import AboutUs from "@/components/about/About";
import HeroSection from "@/components/hero";
import Portfolio from "@/components/portfolio/Portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <Portfolio />
      <TestimonialsSection />
      <Contact />
      <Footer />
    </>
  );
}
