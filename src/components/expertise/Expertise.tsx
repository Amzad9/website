import { motion } from "framer-motion";
import React from "react";

function Expertise() {
  const ourExpertise = [
    { name: "Web Design & Development", color: "#FF6B6B" },
    { name: "Mobile Apps", color: "#4E95FF" },
    { name: "UI/UX Design", color: "#67E8B7" },
    { name: "SEO (Search Engine Optimization)", color: "#4E95FF" },
    { name: "API Development and Integration", color: "#FF6B6B" },
    { name: "Responsive Web Design", color: "#A78BFA" },
    { name: "Brand Design", color: "#FF6B6B" },
    { name: "SaaS Design", color: "#FF6B6B" },
  ];
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  return (
    <section className="pb-16">
      {/* Skills Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="max-w-6xl mx-auto mt-16 md:mt-32"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            {/* Enhanced Top Accent */}
            <div className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <span className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 text-primary font-light tracking-wider text-xs sm:text-sm uppercase border border-white/10 shadow-lg shadow-primary/10">
                Professional Services
              </span>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>

            {/* Enhanced 3D Main Heading with Advanced Animations */}
            <div className="relative py-4 md:py-8">
              {/* Multiple layered glows for depth */}
              <div className="absolute -inset-x-4 -inset-y-8 bg-gradient-to-r from-primary/10 via-blue-500/5 to-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -inset-x-4 -inset-y-12 bg-gradient-to-br from-transparent via-blue-800/5 to-primary/5 rounded-full blur-2xl animate-pulse-slow opacity-70"></div>

              {/* Decorative elements */}
              <div className="absolute -top-4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-80 animate-float"></div>
              <div className="absolute -bottom-2 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-70 animate-float-delayed"></div>

              {/* The heading itself */}
              <div className="flex flex-col items-center justify-center gap-1 md:gap-2 relative">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-white leading-tight">
                  Our
                  <span className="relative inline-block mx-2">
                    {/* 3D Depth Shadow */}
                    <span className="absolute -inset-1 text-4xl sm:text-5xl md:text-6xl font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-blue-600/30 blur-[2px] transform translate-y-[0.15em] translate-x-[0.05em] select-none">
                      Expertise
                    </span>

                    {/* Main text with animated gradient */}
                    <span className="text-4xl sm:text-5xl md:text-6xl relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_auto] animate-gradient-x">
                      Expertise
                    </span>

                    {/* Enhanced underline with animated glow */}
                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/70 via-blue-400/70 to-primary/70 rounded-full transform origin-left group-hover:scale-x-110 transition-transform duration-500"></span>
                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-blue-400 to-primary rounded-full opacity-70 blur-[2px] animate-pulse-slow"></span>
                  </span>
                </h2>
              </div>
            </div>

            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
              We craft cutting-edge digital experiences that drive business
              growth, strengthen your brand, and deliver measurable results
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {ourExpertise.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer relative bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div
                className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                style={{ backgroundColor: `${skill.color}10` }}
              ></div>{" "}
              <div className="relative">
                <span className="text-lg font-semibold text-white mb-3 block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 transition-all duration-400">
                  {skill.name}
                </span>
                <span className="absolute transition-all duration-300 -bottom-3 left-0 w-16 h-[3px] bg-gradient-to-r from-primary to-primary/50 rounded-full"></span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </section>
  );
}

export default Expertise;
