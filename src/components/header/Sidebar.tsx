import Link from "next/link";
import { useEffect } from "react"; // Added useEffect for overlay click handling
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({ isOpen, setIsOpen }) {
  const handleClose = () => {
    setIsOpen(false);
  };

  // Animation variants for the sidebar (smooth transition instead of spring)
  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
    },
  };

  const NavData = [
    {
      name: "Home",
      url: "#home",
    },
    {
      name: "About Us",
      url: "#about",
    },
    {
      name: "Service",
      url: "#service",
    },
    {
      name: "Showcase",
      url: "#showcase",
    },
  ];

  // Animation variants for navigation menu items (smooth transition)
  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Staggered delay for each item
        type: "tween", // Smooth transition instead of spring
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
  };

  // Handle outside clicks to close the sidebar
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen) {
        const sidebar = document.querySelector(".sidebar-motion");
        if (sidebar && !sidebar.contains(e.target)) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* Overlay for outside clicks */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-30"
            onClick={handleClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar with Framer Motion Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed rounded-l-3xl top-0 right-0 h-screen w-[400px] bg-black text-white p-4 shadow-lg z-40 sidebar-motion"
          >
            {/* Navigation Menu with Animation and Hover Underline */}
            <nav className="space-y-3 mt-10 pb-10 border-b border-gray-800">
              {NavData.map((item, index) => (
                <motion.div
                  key={item}
                  custom={index} // Pass index for staggered animation
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  <Link
                    href={`${item.url}`}
                    onClick={handleClose}
                    className="block px-4 text-3xl font-semibold text-right py-2 rounded transition"
                  >
                    <motion.span
                      whileHover={{
                        // scale: 1.05, // Slight scale on hover for interactivity
                        textDecoration: "underline", // Underline on hover
                      }}
                      transition={{
                        type: "tween",
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="inline-block hover:text-primary"
                    >
                      {item.name}
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
