import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({ isOpen, setIsOpen }: SidebarProps) {
  const handleClose = () => {
    setIsOpen(false);
  };
useEffect(() => {
  if (isOpen) {
    document.body.classList.add("overflow-hidden");
  } else {
    document.body.classList.remove("overflow-hidden");
  }
}, [isOpen]);
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
    { name: "Home", url: "#home" },
    { name: "About Us", url: "#about" },
    { name: "Service", url: "#service" },
    { name: "Showcase", url: "#showcase" },
  ];

  // Animation variants for navigation menu items
  const navItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "tween",
        duration: 0.3,
        ease: "easeInOut",
      },
    }),
  };

  return (
    <>
      {/* Overlay - Clicking outside should close the sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-30"
            onClick={handleClose} // This will close sidebar when overlay is clicked
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 right-0 h-screen w-[300px] bg-black text-white p-4 shadow-lg z-50 rounded-l-3xl sidebar-motion"
          >
            {/* Navigation Menu */}
            <nav className="space-y-3 mt-10 pb-10 border-b border-gray-800">
              {NavData.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={navItemVariants}
                >
                  <Link
                    href={item.url}
                    onClick={handleClose} // Close sidebar when clicking a menu item
                    className="block px-4 text-3xl font-semibold text-right py-2 rounded transition hover:text-primary"
                  >
                    {item.name}
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
