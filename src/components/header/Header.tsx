import React, { useEffect, useState } from "react";
import styles from "@/components/header/Header.module.scss";
import Logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
// import localFont from "next/font/local";
// import ContactUsModal from "./ContactUsModal";

// Font files can be colocated inside of `app`
// const BankGothic = localFont({
//   src: "../../../public/font/BankGothic_Md_BT.ttf",
//   display: "swap",
// });

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
  const handleContactUSClose = () => {
    setIsModal(false);
  };

  const isRoutes = [
    "/service",
    "/AI-Ml",
    "/web3",
    "/blockchain",
    "/software",
    "/internet-of-things",
  ];

  return (
    <>
      <div className="container">
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
                width={200}
                // height={63}
              />
              {/* Weblibron */}
            </Link>

            {/* <nav className={styles.menu}>
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
                  className={`${styles.menuItem} text-black ${
                    pathname === "/solution" ? styles.active : ""
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav> */}

            <div className={styles.group_btn}>
              <button
                className={`${styles.contactButton}`}
                onClick={handleContactUS}
              >
                Contact Us
              </button>
              <button className={styles.humberger} onClick={handleNavbar}>
                <span></span>
                <span></span>
                <span></span>
              </button>
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
