import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { StaticImageData } from 'next/image';
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavbar = () => setIsOpenNavbar((prev) => !prev);

  return (
    <div className="md:container relative z-40">
      <header
        className={`fixed top-0 md:top-2.5 left-1/2 w-full max-w-[1216px] bg-[var(--foreground)] z-30 transition-all duration-200 ease-in-out -translate-x-1/2 rounded-0 md:rounded-[40px] px-11 py-5 md:py-1.5
          ${scrolled 
            ? 'shadow-lg bg-[rgba(179,179,179,0.2)] backdrop-blur-md max-w-[800px] border border-white/10' 
            : 'bg-[rgba(179,179,179,0.1)] backdrop-blur-sm'}`}
      >
        <div className="flex justify-between items-center">
          <Link href="/" className="logo">
            <Image
              src={logo}
              alt="Company Logo"
              className="transition-[height] duration-200 ease-in-out max-[480px] max-[480px]:w-full"
              width={120}
              priority
            />
          </Link>

          <div className="flex items-center gap-5">
            <Link
              className="rounded-[50px] shadow-[0_10px_20px_0_rgba(192,192,192,0.15)] flex px-6 py-2.5 min-w-[120px] justify-center items-center bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary text-white text-center text-sm font-medium leading-4 transition-all duration-300 hover:scale-105 tracking-wider font-inter max-[767px]:hidden"
              href='#contact'
            >
              Start a Project
            </Link>

            <button
              className="block w-10 h-10 rounded-full bg-gray-800/50 hover:bg-gray-800 transition-colors duration-300 border border-white/10"
              onClick={handleNavbar}
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-5 h-5 mx-auto" color="#f1f1f1" />
            </button>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isOpenNavbar} setIsOpen={setIsOpenNavbar} />
    </div>
  );
};

export default Header;