
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';

function ClientTestimonial() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechStart",
            image: "/images/testimonials/client1.jpg",
            quote: "Their web development services transformed our online presence. The team's expertise and dedication were exceptional."
        },
        {
            name: "Michael Chen",
            role: "CTO, InnovateCorp",
            image: "/images/testimonials/client2.jpg",
            quote: "The mobile app they developed for us exceeded our expectations. Their attention to detail and user experience is outstanding."
        },
        {
            name: "Emma Davis",
            role: "Product Manager, DesignHub",
            image: "/images/testimonials/client3.jpg",
            quote: "Their UI/UX design services helped us create an intuitive and beautiful interface that our users love."
        }
    ];

  return (
            <section className="py-20 bg-black/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Client Testimonials</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">What our clients say about working with us.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                            >
                                <div className="flex items-center mb-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold">{testimonial.name}</h3>
                                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
  )
}

export default ClientTestimonial