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

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="relative h-[40vh] flex items-center justify-center overflow-hidden mb-16"
      >
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="inline-block mb-4 px-4 py-1.5 bg-white/5 text-primary text-sm font-medium rounded-full border border-white/10">
            About Our Company
          </span>
          <h1 className="text-5xl md:text-7xl text-white font-poppins mb-8 leading-tight font-medium">
            We Are <span className="text-primary italic bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary transition-all duration-500">Weblibron</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-fade-in">
            Crafting digital experiences that leave lasting impressions
          </p>
        </div>
      </motion.section>

      {/* Main Content */}
      <main className="py-16 relative">
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
                <h2 className="text-3xl md:text-5xl text-white font-bold leading-tight">
                  Transforming Ideas into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Digital Reality</span>
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We are a team of passionate creators and expert developers dedicated to crafting exceptional digital experiences. Specializing in UI/UX design and robust development, we blend bold visuals with cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-5 mt-10">
                  <div className="group relative px-8 py-5 bg-white/5 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <div className="relative flex items-center gap-4">
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">7+</span>
                      <div className="text-left">
                        <p className="text-white font-medium">Years</p>
                        <p className="text-white/70 text-sm">Experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="group relative px-8 py-5 bg-white/5 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                    <div className="relative flex items-center gap-4">
                      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-primary">20+</span>
                      <div className="text-left">
                        <p className="text-white font-medium">Projects</p>
                        <p className="text-white/70 text-sm">Delivered</p>
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
                    <div className="grid grid-cols-3 gap-4">
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
            className="max-w-6xl mx-auto mt-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl text-white font-bold mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Expertise</span>
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We deliver exceptional value through our specialized skills and cutting-edge technologies
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Web Development', 'Mobile Apps', 'UI/UX Design', 'E-commerce'].map((skill, index) => (
                <motion.div 
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>
                  <div className="relative">
                    <span className="text-2xl font-semibold text-white mb-3 block group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 transition-all duration-300">{skill}</span>
                    <div className="h-1 w-12 bg-gradient-to-r from-primary to-blue-500 rounded-full"></div>
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
