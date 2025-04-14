import { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "@/assets/whiteLogo.png";
import Link from "next/link";
import { Linkedin } from "lucide-react";

// Inline SVG instead of external file
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="white" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5z"/>
  </svg>
);

const SocialMediaList = [
  {
    icon: "linkedin",
    url: "https://www.linkedin.com/company/weblibron/?viewAsMember=true",
    label: "LinkedIn",
  },
];

const Footer = () => {
  const [isClient, setIsClient] = useState(false);
  
  // Only render client-side elements after hydration
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <footer className="relative bg-black text-white pt-16 overflow-hidden md:px-0 px-4">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px]"></div>
      </div>
      
      {isClient && (
        <Link
          href="https://wa.me/918979504853?text=Thank%20you%20for%20reaching%20out.%20%F0%9F%9A%80%20We%20specialize%20in%20Web%20Development%2C%20App%20Development%2C%20and%20Design%20to%20help%20businesses%20grow%20online"
          className="fixed z-50 bottom-10 right-8 transform hover:scale-110 transition-transform duration-300 shadow-lg rounded-full hover:shadow-2xl bg-green-500 p-3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact us on WhatsApp"
        >
          <WhatsAppIcon />
        </Link>
      )}

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <Link 
              href="/" 
              className="logo inline-block transform hover:scale-105 transition-transform duration-300"
              aria-label="Weblibron Home"
            >
              <Image 
                src={Logo} 
                alt="weblibron logo" 
                width={150} 
                className="filter brightness-110"
                priority={false}
              />
            </Link>
            <p className="text-gray-300 mt-6 leading-relaxed font-light w-full">
              At Weblibron, we strive to create innovative web and app solutions that meet your needs. Your success is our priority.
            </p>
            
            <nav aria-label="Social Media Links">
              <ul className="flex w-full border-t border-gray-800/50 pt-6 mt-6 gap-4 items-center">
                {SocialMediaList.map((item, key) => (
                  <li key={key}>
                    <Link 
                      href={item.url} 
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-3 rounded-full hover:bg-primary transition-colors duration-300 flex items-center justify-center backdrop-blur-sm border border-white/5 hover:border-white/10"
                    >
                      <Linkedin />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <nav className="col-span-1 sm:col-span-1 lg:col-span-2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-transparent rounded-xl blur-xl"></div>
            <div className="relative">
              <h2 className="text-xl font-bold text-white mb-8 relative">
                Quick Links
                <span className="absolute -bottom-3 left-0 w-16 h-[3px] bg-gradient-to-r from-primary to-primary/50 rounded-full"></span>
              </h2>
              <ul className="space-y-4 -ms-4">
                {['Web Development', 'App Development', 'UI/UX Design', 'E-commerce'].map((item) => (
                  <li key={item}>
                    <a
                      href={`/service`}
                      className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <nav className="col-span-1 sm:col-span-1 lg:col-span-2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-blue-500/5 to-transparent rounded-xl blur-xl"></div>
            <div className="relative">
              <h2 className="text-xl font-bold text-white mb-8 relative">
                Our Solution
                <span className="absolute -bottom-3 left-0 w-16 h-[3px] bg-gradient-to-r from-primary to-primary/50 rounded-full"></span>
              </h2>
              <ul className="space-y-4 -ms-4">
                {['Web Development', 'App Development', 'UI/UX Design', 'E-commerce'].map((item) => (
                  <li key={item}>
                    <a
                      href={`/solution`}
                      className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-primary rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="col-span-1 sm:col-span-1 lg:col-span-2">
            <h2 className="text-xl font-bold text-white mb-8 relative">
              Legal
              <span className="absolute -bottom-3 left-0 w-16 h-[3px] bg-gradient-to-r from-primary to-primary/50 rounded-full"></span>
            </h2>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/aboutus"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-3"
                >
                  About Us
                </Link>
              </li>
               <li>
                <Link
                  href="#contact"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-3"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-3"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="text-gray-300 hover:text-primary transition-colors duration-300 flex items-center gap-3"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1 sm:col-span-2 lg:col-span-3">
            <h2 className="text-xl font-bold text-white mb-8 relative">
              Location
              <span className="absolute -bottom-3 left-0 w-16 h-[3px] bg-gradient-to-r from-primary to-primary/50 rounded-full"></span>
            </h2>
            <address className="not-italic space-y-4">
              <div className="transform hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="material-icons text-primary text-xl">location_on</span>
                  Dubai Office
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  115, Al Ahmadi Building,<br />
                  Al Qusais, Dubai, U.A.E
                </p>
              </div>
              <div className="transform hover:translate-x-2 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <span className="material-icons text-primary text-xl">location_on</span>
                  India Office
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                  Ajnara Gen X,<br />
                  Gaziabad, Uttar Pradesh, India
                </p>
              </div>
            </address>
          </div>
        </div>

        <div className="relative mt-8 sm:mt-12 py-6 sm:py-6">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
          <p className="text-gray-400 text-center relative text-sm sm:text-base">
            © {new Date().getFullYear()} Weblibron. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;