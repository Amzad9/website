import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

function ClientTestimonial() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechStart",
            image: "/images/testimonials/client1.jpg",
            quote: "Their web development services transformed our online presence. The team's expertise and dedication were exceptional.",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "CTO, InnovateCorp",
            image: "/images/testimonials/client2.jpg",
            quote: "The mobile app they developed for us exceeded our expectations. Their attention to detail and user experience is outstanding.",
            rating: 5
        },
        {
            name: "Emma Davis",
            role: "Product Manager, DesignHub",
            image: "/images/testimonials/client3.jpg",
            quote: "Their UI/UX design services helped us create an intuitive and beautiful interface that our users love.",
            rating: 5
        }
    ];

    // Add heading variants
    const headingVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.215, 0.61, 0.355, 1]
            }
        })
    };

    return (
        <section className="py-20 bg-black/50 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center mb-16">
                    {/* Enhanced Top Accent */}
                    <div className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-primary"></div>
                        <span className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 text-primary font-light tracking-wider text-xs sm:text-sm uppercase border border-white/10 shadow-lg shadow-primary/10">
                            Testimonials
                        </span>
                        <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-primary"></div>
                    </div>
                    
                    {/* Enhanced 3D Main Heading */}
                    <div className="relative py-4 md:py-8">
                        {/* Multiple layered glows for depth */}
                        <div className="absolute -inset-x-4 -inset-y-8 bg-gradient-to-r from-primary/10 via-blue-500/5 to-primary/10 rounded-full blur-3xl"></div>
                        <div className="absolute -inset-x-4 -inset-y-12 bg-gradient-to-br from-transparent via-blue-800/5 to-primary/5 rounded-full blur-2xl animate-pulse-slow opacity-70"></div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -top-4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-80 animate-float"></div>
                        <div className="absolute -bottom-2 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-70 animate-float-delayed"></div>
                        <div className="absolute top-1/2 right-[15%] w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60 animate-float-slow"></div>
                        
                        {/* The heading itself */}
                        <div className="flex flex-row flex-wrap md:flex-row items-center justify-center gap-3 md:gap-4 relative">
                            {/* Word 1: "What" */}
                            <motion.div
                                custom={0}
                                initial="hidden"
                                animate="visible"
                                variants={headingVariants}
                                className="relative group"
                            >
                                <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                                    What
                                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                                </span>
                            </motion.div>
                            
                            {/* Word 2: "Our" */}
                            <motion.div
                                custom={1}
                                initial="hidden"
                                animate="visible"
                                variants={headingVariants}
                                className="relative group"
                            >
                                <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                                    Our
                                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                                </span>
                            </motion.div>
                            
                            {/* Word 3: "Clients" */}
                            <motion.div
                                custom={2}
                                initial="hidden"
                                animate="visible"
                                variants={headingVariants}
                                className="relative group"
                            >
                                <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                                    Clients
                                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                                </span>
                            </motion.div>
                            
                            {/* Word 4: "Say" with special treatment */}
                            <motion.div
                                custom={3}
                                initial="hidden"
                                animate="visible"
                                variants={headingVariants}
                                className="relative group"
                            >
                                <span className="relative">
                                    {/* 3D Depth Shadow */}
                                    <span className="absolute -inset-1 text-4xl md:text-6xl lg:text-7xl font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-blue-600/30 blur-[2px] italic transform translate-y-[0.15em] translate-x-[0.05em] select-none">
                                        Say
                                    </span>
                                    
                                    {/* Main text with animated gradient */}
                                    <span className="text-4xl md:text-6xl lg:text-7xl font-light font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary italic bg-[length:200%_auto] animate-gradient-x relative inline-block">
                                        Say
                                    </span>
                                    
                                    {/* Enhanced underline with animated glow */}
                                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/70 via-blue-400/70 to-primary/70 rounded-full transform origin-left group-hover:scale-x-110 transition-transform duration-500"></span>
                                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-blue-400 to-primary rounded-full opacity-70 blur-[2px] animate-pulse-slow"></span>
                                </span>
                            </motion.div>
                        </div>
                    </div>

                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.6 }}
                        className="text-lg text-gray-300 max-w-3xl mx-auto"
                    >
                        Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                        >
                            {/* Card Background with Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            
                            {/* Main Card Content */}
                            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 h-full">
                                {/* Quote Icon */}
                                <div className="absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br from-primary to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-primary/20">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                                    </svg>
                                </div>

                                {/* Rating Stars */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    ))}
                                </div>

                                {/* Testimonial Content */}
                                <p className="text-gray-300 mb-6 italic">&quot;{testimonial.quote}&quot;</p>

                                {/* Client Info */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            width={48}
                                            height={48}
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-medium group-hover:text-primary transition-colors duration-300">{testimonial.name}</h3>
                                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ClientTestimonial