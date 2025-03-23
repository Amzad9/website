import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SeoHead from '@/components/seo/SeoHead';


interface Service {
    title: string;
    subtitle: string;
    description: string;
    gradientFrom: string;
    gradientTo: string;
    imagePosition: 'left' | 'right';
    features: string[];
    image: string;
}

function Web() {
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
            image: '/2.jpeg'
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
            image: '/3.jpeg'
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
            image: '/4.jpeg'
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
            image: '/5.jpeg'
        },
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
                title="Professional Digital Services | Web Development, Mobile Apps & UI/UX Design in Bangladesh"
                description="Expert digital services including web development, mobile apps, UI/UX design, and e-commerce solutions in Bangladesh. Transform your business with our professional services. Get affordable and high-quality digital solutions."
                keywords="web development services, mobile app development, UI/UX design, e-commerce solutions, digital services, Bangladesh, professional web development, custom website development, responsive web design, mobile app development company, UI/UX design agency, e-commerce development services, affordable web development, best web development company in Bangladesh, professional digital agency, Bangladesh IT company, web development cost in Bangladesh, mobile app development cost, UI/UX design cost, e-commerce website cost"
                ogImage="/p5.png"
                canonicalUrl="https://weblibron.com/service"
            />

            {/* Hero Banner Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/1.jpeg"
                        alt="Services Banner"
                        fill
                        className="object-cover brightness-50"
                        priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black opacity-90"></div>
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
                                                Services
                                            </span>
                                            
                                            {/* Main text with animated gradient */}
                                            <span className="text-4xl md:text-6xl lg:text-7xl font-light font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary italic bg-[length:200%_auto] animate-gradient-x relative inline-block">
                                                Services
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
                                <Link className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20 hover:translate-y-[-2px]" href={'/solution'}>
                                    <span>Explore Solution</span>
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
                                                <div className="relative h-[460px] w-full rounded-xl overflow-hidden bg-black/50 p-8">
                                                    <Image 
                                                        src={item.image} 
                                                        alt={item.title} 
                                                        width={600}
                                                        height={460}
                                                        className="w-full h-full object-cover" 
                                                    />
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
                                            <div className="w-full md:w-1/2 space-y-6 md:pe-5">
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
                                                <div className="relative h-[460px] w-full rounded-xl overflow-hidden bg-black/50 p-8">
                                                    <Image 
                                                        src={item.image} 
                                                        alt={item.title} 
                                                        width={600}
                                                        height={460}
                                                        className="w-full h-full object-cover" 
                                                    />
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
        </div>
    );
}

export default Web;