import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";
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
        className={`fixed  top-0 md:top-2.5 left-1/2 w-full max-w-[1216px] bg-[var(--foreground)] z-30 transition-all duration-200 ease-in-out -translate-x-1/2 rounded-0  md:rounded-[40px] px-11 py-5 md:py-1.5
          ${scrolled ? 'shadow-none bg-[rgba(179,179,179,0.2)] backdrop-blur-md max-w-[800px]' : ''}`}
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
            <button
              className="rounded-[50px] shadow-[0_10px_20px_0_rgba(192,192,192,0.15)] flex px-4 py-2.5 min-w-[120px] justify-center items-center bg-[var(--button)] border-none text-[var(--black)] text-center text-sm font-medium leading-4 transition-all duration-200 ease-in-out cursor-pointer tracking-wider font-inter max-[767px]:hidden"
            >
              Start a Project
            </button>
             <Menu color="#f1f1f1" />
          
          </div>
        </div>
      </header>
      <Sidebar isOpen={isOpenNavbar} setIsOpen={setIsOpenNavbar} />
    </div>
  );
};

export default Header;