import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AboutUs from "@/components/about/About";
import Services from "@/components/services/index";
import Portfolio from "@/components/portfolio/Portfolio";
import Expertise from "@/components/expertise/Expertise";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";

const HeroSection = dynamic(() => import("@/components/hero"), {
  loading: () => <Loader/>,
});

// Register GSAP ScrollTrigger only on client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
// Metadata for SEO with Weblibron branding
export const metadata = {
  title: "Weblibron - Premium Digital Solutions for Web and App Development",
  description:
    "Elevate your online presence with Weblibron's swift, stunning web solutions. Specializing in web development, app development, UI/UX design, and branding services.",
  keywords:
    "Weblibron, web development, app development, UI/UX design, branding, SEO, digital solutions, high-performance web solutions, Next.js SEO Optimization, Next.js Metadata Best Practices, Next.js SEO Techniques, Next.js SEO Ranking",
  canonical: "https://weblibron.com",
  openGraph: {
    title: "Weblibron - Web and App Development",
    description:
      "Supercharge your business with Weblibron's high-performance web solutions. Transform your ideas into digital reality with our expert developers and designers.",
    url: "https://weblibron.com",
    type: "website",
    images: [
      {
        url: "https://weblibron.com/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Weblibron Web Solutions Preview",
      },
    ],
  },
  robots: "index, follow",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Expertise />
      <Services />
      <Portfolio />
    </>
  );
}

