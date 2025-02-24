import Image from "next/image";
import Logo from "@/assets/logo.png";
import Link from "next/link";

const Footer = ()=>{
 return(
    <footer className="bg-[#131117] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="col-span-3 text-start">
<Link href="/" className="logo">
              <Image
                src={Logo}
                alt="Logo"
                className='w-72'
                width={160}
                // height={63}
              />
              {/* Weblibron */}
            </Link>
              {/* <h3 className="text-lg font-semibold mb-4">Essential Designs</h3>
              <p className="text-gray-400">
                Custom software solutions since 2008
              </p> */}
            </div>
            <div className="col-span-7">
              {/* <h3 className="text-lg font-semibold mb-4">Connect</h3> */}
              <div className="flex space-x-10 items-end">
                <a href="#" className="text-gray-400 text-xl font-inter text-primary hover:text-white">
                  Home
                </a>
                <a href="#"className="text-gray-400 text-xl font-inter text-primary hover:text-white">
                  About
                </a>
                <a href="#" className="text-gray-400 text-xl font-inter text-primary hover:text-white">
                  Services
                </a>
                <a href="#" className="text-gray-400 text-xl font-inter text-primary hover:text-white">
                  Portfolio
                </a>
                <a href="#" className="text-gray-400 text-xl font-inter text-primary hover:text-white">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-span-2">
 
            </div>
          </div>
         <div className="text-left w-full">
 <p className="text-left text-gray-400 mt-8">
            © 2025 Weblibron. All rights reserved.
          </p>
            </div>
        </div>
      </footer>
)
}

export default Footer