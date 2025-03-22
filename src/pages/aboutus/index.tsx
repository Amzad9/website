import React from "react";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import { Star, Quote, Users, Code2, Palette, Rocket, Target, Heart, Award, Globe, Clock, Shield, Sparkles, Lightbulb, Zap } from "lucide-react";
import Head from "next/head";
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
        className="relative mt-20 min-h-[60vh] flex items-center justify-center overflow-hidden"
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
    </div>
  );
};

export default AboutUsPage; 