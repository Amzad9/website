import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const AboutUs = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8
      }
    }
  };
  const ourExpertise = [
    { name: "Web Development", color: "#FF6B6B" },
    { name: "Mobile Apps", color: "#4E95FF"},
    { name: "UI/UX Design", color: "#67E8B7" },
    { name: "E-commerce", color: "#A78BFA"},
    { name: "Progressive Web Apps (PWAs)", color: "#FF6B6B" },
    { name: "SEO (Search Engine Optimization)", color: "#4E95FF"},
    { name: "Single - Page Applications (SPAs)", color: "#67E8B7" },
    { name: "Web Security", color: "#A78BFA"},
    { name: "API Development and Integration", color: "#FF6B6B" },
    { name: "Responsive Web Design", color: "#A78BFA"},
    { name: "User Interface (UI) Design", color: "#A78BFA"},
    { name: "User Experience (UX) Design", color: "#FF6B6B" },
  ];
  return (
    <section id="about" className="min-h-screen bg-black relative py-20 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]"></div>
      </motion.div>
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
                About Our Company
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
              <div className="flex flex-row flex-wrap md:flex-row items-center justify-center gap-3 md:gap-4 relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight">
                  We Are 
                  <span className="relative inline-block mx-2">
                    {/* 3D Depth Shadow */}
                    <span className="absolute -inset-1 text-4xl sm:text-5xl md:text-6xl font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-blue-600/30 blur-[2px] transform translate-y-[0.15em] translate-x-[0.05em] select-none">
                      Weblibron
                    </span>
                    
                    {/* Main text with animated gradient */}
                    <span className="text-4xl sm:text-5xl md:text-6xl relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_auto] animate-gradient-x">
                      Weblibron
                    </span>
                    
                    {/* Enhanced underline with animated glow */}
                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/70 via-blue-400/70 to-primary/70 rounded-full transform origin-left group-hover:scale-x-110 transition-transform duration-500"></span>
                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-blue-400 to-primary rounded-full opacity-70 blur-[2px] animate-pulse-slow"></span>
                  </span>
                 
                </h1>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
             Crafting digital experiences that leave lasting impressions
            </p>
          </motion.div>
        </div>

      {/* Main Content */}
      <main className="pb-0 md:py-16 relative">
        <div className="container mx-auto px-6">
          {/* About Section */}
          <motion.section 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-5xl text-white font-medium leading-tight">
                  Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Digital Reality</span>
                </h2>
                <p className="text-gray-300 leading-7 font-normal text-lg">
                  We are a team of passionate creators and expert developers at Weblibron, dedicated to crafting exceptional digital experiences. Specializing in UI/UX design, app development, and web development, we blend bold visuals with cutting-edge technology to bring your vision to life
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-10">
                  <div className="group relative px-8 py-5 bg-white/5 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <div className="relative flex items-center gap-4">
                      <span className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">7+</span>
                      <div className="text-left">
                        <p className="text-white font-light">Years</p>
                        <p className="text-white/70 text-sm font-light">Experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="group relative px-8 py-5 bg-white/5 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <div className="relative flex items-center gap-4">
                      <span className="text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">10+</span>
                      <div className="text-left">
                        <p className="text-white font-light">Projects</p>
                        <p className="text-white/70 text-sm font-light">Delivered</p>
                      </div>
                    </div>
                  </div>
                </div>
                <motion.div 
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-primary hover:text-blue-400 transition-colors duration-300 group"
                  >
                    <span>Contact us to learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </motion.div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-black/60 p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                  <svg className="w-12 h-12 text-primary mb-6 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    <path d="M10.583 17.321C9.553 16.227 9 15 9 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                  <p className="text-gray-300 leading-relaxed italic text-lg mb-8">
                    "Our mission is to empower businesses with custom-built solutions that not only stand out but also deliver smooth, engaging, and high-speed user experiences."
                  </p>
                  <div className="pt-8 border-t border-gray-700/30">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-8">
                      Our Promise
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                        <p className="text-xl font-semibold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 transition-all duration-300">Innovation</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                        <p className="text-xl font-semibold text-blue-400 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-primary transition-all duration-300">Quality</p>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                        <p className="text-xl font-semibold text-primary group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 transition-all duration-300">Excellence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
          
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
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight">
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
                 
                </h1>
              </div>
            </div>
            
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
              We craft cutting-edge digital experiences that drive business growth, strengthen your brand, and deliver measurable results
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
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                >
  <div 
                  className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ backgroundColor: `${skill.color}10` }} 
                ></div>                  <div className="relative">
                    <span className="text-lg font-semibold text-white mb-3 block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 transition-all duration-300">{skill.name}</span>
                    <span className="absolute -bottom-3 left-0 w-16 h-[3px] bg-gradient-to-r from-primary to-primary/50 rounded-full"></span>
                    </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </section>
  );
};

export default AboutUs;
