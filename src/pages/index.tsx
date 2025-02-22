import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Header from "@/components/header/Header";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// Register ScrollTrigger plugin
// import videoFile from "../../public/video.mp4";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  // const videoRef = useRef(null);
  const contentRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contentRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    // Animate navigation items
    gsap.from(".nav-item", {
      opacity: 0,
      y: -20,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });

    // Animate hero content
    tl.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.3,
    });
  }, []);

  return (
    <>
      <div className="relative min-h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {/* <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source src="./assets/video.mp4" type="video/mp4" />
        </video> */}
          <video
            src="/video.mp4"
            // src="https://videocdn.cdnpk.net/videos/d124675e-e8ad-510d-98e3-6e701ff747b7/horizontal/previews/watermarked/large.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          ></video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-60 bg-green-950"></div>
        </div>

        {/* Navigation */}
        {/* <header ref={headerRef} className="relative z-10">
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="text-white text-2xl font-bold">weblibron</div>
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About us",
                "Services",
                "Technology",
                "Team",
                "Clients",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="nav-item text-white hover:text-emerald-200 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header> */}

        <Header />

        {/* Hero Content */}
        <main
          ref={contentRef}
          className="relative z-10 container mx-auto px-6 pt-44"
        >
          <div className="text-center text-white max-w-4xl mx-auto">
            <h2 className="hero-text text-xl md:text-2xl mb-6">
              Streamlined web services, empowered.
            </h2>
            <h1 className="hero-text text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Boost your online presence with our lightning-fast web development
              services.
            </h1>
            <p className="hero-text text-xl md:text-2xl mb-12">
              Revolutionize your online presence with our lightning-fast web
              solutions.
            </p>
          </div>
        </main>
      </div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  );
}
