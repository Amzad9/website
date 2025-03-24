import { motion } from 'framer-motion'
import React from 'react'
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

function Faq() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };
   const faqs = [
        {
            question: "What technologies do you use?",
            answer: "We use modern technologies including React, Next.js, Node.js, Python, and various cloud platforms. Our stack is chosen based on your specific project requirements."
        },
        {
            question: "How long does a typical project take?",
            answer: "Project timelines vary based on complexity and scope. A typical website project takes 4-8 weeks, while larger applications may take 3-6 months."
        },
        {
            question: "Do you provide ongoing support?",
            answer: "Yes, we offer comprehensive support packages including maintenance, updates, and technical assistance to ensure your solution remains optimal."
        },
        {
            question: "What is your pricing structure?",
            answer: "Our pricing is project-based and depends on your specific requirements. We offer flexible packages to suit different budgets and needs."
        }
    ];

  return (
         <section className="py-20 bg-black/50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Find answers to common questions about our services.</p>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 pt-4"
                            >
                                {/* <div 
                                    className="flex items-center justify-between cursor-pointer"
                                    onClick={() => toggleFaq(index)}
                                >
                                    <h3 className="text-white text-xl font-bold">{faq.question}</h3>
                                    <ChevronDown 
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                                            openFaqIndex === index ? 'rotate-180' : ''
                                        }`}
                                    />
                                </div> */}
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openFaqIndex === index ? 'auto' : 0,
                                        opacity: openFaqIndex === index ? 1 : 0,
                                    }}
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut"
                                    }}
                                    className="overflow-hidden pt-4"
                                >
                                    <p className="text-gray-400 mt-6 pt-8">{faq.answer}</p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
  )
}

export default Faq