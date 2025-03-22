import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Users, Code2, Award, Clock, MessageSquare, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import ServiceIllustration from '@/components/illustrations/ServiceIllustration';
import SeoHead from '@/components/seo/SeoHead';

type ServiceType = 'web' | 'app' | 'design' | 'ecommerce';

interface Service {
    title: string;
    subtitle: string;
    description: string;
    gradientFrom: string;
    gradientTo: string;
    imagePosition: 'left' | 'right';
    features: string[];
    illustrationType: ServiceType;
}

const SolutionPage = () => {
    const services: Service[] = [
        {
            title: "Web Development",
            subtitle: "Modern & Responsive Solutions",
            description: "Crafting cutting-edge websites that deliver exceptional user experiences and drive business growth through modern technologies and optimized performance.",
            gradientFrom: "from-blue-600",
            gradientTo: "to-blue-400",
            imagePosition: "right",
            features: [
                "Custom Website Development",
                "Progressive Web Apps (PWA)",
                "CMS Integration",
                "E-commerce Solutions",
                "Web Application Security"
            ],
            illustrationType: "web"
        },
        {
            title: "App Development",
            subtitle: "Native & Cross-platform Apps",
            description: "Building powerful mobile applications that engage users and deliver seamless experiences across iOS and Android platforms with cutting-edge features.",
            gradientFrom: "from-purple-600",
            gradientTo: "to-purple-400",
            imagePosition: "left",
            features: [
                "Native Mobile Apps",
                "React Native Development",
                "Flutter Applications",
                "App Maintenance & Support",
                "Cloud Integration"
            ],
            illustrationType: "app"
        },
        {
            title: "UI/UX Design",
            subtitle: "User-Centered Design",
            description: "Creating intuitive and visually stunning user interfaces that enhance user engagement and drive conversions through user-centered design principles.",
            gradientFrom: "from-amber-500",
            gradientTo: "to-orange-400",
            imagePosition: "right",
            features: [
                "Brand Identity Design",
                "UI Component Libraries",
                "Interactive Prototypes",
                "Design Systems",
                "Accessibility Design"
            ],
            illustrationType: "design"
        },
        {
            title: "E-commerce Solutions",
            subtitle: "Online Retail Excellence",
            description: "Developing robust e-commerce platforms that drive sales and provide seamless shopping experiences with advanced features and secure payment integration.",
            gradientFrom: "from-emerald-600",
            gradientTo: "to-emerald-400",
            imagePosition: "left",
            features: [
                "Custom E-commerce Platforms",
                "Multi-vendor Marketplaces",
                "Inventory Management Systems",
                "Payment Gateway Integration",
                "Analytics & Reporting Tools"
            ],
            illustrationType: "ecommerce"
        },
    ];

    const stats = [
        { number: "500+", label: "Projects Completed", icon: Award },
        { number: "200+", label: "Happy Clients", icon: Users },
        { number: "24/7", label: "Support Available", icon: Clock },
    ];

    const process = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "We analyze your requirements and create a detailed project roadmap tailored to your business goals.",
            icon: MessageSquare,
            color: "from-blue-500 to-blue-600"
        },
        {
            step: "02",
            title: "Design & Development",
            description: "Our team creates stunning designs and develops robust solutions using cutting-edge technologies.",
            icon: Code2,
            color: "from-purple-500 to-purple-600"
        },
        {
            step: "03",
            title: "Testing & Quality",
            description: "Rigorous testing ensures your solution is bug-free and performs optimally across all platforms.",
            icon: CheckCircle2,
            color: "from-emerald-500 to-emerald-600"
        },
        {
            step: "04",
            title: "Launch & Support",
            description: "We handle deployment and provide ongoing support to ensure your solution's success.",
            icon: Award,
            color: "from-amber-500 to-amber-600"
        }
    ];

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.5
            } 
        }
    };

    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

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
        <div className="bg-black min-h-screen">
            <SeoHead
                title="Digital Solutions & Services | Leading Web Development Agency in Bangladesh"
                description="Transform your business with our comprehensive digital solutions. Expert web development, mobile apps, UI/UX design, and e-commerce services in Bangladesh. Get innovative solutions for your digital needs."
                keywords="web development, mobile apps, UI/UX design, e-commerce solutions, digital agency, Bangladesh, React, Next.js, Node.js, React Native, Flutter, custom web development, responsive design, progressive web apps, native mobile apps, cross-platform development, UI/UX design services, e-commerce development, digital transformation, Bangladesh web development, professional web development, affordable web development, best web development company in Bangladesh"
                ogImage="/p2.png"
                canonicalUrl="https://yourwebsite.com/solution"
            />

            {/* Hero Banner Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/p2.png"
                        alt="Services Banner"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black"></div>
                </div>

                {/* Content */}
                <div className="relative h-full flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div 
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                            className="max-w-4xl mx-auto text-center"
                        >
                            {/* Enhanced Top Accent */}
                            
                            
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
                                    {/* Word 1: "Digital" */}
                                    <motion.div
                                        custom={0}
                                        initial="hidden"
                                        animate="visible"
                                        variants={headingVariants}
                                        className="relative group"
                                    >
                                        <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                                            Digital
                                            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                                        </span>
                                    </motion.div>
                                    
                                    {/* Word 2: "Solutions" with special treatment */}
                                    <motion.div
                                        custom={1}
                                        initial="hidden"
                                        animate="visible"
                                        variants={headingVariants}
                                        className="relative group"
                                    >
                                        <span className="relative">
                                            {/* 3D Depth Shadow */}
                                            <span className="absolute -inset-1 text-4xl md:text-6xl lg:text-7xl font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-blue-600/30 blur-[2px] italic transform translate-y-[0.15em] translate-x-[0.05em] select-none">
                                                Solutions
                                            </span>
                                            
                                            {/* Main text with animated gradient */}
                                            <span className="text-4xl md:text-6xl lg:text-7xl font-light font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary italic bg-[length:200%_auto] animate-gradient-x relative inline-block">
                                                Solutions
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
                                className="text-lg text-gray-300 max-w-3xl mx-auto mb-8"
                            >
                                We deliver cutting-edge digital solutions that transform businesses and drive growth through innovation and expertise.
                            </motion.p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <Link className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20 hover:translate-y-[-2px]" href={'/service'}>
                                    <span>Explore Services</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all duration-300 flex items-center gap-2 hover:border-white/20 hover:translate-y-[-2px]" href='#contact'>
                                    <span>Contact Us</span>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-20 bg-black/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                            >
                                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                                <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                                <p className="text-gray-400">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <div className="space-y-16 py-20">
                {services.map((item, index) => (
                    <motion.section 
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="relative"
                    >
                        {/* Background Glow */}
                        <div className={`absolute top-0 ${item.imagePosition === 'right' ? 'right-0' : 'left-0'} w-64 h-64 rounded-full blur-[100px] opacity-20 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} -z-0 group-hover:opacity-40 transition-opacity duration-700`}></div>

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="bg-[#0A0A0A]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.05] group hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                                <div className="flex flex-col md:flex-row items-center justify-between p-8">
                                    {item.imagePosition === 'left' ? (
                                        <>
                                            <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
                                                <div className="relative h-[400px] w-full rounded-xl overflow-hidden bg-black/50 p-8">
                                                    <ServiceIllustration type={item.illustrationType} className="w-full h-full" />
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 space-y-6 md:ps-5">
                                                <div>
                                                    <h2 className={`text-3xl font-bold mb-2 relative inline-block bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} bg-clip-text text-transparent group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:left-0 group-hover:after:h-[2px] group-hover:after:w-full group-hover:after:bg-gradient-to-r group-hover:after:from-transparent group-hover:after:via-primary group-hover:after:to-transparent group-hover:after:transition-all group-hover:after:duration-500`}>
                                                        {item.title}
                                                    </h2>
                                                    <h4 className="text-xl text-gray-300 mb-4">{item.subtitle}</h4>
                                                    <p className="text-gray-400 mb-6">{item.description}</p>
                                                </div>
                                                <div className="space-y-3">
                                                    {item.features.map((feature, idx) => (
                                                        <div 
                                                            key={idx}
                                                            className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-500 ease-out"
                                                            style={{ transitionDelay: `${idx * 50}ms` }}
                                                        >
                                                            <div className={`h-px w-5 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} opacity-70 group-hover:w-8 transition-all duration-300`}></div>
                                                            <span className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform duration-300 cursor-pointer">
                                                    <span>Learn more</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-full md:w-1/2 space-y-6 md:ps-5">
                                                <div>
                                                    <h2 className={`text-3xl font-bold mb-2 relative inline-block bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} bg-clip-text text-transparent group-hover:after:absolute group-hover:after:bottom-0 group-hover:after:left-0 group-hover:after:h-[2px] group-hover:after:w-full group-hover:after:bg-gradient-to-r group-hover:after:from-transparent group-hover:after:via-primary group-hover:after:to-transparent group-hover:after:transition-all group-hover:after:duration-500`}>
                                                        {item.title}
                                                    </h2>
                                                    <h4 className="text-xl text-gray-300 mb-4">{item.subtitle}</h4>
                                                    <p className="text-gray-400 mb-6">{item.description}</p>
                                                </div>
                                                <div className="space-y-3">
                                                    {item.features.map((feature, idx) => (
                                                        <div 
                                                            key={idx}
                                                            className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-500 ease-out"
                                                            style={{ transitionDelay: `${idx * 50}ms` }}
                                                        >
                                                            <div className={`h-px w-5 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} opacity-70 group-hover:w-8 transition-all duration-300`}></div>
                                                            <span className="text-gray-400 text-sm group-hover:text-white transition-colors duration-300">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform duration-300 cursor-pointer">
                                                    <span>Learn more</span>
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 text-center">
                                                <div className="relative h-[400px] w-full rounded-xl overflow-hidden bg-black/50 p-8">
                                                    <ServiceIllustration type={item.illustrationType} className="w-full h-full" />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </motion.section>
                ))}
            </div>

            {/* Process Section */}
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
                                Our Process
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
                                {/* Word 1: "Development" */}
                                <motion.div
                                    custom={0}
                                    initial="hidden"
                                    animate="visible"
                                    variants={headingVariants}
                                    className="relative group"
                                >
                                    <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                                        Development
                                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                                    </span>
                                </motion.div>
                                
                                {/* Word 2: "Process" with special treatment */}
                                <motion.div
                                    custom={1}
                                    initial="hidden"
                                    animate="visible"
                                    variants={headingVariants}
                                    className="relative group"
                                >
                                    <span className="relative">
                                        {/* 3D Depth Shadow */}
                                        <span className="absolute -inset-1 text-4xl md:text-6xl lg:text-7xl font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-blue-600/30 blur-[2px] italic transform translate-y-[0.15em] translate-x-[0.05em] select-none">
                                            Process
                                        </span>
                                        
                                        {/* Main text with animated gradient */}
                                        <span className="text-4xl md:text-6xl lg:text-7xl font-light font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary italic bg-[length:200%_auto] animate-gradient-x relative inline-block">
                                            Process
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
                            We follow a systematic and proven approach to deliver exceptional results for every project, ensuring quality and client satisfaction at every step.
                        </motion.p>
                    </div>

                    {/* Process Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative group"
                            >
                                {/* Step Card */}
                                <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300 h-full">
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                    
                                    {/* Content Container */}
                                    <div className="relative z-10">
                                        {/* Step Number */}
                                        <div className={`absolute -top-4 left-8 w-8 h-8 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300`}>
                                            {step.step}
                                        </div>

                                        {/* Icon */}
                                        <div className="mb-6">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} bg-opacity-10 flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300 group-hover:rotate-6`}>
                                                <step.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="pt-6">
                                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                                            <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">{step.description}</p>
                                            
                                            {/* Features List */}
                                            <ul className="space-y-3">
                                                {getProcessDetails(step.title).map((detail, idx) => (
                                                    <motion.li 
                                                        key={idx} 
                                                        initial={{ opacity: 0, x: -20 }}
                                                        whileInView={{ opacity: 1, x: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: idx * 0.1 }}
                                                        className="flex items-center gap-3 text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                                                    >
                                                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${step.color} group-hover:scale-150 transition-transform duration-300`}></div>
                                                        {detail}
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Connection Line */}
                                {index < process.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/20 to-transparent group-hover:w-12 transition-all duration-300"></div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Process Summary */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="mt-16 text-center"
                    >
                        <div className="inline-block px-8 py-4 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/40 transition-colors duration-300 group">
                            <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                                Average project completion time: <span className="text-primary font-medium group-hover:text-primary/80 transition-colors duration-300">4-8 weeks</span>
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Client Testimonials Section */}
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
                            Don't just take our word for it. Here's what our clients have to say about working with us.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Sarah Johnson",
                                role: "CEO, TechStart",
                                image: "/testimonials/client1.jpg",
                                content: "Working with this team has been transformative for our business. Their expertise and dedication to quality are unmatched.",
                                rating: 5
                            },
                            {
                                name: "Michael Chen",
                                role: "CTO, InnovateCorp",
                                image: "/testimonials/client2.jpg",
                                content: "The team delivered beyond our expectations. Their innovative solutions helped us achieve our goals faster than anticipated.",
                                rating: 5
                            },
                            {
                                name: "Emma Davis",
                                role: "Product Manager, GrowthLabs",
                                image: "/testimonials/client3.jpg",
                                content: "Professional, responsive, and incredibly skilled. They transformed our vision into reality with exceptional attention to detail.",
                                rating: 5
                            }
                        ].map((testimonial, index) => (
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
                                    <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>

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

            {/* FAQ Section */}
            <section className="py-20 bg-black/50 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        {/* Enhanced Top Accent */}
                        <div className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-primary"></div>
                            <span className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 text-primary font-light tracking-wider text-xs sm:text-sm uppercase border border-white/10 shadow-lg shadow-primary/10">
                                FAQ
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
                                {/* Word 1: "Frequently" */}
                                <motion.div
                                    custom={0}
                                    initial="hidden"
                                    animate="visible"
                                    variants={headingVariants}
                                    className="relative group"
                                >
                                    <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                                        Frequently
                                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                                    </span>
                                </motion.div>
                                
                                {/* Word 2: "Asked" */}
                                <motion.div
                                    custom={1}
                                    initial="hidden"
                                    animate="visible"
                                    variants={headingVariants}
                                    className="relative group"
                                >
                                    <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                                        Asked
                                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                                    </span>
                                </motion.div>
                                
                                {/* Word 3: "Questions" with special treatment */}
                                <motion.div
                                    custom={2}
                                    initial="hidden"
                                    animate="visible"
                                    variants={headingVariants}
                                    className="relative group"
                                >
                                    <span className="relative">
                                        {/* 3D Depth Shadow */}
                                        <span className="absolute -inset-1 text-4xl md:text-6xl lg:text-7xl font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-blue-600/30 blur-[2px] italic transform translate-y-[0.15em] translate-x-[0.05em] select-none">
                                            Questions
                                        </span>
                                        
                                        {/* Main text with animated gradient */}
                                        <span className="text-4xl md:text-6xl lg:text-7xl font-light font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary italic bg-[length:200%_auto] animate-gradient-x relative inline-block">
                                            Questions
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
                            Find answers to common questions about our services and development process.
                        </motion.p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {[
                            {
                                question: "What technologies do you use?",
                                answer: "We use cutting-edge technologies including React, Next.js, Node.js, and more. Our stack is chosen based on project requirements and best practices."
                            },
                            {
                                question: "How long does a typical project take?",
                                answer: "Project timelines vary based on complexity and requirements. A typical web application takes 4-8 weeks, while more complex solutions may take 3-6 months."
                            },
                            {
                                question: "Do you provide ongoing support?",
                                answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solution remains up-to-date and performs optimally."
                            },
                            {
                                question: "What is your pricing model?",
                                answer: "We offer flexible pricing models based on project scope and requirements. Contact us for a detailed quote tailored to your needs."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full text-left p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300"
                                >
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-medium text-white">{faq.question}</h3>
                                        <span className={`transform transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                                            <ChevronDown className="w-5 h-5 text-gray-400" />
                                        </span>
                                    </div>
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{ height: openFaqIndex === index ? 'auto' : 0, opacity: openFaqIndex === index ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    <div className="p-6 pt-0">
                                        <p className="text-gray-400">{faq.answer}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary/20 to-primary/10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Digital Presence?</h2>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        Let's discuss how we can help you achieve your business goals with our cutting-edge solutions.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20 hover:translate-y-[-2px]" href={'#contact'}>
                            <span>Start Your Project</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

const getProcessDetails = (title: string): string[] => {
    switch (title) {
        case "Discovery & Planning":
            return [
                "Requirements gathering and analysis",
                "Project scope definition",
                "Timeline and resource planning",
                "Technology stack selection"
            ];
        case "Design & Development":
            return [
                "UI/UX design creation",
                "Frontend and backend development",
                "Database architecture",
                "API integration"
            ];
        case "Testing & Quality":
            return [
                "Unit and integration testing",
                "Performance optimization",
                "Security testing",
                "Cross-browser compatibility"
            ];
        case "Launch & Support":
            return [
                "Deployment and hosting setup",
                "Client training and documentation",
                "Post-launch monitoring",
                "Ongoing maintenance and updates"
            ];
        default:
            return [];
    }
};

export default SolutionPage;

