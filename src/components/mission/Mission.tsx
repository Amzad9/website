import { motion } from 'framer-motion'
import React from 'react'
import { Target, Eye, Star, Award, Users } from "lucide-react";

function Mission() {
  return (
     <section 
        className="relative overflow-hidden"
        aria-labelledby="mission-vision-title"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-3" aria-hidden="true"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8" aria-hidden="true">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <span className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 text-primary font-light tracking-wider text-xs sm:text-sm uppercase border border-white/10 shadow-lg shadow-primary/10">
                Our Core Values
              </span>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h2 id="mission-vision-title" className="text-3xl md:text-4xl font-light text-white mb-6">
              Mission & Vision
            </h2>
          </motion.div>

          {/* Mission & Vision Cards */}
          <div className="grid md:grid-cols-2 gap-12" role="list">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" aria-hidden="true"></div>
              <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/20" aria-hidden="true">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Our Mission</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in the digital landscape.
                </p>
                <div className="flex flex-wrap gap-3" role="list">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20" role="listitem">Innovation</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20" role="listitem">Growth</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20" role="listitem">Excellence</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group"
              role="listitem"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-primary/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" aria-hidden="true"></div>
              <div className="relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20" aria-hidden="true">
                    <Eye className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Our Vision</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To be the leading force in digital innovation, setting new standards in web development and design while creating meaningful connections between brands and their audiences.
                </p>
                <div className="flex flex-wrap gap-3" role="list">
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20" role="listitem">Leadership</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20" role="listitem">Innovation</span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm border border-blue-500/20" role="listitem">Connection</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" role="list">
            {[
              { icon: Star, title: "Excellence", description: "Delivering the highest quality in every project" },
              { icon: Award, title: "Innovation", description: "Pushing boundaries with creative solutions" },
              { icon: Users, title: "Collaboration", description: "Working together to achieve greatness" },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
                role="listitem"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-blue-500/5 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" aria-hidden="true"></div>
                <div className="relative p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 w-fit mb-4" aria-hidden="true">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{value.title}</h4>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Mission