import { Phone, Mail, Map, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-gradient-to-b from-black to-black relative z-10 overflow-hidden py-20"
      aria-label="Contact Information"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 animate-pulse"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Enhanced Heading Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="text-center max-w-5xl mx-auto mb-20"
        >
          {/* Top Accent */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[2px] w-10 bg-gradient-to-r from-primary to-transparent"></div>
            <span className="text-primary uppercase text-sm font-medium tracking-[0.2em]">Get In Touch</span>
            <div className="h-[2px] w-10 bg-gradient-to-l from-primary to-transparent"></div>
          </div>

          {/* Main Heading */}
          <div className="relative">
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-6xl font-bold mb-6 font-poppins leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="text-gray-100">Start Your</span>
              <span className="relative inline-block mx-4">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] via-[#4E95FF] to-[#67E8B7] italic">
                  Success Story
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-[#FF6B6B] via-[#4E95FF] to-[#67E8B7] blur-lg opacity-50"></span>
              </span>
              <span className="text-gray-100">Here</span>
            </motion.h2>

            {/* Optional: Add an engaging subheading */}
            <motion.p
              className="text-gray-400 text-xl mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              Turn your ideas into extraordinary digital experiences
            </motion.p>

            {/* Enhanced Decorative Elements */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-20 h-20 opacity-20">
              <div className="absolute inset-0 rotate-45 transform">
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Enhanced Subheading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative z-10 mt-12"
          >
            <div className="flex items-center justify-center gap-8 text-lg">
              {[
                "Web Development",
                "Mobile Apps",
                "Digital Solutions"
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    {service}
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-blue-500 group-hover:w-full transition-all duration-300"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[100px] pointer-events-none"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/pattern.svg')] opacity-5 pointer-events-none"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch max-w-7xl mx-auto">
          {/* Contact Cards Container */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            className="space-y-8"
          >
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: "Let's Talk",
                subtitle: "24/7 Available",
                details: ["+91 8178614811", "+91 8840002768"],
                gradient: "from-[#FF6B6B] to-[#FF8E8E]"
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: "Email Us",
                subtitle: "Get in touch",
                details: ["info@weblibron.com", "hello@weblibron.com"],
                gradient: "from-[#4E95FF] to-[#8CC2FF]"
              },
              {
                icon: <Map className="w-6 h-6" />,
                title: "Visit Us",
                subtitle: "Our office",
                details: ["Ajnara Gen X, Gaziabad,", "Uttar Pradesh, India"],
                gradient: "from-[#67E8B7] to-[#90F1C9]"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-500">
                  <div className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`rounded-xl bg-gradient-to-r ${item.gradient} p-4 bg-opacity-10`}>
                        {item.icon}
                </div>
                      <div className="space-y-4">
                <div>
                          <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                          <p className="text-gray-400 text-sm">{item.subtitle}</p>
                        </div>
                        <div className="space-y-2">
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-lg text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={`h-1 w-full bg-gradient-to-r ${item.gradient} opacity-50`}></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Form Container - Adjusted Height */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="relative h-full"
          >
            {/* Background Effects */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 rounded-2xl"></div>
              <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
            </div>
            
            {/* Main Container */}
            <div className="relative bg-gradient-to-b from-black to-gray-900 backdrop-blur-sm rounded-2xl border border-white/10 h-full flex flex-col">
              <div className="relative p-8 flex flex-col flex-grow">
                {/* Form Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white">Send Message</h3>
                  <p className="text-gray-400 mt-2">We'd love to hear from you</p>
                </div>

                {/* Form Content */}
                <form className="flex flex-col flex-grow space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300 ml-1 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      Your Name
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        className="w-full bg-gray-900/50 rounded-xl border border-white/10 px-6 py-4 text-white 
                                   placeholder:text-gray-500 outline-none transition-all duration-300
                                   focus:border-primary group-hover:border-primary/50"
                        placeholder="John Doe"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-gray-900/5 to-blue-500/5 
                                      opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl backdrop-blur-sm">
                      </div>
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300 ml-1 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                      Your Email
                    </label>
                    <div className="relative group">
                      <input
                        type="email"
                        className="w-full bg-gray-900/50 rounded-xl border border-white/10 px-6 py-4 text-white 
                                   placeholder:text-gray-500 outline-none transition-all duration-300
                                   focus:border-primary group-hover:border-primary/50"
                        placeholder="john@example.com"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-gray-900/5 to-blue-500/5 
                                      opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl backdrop-blur-sm">
                      </div>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="text-sm text-gray-300 ml-1 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-purple-500"></span>
                      Your Message
                    </label>
                    <div className="relative group">
                      <textarea
                        rows={3}
                        className="w-full bg-gray-900/50 rounded-xl border border-white/10 px-6 py-4 text-white 
                                   placeholder:text-gray-500 outline-none transition-all duration-300 resize-none
                                   focus:border-primary group-hover:border-primary/50"
                        placeholder="Write your message here..."
                      ></textarea>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-gray-900/5 to-blue-500/5 
                                      opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl backdrop-blur-sm">
                      </div>
                    </div>
                  </div>

                  {/* Submit Button - Alternative Design */}
                  <button
                    type="submit"
                    className="relative w-full overflow-hidden group"
                  >
                    {/* Background Effects */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-500 rounded-xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-primary rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    
                    {/* Button Content */}
                    <div className="relative px-8 py-4">
                      <span className="flex items-center justify-center gap-3">
                        <span className="text-white font-semibold tracking-wide">Send Message</span>
                        <Send className="w-5 h-5 text-white transform group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000"></div>
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 text-primary hover:text-blue-500 transition-colors duration-300 group"
          >
            <span>View Our Portfolio</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
