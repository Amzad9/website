import React, { useEffect, useState } from "react";
import styles from "@/components/header/Header.module.scss";
import Logo from "@/assets/logof.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { motion } from "framer-motion";

const Header = () => {
  // const router = useRouter()
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const handleContactUs = () => {
  //   // router.push('/contact-us', { scroll: false })
  //   window.open("/contact-us", "_blank", "noopener,noreferrer");
  // };

  const handleNavbar = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };

  const handleContactUS = () => {
    setIsModal(true);
  };

  return (
    <>
      <div className="container relative z-50">
        <header
          className={`${styles.headerWrapper} ${
            scrolled ? styles.stickyActive : ""
          }`}
        >
          <div className={styles.header}>
            <Link href="/" className={styles.logo}>
              <Image
                src={Logo}
                alt="Logo"
                className={styles.logoImage}
                width={130}
                // height={63}
              />
            </Link>

            <div className={styles.group_btn}>
              <motion.button
                className={`${styles.contactButton} font-inter font-light hover:bg-gradient-to-b `} // Keep your existing styling
                onClick={handleContactUS}
                // whileHover={{
                //   scale: 1.1, // Slightly scale up on hover
                //   // rotate: 5, // Slight rotation for interactivity
                // }}
                whileTap={{
                  scale: 0.95, // Slightly shrink on click
                }}
                animate={{
                  scale: [1, 1.02, 1], // Subtle pulse effect
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
                whileTap={{
                  scale: 0.95, // Slightly shrink on click
                }}
                animate={{
                  scale: [1, 1.02, 1], // Subtle pulse effect
                  transition: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                    ease: "easeInOut",
                  },
                }}
                className={styles.humberger}
                onClick={handleNavbar}
              >
                <span></span>
                <span></span>
                <span></span>
              </motion.button>
            </div>
          </div>
        </header>
      </div>

      <Sidebar isOpen={isOpenNavbar} setIsOpen={setIsOpenNavbar} />
      {/* <ContactUsModal isModal={isModal} onClose={handleContactUSClose} /> */}
    </>
  );
};

export default Header;
