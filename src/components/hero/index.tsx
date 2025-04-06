import React, { lazy, Suspense } from "react";
import { ArrowRight, Shield, Sparkles, Zap } from "lucide-react";
import styles from "./Hero.module.css";
import Link from "next/link";

// Lazy-loaded components
const StatisticItem = lazy(() => import("@/components/hero/StatisticItem"));
const FeatureBadge = lazy(() => import("@/components/hero/FeatureBadge"));
const LazyVideo = lazy(() => import("@/components/hero/LazyVideo"));

// eslint-disable-next-line react/display-name
const Divider = React.memo(() => (
  <div
    className={`${styles["animate-fade-in"]} ${styles["delay-4"]} h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto my-12`}
  ></div>
));

// eslint-disable-next-line react/display-name
const PremiumBadge = React.memo(() => (
  <div className="inline-flex items-center gap-2 bg-white/3 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8 border border-white/5">
    <span className="h-1.5 w-1.5 rounded-full bg-[#DAA520]"></span>
    <span className="text-white/70 text-xs font-light">
      Premium Digital Solutions
    </span>
  </div>
));

const HeroSection = () => {
  const statistics = [
    { value: "98%", label: "Client Retention" },
    { value: "10+", label: "Successful Projects" },
    { value: "24/7", label: "Dedicated Support" },
  ];

  const features = [
    { icon: <Zap className="w-5 h-5 text-[#DAA520]" />, label: "Lightning Fast" },
    { icon: <Shield className="w-5 h-5 text-[#1E6FD9]" />, label: "Secure & Reliable" },
    { icon: <Sparkles className="w-5 h-5 text-[#DAA520]" />, label: "Modern Design" },
  ];

  const videoSources = [
    { src: "/main.mp4", width: "32", height: "16" },
    { src: "/swift.mp4", width: "32", height: "16" },
  ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24 pb-5 bg-[#000000]">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-3"></div>

      <div className="absolute inset-0 pointer-events-none">
        <div className={`${styles["animate-fade-in"]} ${styles["delay-1"]} absolute top-1/4 left-1/4 w-96 h-96 bg-[#1E6FD9]/5 rounded-full blur-3xl`}></div>
        <div className={`${styles["animate-fade-in"]} ${styles["delay-1"]} absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#DAA520]/5 rounded-full blur-3xl`}></div>
      </div>

      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center relative z-20">
        <div className="max-w-4xl mx-auto text-center relative z-30">
          <PremiumBadge />

          <h1 className={styles["hero-heading"]}>
            <span className={styles["gradient-text"]}>Innovative</span> <br />
            {" High-Performance "}
            <span className={styles["gradient-text-reverse"]}>Solutions</span>
            <br />
            <span className="inline-block">
              with <span className={styles["gradient-text"]}>Our Insight.</span>
            </span>
          </h1>

          <div className={`flex flex-wrap justify-center gap-8 mb-12 ${styles["animate-fade-in"]} ${styles["delay-1"]}`}>
            {features.map((feature, index) => (
              <Suspense key={index} fallback={<div className="w-36 h-10 bg-white/5 rounded-full animate-pulse"></div>}>
                <FeatureBadge icon={feature.icon} label={feature.label} />
              </Suspense>
            ))}
          </div>

          <div className={`flex justify-center gap-8 mb-10 ${styles["animate-fade-in"]} ${styles["delay-2"]}`}>
            {videoSources.map((video, index) => (
              <Suspense key={index} fallback={<div className="h-16 w-32 rounded-full bg-white/5 animate-pulse"></div>}>
                <LazyVideo src={video.src} width={video.width} height={video.height} />
              </Suspense>
            ))}
          </div>

          <p className={`text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xxl mx-auto ${styles["animate-fade-in"]} ${styles["delay-2"]}`}>
            Partner with us to elevate your brand, reach more customers, and achieve measurable results with tailored digital strategies designed for your unique business needs.
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${styles["animate-fade-in"]} ${styles["delay-3"]}`}>
            <Link href="#contact" className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-[#DAA520] to-[#1E6FD9] transition-all duration-300">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white font-medium">Get Started</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-white" />
              </div>
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#DAA520]/80 to-[#1E6FD9]/80 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link href="/showcase" className="group px-8 py-3 rounded-full border border-[#DAA520]/20 hover:bg-[#DAA520]/5 transition-colors duration-300">
              <div className="flex items-center justify-center gap-2">
                <span className="text-white/70 font-medium group-hover:text-white transition-colors duration-300">
                  View Projects
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-white/50 group-hover:text-white" />
              </div>
            </Link>
          </div>

          <Divider />

          <div className={`flex justify-center gap-8 ${styles["animate-fade-in"]} ${styles["delay-5"]}`}>
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

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
