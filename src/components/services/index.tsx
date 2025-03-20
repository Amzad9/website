import Head from "next/head";
import { InfiniteMovingCardsDemo } from "@/components/Card";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <main id="service" className="flex flex-col">
      <Head>
        <title>WebLibron - Professional Digital Services</title>
        <meta
          name="description"
          content="Expert software development, mobile apps, and digital solutions with over fifteen years of experience."
        />
      </Head>

      {/* Top Section: Device Screenshots */}
      <section 
        className="bg-slate-900 py-8" 
        aria-label="Our Services Showcase"
      >
        <InfiniteMovingCardsDemo />
      </section>

      {/* Bottom Section: Black Background with Text and Buttons */}
      <section className="bg-black text-white pt-10 pb-0 md:pt-16 md:pb-16 relative z-30">
        <div className="container mx-auto px-4 text-center">
          <div className="relative">
            <h3 className="text-2xl md:text-5xl text-center text-white font-poppins mb-6">
              Seamless{" "}
              <span className="text-primary italic bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary transition-all duration-500">
                Digital
              </span>{" "}
              Solutions
            </h3>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 mb-16 max-w-3xl mx-auto">
            {["Web Development", "Mobile App Development", "UI/UX Design", "SEO & Digital Marketing", "Software Support"].map((service) => (
              <motion.button
                key={service}
                className="bg-transparent text-gray-300 border border-gray-700 px-6 py-2 rounded-full 
                          hover:text-blue-500 font-poppins relative"
                whileHover={{ 
                  scale: 1.05,
                  borderColor: ["rgb(55, 65, 81)", "rgb(59, 130, 246)", "rgb(147, 51, 234)", "rgb(59, 130, 246)"]
                }}
                initial={{ borderColor: "rgb(55, 65, 81)" }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                {service}
              </motion.button>
            ))}
          </nav>

          <article className="mb-16">
            <p className="text-lg max-w-3xl mx-auto text-gray-300 font-inter leading-relaxed text-center">
              Transform your business with our cutting-edge mobile app and software development solutions. We craft innovative, high-performance digital experiences designed to elevate your brand, enhance user engagement, and drive revenue growth.
            </p>
          </article>

          {/* Contact Section */}
          <section className="bg-gradient-to-b from-black to-gray-900 rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-4xl text-center text-white font-poppins mb-6">
              Let's Build{" "}
              <span className="text-primary italic bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary transition-all duration-500">
                Together
              </span>
            </h2>
            <p className="text-gray-300 text-center mb-8">
              Ready to transform your digital presence? Get in touch with our experts today.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full 
                         transition-all duration-300 font-poppins font-medium
                         transform hover:scale-105 shadow-lg shadow-primary/20"
              >
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
