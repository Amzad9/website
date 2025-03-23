"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

const testimonial = {
  quote: "Weblibron transformed our online presence completely. Their innovative approach and attention to detail exceeded our expectations. The team's dedication to quality and customer satisfaction is truly remarkable.",
  name: "Sarah Johnson",
  title: "CEO, TechStart",
  rating: 5,
  company: "TechStart",
  image: "/testimonials/sarah.jpg"
};

export const TestimonialsSection = () => {
  return (
    <section className="container mx-auto bg-black py-16">
      <div className="bg-black relative z-20 mx-auto max-w-7xl">
        <div className="inline-flex items-center px-6 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl shadow-lg w-full md:w-[600px]">
          <div className="flex flex-col w-full">
            {/* Quote Icon */}
            <div className="absolute -top-4 left-8 p-3 rounded-full bg-primary/10 border border-primary/20">
              <Quote className="w-6 h-6 text-primary" />
            </div>

            {/* Rating */}
            <div className="flex text-primary mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              &quot;{testimonial.quote}&quot;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary/20 to-blue-500/20 border border-primary/20 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              </div>
              <div>
                <p className="text-white font-medium">{testimonial.name}</p>
                <p className="text-gray-400 text-sm">{testimonial.title}</p>
                <p className="text-primary/80 text-xs">{testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
