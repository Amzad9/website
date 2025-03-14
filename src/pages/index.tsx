import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import HeroSection from "@/components/hero";
import AboutUs from "@/components/about/About";
import Services from "@/components/services/index";
import Portfolio from "@/components/portfolio/Portfolio";
import { TestimonialsSection } from "@/components/Testimonials/TestimonialsSection";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

// Register GSAP ScrollTrigger only on client-side
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

// Metadata for SEO with Weblibron branding
export const metadata = {
  title: "Weblibron - Web Development & Design Solutions",
  description:
    "Elevate your online presence with Weblibron's swift, stunning web solutions. Specializing in web development, app development, and design.",
  keywords:
    "Weblibron, web development, app development, design, fast websites, SEO, stunning web solutions",
  canonical: "https://weblibron.com", // Replace with your actual domain
  openGraph: {
    title: "Weblibron",
    description:
      "Supercharge your business with Weblibron's high-performance web solutions.",
    url: "https://weblibron.com", // Replace with your actual domain
    type: "website",
    images: [
      {
        url: "https://weblibron.com/og-image.jpg", // Replace with your actual OG image URL
        width: 1200,
        height: 630,
        alt: "Weblibron Web Solutions Preview",
      },
    ],
  },
  robots: "index, follow",
};