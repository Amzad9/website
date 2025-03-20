import React from "react";
import { motion } from "framer-motion";
import { Geist } from "next/font/google";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 animate-pulse"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Animated Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble animate-float-slow1 bg-primary/5 w-[300px] h-[300px] rounded-full absolute -top-20 -left-20 blur-3xl"></div>
        <div className="bubble animate-float-slow2 bg-blue-500/5 w-[250px] h-[250px] rounded-full absolute top-1/2 -right-20 blur-3xl"></div>
        <div className="bubble animate-float-slow3 bg-primary/5 w-[200px] h-[200px] rounded-full absolute bottom-20 left-1/4 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 min-h-screen flex items-center relative z-20">
        {/* Content Container with Max Width */}
        <div className="max-w-5xl mx-auto w-full relative z-30">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 mb-8 sm:mb-12 border border-white/10">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-white/80 text-sm font-medium">Premium Digital Solutions</span>
          </div>

          {/* Responsive Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-poppins mb-6 flex items-center flex-wrap gap-2 sm:gap-3">
            <span className="text-primary italic bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary transition-all duration-500">
              Elevate
            </span>
            <span className="text-white font-medium">your</span>
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              className="h-10 w-24 sm:h-12 sm:w-28 md:h-14 md:w-32 rounded-full object-cover"
              src="/main.mp4"
              aria-hidden="true"
            />
            <span className="text-primary italic bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary transition-all duration-500">
              impact
            </span>
            <span className="text-white font-medium">with our</span>
            <span className="text-primary italic bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary transition-all duration-500">
              swift, stunning solutions
            </span>
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              className="h-10 w-24 sm:h-12 sm:w-28 md:h-14 md:w-32 rounded-full object-cover"
              src="/swift.mp4"
              aria-hidden="true"
            />
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mt-6 sm:mt-8 mb-8 sm:mb-12 leading-relaxed">
            Supercharge your online presence with our lightning-fast,
            high-performance web solutions. Experience seamless design, speed,
            and innovation like never before.
          </p>

          {/* Responsive Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            {/* Primary Button - Clean Dark */}
            <Link 
              href="#contact"
              className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/20"
            >
              <div className="relative flex items-center justify-center gap-3">
                <span className="text-white text-lg font-medium">Get Started</span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 text-white/70" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </Link>

            {/* Secondary Button - Clean Dark */}
            <Link 
              href="/showcase"
              className="group relative px-8 sm:px-10 py-4 sm:py-5 rounded-full border border-white/10 transition-all duration-300 hover:bg-white/5"
            >
              <div className="relative flex items-center justify-center gap-3">
                <span className="text-white/70 text-lg font-medium">
                  View Projects
                </span>
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 text-white/50" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Add to your global CSS */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
        @keyframes shine {
          from {
            transform: translateX(-100%) rotate(45deg);
          }
          to {
            transform: translateX(100%) rotate(45deg);
          }
        }
        @keyframes float-slow1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, 30px) scale(1.1); }
        }
        @keyframes float-slow2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-20px, -20px) scale(1.15); }
        }
        @keyframes float-slow3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(15px, -15px) scale(1.05); }
        }
        .animate-float-slow1 {
          animation: float-slow1 15s ease-in-out infinite;
        }
        .animate-float-slow2 {
          animation: float-slow2 18s ease-in-out infinite;
        }
        .animate-float-slow3 {
          animation: float-slow3 20s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;