import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function Web() {
    const services = [
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
            image: "/p1.png"
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
            image: "/p2.png"
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
            image: "/p3.png"
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
            image: "/p5.png"
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

    return (
        <div className="bg-black min-h-screen">
            {/* Hero Banner Section */}
            <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/p5.png"
                        alt="Services Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black  to-black opacity-90"></div>
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
                            <div className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                                <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-primary"></div>
                                <span className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 text-primary font-light tracking-wider text-xs sm:text-sm uppercase border border-white/10 shadow-lg shadow-primary/10">
                                    Our Services
                                </span>
                                <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-primary"></div>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight mb-6">
                                Premium Digital Solutions
                            </h1>
                            
                            <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                                We deliver cutting-edge digital solutions that transform businesses and drive growth through innovation and expertise.
                            </p>

                            <div className="flex flex-wrap justify-center gap-4">
                                <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20 hover:translate-y-[-2px]">
                                    <span>Explore Services</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all duration-300 flex items-center gap-2 hover:border-white/20 hover:translate-y-[-2px]">
                                    <span>Contact Us</span>
                                </button>
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
                                                <div className="relative h-[300px] w-full rounded-xl overflow-hidden">
                                                    <Image 
                                                        src={item.image} 
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full md:w-1/2 space-y-6">
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
                                            <div className="w-full md:w-1/2 space-y-6">
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
                                                <div className="relative h-[300px] w-full rounded-xl overflow-hidden">
                                                    <Image 
                                                        src={item.image} 
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
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