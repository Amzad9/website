import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from 'next/link';
import { ArrowRight, Code2, Smartphone, Palette, Globe, Database, Shield, Zap, BookOpen, Server } from 'lucide-react';

interface Project {
  id: number;
  src: string;
  alt: string;
  category: string;
  url: string;
  description: string;
  tech: string[];
  gradientFrom: string;
  gradientTo: string;
  imagePosition: 'left' | 'right';
}

interface Skill {
  category: string;
  icon: React.ReactNode;
  skills: string[];
  gradientFrom: string;
  gradientTo: string;
  description?: string;
}

const ShowCase: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedSkillTab, setSelectedSkillTab] = useState<string>("Development");

  const projects: Project[] = useMemo(
    () => [
      { 
        id: 1, 
        src: "/p1.png", 
        alt: "Mizan Islamic App", 
        category: "App",
        url: '#',
        description: "Comprehensive Islamic application featuring prayer times (Azan), Islamic calendar, Qurbani management, and donation system with secure payment integration",
        tech: ["React Native", "Firebase", "Prayer Times API", "Payment Gateway", "Push Notifications"],
        gradientFrom: "from-purple-600",
        gradientTo: "to-purple-400",
        imagePosition: "left"
      },
      { 
        id: 2, 
        src: "/p2.jpeg", 
        alt: "Health & Wellness App", 
        category: "App", 
        url: '#',
        description: "Health tracking application with personalized workout plans, nutrition tracking, and real-time health monitoring features",
        tech: ["React Native", "Node.js", "MongoDB"],
        gradientFrom: "from-blue-600",
        gradientTo: "to-blue-400",
        imagePosition: "left"
      },
      { 
        id: 3, 
        src: "/p3.jpeg", 
        alt: "Tharkarre Grocery App", 
        category: "UI/UX", 
        url: '#',
        description: "E-commerce platform design with focus on user experience and conversion optimization",
        tech: ["Figma", "UI/UX", "User Research", "A/B Testing"],
        gradientFrom: "from-amber-500",
        gradientTo: "to-orange-400",
        imagePosition: "left"
      }
    ],
    []
  );

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [projects]
  );

  const filteredProjects = useMemo(
    () =>
      selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory),
    [selectedCategory, projects]
  );

  const skills: Skill[] = [
    {
      category: "Web",
      icon: <Globe className="w-6 h-6" />,
      skills: [
        "React",
        "Next.js",
        "Nuxt.js",
        "Vue.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "REST APIs"
      ],
      gradientFrom: "from-purple-600",
      gradientTo: "to-purple-400",
      description: "Modern web development with cutting-edge technologies"
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        "React Native",
        "TypeScript",
        "Redux",
        "Firebase",
        "Push Notifications",
        "Offline Support",
        "App Store",
        "Play Store"
      ],
      gradientFrom: "from-blue-600",
      gradientTo: "to-blue-400",
      description: "Cross-platform mobile development with modern technologies"
    },
    {
      category: "Backend & API",
      icon: <Server className="w-6 h-6" />,
      skills: [
        "Node.js",
        "Express",
        "MongoDB",
        "Prayer Times API",
        "Payment Gateway",
        "Cloud Functions",
        "RESTful APIs",
        "WebSocket"
      ],
      gradientFrom: "from-emerald-600",
      gradientTo: "to-emerald-400",
      description: "Robust backend infrastructure and third-party integrations"
    },
    {
      category: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        "Material Design",
        "Dark Mode",
        "Responsive Layout",
        "Custom Animations",
        "Accessibility",
        "User Testing",
        "Arabic RTL Support",
        "Gesture Controls"
      ],
      gradientFrom: "from-amber-500",
      gradientTo: "to-orange-400",
      description: "Modern and intuitive user interface design"
    },
    {
      category: "Security & Performance",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        "JWT Authentication",
        "Data Encryption",
        "Secure Payments",
        "App Performance",
        "Caching",
        "Lazy Loading",
        "Error Handling",
        "Analytics"
      ],
      gradientFrom: "from-rose-600",
      gradientTo: "to-rose-400",
      description: "Enterprise-grade security and optimization"
    }
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
      {/* Hero Banner Section */}
      <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/1.jpeg"
            alt="Portfolio Banner"
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
                  {/* Word 1: "Our" */}
                  <motion.div
                    custom={0}
                    initial="hidden"
                    animate="visible"
                    variants={headingVariants}
                    className="relative group"
                  >
                    <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                      Our
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                    </span>
                  </motion.div>
                  
                  {/* Word 2: "Portfolio" with special treatment */}
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
                        Portfolio
                      </span>
                      
                      {/* Main text with animated gradient */}
                      <span className="text-4xl md:text-6xl lg:text-7xl font-light font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary italic bg-[length:200%_auto] animate-gradient-x relative inline-block">
                        Portfolio
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
                Explore our collection of innovative projects showcasing our expertise in web development, mobile apps, and UI/UX design.
              </motion.p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link className="px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-xl transition-all duration-300 flex items-center gap-2 shadow-lg shadow-primary/20 hover:translate-y-[-2px]" href={'/contact'}>
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-xl border border-white/10 transition-all duration-300 flex items-center gap-2 hover:border-white/20 hover:translate-y-[-2px]" href='#projects'>
                  <span>View Projects</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div id="projects" className="space-y-16 py-20">
        {filteredProjects.map((project, index) => (
          <motion.section 
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Background Glow */}
            <div className={`absolute top-0 ${project.imagePosition === 'right' ? 'right-0' : 'left-0'} w-64 h-64 rounded-full blur-[100px] opacity-20 bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} -z-0 group-hover:opacity-40 transition-opacity duration-700`}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-[#0A0A0A]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.05] group hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                <div className="flex flex-col md:flex-row items-center justify-between p-8">
                  {project.imagePosition === 'left' ? (
                    <>
                      <div className="w-full md:w-1/2 text-center mb-8 md:mb-0">
                        <div className="relative h-[460px] w-full rounded-xl overflow-hidden bg-black/50 p-0 md:p-8">
                          <Image 
                            src={project.src} 
                            alt={project.alt} 
                            width={600}
                            height={460}
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 space-y-6 md:ps-5">
                        <div>
                          <h2 className={`text-4xl font-bold mb-2 relative inline-block group`}>
                            <span className={`relative bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} bg-clip-text text-transparent`}>
                              {project.alt}
                            </span>
                            <span className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
                          </h2>
                          <p className="text-gray-400 mb-6">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform duration-300 cursor-pointer">
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-full md:w-1/2 space-y-6 md:pe-5">
                        <div>
                          <h2 className={`text-4xl font-bold mb-2 relative inline-block group`}>
                            <span className={`relative bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} bg-clip-text text-transparent`}>
                              {project.alt}
                            </span>
                            <span className={`absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r ${project.gradientFrom} ${project.gradientTo} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
                          </h2>
                          <p className="text-gray-400 mb-6">{project.description}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform duration-300 cursor-pointer">
                          <span>View Project</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 text-center">
                        <div className="relative h-[460px] w-full rounded-xl overflow-hidden bg-black/50 p-0 md:p-8">
                          <Image 
                            src={project.src} 
                            alt={project.alt} 
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

      {/* Skills Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.8),rgba(0,0,0,1))]"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
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
                {/* Word 1: "Technologies" */}
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={headingVariants}
                  className="relative group"
                >
                  <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                    Technologies
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                  </span>
                </motion.div>
                
                {/* Word 2: "We Use" with special treatment */}
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
                      We Use
                    </span>
                    
                    {/* Main text with animated gradient */}
                    <span className="text-4xl md:text-6xl lg:text-7xl font-light font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary italic bg-[length:200%_auto] animate-gradient-x relative inline-block">
                      We Use
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
              Discover the cutting-edge technologies and tools that power our innovative solutions
            </motion.p>
          </motion.div>

          {/* Skills Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skills.map((skill, index) => (
              <motion.button
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedSkillTab(skill.category)}
                className={`group relative px-6 py-3 rounded-xl transition-all duration-300 ${
                  selectedSkillTab === skill.category
                    ? `bg-gradient-to-r ${skill.gradientFrom} ${skill.gradientTo} text-white shadow-lg shadow-${skill.gradientFrom.split('-')[1]}-500/25`
                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-800 hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="font-medium">{skill.category}</span>
                </div>
                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skill.gradientFrom} ${skill.gradientTo} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {skills
              .find(skill => skill.category === selectedSkillTab)
              ?.skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="group relative bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800/80 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${skills.find(s => s.category === selectedSkillTab)?.gradientFrom} ${skills.find(s => s.category === selectedSkillTab)?.gradientTo} flex items-center justify-center text-white`}>
                      {skill[0]}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                  {/* Hover Effect */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${skills.find(s => s.category === selectedSkillTab)?.gradientFrom} ${skills.find(s => s.category === selectedSkillTab)?.gradientTo} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </motion.div>
              ))}
          </motion.div>

          {/* Category Description */}
          {skills.find(skill => skill.category === selectedSkillTab)?.description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center text-gray-400 mt-8 max-w-2xl mx-auto"
            >
              {skills.find(skill => skill.category === selectedSkillTab)?.description}
            </motion.p>
          )}
        </div>
      </section>
    </div>
  );
};

export default React.memo(ShowCase);