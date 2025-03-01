import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const AboutUs = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const controls = useAnimation();
  const radialControls = useAnimation();

  const keywordPairs = [
    { original: "designers", replacement: "creators" },
    { original: "developers", replacement: "coders" },
    { original: "web", replacement: "digital" },
    { original: "app design", replacement: "UI crafting" },
    { original: "development", replacement: "building" },
    { original: "stunning design", replacement: "bold visuals" },
    { original: "digital experiences", replacement: "online journeys" },
    { original: "tailor-made web and app solutions", replacement: "custom platforms" },
    { original: "perform flawlessly", replacement: "run smoothly" },
    { original: "user-centric designs", replacement: "people-first layouts" },
    { original: "optimize performance", replacement: "boost speed" },
    { original: "website, a mobile app", replacement: "site or app" },
    { original: "design and develop", replacement: "craft and code" },
  ];

  const keywordVariants = {
    initial: { opacity: 0, scale: 0.9, boxShadow: "0 0 0 rgba(255, 255, 255, 0)" },
    shimmer: (i) => ({
      opacity: 1,
      scale: 1,
      boxShadow: [
        "0 0 0 rgba(255, 255, 255, 0)",
        "0 0 20px rgba(255, 255, 255, 0.8)",
        "0 0 5px rgba(255, 255, 255, 0.3)",
      ],
      transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
    flip: (i) => ({
      rotateX: [0, 90, 0],
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      boxShadow: [
        "0 0 5px rgba(255, 255, 255, 0.3)",
        "0 0 15px rgba(255, 255, 255, 0.8)",
        "0 0 5px rgba(255, 255, 255, 0.3)",
      ],
      transition: { delay: i * 0.1, duration: 0.8, ease: "easeInOut" },
    }),
    hover: {
      scale: 1.1,
      color: "#ff4d4d",
      boxShadow: "0 0 10px rgba(255, 77, 77, 0.5)",
      transition: { duration: 0.3 },
    },
  };

  const radialVariants = {
    hidden: { scale: 0, opacity: 1 },
    visible: {
      scale: 50,
      opacity: [1, 0.8, 0],
      transition: { duration: 1.5, ease: "easeOut", opacity: { delay: 1, duration: 0.5 } },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, delay: 1.5, ease: "easeOut" } },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delay: 1.5 } },
  };

  const letterVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  const [isFlipped, setIsFlipped] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  // Initialize tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setIsLoaded(true);
    }).catch((error) => {
      console.error("Error initializing tsParticles:", error);
    });
  }, []);

  const particlesOptions = {
    background: { color: { value: "#000000" } },
    fpsLimit: 60,
    particles: {
      number: { value: 100, density: { enable: true, area: 1000 } },
      color: { value: ["#ffffff", "#10b981", "#14b8a6"] },
      shape: { type: "circle" },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: { enable: true, speed: 1, sync: false },
      },
      size: {
        value: { min: 1, max: 3 },
        animation: { enable: true, speed: 4, sync: false },
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none" as const,
        random: true,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" } },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    detectRetina: true,
  };

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout | undefined;
    if (inView) {
      radialControls.start("visible");
      controls.start("shimmer");
      setTimeout(() => {
        controls.start("flip");
        setIsFlipped(true);
      }, 1000);
      interval = setInterval(() => {
        controls.start("flip");
        setIsFlipped((prev) => !prev);
      }, 5000);
    } else {
      controls.stop();
      radialControls.start("hidden");
      controls.start("initial");
      setIsFlipped(false);
    }
    return () => clearInterval(interval);
  }, [inView, controls, radialControls]);

  return (
    <section className="py-16 bg-black h-screen relative overflow-hidden flex items-center">
      {isLoaded && (
        <Particles
          id="tsparticles"
          options={particlesOptions}
          className="absolute inset-0 z-0"
        />
      )}
<motion.div
  className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-r from-[#0a0a0a] via-[#1f1f1f] to-[#3a3a3a] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-20 shadow-lg shadow-[#00ffff44]"
  variants={radialVariants}
  initial="hidden"
  animate={radialControls}
/>

      <motion.section
        className="relative z-10 mx-auto"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="container md:container mx-auto">
          <div className="flex justify-center">
            <div className="w-full md:w-[80%] mx-auto">
              <motion.h2
                className="font-inter text-6xl font-bold mb-4 text-center text-white"
                variants={titleVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                {"Hi. We're weblibron".split("").map((char, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {char}
                  </motion.span>
                ))}
              </motion.h2>
              <p className="text-lg font-poppins mb-3 text-center text-gray-300">
                A team of passionate{" "}
                <motion.span
                  className="text-white cursor-pointer inline-block relative"
                  custom={0}
                  variants={keywordVariants}
                  initial="initial"
                  animate={controls}
                  whileHover="hover"
                >
                  {isFlipped ? keywordPairs[0].replacement : keywordPairs[0].original}
                </motion.span>{" "}
                and{" "}
                <motion.span
                  className="text-white cursor-pointer inline-block relative"
                  custom={1}
                  variants={keywordVariants}
                  initial="initial"
                  animate={controls}
                  whileHover="hover"
                >
                  {isFlipped ? keywordPairs[1].replacement : keywordPairs[1].original}
                </motion.span>{" "}
                specializing in{" "}
                <motion.span
                  className="text-white cursor-pointer inline-block relative"
                  custom={2}
                  variants={keywordVariants}
                  initial="initial"
                  animate={controls}
                  whileHover="hover"
                >
                  {isFlipped ? keywordPairs[2].replacement : keywordPairs[2].original}
                </motion.span>{" "}
                and{" "}
                <motion.span
                  className="text-white cursor-pointer inline-block relative"
                  custom={3}
                  variants={keywordVariants}
                  initial="initial"
                  animate={controls}
                  whileHover="hover"
                >
                  {isFlipped ? keywordPairs[3].replacement : keywordPairs[3].original}
                </motion.span>{" "}
                and{" "}
                <motion.span
                  className="text-white cursor-pointer inline-block relative"
                  custom={4}
                  variants={keywordVariants}
                  initial="initial"
                  animate={controls}
                  whileHover="hover"
                >
                  {isFlipped ? keywordPairs[4].replacement : keywordPairs[4].original}
                </motion.span>. We believe that combining{" "}
                <motion.span
                  className="text-white cursor-pointer inline-block relative"
                  custom={5}
                  variants={keywordVariants}
                  initial="initial"
                  animate={controls}
                  whileHover="hover"
                >
                  {isFlipped ? keywordPairs[5].replacement : keywordPairs[5].original}
                </motion.span>{" "}
                with robust development is the foundation of exceptional{" "}
                <motion.span
                  className="text-white cursor-pointer inline-block relative"
                  custom={6}
                  variants={keywordVariants}
                  initial="initial"
                  animate={controls}
                  whileHover="hover"
                >
                  {isFlipped ? keywordPairs[6].replacement : keywordPairs[6].original}
                </motion.span>.
              </p>
              <p className="text-lg font-poppins text-center text-gray-300">
                Our mission is to empower businesses with{" "}
                <motion.span
                  className="text-white cursor-pointer inline-block relative"
                  custom={7}
                  variants={keywordVariants}
                  initial="initial"
                  animate={controls}
                  whileHover="hover"
                >
                  {isFlipped ? keywordPairs[7].replacement : keywordPairs[7].original}
                </motion.span>{" "}
                that stand out and{" "}
                <motion.span
                  className="text-white cursor-pointer inline-block relative"
                  custom={8}
                  variants={keywordVariants}
                  initial="initial"
                  animate={controls}
                  whileHover="hover"
                >
                  {isFlipped ? keywordPairs[8].replacement : keywordPairs[8].original}
                </motion.span>. We focus on crafting{" "}
                <motion.span
                  className="text-white cursor-pointer inline-block relative"
                  custom={9}
                  variants={keywordVariants}
                  initial="initial"
                  animate={controls}
                  whileHover="hover"
                >
                  {isFlipped ? keywordPairs[9].replacement : keywordPairs[9].original}
                </motion.span>{" "}
                and seamless functionality to boost engagement,{" "}
                <motion.span
                  className="text-white cursor-pointer inline-block relative"
                  custom={10}
                  variants={keywordVariants}
                  initial="initial"
                  animate={controls}
                  whileHover="hover"
                >
                  {isFlipped ? keywordPairs[10].replacement : keywordPairs[10].original}
                </motion.span>, and elevate your brand. Whether you need a{" "}
                <motion.span
                  className="text-white cursor-pointer inline-block relative"
                  custom={11}
                  variants={keywordVariants}
                  initial="initial"
                  animate={controls}
                  whileHover="hover"
                >
                  {isFlipped ? keywordPairs[11].replacement : keywordPairs[11].original}
                </motion.span>, or a{" "}
                <span className="text-gray-300">full digital transformation</span>,{" "}
                <span className="text-gray-300">weblibron</span> is here to{" "}
                <motion.span
                  className="text-white cursor-pointer inline-block relative"
                  custom={12}
                  variants={keywordVariants}
                  initial="initial"
                  animate={controls}
                  whileHover="hover"
                >
                  {isFlipped ? keywordPairs[12].replacement : keywordPairs[12].original}
                </motion.span>{" "}
                your vision into reality.
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </section>
  );
};

export default AboutUs;