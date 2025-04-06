import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import AboutUs from "@/components/about/About";
import Services from "@/components/services/index";
import Portfolio from "@/components/portfolio/Portfolio";
import Expertise from "@/components/expertise/Expertise";
import dynamic from "next/dynamic";
import Loader from "@/components/Loader";
import Link from "next/link";

const HeroSection = dynamic(() => import("@/components/hero"), {
  loading: () => <Loader/>,
});

// Register GSAP ScrollTrigger only on client-side
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
// Metadata for SEO with Weblibron branding
export const metadata = {
  title: "Weblibron | Web & App Development & SEO Agency",
  description:
    "Boost your business with Weblibron’s expert web & app development, SEO, UI/UX design, and branding for scalable digital solutions.",
  keywords:
    "Weblibron, web development, app development, UI/UX design, SEO services, branding, digital solutions, responsive web design, fast-loading websites, Next.js SEO best practices, mobile app optimization, technical SEO, scalable web development, conversion-focused design, business growth",
  canonical: "https://weblibron.com",
  openGraph: {
    title: "Weblibron | Expert Web & App Development for Business Growth",
    description:
      "Unlock the power of high-performance web & app solutions with Weblibron. Custom-built digital experiences to maximize your success online.",
    url: "https://weblibron.com",
    type: "website",
    images: [
      {
        url: "https://weblibron.com/assets/preview.jpg", // Use a high-quality image URL
        width: 1200,
        height: 630,
        alt: "Weblibron - High-Performance Web & App Solutions",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Weblibron | Next-Gen Web & App Development",
    description:
      "Scale your business with Weblibron’s SEO-friendly, mobile-responsive websites and custom app development. Elevate your online presence today.",
    images: ["https://weblibron.com/assets/preview.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://weblibron.com",
    languages: {
      "en-US": "https://weblibron.com/en",
      "es-ES": "https://weblibron.com/es",
    },
  },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Weblibron",
    "url": "https://weblibron.com",
    "logo": "https://weblibron.com/lt-logo.jpg",
    "sameAs": [
      "https://www.linkedin.com/company/weblibron",
      "https://twitter.com/weblibron",
      "https://www.facebook.com/profile.php?viewas=100000686899395&id=61557790902650",
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918178614811",
      "contactType": "customer support",
      "areaServed": "Global",
      "availableLanguage": ["English", "Spanish"],
    },
  },
};

export default function Home() {
  return (
    <>
    <div className="bg-yellow-400 text-center py-1 text-gray-800 text-base font-inter">
        <p>Get a <span className="font-bold text-red-600">$99 Website Audit</span> Today! 
            <Link href="#contact" className="ml-2 inline-block bg-blue-600 text-white py-1 px-3 rounded-md text-sm hover:bg-blue-700">Order Now</Link>
        </p>
    </div>
      <HeroSection />
      <AboutUs />
      <Expertise />
      <Services />
      <Portfolio />
    </>
  );
}

