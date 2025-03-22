import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Code2, Globe, Smartphone, Palette, ShoppingCart } from 'lucide-react';

const SeoContent = () => {
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
        <div className="py-20 bg-black/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main SEO Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="max-w-4xl mx-auto text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Leading Digital Solutions Provider in Bangladesh
                    </h2>
                    <p className="text-gray-300 text-lg mb-8">
                        We are a premier digital agency specializing in web development, mobile apps, UI/UX design, and e-commerce solutions. Our expertise helps businesses transform their digital presence and achieve remarkable growth.
                    </p>
                </motion.div>

                {/* Service Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {[
                        {
                            icon: Globe,
                            title: "Web Development Services",
                            description: "Custom website development, responsive design, and modern web applications using cutting-edge technologies like React, Next.js, and Node.js.",
                            features: [
                                "Responsive Web Design",
                                "Custom Web Applications",
                                "E-commerce Development",
                                "CMS Integration",
                                "Web Security Solutions"
                            ]
                        },
                        {
                            icon: Smartphone,
                            title: "Mobile App Development",
                            description: "Native and cross-platform mobile applications for iOS and Android, delivering exceptional user experiences and performance.",
                            features: [
                                "iOS App Development",
                                "Android App Development",
                                "React Native Apps",
                                "Flutter Applications",
                                "App Maintenance"
                            ]
                        },
                        {
                            icon: Palette,
                            title: "UI/UX Design Services",
                            description: "User-centered design solutions that enhance engagement and drive conversions through intuitive interfaces and beautiful aesthetics.",
                            features: [
                                "User Interface Design",
                                "User Experience Design",
                                "Brand Identity Design",
                                "Prototype Development",
                                "Design Systems"
                            ]
                        },
                        {
                            icon: ShoppingCart,
                            title: "E-commerce Solutions",
                            description: "Complete e-commerce platforms and solutions that help businesses sell online effectively with advanced features and secure payment integration.",
                            features: [
                                "Online Store Development",
                                "Payment Gateway Integration",
                                "Inventory Management",
                                "Order Processing",
                                "Analytics & Reporting"
                            ]
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                        >
                            <service.icon className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-4">{service.description}</p>
                            <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-gray-300">
                                        <CheckCircle2 className="w-4 h-4 text-primary" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Why Choose Us Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Why Choose Our Digital Agency?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Expert Team",
                                description: "Our team consists of experienced developers, designers, and digital strategists who bring years of expertise to every project."
                            },
                            {
                                title: "Quality Assurance",
                                description: "We maintain the highest standards of quality through rigorous testing and quality control processes."
                            },
                            {
                                title: "Innovative Solutions",
                                description: "We stay ahead of industry trends and implement cutting-edge technologies to deliver innovative solutions."
                            },
                            {
                                title: "24/7 Support",
                                description: "Our dedicated support team is available round the clock to assist you with any queries or concerns."
                            }
                        ].map((item, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                <p className="text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SeoContent; 