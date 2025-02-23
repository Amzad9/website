import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Header from "@/components/header/Header";
import Services from "@/components/services/index";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// Register ScrollTrigger plugin
// import videoFile from "../../public/video.mp4";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const contentRef = useRef(null);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);

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
      <div className={`relative min-h-screen overflow-hidden ${geistSans}`}>
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            src="/video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          ></video>
          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-60 bg-green-950"></div>
        </div>

        <Header isOpenNavbar={isOpenNavbar} setIsOpenNavbar={setIsOpenNavbar} />

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
      <Services />
      <section className="bg-blue-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Custom Software Development
          </h1>
          <p className="text-xl mb-8">
            Building practical mobile and web applications since 2008
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg">
            Get a Free Quote
          </button>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Mobile Apps</h3>
              <p className="text-gray-600">
                iOS and Android app development with modern technologies
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">Web Apps</h3>
              <p className="text-gray-600">
                Custom web applications tailored to your needs
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
              <p className="text-gray-600">
                User-focused design for optimal experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Portfolio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="h-40 bg-gray-300 mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-2">Project One</h3>
              <p className="text-gray-600">Brief description of the project</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="h-40 bg-gray-300 mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-2">Project Two</h3>
              <p className="text-gray-600">Brief description of the project</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="h-40 bg-gray-300 mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-2">Project Three</h3>
              <p className="text-gray-600">Brief description of the project</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-800 p-6 rounded-lg">
              <p className="mb-4">
                "Essential Designs delivered beyond our expectations!"
              </p>
              <p className="font-semibold">John Doe, Company X</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <p className="mb-4">
                "Their team is professional and highly skilled."
              </p>
              <p className="font-semibold">Jane Smith, Company Y</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-8">
            Contact us today for a free consultation
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg">
            Contact Us
          </button>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Essential Designs</h3>
              <p className="text-gray-400">
                Custom software solutions since 2008
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Locations</h3>
              <p className="text-gray-400">Vancouver • Toronto • Calgary</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-8">
            © 2025 Essential Designs. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
