import React, { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Service', href: '#service' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle ESC key to close menu
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
      // Prevent scrolling when menu is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, setIsOpen]);

  return (
    <div
      className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-xl transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      id="mobile-menu"
    >
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-black/95 backdrop-blur-xl border-l border-white/10 p-6 transition-all duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        role="document"
      >
        <div className="flex justify-between items-center mb-8" role="navigation" aria-label="Mobile menu controls">
          <h2 className="text-xl font-semibold text-white" id="mobile-menu-title">Menu</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-white" aria-hidden="true" />
          </button>
        </div>

        <nav className="space-y-4" aria-labelledby="mobile-menu-title">
          <ul role="menu">
            {navLinks.map((link) => (
              <li key={link.name} role="none">
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-white text-lg font-medium transition-colors duration-300 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 block hover:bg-white/5"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                  aria-current={link.href === '/' ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8" role="group" aria-label="Call to action">
          <Link
            href="#contact"
            className="block w-full rounded-xl shadow-lg flex px-5 py-3 justify-center items-center bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary text-white text-center text-sm font-medium transition-all duration-300 hover:scale-105 tracking-wider focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
            onClick={() => setIsOpen(false)}
            role="button"
            aria-label="Start a new project"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;