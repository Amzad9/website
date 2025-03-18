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
        alt: "Project 1",
        title: "Mobile App Design",
        description: "UI/UX design for a fitness tracking application",
        url : 'https://www.figma.com/design/18EsoTdBNiupd8YqHtu1rn/Mizaan?node-id=0-1&p=f&t=nWWwFNjxeSsMFCP7-0'
      },
      {
        id: 2,
        src: "/p2.png",
        alt: "Project 2",
        title: "E-commerce Website",
        description: "Full-stack development for an online retail platform",
        url: 'https://www.figma.com/design/yrwieRkdbTcBMFSoQNgxJz/Referral-Labs?node-id=12-2&p=f&t=l5Lldb0z4ivtTY8V-0'
      },
      {
        id: 4,
        src: "/p5.png",
        alt: "Project 4",
        title: "Dashboard Interface",
        description: "Analytics dashboard with data visualization",
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
      className="relative bg-gray-900 rounded-xl overflow-hidden shadow-lg will-change-transform"
      style={{ transformPerspective: 1000 }}
    >
        <Link href={project.url} target="_blank">
        <motion.img
          src={project.src}
          alt={project.alt}
          variants={imageVariants}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </Link>
    </motion.div>
  );

  return (
    <section id="showcase" className="relative z-20 p-6 py-20 text-white">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-7xl relative z-10 font-semibold mb-4 font-inter">
            Showcase of <span className="text-primary italic">Innovation</span>{" "}
          </h2>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A curated showcase of my creative expertise and professional projects, demonstrating innovation, precision, and impact-driven design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectItem key={project.id} project={project} index={index} />
          ))}
        </div>
      </motion.div>
     <div className="text-center mt-10">
 <Link href='/showcase' legacyBehavior>
        <a className="text-white font-poppins border rounded-full border-gray-600 px-8 py-3 inline-block">Browse Projects</a>
      </Link>
</div>
     
    </section>
  );
};

export default React.memo(Portfolio);
