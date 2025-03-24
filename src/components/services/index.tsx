import Head from "next/head";
import { InfiniteMovingCardsDemo } from "@/components/Card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Services() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const popIn = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 0.4,
      },
    },
  };

  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites that drive engagement, conversions, and brand recognition across all devices.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="webGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
          <path d="M13 19H11V21H13V19Z" fill="url(#webGradient)" />
          <path
            d="M21 15L21 5C21 3.89543 20.1046 3 19 3L5 3C3.89543 3 3 3.89543 3 5L3 15C3 16.1046 3.89543 17 5 17L19 17C20.1046 17 21 16.1046 21 15Z"
            stroke="url(#webGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9 21H15"
            stroke="url(#webGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M7.5 7L11.5 11L7.5 15"
            stroke="url(#webGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      features: [
        "Responsive design",
        "SEO optimization",
        "Performance tuning",
        "Custom CMS",
      ],
      color: "from-blue-600 to-blue-400",
      caseStudy: "Fintech Solutions Portal",
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="mobileGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#9333EA" />
              <stop offset="100%" stopColor="#C084FC" />
            </linearGradient>
          </defs>
          <rect
            x="5"
            y="2"
            width="14"
            height="20"
            rx="3"
            stroke="url(#mobileGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 18H12.01"
            stroke="url(#mobileGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9 22H15"
            stroke="url(#mobileGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 5.5C10 5.22386 10.2239 5 10.5 5H13.5C13.7761 5 14 5.22386 14 5.5C14 5.77614 13.7761 6 13.5 6H10.5C10.2239 6 10 5.77614 10 5.5Z"
            fill="url(#mobileGradient)"
          />
        </svg>
      ),
      features: [
        "iOS & Android apps",
        "Cross-platform solutions",
        "App store optimization",
        "Ongoing support",
      ],
      color: "from-purple-600 to-purple-400",
      caseStudy: "Health & Fitness App",
    },
    {
      title: "UI/UX Design",
      description:
        "User-centered design that creates intuitive, engaging, and effective digital experiences.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="designGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#FB923C" />
            </linearGradient>
          </defs>
          <path
            d="M6 3H3V6"
            stroke="url(#designGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 3H18V6"
            stroke="url(#designGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 21H21V18"
            stroke="url(#designGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 21H3V18"
            stroke="url(#designGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="url(#designGradient)"
            strokeWidth="2"
          />
          <path
            d="M12 12L15.5 8.5"
            stroke="url(#designGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      features: [
        "User research",
        "Wireframing",
        "Prototyping",
        "Usability testing",
      ],
      color: "from-amber-500 to-orange-400",
      caseStudy: "E-commerce Redesign",
    },
    {
      title: "Digital Marketing",
      description:
        "Strategic marketing solutions that increase visibility, drive traffic, and boost conversions.",
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="marketingGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#059669" />
              <stop offset="100%" stopColor="#34D399" />
            </linearGradient>
          </defs>
          <path
            d="M16 8.00001L18 10M18 10L20 12M18 10L16 12M18 10L20 8.00001"
            stroke="url(#marketingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 21.4V5.6C4 5.26863 4.26863 5 4.6 5H19.4C19.7314 5 20 5.26863 20 5.6V8"
            stroke="url(#marketingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 10H8.5"
            stroke="url(#marketingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 14H12"
            stroke="url(#marketingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M14 21V15.5"
            stroke="url(#marketingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M10 21V17.5"
            stroke="url(#marketingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6 21V19.5"
            stroke="url(#marketingGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      features: [
        "SEO & SEM",
        "Social media marketing",
        "Content strategy",
        "Analytics & reporting",
      ],
      color: "from-emerald-600 to-emerald-400",
      caseStudy: "SaaS Growth Campaign",
    },
  ];

  return (
    <main
      id="service"
      className="flex flex-col min-h-screen relative bg-[#050505]"
    >
      <Head>
        <title>WebLibron - Professional Digital Services</title>
        <meta
          name="description"
          content="Expert software development, mobile apps, and digital solutions with over fifteen years of experience."
        />
      </Head>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.03]"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/0 via-primary/[0.02] to-black/0"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(4,84,194,0.05)_0%,transparent_65%)]"></div>
      </div>

      {/* Hero Section */}
      <section
        className="relative z-10 pt-16 md:pt-10 pb-0 overflow-hidden"
        aria-label="Our Services Showcase"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            {/* Enhanced Top Accent */}
            <div className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
              <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-primary"></div>
              <span className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 text-primary font-light tracking-wider text-xs sm:text-sm uppercase border border-white/10 shadow-lg shadow-primary/10">
                Professional Services
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

              {/* The heading itself */}
              <div className="flex flex-col items-center justify-center gap-1 md:gap-2 relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-white leading-tight">
                  Premium
                  <span className="relative inline-block mx-2">
                    {/* 3D Depth Shadow */}
                    <span className="absolute -inset-1 text-4xl sm:text-5xl md:text-6xl font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-blue-600/30 blur-[2px] transform translate-y-[0.15em] translate-x-[0.05em] select-none">
                      Digital
                    </span>

                    {/* Main text with animated gradient */}
                    <span className="text-4xl sm:text-5xl md:text-6xl relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_auto] animate-gradient-x">
                      Digital
                    </span>

                    {/* Enhanced underline with animated glow */}
                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/70 via-blue-400/70 to-primary/70 rounded-full transform origin-left group-hover:scale-x-110 transition-transform duration-500"></span>
                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-blue-400 to-primary rounded-full opacity-70 blur-[2px] animate-pulse-slow"></span>
                  </span>
                  Services
                </h1>
              </div>
            </div>

            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
              We craft cutting-edge digital experiences that drive business
              growth, strengthen your brand, and deliver measurable results
            </p>
          </motion.div>
        </div>

        <div className="">
          <InfiniteMovingCardsDemo />
        </div>
      </section>

      {/* Services Grid Section */}
      <section id="services" className="relative z-10 pb-16 md:pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 container mx-auto"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={popIn}
                className="bg-[#0A0A0A]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.05] group h-full flex flex-col relative cursor-pointer hover:scale-[1.02] transition-all duration-300"
                onClick={() => (window.location.href = "/service")}
              >
                {/* Glowing accent in corner */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-20 bg-gradient-to-r ${service.color} -z-0 group-hover:opacity-40 transition-opacity duration-700`}
                ></div>

                {/* Clean minimal top section */}
                <div className="p-6 flex justify-between items-start relative z-10">
                  <div>
                    <div
                      className={`inline-flex mb-4 bg-gradient-to-r ${service.color} bg-clip-text relative`}
                    >
                      <h3 className="text-2xl md:text-3xl font-bold text-transparent tracking-tight">
                        {service.title}
                      </h3>
                      <div
                        className={`absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-500 ease-out`}
                      ></div>
                    </div>
                    <p className="text-gray-300 leading-relaxed pr-4">
                      {service.description}
                    </p>
                  </div>

                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center border border-white/10 bg-black/30 group-hover:border-white/20 transition-all duration-300`}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Features section */}
                <div className="px-6 py-4 flex-grow">
                  <div className="grid grid-cols-1 gap-3">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-500 ease-out"
                        style={{ transitionDelay: `${index * 50}ms` }}
                      >
                        <div
                          className={`h-px w-5 bg-gradient-to-r ${service.color} opacity-70 group-hover:w-8 transition-all duration-300`}
                        ></div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle indicator that card is clickable */}
                <div className="absolute bottom-4 right-4">
                  <div
                    className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-white/40 flex items-center gap-1`}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bottom Section: Contact CTA */}
      <section className="relative z-10 pb-16 md:pb-24 pt-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-[#0A0A0A]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.05] group p-8 md:p-10 max-w-6xl mx-auto relative shadow-xl shadow-black/20 hover:scale-[1.01] transition-all duration-300"
          >
            {/* Glowing accent in corner */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-20 bg-gradient-to-r from-primary to-blue-400 -z-0 group-hover:opacity-30 transition-opacity duration-700"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="mb-12">
                {/* Enhanced Top Accent */}
                <div className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
                  <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-primary"></div>
                  <span className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 text-primary font-light tracking-wider text-xs sm:text-sm uppercase border border-white/10 shadow-lg shadow-primary/10">
                    Professional Services
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
                  <div className="flex flex-col items-center justify-center gap-1 md:gap-2 relative">
                    {/* Word 1: "Ready" */}
                    <span className="text-2xl md:text-3xl lg:text-3xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                      Ready to
                    </span>

                    {/* Word 2: "Transform" with special treatment */}
                    <div className="relative group my-1 md:my-2">
                      <span className="relative">
                        {/* 3D Depth Shadow */}
                        <span className="absolute -inset-1 text-4xl md:text-5xl lg:text-7xl font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-blue-600/30 blur-[2px] transform translate-y-[0.15em] translate-x-[0.05em] select-none">
                          Transform
                        </span>

                        {/* Main text with animated gradient */}
                        <span className="text-3xl md:text-4xl lg:text-5xl font-light font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary bg-[length:200%_auto] animate-gradient-x relative inline-block">
                          Transform
                        </span>

                        {/* Enhanced underline with animated glow */}
                        <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/70 via-blue-400/70 to-primary/70 rounded-full transform origin-left group-hover:scale-x-110 transition-transform duration-500"></span>
                        <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-blue-400 to-primary rounded-full opacity-70 blur-[2px] animate-pulse-slow"></span>
                      </span>
                    </div>

                    {/* Word 3: "Your Business?" */}
                    <span className="text-2xl md:text-3xl lg:text-3xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                      Your Business?
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-8 relative font-light">
                  Schedule a consultation with our experts and discover how our
                  digital solutions can help you achieve your business goals.
                </p>
              </div>

              <div className="w-full max-w-md space-y-4">
                <Link
                  href="#contact"
                  className="w-full px-8 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl transition-all duration-300 flex items-center justify-between shadow-lg shadow-primary/20 hover:translate-y-[-2px] group/btn"
                >
                  <span className="text-base">Schedule a Consultation</span>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transform group-hover/btn:translate-0.5 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>

                <Link
                  href="#portfolio"
                  className="w-full px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all duration-300 flex items-center justify-between hover:border-white/20 hover:translate-y-[-2px] group/btn"
                >
                  <span className="text-base">View Our Portfolio</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transform group-hover/btn:translate-0.5 transition-transform duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>

              {/* Features section */}
              <div className="mt-10 w-full max-w-md">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Expert Consultation",
                    "Custom Solutions",
                    "Agile Development",
                    "Ongoing Support",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 group-hover:translate-x-1 transition-transform duration-500 ease-out"
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <div className="h-px w-5 bg-gradient-to-r from-primary to-blue-400 opacity-70 group-hover:w-8 transition-all duration-300"></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
