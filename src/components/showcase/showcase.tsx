import React, { useMemo, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from 'next/link';

interface Project {
  id: number;
  src: string;
  alt: string;
  category: string;
  url: string;
}

const ShowCase: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const projects: Project[] = useMemo(
    () => [
      { id: 1, src: "/p1.png", alt: "Project 1", category: "UI/UX",url : 'https://www.figma.com/design/18EsoTdBNiupd8YqHtu1rn/Mizaan?node-id=0-1&p=f&t=nWWwFNjxeSsMFCP7-0' },
      { id: 2, src: "/p2.jpeg", alt: "Project 2", category: "UI/UX", url: 'https://www.figma.com/design/yrwieRkdbTcBMFSoQNgxJz/Referral-Labs?node-id=12-2&p=f&t=l5Lldb0z4ivtTY8V-0' },
      { id: 3, src: "/p5.jpeg", alt: "Project 3", category: "Web", url: 'https://www.figma.com/design/eS6sjVE0zUGVAHamxB5MyS/Untitled?node-id=0-1&p=f&t=vyLjEkfMgqqTAZYZ-0' },
      { id: 4, src: "/p3.jpeg", alt: "Project 4", category: "UI/UX", url: 'https://www.figma.com/design/nHmjOBQpL5V64wv9Kx7LRs/Tharkarre?node-id=0-1&p=f&t=8QPgzQawja3U3U71-0' }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring" } },
  };

  return (
    <><section id="showcase" className="pb-20 pt-40 px-5 bg-black">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl md:text-6xl text-white font-semibold mb-4 font-poppins">
            Design & Code That Lines Up Your Business Growth
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl font-semibold mx-auto">
            Explore Our Latest Project Highlights
          </p>
        </motion.div>

      </motion.div>
    </section>
    <section className=" py-12">
     <div className="md:container px-5">
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          variants={itemVariants}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-8 py-2 border-2 border-black rounded-full font-medium transition-all ${selectedCategory === category
                  ? "bg-black text-white border-primary"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-300"}`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Link href={project.url} key={project.id} target="_blank">
              <motion.div
                variants={itemVariants}
                className="bg-gray-900 rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src={project.src}
                  alt={project.alt}
                  className="w-full h-full object-cover"
                  layout="responsive"
                  width={500}
                  height={500} />
              </motion.div>
            </Link>
          ))}
        </div>
</div>
      </section></>
  );
};

export default React.memo(ShowCase);