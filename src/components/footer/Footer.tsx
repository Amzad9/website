import Image from "next/image";
import Logo from "@/assets/whiteLogo.png";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./footer.module.scss";

const SocialMediaList = [
  {
    icon: "linkedin",
    url: "https://www.linkedin.com/company/weblibron/?viewAsMember=true",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 relative z-10">
     <Link
        href="https://wa.me/918178614811?text=Thank%20you%20for%20reaching%20out.%20%F0%9F%9A%80%20We%20specialize%20in%20Web%20Development%2C%20App%20Development%2C%20and%20Design%20to%20help%20businesses%20grow%20online"
        className="fixed z-50 bottom-10 right-8"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
      >
        <Image
          src="/whatsapp.svg"
          width={60}
          height={60}
          alt="WhatsApp Contact"
          priority
        />
      </Link>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 md:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="col-span-12 md:col-span-3">
            <div className="flex items-center space-x-2 mb-3">
              <Link href="/" className="logo">
                <Image src={Logo} alt="weblibron logo" width={150} />
              </Link>
            </div>
            <p className="text-sm w-full font-poppins">
             At Weblibron, we strive to create innovative web and app solutions that meet your needs. Your success is our priority.
            </p>
            {/* Social Media Icons */}
            <ul className="flex w-full border-t-2 pt-5 pb-5 mt-4 border-white border-opacity-5 gap-5 items-center">
              {SocialMediaList.map((item, key) => (
                <motion.li
                  whileHover={{
                    scale: 1.1, // Slightly less dramatic scaling
                    rotate: -3, // Subtle rotation for a smoother effect
                    transition: {
                      duration: 0.4, // Slightly longer duration for smoothness
                      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for smooth ease-out
                    },
                  }}
                  whileTap={{
                    scale: 0.9, // Less aggressive scaling on tap
                    transition: {
                      duration: 0.2, // Quick response for tap interaction
                      ease: "easeInOut", // Smooth ease-in-out for tap
                    },
                  }}
                  key={key}
                >
                  <Link href={item.url} target="_blank">
                    <i className={styles[item.icon]}></i>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div className="col-span-12 md:col-span-3">
            <h4 className="text-xl font-semibold text-white mb-2">
              Quick Link
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#home"
                  className="text-sm font-inter hover:text-primary hover:ps-1 hover:underline duration-300 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-sm font-inter hover:text-primary hover:ps-1 hover:underline duration-300 ease-in-out"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="text-sm font-inter hover:text-primary hover:ps-1 hover:underline duration-300 ease-in-out"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#showcase"
                  className="text-sm font-inter hover:text-primary hover:ps-1 hover:underline duration-300 ease-in-out"
                >
                  Showcase
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="col-span-12 md:col-span-3">
            <h4 className="text-xl font-semibold text-white mb-2">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
               <Link
                href="mailto:hello@weblibron.com"
                className="hover:text-primary hover:ps-1 hover:underline duration-300 ease-in-out text-xl"
              >
                hello@weblibron.com
              </Link>
              </li>
              <li>
               <Link
                  href="tel:+918178614811"
                  className="hover:text-primary hover:ps-1 hover:underline duration-300 ease-in-out text-xl"
                >
                  +91 8178 61 4811
                </Link>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="col-span-12 md:col-span-3">
            <h4 className="text-xl font-semibold text-white mb-2">Location</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <h5 className="text-lg text-white">Dubai Office</h5>
                <a
                  href="#dubai"
                  className="hover:text-primary hover:underline duration-300 ease-in-out text-sm font-inter font-medium text-gray-400"
                >
                  115, Al Ahmadi Building, Al Qusais, Dubai, U.A.E
                </a>
              </li>
              <li>
                <h5 className="text-lg text-white">India Office</h5>
                <a
                  href="#india1"
                  className="hover:text-primary hover:underline duration-300 ease-in-out text-sm font-inter  font-medium text-gray-400"
                >
                  Ajnara Gen X, Gaziabad, Uttar Pradesh, India
                </a>
              </li>
              {/* <li>
                <h5 className="text-lg text-white">India Office</h5>
                <a
                  href="#india2"
                  className="hover:text-primary hover:underline duration-300 ease-in-out text-sm font-inter  font-medium text-gray-400"
                >
                  Kareli, Prayagraj, Uttar Pradesh, India
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="text-left w-full border-t border-t-gray-800 mt-8">
          <p className="text-center text-gray-400 py-5">
            Copyright © {new Date().getFullYear()} Weblibron. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
