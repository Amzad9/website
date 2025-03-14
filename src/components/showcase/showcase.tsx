import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Project {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const ShowCase: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const projects: Project[] = useMemo(
    () => [
      { id: 1, src: "/p1.png", alt: "Project 1", category: "UI/UX" },
      { id: 2, src: "/p2.jpeg", alt: "Project 2", category: "UI/UX" },
      { id: 3, src: "/p3.png", alt: "Project 3", category: "Web Development" },
      { id: 4, src: "/p3.jpeg", alt: "Project 4", category: "UI/UX" },
      { id: 5, src: "/p5.jpeg", alt: "Project 5", category: "Web Development" }],
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" } },
  };

  return (
    <section id="showcase" className="py-20">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-6xl text-black font-semibold mb-4 font-poppins">
            Design & Code That Lines Up Your Business Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl font-semibold mx-auto">
            Explore Our Latest Project Highlights
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 border-2 border-black rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? "bg-black text-white border-primary"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
            >
              <Image
                src={project.src}
                alt={project.alt}
                className="w-full h-full object-cover"
                layout="responsive"
                width={500}
                height={500}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default React.memo(ShowCase);