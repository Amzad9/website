import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Geist } from "next/font/google";
import Header from "../header/Header";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <div id="home" className={`relative min-h-screen overflow-hidden ${geistSans}`}>
      <Header />
      {/* Video Background */}
      <div className="absolute inset-0 z-30">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        ></video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-50 bg-gray-950"></div>
      </div>

      {/* Hero Content */}
      <main
        className="relative z-30 container mx-auto px-6 pt-44"
      >
        <div className="text-center text-white max-w-4xl mx-auto">
          <h1 className="hero-text text-4xl font-inter flex items-center flex-wrap justify-center gap-3 mt-16 md:text-6xl italic font-semibold mb-2 leading-tight">
            <span className="text-primary font-extrabold not-italic">
              Elevate
            </span>{" "}
            your
            <motion.video
              autoPlay
              muted
              loop
              playsInline // Ensures auto-play works on mobile
              className="h-14 w-32 rounded-full cursor-pointer object-cover" // Height 100px, rounded corners
              src="/main.mp4" // Replace with your video path
              onError={(e) => {
                // Fallback to an image if the video fails to load
                e.target.style.display = "none";
                return (
                  <Image
                    src="/fallback/main.jpg" // Optional fallback image path
                    alt="Elevate"
                    width={140}
                    height={100}
                    className="h-24 rounded-full object-cover"
                  />
                );
              }}
              whileHover={{ scale: 1.05 }} // Optional hover animation
              transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
            />
            <span className="text-primary font-extrabold not-italic">
              impact
            </span>{" "}
            with our
            <motion.video
              autoPlay
              muted
              loop
              playsInline // Ensures auto-play works on mobile
              className="h-14 w-32 rounded-full cursor-pointer object-cover" // Height 100px, rounded corners
              src="/swift.mp4" // Replace with your video path
              onError={(e) => {
                // Fallback to an image if the video fails to load
                e.target.style.display = "none";
                return (
                  <Image
                    src="/fallback/digital.jpg" // Optional fallback image path
                    alt="Elevate"
                    width={140}
                    height={100}
                    className="h-24 rounded-full object-cover"
                  />
                );
              }}
              whileHover={{ scale: 1.05 }} // Optional hover animation
              transition={{ type: "tween", duration: 0.2, ease: "easeInOut" }}
            />
            <span className="text-primary font-extrabold not-italic">
              swift, stunning
            </span>{" "}
            web solutions.
          </h1>
          <p className="hero-text text-lg md:text-xl mb-4">
            Revolutionize your online presence with our lightning-fast web
            solutions.
          </p>
        </div>
      </main>
    </div>
  );
};

export default HeroSection;
