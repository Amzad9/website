import React, { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from 'next/link';
import { ExternalLink } from "lucide-react";

// Define project interface
interface Project {
  url: string;
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  technologies?: string[];
}

const Portfolio: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects: Project[] = useMemo(
    () => [
      {
        id: 1,
        src: "/p1.png",
        alt: "Mobile App Design Interface",
        title: "Mobile App Design",
        description: "Modern fitness tracking app with intuitive user interface and seamless experience",
        url: 'https://www.figma.com/design/18EsoTdBNiupd8YqHtu1rn/Mizaan?node-id=0-1&p=f&t=nWWwFNjxeSsMFCP7-0',
        technologies: ['React Native', 'Typescript', 'Figma', 'Node Js', 'MongoDB']
      },
      {
        id: 2,
        src: "/p5.jpeg",
        alt: "Website Design Interface",
        title: "Website Design",
        description: "Professional website design with modern aesthetics and responsive layout",
        url: 'https://www.figma.com/design/eS6sjVE0zUGVAHamxB5MyS/Untitled?node-id=0-1&p=f&t=vyLjEkfMgqqTAZYZ-0',
        technologies: ['Figma', 'HTML/CSS', 'Next Js', 'Tailwind CSS']
      },
      {
        id: 3,
        src: "/p2.png",
        alt: "Hospital Mobile App Design",
        title: "Mobile App Design Hospital",
        description: "Healthcare management app focusing on patient care and medical services",
        url: 'https://www.figma.com/design/yrwieRkdbTcBMFSoQNgxJz/Referral-Labs?node-id=12-2&p=f&t=l5Lldb0z4ivtTY8V-0',
        technologies: ['React Native', 'MongoDB', 'Node.js','Typescript']
      },
      {
        id: 4,
        src: "/p5.png",
        alt: "Grocity Mobile App Design",
        title: "Grocity Mobile App Design",
        description: "Grocery shopping app with seamless ordering and delivery experience",
        url: 'https://www.figma.com/design/nHmjOBQpL5V64wv9Kx7LRs/Tharkarre?node-id=0-1&p=f&t=8QPgzQawja3U3U71-0',
        technologies: ['React Native', 'MongoDB', 'Node.js','Typescript']
      },
    ],
    []
  );

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 100,
        mass: 0.5,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  // Animation variants for the heading text (like in Contact component)
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

  interface ProjectItemProps {
    project: Project;
    index: number;
  }

  const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => (
    <motion.div
      variants={itemVariants}
      className="relative rounded-xl overflow-hidden shadow-xl will-change-transform group h-full"
      style={{ transformPerspective: 1000 }}
      role="article"
      aria-labelledby={`project-title-${project.id}`}
    >
      <Link 
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full bg-gradient-to-b from-gray-900 to-black"
      >
        <motion.div className="relative h-64 overflow-hidden">
          <motion.img
            src={project.src}
            alt={project.alt}
            variants={imageVariants}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            decoding="async"
            width="600"
            height="400"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
        </motion.div>
        
        {/* Content */}
        <div className="p-6 relative bg-gradient-to-b from-gray-900 to-black border-t border-white/5">
          {/* Technologies tags */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="text-xs px-2 py-1 rounded-full bg-white/5 text-gray-300 border border-white/10 font-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          {/* Title */}
          <h3 
            id={`project-title-${project.id}`} 
            className="text-2xl font-light mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-blue-500 transition-all duration-300"
          >
            {project.title}
          </h3>
          
          {/* Description */}
          <p className="text-base text-gray-300 mb-5">
            {project.description}
          </p>
          
          {/* View Button */}
          <div className="flex items-center justify-between mt-auto">
            <span className="text-primary group-hover:text-blue-400 transition-colors duration-300 font-light flex items-center gap-1">
              View Project 
              <ExternalLink className="w-4 h-4 inline-block transform group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            
            {/* Visual indicator */}
            <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white/5 group-hover:bg-primary/20 transition-colors duration-300">
              <div className="h-2 w-2 rounded-full bg-primary transform scale-100 group-hover:scale-150 transition-transform duration-300"></div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <section 
      id="showcase" 
      className="min-h-screen bg-black relative z-20 py-5 text-white overflow-hidden"
      aria-label="Portfolio Showcase"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[150px]"></div>
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10 px-6"
      >
        {/* Enhanced Heading Section like in Contact component */}
        <div className="text-center mb-12 md:mb-20 relative">
          {/* Enhanced Top Accent */}
          <div className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="h-[1px] w-8 sm:w-16 bg-gradient-to-r from-transparent to-primary"></div>
            <span className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-white/5 text-primary font-light tracking-wider text-xs sm:text-sm uppercase border border-white/10 shadow-lg shadow-primary/10">
              Our Portfolio
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
            <div className="flex flex-row flex-wrap md:flex-row items-center justify-center gap-3 md:gap-4 relative">
              {/* Word 1: "Showcase" */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={headingVariants}
                className="relative group"
              >
                <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                  Showcase
                  {/* Bottom shine effect */}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                </span>
              </motion.div>
              
              {/* Word 2: "of" */}
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={headingVariants}
                className="relative group"
              >
                <span className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-100 font-poppins tracking-tight relative inline-block">
                  of
                  {/* Bottom shine effect */}
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></span>
                </span>
              </motion.div>
              
              {/* Word 3: "Innovation" with special treatment */}
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={headingVariants}
                className="relative group"
              >
                <span className="relative">
                  {/* 3D Depth Shadow */}
                  <span className="absolute -inset-1 text-4xl md:text-6xl lg:text-7xl font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-primary/30 to-blue-600/30 blur-[2px] italic transform translate-y-[0.15em] translate-x-[0.05em] select-none">
                    Innovation
                  </span>
                  
                  {/* Main text with animated gradient */}
                  <span className="text-4xl md:text-6xl lg:text-7xl font-light font-poppins tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary italic bg-[length:200%_auto] animate-gradient-x relative inline-block">
                    Innovation
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
            A curated showcase of our creative expertise and professional projects
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* First row: 3 portfolios */}
          {projects.slice(0, 3).map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Second row: 1 portfolio + browse button */}
          <div className="md:col-span-1">
            {projects.slice(3, 4).map((project, index) => (
              <ProjectItem key={project.id} project={project} index={index + 3} />
            ))}
          </div>
          
          {/* Attractive Browse Button Card with improved design */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden shadow-xl will-change-transform group md:col-span-2"
            style={{ transformPerspective: 1000 }}
          >
            <Link 
              href='/showcase'
              className="h-full w-full flex flex-col items-center justify-center py-16 md:px-16 px-5 relative"
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-blue-500/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
              <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center text-center space-y-8">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-5xl font-light text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 font-poppins">
                  Discover Our Full Portfolio
                </h3>
                <p className="text-2xl font-light text-gray-300 max-w-md">
                  Explore our complete collection of innovative designs and successful projects
                </p>
                <span className="mt-6 px-10 py-2 rounded-full border-2 border-white/10 bg-black/40 backdrop-blur-sm text-white hover:text-primary hover:border-primary transition-all duration-300 font-light flex items-center gap-2 group-hover:border-primary/50">
                  View All Projects
                  <ExternalLink className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

Portfolio.displayName = 'Portfolio';

export default React.memo(Portfolio);
