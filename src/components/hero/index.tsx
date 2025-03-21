import React from "react";
import { motion } from "framer-motion";
import { Geist } from "next/font/google";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-20 bg-black">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute top-32 left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.4, 0.5, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 to-blue-500/5 rounded-full blur-[150px]"
        ></motion.div>
      </motion.div>

      {/* Animated Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="bubble animate-float-slow1 bg-primary/5 w-[300px] h-[300px] rounded-full absolute -top-20 -left-20 blur-3xl"></div>
        <div className="bubble animate-float-slow2 bg-blue-500/5 w-[250px] h-[250px] rounded-full absolute top-1/2 -right-20 blur-3xl"></div>
        <div className="bubble animate-float-slow3 bg-primary/5 w-[200px] h-[200px] rounded-full absolute bottom-20 left-1/4 blur-3xl"></div>
      </div>

      <div className="md:container mx-auto px-4 md:px-6 min-h-screen flex items-center relative z-20">
        <div className="max-w-full px-1 md:px-12 text-center justify-center  mx-auto w-full relative z-30">
          {/* Premium Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-full px-4 sm:px-6 py-2 mb-8 sm:mb-12 border border-white/10"
          >
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-white/80 text-sm font-light">Premium Digital Solutions</span>
          </motion.div>

          {/* Responsive Heading */}
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight text-white text-center font-inter mb-6 flex flex-wrap items-center justify-center gap-2 sm:gap-3 leading-tight"
          >
            <span className="bg-clip-text text-white bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary transition-all duration-500">
              Elevate
            </span>
            <span className="text-white font-medium">your</span>
           
            <span className="talic bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary transition-all duration-500">
              impact
            </span>
 <motion.video
              autoPlay
              muted
              loop
              playsInline
              className="h-11 w-24 sm:h-12 sm:w-28 md:h-14 md:w-32 border-2 border-primary/9 rounded-full object-cover"
              src="/main.mp4"
              aria-hidden="true"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <span className="text-white font-medium">with our</span>
 <motion.video
              autoPlay
              muted
              loop
              playsInline
              className="h-11 w-24 sm:h-12 sm:w-28 md:h-14 md:w-32 rounded-full object-cover"
              src="/swift.mp4"
              aria-hidden="true"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary transition-all duration-500">
              swift, stunning solutions
            </span>
           
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl text-center text-gray-300 mt-6 sm:mt-8 mb-12 leading-relaxed"
          >
            Supercharge your online presence with our lightning-fast,
            high-performance web solutions. Experience seamless design, speed,
            and innovation like never before.
          </motion.p>

          {/* Responsive Buttons */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-stretch justify-center sm:items-center gap-5 sm:gap-7"
          >
            {/* Primary Button */}
            <Link 
              href="#contact"
              className="group relative px-8 sm:px-10 py-5 sm:py-5 rounded-full bg- hover:to-primary transition-all duration-500"
            >
              <div className="relative flex items-center justify-center gap-3">
                <span className="text-white text-lg font-medium">Get Started</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 text-white" />
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000"></div>
              </div>
            </Link>

            {/* Secondary Button */}
            <Link 
              href="/showcase"
              className="group relative px-8 sm:px-10 py-5 sm:py-5 rounded-full transition-all duration-300 hover:bg-white/5 backdrop-blur-sm"
            >
              <div className="relative flex items-center justify-center gap-3">
                <span className="text-white/70 text-lg font-medium group-hover:text-white transition-colors duration-300">
                  View Projects
                </span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 text-white/50 group-hover:text-white/80" />
              </div>
            </Link>
          </motion.div>
       
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