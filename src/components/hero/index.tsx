import React from "react";
import { ArrowRight } from "lucide-react";
import styles from "./Hero.module.css";
import Link from "next/link";

// Lazy-loaded components
// const StatisticItem = lazy(() => import("@/components/hero/StatisticItem"));
// const LazyVideo = lazy(() => import("@/components/hero/LazyVideo"));

// eslint-disable-next-line react/display-name
// const Divider = React.memo(() => (
//   <div
//     className={`${styles["animate-fade-in"]} ${styles["delay-4"]} h-px w-16 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto my-12`}
//   ></div>
// ));

const HeroSection = () => {
  // const statistics = [
  //   { value: "98%", label: "Client Retention" },
  //   { value: "10+", label: "Successful Projects" },
  //   { value: "24/7", label: "Dedicated Support" },
  // ];

  // const videoSources = [
  //   { src: "/main.mp4", width: "32", height: "16" },
  //   { src: "/swift.mp4", width: "32", height: "16" },
  // ];

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-8 pb-5 bg-[#000000]">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-3"></div>


      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center relative z-20">
        <div className="max-w-4xl mx-auto text-center relative z-30">
            <h1 className={`${styles["hero-heading"]} ${styles["gradient-text"]} `}>
            Innovative High-Performance Solutions with Our Insight.
            </h1>
          {/* <div className={`flex justify-center gap-8 my-10 ${styles["animate-fade-in"]} ${styles["delay-2"]}`}>
            {videoSources.map((video, index) => (
              <Suspense key={index} fallback={<div className="h-16 w-32 rounded-full bg-white/5 animate-pulse"></div>}>
                <LazyVideo src={video.src} width={video.width} height={video.height} />
              </Suspense>
            ))}
          </div> */}

          <p className={`text-lg md:text-xl mt-4 text-white/80 mb-10 leading-relaxed max-w-xxl mx-auto ${styles["animate-fade-in"]} ${styles["delay-2"]}`}>
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

          {/* <Divider /> */}
{/* 
          <div className={`flex justify-center gap-8 ${styles["animate-fade-in"]} ${styles["delay-5"]}`}>
            {statistics.map((stat, index) => (
              <React.Fragment key={index}>
                {index > 0 && <div className="h-10 w-px bg-white/10"></div>}
                <Suspense fallback={<div className="w-16 h-14 bg-white/5 animate-pulse"></div>}>
                  <StatisticItem value={stat.value} label={stat.label} />
                </Suspense>
              </React.Fragment>
            ))}
          </div> */}
        </div>
      </div>

      {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div> */}
    </section>
  );
};

export default HeroSection;
