import React from "react";
import { motion } from "framer-motion";
import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24 bg-black">
      {/* Minimalist Background */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-3"></div>
      
      {/* Simplified Glow Effects */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </motion.div>

      {/* Content Container */}
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center relative z-20">
        <div className="max-w-4xl mx-auto text-center relative z-30">
          {/* Minimal Badge */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 bg-white/3 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-white/5"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
            <span className="text-white/70 text-xs font-light">Premium Digital Solutions</span>
          </motion.div>

          {/* Optimized Heading for LCP */}
          <h1 
            className="text-5xl md:text-6xl lg:text-7xl font-light font-poppins tracking-tight text-white mb-6"
            style={{ textRendering: 'optimizeLegibility' }}
          >
            <span className="inline-block mb-2">
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-blue-500">
                Innovative
              </span>
              <span className="inline-block"> High-Performance </span>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-primary/90 to-primary">
                Solutions
              </span>
            </span>
            <span className="block">
              <span className="inline-block">with </span>{" "}
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/90 to-blue-500">
                {" "}Our Insight.
              </span>
            </span>
          </h1>
          
          {/* Elegant Videos */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center gap-8 mb-10"
          >
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-16 w-32 rounded-full object-cover border border-white/10"
                src="/main.mp4"
                aria-hidden="true"
              />
            </div>
            
            <div className="relative group">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-500/50 to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm"></div>
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-16 w-32 rounded-full object-cover border border-white/10"
                src="/swift.mp4"
                aria-hidden="true"
              />
            </div>
          </motion.div>

          {/* Concise Description */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl mx-auto"
          >
            Supercharge your online presence with our lightning-fast,
            high-performance web solutions.
          </motion.p>

          {/* Minimalist Buttons */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary Button */}
            <Link 
              href="#contact"
              className="group relative px-8 py-2 rounded-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-white font-medium">Get Started</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-white" />
              </div>
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary/80 to-blue-500/80 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Secondary Button */}
            <Link 
              href="/showcase"
              className="group px-8 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-white/70 font-medium group-hover:text-white transition-colors duration-300">
                  View Projects
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-white/50 group-hover:text-white" />
              </div>
            </Link>
          </motion.div>
          
          {/* Minimal Line Separator */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto my-12"
          ></motion.div>
          
          {/* Simple Stats */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-8"
          >
            <div className="text-center">
              <p className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">10+</p>
              <p className="text-xs md:text-sm text-white/50">Happy Clients</p>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div className="text-center">
              <p className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">100%</p>
              <p className="text-xs md:text-sm text-white/50">Satisfaction</p>
            </div>
            <div className="h-10 w-px bg-white/10"></div>
            <div className="text-center">
              <p className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">24/7</p>
              <p className="text-xs md:text-sm text-white/50">Support</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;