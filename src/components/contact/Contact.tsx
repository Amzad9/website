import { Phone, Mail, Map, Send, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  // Services with their respective colors
  const services = [
    { name: "Web Development", color: "#FF6B6B", icon: "🌐" },
    { name: "Mobile Apps", color: "#4E95FF", icon: "📱" },
    { name: "UI/UX Design", color: "#67E8B7", icon: "🎨" },
    { name: "Digital Solutions", color: "#A78BFA", icon: "💡" }
  ];

  // Animation variants for the heading text
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
    <section 
      id="contact" 
      className="min-h-screen bg-black relative z-10 overflow-hidden py-16 md:py-24"
      aria-label="Contact Information"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Pattern Background */}
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
        
        {/* Glowing Effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Enhanced Heading Section */}
        <div className="text-center mb-12 md:mb-20 relative">
          {/* Enhanced Top Accent */}
          <div className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 text-primary font-light tracking-wider text-xs sm:text-sm uppercase border border-white/10 shadow-lg shadow-primary/10">
              Get in touch
            </span>
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          
          {/* Enhanced 3D Main Heading with Advanced Animations */}
          <div className="relative py-4 md:py-8">
            {/* Multiple layered glows for depth */}
            <div className="absolute -inset-x-4 -inset-y-8 bg-gradient-to-r from-primary/10 via-blue-500/5 to-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -inset-x-4 -inset-y-12 bg-gradient-to-br from-transparent via-blue-800/5 to-primary/5 rounded-full blur-2xl animate-pulse-slow opacity-70"></div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 left-1/4 w-2 h-2 bg-primary rounded-full opacity-80 animate-float"></div>
            <div className="absolute -bottom-2 right-1/4 w-3 h-3 bg-blue-400 rounded-full opacity-70 animate-float-delayed"></div>
            <div className="absolute top-1/2 right-[15%] w-1.5 h-1.5 bg-purple-400 rounded-full opacity-60 animate-float-slow"></div>
            
            {/* The heading itself */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 relative">
              {/* Word 1: "Start" */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={headingVariants}
                className="relative group"
              >
                <span className="text-4xl md:text-6xl lg:text-7xl font-light  text-gray-100 font-poppins tracking-tight relative inline-block">
                  Start
                  {/* Bottom shine effect */}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                </span>
              </motion.div>
              
              {/* Word 2: "Your" */}
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={headingVariants}
                className="relative group"
              >
                <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                  Your
                  {/* Bottom shine effect */}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                </span>
              </motion.div>
              
              {/* Word 3: "Success Story" with special treatment */}
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={headingVariants}
                className="relative group"
              >
                <span className="relative">
                  {/* 3D Depth Shadow */}
                  <span className="absolute -inset-1 text-4xl md:text-6xl lg:text-7xl  font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-blue-600/30 blur-[2px] italic transform translate-y-[0.15em] translate-x-[0.05em] select-none">
                    Success Story
                  </span>
                  
                  {/* Main text with animated gradient */}
                  <span className="text-4xl md:text-6xl lg:text-7xl font-light font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary italic bg-[length:200%_auto] animate-gradient-x relative inline-block">
                    Success Story
                  </span>
                  
                  {/* Enhanced underline with animated glow */}
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/70 via-blue-400/70 to-primary/70 rounded-full transform origin-left group-hover:scale-x-110 transition-transform duration-500"></span>
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-blue-400 to-primary rounded-full opacity-70 blur-[2px] animate-pulse-slow"></span>
                </span>
              </motion.div>
              
              {/* Word 4: "Here" */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={headingVariants}
                className="relative group"
              >
                <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                  Here
                  {/* Bottom shine effect */}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                </span>
              </motion.div>
            </div>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed px-2 relative mt-6"
          >
            Ready to transform your ideas into reality? Our team is here to help you create exceptional digital experiences.
          </motion.p>
          
          {/* Enhanced Service Tags */}
          <div className="flex flex-wrap justify-center mt-10 sm:mt-12 gap-3 sm:gap-5">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.9 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div 
                  className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                  style={{ backgroundColor: `${service.color}20` }} 
                ></div>
                
                {/* Service Tag with Icon */}
                <div 
                  className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-white/5 border border-white/10 
                          hover:border-white/20 text-gray-200 text-sm sm:text-base font-light 
                          transition-all duration-300 flex items-center gap-2 relative overflow-hidden group-hover:shadow-lg"
                  style={{ 
                    boxShadow: `0 4px 20px -5px ${service.color}30`
                  }}
                >
                  {/* Background gradient on hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" 
                    style={{ 
                      background: `linear-gradient(to right, ${service.color}50, transparent)` 
                    }}
                  ></div>
                  
                  {/* Icon and Text */}
                  <span className="text-base sm:text-lg">{service.icon}</span>
                  <span>{service.name}</span>
                  
                  {/* Animated Border Bottom */}
                  <span 
                    className="absolute bottom-0 left-0 w-0 h-[2px] group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: service.color }}
                  ></span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-stretch max-w-7xl mx-auto">
          {/* Enhanced Contact Cards Container */}
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                icon: <Phone className="w-6 sm:w-7 h-6 sm:h-7 text-white" />,
                title: "Let's Talk",
                subtitle: "24/7 Available",
                details: ["+91 8178614811", "+91 8840002768"],
                gradientFrom: "from-[#FF6B6B]",
                gradientTo: "to-[#FF3E6A]",
                textColor: "text-[#FF6B6B]",
                glowColor: "bg-[#FF6B6B]/30",
                shadowColor: "shadow-[#FF6B6B]/10"
              },
              {
                icon: <Mail className="w-6 sm:w-7 h-6 sm:h-7 text-white" />,
                title: "Email Us",
                subtitle: "Get in touch",
                details: ["info@weblibron.com", "hello@weblibron.com"],
                gradientFrom: "from-[#4E95FF]",
                gradientTo: "to-[#3C7FF0]",
                textColor: "text-[#4E95FF]",
                glowColor: "bg-[#4E95FF]/30",
                shadowColor: "shadow-[#4E95FF]/10"
              },
              {
                icon: <Map className="w-6 sm:w-7 h-6 sm:h-7 text-white" />,
                title: "Visit Us",
                subtitle: "Our office",
                details: ["Ajnara Gen X, Gaziabad,", "Uttar Pradesh, India"],
                gradientFrom: "from-[#67E8B7]",
                gradientTo: "to-[#28C48F]",
                textColor: "text-[#67E8B7]",
                glowColor: "bg-[#67E8B7]/30",
                shadowColor: "shadow-[#67E8B7]/10"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                className="bg-[#0A0A0A]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.05] group min-h-[200px] flex flex-col relative cursor-pointer hover:scale-[1.02] transition-all duration-300"
              >
                {/* Glowing accent in corner */}
                <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-20 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} -z-0 group-hover:opacity-40 transition-opacity duration-700`}></div>
                
                {/* Clean minimal top section */}
                <div className="p-4 flex justify-between items-start relative z-10">
                  <div>
                    <div className={`inline-flex mb-2 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} bg-clip-text relative`}>
                      <h3 className="text-xl md:text-2xl font-bold text-transparent tracking-tight">
                        {item.title}
                      </h3>
                      <div className={`absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} group-hover:w-full transition-all duration-500 ease-out`}></div>
                    </div>
                    <p className="text-gray-300 leading-relaxed pr-4 text-sm">
                      {item.subtitle}
                    </p>
                  </div>
                  
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-black/30 group-hover:border-white/20 transition-all duration-300`}>
                          {item.icon}
                        </div>
                      </div>
                      
                {/* Details section */}
                <div className="px-4 py-1 flex-grow">
                  <div className="grid grid-cols-1 gap-1.5">
                          {item.details.map((detail, idx) => (
                            <a 
                              key={idx} 
                              href={item.title === "Let's Talk" ? `tel:${detail}` : item.title === "Email Us" ? `mailto:${detail}` : "#"}
                        className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-500 ease-out" 
                        style={{ transitionDelay: `${idx * 50}ms` }}
                            >
                        <div className={`h-px w-4 bg-gradient-to-r ${item.gradientFrom} ${item.gradientTo} opacity-70 group-hover:w-6 transition-all duration-300`}></div>
                        <span className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">{detail}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                
                {/* Subtle indicator that card is clickable */}
                <div className="absolute bottom-2 right-2">
                  <div className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] text-white/40 flex items-center gap-1`}>
                    <span>Contact us</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Simplified Form Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="bg-[#0A0A0A]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.05] group h-full flex flex-col relative hover:scale-[1.02] transition-all duration-300 mt-4 md:mt-0"
          >
            {/* Glowing accent in corner */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-20 bg-gradient-to-r from-primary to-blue-400 -z-0 group-hover:opacity-40 transition-opacity duration-700"></div>
            
            {/* Clean minimal top section */}
            <div className="p-4 sm:p-6 flex flex-col h-full relative z-10">
              {/* Form Header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="inline-flex mb-2 bg-gradient-to-r from-primary to-blue-400 bg-clip-text relative">
                    <h3 className="text-xl md:text-2xl font-bold text-transparent tracking-tight">Send Message</h3>
                    <div className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-blue-400 group-hover:w-full transition-all duration-500 ease-out"></div>
                  </div>
                  <p className="text-gray-300 leading-relaxed pr-4 text-sm">We'd love to hear from you</p>
                </div>

                <div className="w-12 h-12 rounded-xl flex items-center justify-center border border-white/10 bg-black/30 group-hover:border-white/20 transition-all duration-300">
                  <Send className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Form Inputs */}
              <form className="flex flex-col flex-grow space-y-3 sm:space-y-4">
                {/* Name Input */}
                <div className="space-y-1">
                  <label className="text-xs text-gray-300 ml-1 flex items-center gap-2 font-light">
                      <span className="w-1 h-1 rounded-full bg-primary"></span>
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                      className="w-full bg-white/[0.03] rounded-lg border border-white/10 px-3 py-2 text-white 
                                 placeholder:text-gray-500 outline-none transition-all duration-300
                                 focus:border-primary focus:bg-white/[0.07]"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                {/* Email Input */}
                <div className="space-y-1">
                  <label className="text-xs text-gray-300 ml-1 flex items-center gap-2 font-light">
                      <span className="w-1 h-1 rounded-full bg-blue-500"></span>
                      Your Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                      className="w-full bg-white/[0.03] rounded-lg border border-white/10 px-3 py-2 text-white 
                                 placeholder:text-gray-500 outline-none transition-all duration-300
                                 focus:border-blue-500 focus:bg-white/[0.07]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                {/* Message Input */}
                <div className="space-y-1">
                  <label className="text-xs text-gray-300 ml-1 flex items-center gap-2 font-light">
                      <span className="w-1 h-1 rounded-full bg-purple-500"></span>
                      Your Message
                    </label>
                  <div className="relative flex flex-col">
                      <textarea
                      rows={2}
                      className="w-full bg-white/[0.03] rounded-lg border border-white/10 px-3 py-2 text-white 
                                placeholder:text-gray-500 outline-none transition-all duration-300 min-h-[60px] max-h-[100px]
                                 focus:border-purple-500 focus:bg-white/[0.07] resize-none"
                        placeholder="Write your message here..."
                      ></textarea>
                    </div>
                  </div>

                {/* Submit Button with arrow */}
                  <button
                    type="submit"
                  className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white rounded-lg px-4 py-2 transition-all duration-300 mt-2 shadow-md shadow-primary/10 flex items-center justify-between"
                >
                  <span className="text-white text-sm font-light">Send Message</span>
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transform group-hover:translate-x-1 transition-transform duration-300">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  </button>
                </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA with gradient underline */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white rounded-full transition-colors duration-300 relative group"
          >
            <span>View Our Portfolio</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-blue-500 rounded-full group-hover:w-full transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

