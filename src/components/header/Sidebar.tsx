import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Sidebar({ isOpen, setIsOpen }) {
  //   const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  // Animation variants for the sidebar
  const sidebarVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
    closed: {
      x: "100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    },
  };

  return (
    <>
      {/* Sidebar with Framer Motion Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed top-0 right-0 h-screen w-64 bg-white text-black p-4 shadow-lg z-40"
          >
            {/* Start a Project Button (Top Right, Closeable) */}
            <div className="flex justify-end mb-6">
              <button
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-300 transition flex items-center"
                onClick={() => handleClose()} // Close sidebar when clicked
              >
                Start a Project
                <span className="ml-2 text-xl">×</span>
              </button>
            </div>

            {/* Navigation Menu */}
            <nav className="space-y-4">
              {[
                "Home",
                "About us",
                "Services",
                "Technology",
                "Team",
                "Clients",
              ].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => handleClose()}
                  className="block px-4 py-2 hover:bg-gray-500 rounded transition"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
