import Link from "next/link";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

// Define the interface for the Sidebar props
interface SidebarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const handleClose = () => {
    setIsOpen(false);
  };

  // Animation variants for the sidebar
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
    {
      name: "Contact",
      url: "#contact",
    },
  ];

  // Animation variants for navigation menu items
  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.07,
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
  };

  // Handle outside clicks to close the sidebar
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isOpen) {
        const sidebar = document.querySelector(".sidebar-motion");
        if (sidebar && !sidebar.contains(e.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
      // Add overflow hidden to body when sidebar is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "";
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      {/* Overlay for outside clicks */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-40"
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
            className="fixed rounded-l-3xl top-0 right-0 h-screen w-[320px] bg-gradient-to-b from-gray-900 to-black text-white p-8 shadow-2xl z-50 sidebar-motion overflow-y-auto"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-8">
              <button 
                onClick={handleClose}
                className="p-2 rounded-full bg-black/50 hover:bg-primary/80 transition-colors duration-300 border border-white/10"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" color="#ffffff" />
              </button>
            </div>
            
            {/* Navigation Menu with Animation and Hover Effects */}
            <nav className="space-y-6 mt-10 pb-10 border-b border-gray-800/30">
              {NavData.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  <Link
                    href={item.url}
                    onClick={handleClose}
                    className="group block text-right py-2"
                  >
                    <span className="relative inline-block text-2xl font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                      {item.name}
                      <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-l from-primary to-blue-500 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="mt-10 text-right"
            >
              <h3 className="text-lg font-medium text-white mb-4">Get in touch</h3>
              <p className="text-gray-400 mb-2">hello@weblibron.com</p>
              <p className="text-gray-400">+91 8178614811</p>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="mt-10 flex justify-end gap-4"
            >
              <a 
                href="#" 
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-800/60 hover:bg-primary/80 transition-colors duration-300 border border-white/5"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}