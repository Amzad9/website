import React from "react";
import dynamic from 'next/dynamic';
import { motion } from "framer-motion";
import Head from "next/head";
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
        className="relative mt-20 min-h-[80vh] flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-title"
      >
        {/* CSS Pattern Background */}
        <div className="absolute inset-0">
          {/* Base gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-primary/5 to-black"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, rgba(53, 127, 87, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(53, 39, 39, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black, transparent 70%)'
          }}></div>
          
          {/* Dots pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
            maskImage: 'radial-gradient(circle at center, black, transparent 70%)'
          }}></div>

          {/* Gradient overlay */}
          <div className="absolute inset-0">
            {/* Main gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90"></div>
            
            {/* Accent gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-blue-500/20 opacity-50"></div>
            
            {/* Radial gradient for center focus */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
          </div>
        </div>

        {/* Animated gradient orbs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          {/* Top left orb */}
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow"></div>
          
          {/* Top right orb */}
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
          
          {/* Bottom left orb */}
          <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow delay-2000"></div>
          
          {/* Bottom right orb */}
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow delay-3000"></div>
        </motion.div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" aria-hidden="true"></div>

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

      {/* Why Choose Us Section */}
      <section className="py-16 md:pt-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-40 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[150px]"></div>
        </motion.div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <span className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 text-primary font-light tracking-wider text-xs sm:text-sm uppercase border border-white/10 shadow-lg shadow-primary/10">
                Why Choose Us
              </span>
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-primary"></div>
            </div>
            <div className="relative group">
              {/* Multiple layered glows for depth */}
              <div className="absolute -inset-x-4 -inset-y-8 bg-gradient-to-r from-primary/10 via-blue-500/5 to-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -inset-x-4 -inset-y-12 bg-gradient-to-br from-transparent via-red-500/5 to-primary/5 rounded-full blur-2xl animate-pulse-slow opacity-70"></div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-80 animate-float"></div>
              <div className="absolute -bottom-2 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-70 animate-float-delayed"></div>
              
              {/* The heading itself */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight">
                Why Choose 
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
              </h2>
            </div>
            <p className="text-lg text-gray-300 mt-8 max-w-3xl mx-auto">
              We combine technical expertise with creative innovation to deliver exceptional results that exceed expectations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Our team of seasoned professionals brings years of industry experience and technical expertise to every project.",
                icon: "👥",
                gradient: "from-primary/20 via-blue-500/10 to-primary/20"
              },
              {
                title: "Innovative Solutions",
                description: "We leverage cutting-edge technologies and creative approaches to deliver unique, forward-thinking solutions.",
                icon: "💡",
                gradient: "from-blue-500/20 via-purple-500/10 to-blue-500/20"
              },
              {
                title: "Quality Assurance",
                description: "Rigorous testing and quality control processes ensure flawless delivery of every project.",
                icon: "✨",
                gradient: "from-purple-500/20 via-primary/10 to-purple-500/20"
              },
              {
                title: "Client-Centric Approach",
                description: "Your success is our priority. We work closely with you to understand and achieve your goals.",
                icon: "🤝",
                gradient: "from-primary/20 via-blue-500/10 to-primary/20"
              },
              {
                title: "Timely Delivery",
                description: "We respect deadlines and ensure projects are completed on time without compromising quality.",
                icon: "⏱️",
                gradient: "from-blue-500/20 via-purple-500/10 to-blue-500/20"
              },
              {
                title: "24/7 Support",
                description: "Our dedicated support team is always available to assist you with any queries or concerns.",
                icon: "🛟",
                gradient: "from-purple-500/20 via-primary/10 to-purple-500/20"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                {/* Enhanced background effects */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-50`}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Card content */}
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-10 border border-white/10 hover:border-primary/50 transition-all duration-500 h-full overflow-hidden">
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon with enhanced animation */}
                  <div className="relative">
                    <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-500 relative z-10">
                      {item.icon}
                    </div>
                    <div className="absolute -inset-6 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Title with enhanced hover effect */}
                  <h3 className="text-2xl font-light text-white mb-6 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 transition-all duration-500">
                    {item.title}
                  </h3>
                  
                  {/* Description with enhanced readability */}
                  <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors duration-500 relative z-10 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage; 