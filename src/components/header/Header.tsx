import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { StaticImageData } from "next/image";
import { Menu } from "lucide-react";

interface HeaderProps {
  logo: string | StaticImageData;
}

const Header = ({ logo }: HeaderProps) => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavbar = () => setIsOpenNavbar(true);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "Showcase", href: "#showcase" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="md:container relative z-50" role="banner">
      <header
        className={`fixed top-0 md:top-5 left-1/2 w-full max-w-[1216px] z-30 transition-all duration-300 ease-in-out -translate-x-1/2 rounded-0 md:rounded-[30px] px-6 md:px-8 py-4 md:py-3
          ${
            scrolled
              ? "shadow-lg bg-black/70 backdrop-blur-xl max-w-[980px]"
              : "bg-black/30 backdrop-blur-sm"
          }`}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="logo" aria-label="Weblibron Home">
            <Image
              src={logo}
              alt="Weblibron Logo"
              className="w-60 h-auto"
              width={50}
              height={28}
              priority
              loading="eager"
            />
          </Link>

          {/* Navigation Menu */}
          <nav
            className="hidden md:flex items-center gap-8"
            role="navigation"
            aria-label="Primary navigation"
          >
            <ul className="flex items-center gap-8" role="menubar">
              {navLinks.map((link) => (
                <li key={link.name} role="none">
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-primary text-md font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1"
                    role="menuitem"
                    aria-current={link.href === "/" ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4 md:gap-6" role="group" aria-label="Additional actions">
            <Link
              className="rounded-full shadow-[0_8px_16px_rgba(0,0,0,0.4)] flex px-5 py-2.5 min-w-[130px] justify-center items-center bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary text-white text-center text-sm font-medium transition-all duration-300 hover:scale-105 tracking-wider max-[767px]:hidden focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
              href="#contact"
              role="button"
              aria-label="Start a new project"
            >
              Start a Project
            </Link>

            <button
              className="flex justify-center md:hidden items-center w-10 h-10 rounded-full bg-black/50 hover:bg-primary/80 transition-colors duration-300 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-black"
              onClick={handleNavbar}
              aria-expanded={isOpenNavbar}
              aria-controls="mobile-menu"
              aria-label={isOpenNavbar ? "Close navigation menu" : "Open navigation menu"}
            >
              <Menu className="w-5 h-5" color="#ffffff" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isOpenNavbar} setIsOpen={setIsOpenNavbar} />
    </div>
  );
};

export default Header;
