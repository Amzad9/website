import React from "react";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { Target, Eye, Star, Award, Users, Heart, Quote } from "lucide-react";
import Head from "next/head";
import Image from "next/image";

// Dynamically import components
const AboutUs = dynamic(() => import("@/components/about/About"), { ssr: false });

const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-black" role="main">
      <Head>
        <title>About Us - Weblibron | Leading Web Development & Design Agency</title>
        <meta name="description" content="Discover Weblibron's story - a team of passionate creators and expert developers dedicated to transforming ideas into exceptional digital experiences. Learn about our mission, vision, and core values." />
        <meta name="keywords" content="Weblibron about us, web development agency, digital solutions, web design company, IT services, digital transformation, web development team" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://weblibron.com/aboutus" />
        <meta property="og:title" content="About Us - Weblibron | Leading Web Development & Design Agency" />
        <meta property="og:description" content="Discover Weblibron's story - a team of passionate creators and expert developers dedicated to transforming ideas into exceptional digital experiences. Learn about our mission, vision, and core values." />
        <meta property="og:image" content="https://weblibron.com/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://weblibron.com/aboutus" />
        <meta property="twitter:title" content="About Us - Weblibron | Leading Web Development & Design Agency" />
        <meta property="twitter:description" content="Discover Weblibron's story - a team of passionate creators and expert developers dedicated to transforming ideas into exceptional digital experiences. Learn about our mission, vision, and core values." />
        <meta property="twitter:image" content="https://weblibron.com/og-image.jpg" />
        
        {/* Additional Meta Tags */}
        <link rel="canonical" href="https://weblibron.com/aboutus" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Weblibron",
              "url": "https://weblibron.com",
              "logo": "https://weblibron.com/wl.jpg",
              "description": "Weblibron is a leading web development and design agency dedicated to transforming ideas into exceptional digital experiences.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Ajnara Gen X",
                "addressLocality": "Gaziabad",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-8178614811",
                "contactType": "customer service",
                "email": "info@weblibron.com"
              },
              "sameAs": [
                "https://www.linkedin.com/company/weblibron",
                "https://twitter.com/weblibron"
              ]
            })
          }}
        />
        
        {/* Additional Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AboutPage",
              "name": "About Weblibron",
              "description": "Learn about Weblibron's mission to empower businesses with innovative digital solutions that drive growth and enhance user experiences.",
              "publisher": {
                "@type": "Organization",
                "name": "Weblibron",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://weblibron.com/wl.jpg"
                }
              },
              "mainEntity": {
                "@type": "Organization",
                "name": "Weblibron",
                "description": "Weblibron is a team of passionate creators and expert developers dedicated to transforming ideas into exceptional digital experiences.",
                "mission": "To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in the digital landscape.",
                "vision": "To be the leading force in digital innovation, setting new standards in web development and design while creating meaningful connections between brands and their audiences."
              }
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <section 
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-title"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" aria-hidden="true"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]"></div>
        </motion.div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8" aria-hidden="true">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <span className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 text-primary font-light tracking-wider text-xs sm:text-sm uppercase border border-white/10 shadow-lg shadow-primary/10">
                Our Story
              </span>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            
            <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight mb-6">
              Crafting Digital Excellence
            </h1>
            
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
              We are a team of passionate creators and expert developers dedicated to transforming ideas into exceptional digital experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Section */}
      <AboutUs />

      {/* Mission & Vision Section */}
      <section 
        className="py-20 relative overflow-hidden"
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

      {/* Enhanced Testimonials Section */}
      <section 
        className="py-20 relative overflow-hidden"
        aria-labelledby="testimonials-title"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-3" aria-hidden="true"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" aria-hidden="true"></div>

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
                Client Success Story
              </span>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <h2 id="testimonials-title" className="text-3xl md:text-4xl font-light text-white mb-6">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their digital presence with our expertise.
            </p>
          </motion.div>

          {/* Single Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
            role="article"
          >
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" aria-hidden="true"></div>
              
              {/* Main testimonial card */}
              <div className="relative p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm">
                {/* Quote Icon */}
                <div className="absolute -top-6 left-8 p-4 rounded-full bg-gradient-to-tr from-primary/20 to-blue-500/20 border border-primary/20 shadow-lg shadow-primary/10" aria-hidden="true">
                  <Quote className="w-8 h-8 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex text-primary mb-6" role="img" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-current" aria-hidden="true" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
                  "Weblibron transformed our online presence completely. Their innovative approach and attention to detail exceeded our expectations. The team's dedication to quality and customer satisfaction is truly remarkable."
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary/20 to-blue-500/20 border border-primary/20 flex items-center justify-center shadow-lg shadow-primary/10" aria-hidden="true">
                      <span className="text-2xl font-semibold text-primary">
                        S
                      </span>
                    </div>
                    <div className="absolute -bottom-1 -right-1 p-2 rounded-full bg-primary/10 border border-primary/20" aria-hidden="true">
                      <Star className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-medium text-white">Sarah Johnson</p>
                    <p className="text-gray-400">CEO, TechStart</p>
                    <p className="text-primary/80 text-sm mt-1">TechStart</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button 
              className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-primary to-blue-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
              aria-label="Start your success story"
            >
              <div className="flex items-center justify-center gap-2">
                <span className="text-white font-medium">Start Your Success Story</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-primary/80 to-blue-500/80 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true"></div>
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage; 