import React, { useEffect, useState } from "react";
import styles from "@/components/header/Header.module.scss";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

interface HeaderProps {
  logo: string;
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
    <div className="container relative z-40">
      <header
        className={`${styles.headerWrapper} ${
          scrolled ? styles.stickyActive : ""
        }`}
      >
        <div className={styles.header}>
          <Link href="/" className={styles.logo}>
            <Image
              src={logo}
              alt="Company Logo"
              className={styles.logoImage}
              width={130}
              height={63}
              priority // Improves LCP (Largest Contentful Paint) for SEO
            />
          </Link>

          <div className={styles.group_btn}>
            <motion.button
              className={`${styles.contactButton} font-inter font-light`}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.02, 1],
                transition: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
            >
              Start a Project
            </motion.button>

            <motion.button
              className={styles.humberger}
              onClick={handleNavbar}
              whileTap={{ scale: 0.95 }}
              animate={{
                scale: [1, 1.02, 1],
                transition: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 1.5,
                  ease: "easeInOut",
                },
              }}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </motion.button>
          </div>
        </div>
      </header>
      <Sidebar isOpen={isOpenNavbar} setIsOpen={setIsOpenNavbar} />
    </div>
  );
};

export default Header;