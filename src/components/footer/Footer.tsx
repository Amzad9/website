import Image from "next/image";
import Logo from "@/assets/logof.svg";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./footer.module.scss";

const SocialMediaList = [
  {
    icon: "instagram",
    url: "",
  },
  {
    icon: "twitter",
    url: "",
  },
  {
    icon: "linkedin",
    url: "",
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] text-white pt-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-start-1 col-end-3">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="logo">
                <Image src={Logo} alt="weblibron logo" width={150} />
              </Link>
            </div>
            <p className="text-sm w-2/3">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>
            {/* Social Media Icons */}
            <ul className="flex w-full border-t-4 pt-5 pb-5 border-white border-opacity-5 gap-5 items-center">
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
          <div className="">
            <h4 className="text-lg font-semibold text-white mb-2">
              Quick Link
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary hover:ps-1 hover:underline duration-300 ease-in-out"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary hover:ps-1 hover:underline duration-300 ease-in-out"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#service"
                  className="hover:text-primary hover:ps-1 hover:underline duration-300 ease-in-out"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  href="#showcase"
                  className="hover:text-primary hover:ps-1 hover:underline duration-300 ease-in-out"
                >
                  Showcase
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div className="">
            <h4 className="text-lg font-semibold text-white mb-2">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#terms"
                  className="hover:text-primary hover:ps-1 hover:underline duration-300 ease-in-out"
                >
                  hello@weblibron.com
                </a>
              </li>
              <li>
                <a
                  href="#privacy"
                  className="hover:text-primary hover:ps-1 hover:underline duration-300 ease-in-out"
                >
                  +91 8178 61 4811
                </a>
              </li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="col-span-2 col-end-7">
            <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <h5 className="text-base text-white">Dubai Office</h5>
                <a
                  href="#dubai"
                  className="hover:text-primary hover:underline duration-300 ease-in-out text-xs font-medium text-gray-400"
                >
                  115, Al Ahmadi Building, Al Qusais, Dubai, U.A.E
                </a>
              </li>
              <li>
                <h5 className="text-base text-white">India Office</h5>
                <a
                  href="#india1"
                  className="hover:text-primary hover:underline duration-300 ease-in-out text-xs font-medium text-gray-400"
                >
                  Ajnara Gen X, Gaziabad, Uttar Pradesh, India
                </a>
              </li>
              <li>
                <h5 className="text-base text-white">India Office</h5>
                <a
                  href="#india2"
                  className="hover:text-primary hover:underline duration-300 ease-in-out text-xs font-medium text-gray-400"
                >
                  Kareli, Prayagraj, Uttar Pradesh, India
                </a>
              </li>
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
