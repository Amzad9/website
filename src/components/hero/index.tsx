import React from "react";
import { motion } from "framer-motion";
import { Geist } from "next/font/google";

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