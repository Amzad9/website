import React, { useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from 'next/link';

// Define project interface
interface Project {
  url: string;
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const Portfolio: React.FC = () => {
  // const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const projects: Project[] = useMemo(
    () => [
      {
        id: 1,
        src: "/p1.png",
        alt: "Mobile App Design Interface",
        title: "Mobile App Design",
        description: "Modern fitness tracking app with intuitive user interface and seamless experience",
        url: 'https://www.figma.com/design/18EsoTdBNiupd8YqHtu1rn/Mizaan?node-id=0-1&p=f&t=nWWwFNjxeSsMFCP7-0'
      },
      {
        id: 2,
        src: "/p5.jpeg",
        alt: "Website Design Interface",
        title: "Website Design",
        description: "Professional website design with modern aesthetics and responsive layout",
        url: 'https://www.figma.com/design/eS6sjVE0zUGVAHamxB5MyS/Untitled?node-id=0-1&p=f&t=vyLjEkfMgqqTAZYZ-0'
      },
      {
        id: 3,
        src: "/p2.png",
        alt: "Hospital Mobile App Design",
        title: "Mobile App Design Hospital",
        description: "Healthcare management app focusing on patient care and medical services",
        url: 'https://www.figma.com/design/yrwieRkdbTcBMFSoQNgxJz/Referral-Labs?node-id=12-2&p=f&t=l5Lldb0z4ivtTY8V-0'
      },
      {
        id: 4,
        src: "/p5.png",
        alt: "Grocity Mobile App Design",
        title: "Grocity Mobile App Design",
        description: "Grocery shopping app with seamless ordering and delivery experience",
        url: 'https://www.figma.com/design/nHmjOBQpL5V64wv9Kx7LRs/Tharkarre?node-id=0-1&p=f&t=8QPgzQawja3U3U71-0'
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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
        mass: 0.5,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  interface ProjectItemProps {
    project: Project;
    index: number;
  }

  const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => (
    <motion.div
      variants={itemVariants}
      className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg will-change-transform group"
      style={{ transformPerspective: 1000 }}
      role="article"
      aria-labelledby={`project-title-${project.id}`}
    >
      <Link 
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
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
        
        {/* Content overlay - Hidden by default, visible on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/95 to-gray-900/90 opacity-0 group-hover:opacity-100 transition-all duration-500">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-0 group-hover:opacity-5"></div>
          
          {/* Gradient accents */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
          </div>

          {/* Content Container */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
            {/* Link Icon */}
            <div className="absolute top-4 right-4 bg-white/10 p-2 rounded-full backdrop-blur-md transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-200">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
            
            {/* Title */}
            <h3 
              id={`project-title-${project.id}`} 
              className="text-3xl font-bold mb-3 text-white font-poppins transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
            >
              {project.title}
            </h3>
            
            {/* Description */}
            <p className="text-base text-gray-300 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              {project.description}
            </p>
            
            {/* Button */}
            <div className="mt-6 transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
              <span className="relative inline-flex group/button">
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary via-blue-500 to-primary blur-md opacity-75 group-hover/button:opacity-100 animate-gradient-x"></span>
                <span className="relative flex items-center gap-2 px-6 py-3 bg-black/50 rounded-xl backdrop-blur-sm border border-white/10 group-hover/button:border-white/20 transition-all duration-300">
                  <span className="text-white font-medium">View Project</span>
                  <svg 
                    className="w-5 h-5 text-white transform group-hover/button:translate-x-1 transition-transform duration-300"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </span>
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );

  return (
    <section 
      id="showcase" 
      className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative z-20 p-6 pb-10 text-white"
      aria-label="Portfolio Showcase"
    >
      {/* Adding the pattern and abstract shapes */}
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 animate-pulse"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Enhanced Heading Section */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-5xl md:text-6xl relative z-10 font-light mb-6 font-poppins">
            Showcase of{" "}
            <span className="relative">
              <span className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-500 blur-lg opacity-50"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 italic">
                Innovation
              </span>
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-poppins animate-fade-in">
            A curated showcase of my creative expertise and professional projects, demonstrating innovation, precision, and impact-driven design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* First row: 3 portfolios */}
          {projects.slice(0, 3).map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Second row: 1 portfolio + browse button */}
          {projects.slice(3, 4).map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
          
          {/* Attractive Browse Button Card */}
          <motion.div
            variants={itemVariants}
            className="relative bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-xl overflow-hidden shadow-lg will-change-transform group"
            style={{ transformPerspective: 1000 }}
          >
            <Link 
              href='/showcase'
              className="h-full w-full flex flex-col items-center justify-center p-8 relative"
            >
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"></div>
              <div className="absolute top-10 left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              
              {/* Content */}
              <div className="relative z-10 flex flex-col items-center space-y-6">
                <div className="text-6xl mb-4">🎨</div>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500 font-poppins">
                  Discover More
                </h3>
                <p className="text-lg text-gray-300 text-center font-poppins">
                  Explore our complete portfolio of innovative designs
                </p>
                <span className="mt-6 px-8 py-3 border-2 border-primary rounded-full text-primary hover:bg-primary hover:text-white transform hover:scale-105 transition-all duration-300 font-poppins">
                  View All Projects
                </span>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
};

// Add display name for better debugging
Portfolio.displayName = 'Portfolio';

export default React.memo(Portfolio);
