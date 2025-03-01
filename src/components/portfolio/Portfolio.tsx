import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const projects = [
    { 
      id: 1, 
      src: '/p1.png', 
      alt: 'Project 1', 
      title: 'Mobile App Design',
      description: 'UI/UX design for a fitness tracking application'
    },
    { 
      id: 2, 
      src: '/p2.png', 
      alt: 'Project 2', 
      title: 'E-commerce Website',
      description: 'Full-stack development for an online retail platform'
    },
    { 
      id: 3, 
      src: '/p3.png', 
      alt: 'Project 3', 
      title: 'Brand Identity',
      description: 'Complete rebrand for a tech startup'
    },
    { 
      id: 4, 
      src: '/p5.png', 
      alt: 'Project 4', 
      title: 'Dashboard Interface',
      description: 'Analytics dashboard with data visualization'
    },
    { 
      id: 5, 
      src: '/p4.png', 
      alt: 'Project 5', 
      title: 'Social Media Campaign',
      description: 'Digital marketing assets for product launch'
    },
    { 
      id: 6, 
      src: '/p2.png', 
      alt: 'Project 6', 
      title: 'Mobile Game UI',
      description: 'Interface design for a puzzle game'
    }
  ];

  // Staggered container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  // Text animations
  const titleVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Scroll animation for project items
  const ProjectItem = ({ project, index }: { project: any, index: number }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: false, // Allow it to trigger on both enter and exit
      threshold: 0.1,
      rootMargin: "-100px 0px"
    });

    useEffect(() => {
      if (inView) {
        controls.start({
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 80,
            delay: index * 0.1
          }
        });
      } else {
        controls.start({
          y: 100,
          opacity: 0,
          transition: {
            type: "spring",
            damping: 15,
            stiffness: 80,
            delay: index * 0.1
          }
        });
      }
    }, [controls, inView, index]);

    return (
      <motion.div
        ref={ref}
        initial={{ y: 100, opacity: 0 }}
        animate={controls}
        className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg"
      >
        <div className="overflow-hidden h-96">
          <motion.img
            src={project.src}
            alt={project.alt}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2, filter: "blur(8px)" }}
            animate={inView ? { 
              scale: 1, 
              filter: "blur(0px)",
              transition: { 
                duration: 0.8,
                delay: index * 0.1 + 0.2
              }
            } : {}}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <div className="relative z-20 p-6 py-20 text-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2 
            variants={titleVariants}
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
          >
            Portfolio
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-purple-600 mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Showcasing my creative work and professional projects
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
