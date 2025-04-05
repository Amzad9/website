import React, { lazy, Suspense } from "react";
import { ArrowRight, Shield, Sparkles, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import './Hero.css';
import Link from "next/link";

// Lazy-loaded components
const AnimatedBackground = lazy(() => import('./AnimatedBackground'));
const StatisticItem = lazy(() => import('./StatisticItem'));
const FeatureBadge = lazy(() => import('./FeatureBadge'));
const LazyVideo = lazy(() => import('./LazyVideo'));

// Memoized components to prevent unnecessary re-renders
const Divider = React.memo(() => (
  <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto my-12 animate-fade-in" style={{ animationDelay: '0.5s' }}></div>
));

const PremiumBadge = React.memo(() => (
  <div className="inline-flex items-center gap-2 bg-white/3 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-white/5">
    <span className="h-1.5 w-1.5 rounded-full bg-[#DAA520]"></span>
    <span className="text-white/70 text-xs font-light">
      Premium Digital Solutions
    </span>
  </div>
));

const HeroSection = () => {
  // Pre-defined statistics for better performance
  const statistics = [
    { value: "10+", label: "Happy Clients" },
    { value: "100%", label: "Satisfaction" },
    { value: "24/7", label: "Support" }
  ];

  // Pre-defined features for better performance
  const features = [
    { icon: <Zap className="w-5 h-5 text-[#DAA520]" />, label: "Lightning Fast" },
    { icon: <Shield className="w-5 h-5 text-[#1E6FD9]" />, label: "Secure & Reliable" },
    { icon: <Sparkles className="w-5 h-5 text-[#DAA520]" />, label: "Modern Design" }
  ];

  // Preload video sources
  const videoSources = [
    { src: "/main.mp4", width: "32", height: "16" },
    { src: "/swift.mp4", width: "32", height: "16" }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-24 pb-5 bg-black"
    >
      {/* Minimalist Background - Static, no animation */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-3"></div>

      {/* Simplified Glow Effects - Using CSS instead of motion */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#1E6FD9]/5 rounded-full blur-3xl animate-fade-in"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#DAA520]/5 rounded-full blur-3xl animate-fade-in"></div>
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center relative z-20">
        <div className="max-w-4xl mx-auto text-center relative z-30">
          {/* Minimal Badge - Memoized to prevent re-renders */}
          <PremiumBadge />

          {/* Optimized Heading for LCP with CSS animations instead of JS */}
          <h1 className="hero-heading">
            <span className="gradient-text">Innovative</span> <br />
            {" High-Performance "}
            <span className="gradient-text-reverse">Solutions</span>
            <br />
            <span className="inline-block">
              with{" "}
              <span className="gradient-text">Our Insight.</span>
            </span>
          </h1>

          {/* Feature Highlights with CSS transitions instead of motion.div */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {features.map((feature, index) => (
              <Suspense key={index} fallback={<div className="w-36 h-10 bg-white/5 rounded-full animate-pulse"></div>}>
                <FeatureBadge icon={feature.icon} label={feature.label} />
              </Suspense>
            ))}
          </div>

          {/* Elegant Videos - Lazy loaded with loading indicator */}
          <div className="flex justify-center gap-8 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {videoSources.map((video, index) => (
              <Suspense key={index} fallback={<div className="h-16 w-32 rounded-full bg-white/5 animate-pulse"></div>}>
                <LazyVideo src={video.src} width={video.width} height={video.height} />
              </Suspense>
            ))}
          </div>

          {/* Concise Description */}
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Supercharge your online presence with our lightning-fast,
            high-performance web solutions.
          </p>

          {/* Minimalist Buttons - Using CSS transitions instead of motion */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            {/* Primary Button */}
            <a
              href="#contact"
              className="group relative px-8 py-2 rounded-full bg-gradient-to-r from-[#DAA520] to-[#1E6FD9] transition-all duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-white font-medium">Get Started</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-white" />
              </div>
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#DAA520]/80 to-[#1E6FD9]/80 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            {/* Secondary Button */}
            <Link
              href="/showcase"
              className="group px-8 py-2 rounded-full border border-[#DAA520]/20 hover:bg-[#DAA520]/5 transition-colors duration-300"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-white/70 font-medium group-hover:text-white transition-colors duration-300">
                  View Projects
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-white/50 group-hover:text-white" />
              </div>
            </Link>
          </div>

          {/* Divider - Memoized */}
          <Divider />

          {/* Statistics - Using CSS-based animations */}
          <div className="flex justify-center gap-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {statistics.map((stat, index) => (
              <React.Fragment key={index}>
                {index > 0 && <div className="h-10 w-px bg-white/10"></div>}
                <Suspense fallback={<div className="w-16 h-14 bg-white/5 animate-pulse"></div>}>
                  <StatisticItem value={stat.value} label={stat.label} />
                </Suspense>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Grid Lines - Static pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;