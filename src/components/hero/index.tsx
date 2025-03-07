import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Geist } from "next/font/google";
import Header from "../header/Header";
import Link from "next/link"; // Use standard Link instead of NextLink
import Logo from "@/assets/whiteLogo.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <section
      id="home"
      className={`relative min-h-screen overflow-hidden ${geistSans.variable}`}
    >
      {/* WhatsApp Link */}
      <Link
        href="https://wa.me/918178614811?text=Thank%20you%20for%20reaching%20out.%20%F0%9F%9A%80%20We%20specialize%20in%20Web%20Development%2C%20App%20Development%2C%20and%20Design%20to%20help%20businesses%20grow%20online"
        className="fixed z-50 bottom-16 right-16"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <Image
          src="/whatsapp.svg"
          width={60}
          height={60}
          alt="WhatsApp Contact"
          priority
        />
      </Link>

      {/* Header with Logo */}
      <Header logo={Logo.src} />

      {/* Video Background */}
      <div className="absolute inset-0 z-30">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gray-950 bg-opacity-50"></div>
      </div>

      {/* Hero Content */}
      <main className="relative z-30 container mx-auto px-6 pt-44">
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl italic font-semibold mb-2 leading-tight flex items-center flex-wrap justify-center gap-3">
            <span className="text-primary font-extrabold not-italic">
              Elevate
            </span>
            your
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              className="h-14 w-32 rounded-full object-cover"
              src="/main.mp4"
              aria-hidden="true"
            />
            <span className="text-primary font-extrabold not-italic">
              impact
            </span>
            with our
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              className="h-14 w-32 rounded-full object-cover"
              src="/swift.mp4"
              aria-hidden="true"
            />
            <span className="text-primary font-extrabold not-italic">
              swift, stunning
            </span>
            web solutions.
          </h1>
          <p className="text-lg md:text-xl mb-4 mt-5">
            Supercharge your online presence with our lightning-fast,
            high-performance web solutions. Experience seamless design, speed,
            and innovation like never before.
          </p>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;