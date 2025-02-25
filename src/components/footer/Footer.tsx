import Image from "next/image";
import Logo from "@/assets/logof.svg";
import Link from "next/link";
import { Map } from "lucide-react";

const Footer = ()=>{
 return(
    <footer className="bg-[#131117] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="col-span-4 text-start">
<Link href="/" className="logo">
              <Image
                src={Logo}
                alt="weblibron logo"
                width={150}
              />
            </Link>
              
            </div>
            <div className="col-span-3">
              {/* <h3 className="text-lg font-semibold mb-4">Connect</h3> */}
              <div className="flex flex-col space-y-5 items-start">
                <a href="#" className="text-gray-400 text-sm font-inter hover:text-white">
                  Home
                </a>
                <a href="#"className="text-gray-400 text-sm font-inter hover:text-white">
                  About
                </a>
                <a href="#" className="text-gray-400 text-sm font-inter hover:text-white">
                  Services
                </a>
                <a href="#" className="text-gray-400 text-sm font-inter hover:text-white">
                  Portfolio
                </a>
                <a href="#" className="text-gray-400 text-sm font-inter hover:text-white">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="col-span-5"> 
               <div className="flex items-start mb-4">
                 <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center me-2"><Map /></div>
                 <div>
                   <h6 className="text-white font-semibold font-poppins mb-1">Dubai Office</h6>
               <p className="text-gray-400 mb-3 font-inter">
                115, Al Ahmadi Building, Al Qusais, Dubai, U.A.E
              </p>
                 </div>
              </div>
              <div className="flex items-start mb-4">
                 <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center me-2"><Map /></div>
                 <div>
  <h6 className="text-white font-semibold font-poppins">India Office (Ajnara Gen X, Gaziabad)</h6>
               <p className="text-gray-400 mb-3 font-inter">
                Ajnara Gen X, Gaziabad, Uttar Pradesh, India
              </p>
</div>
              </div>
              <div className="flex items-start mb-4">
                  <div className="bg-gray-800 w-12 h-12 rounded-full flex items-center justify-center me-2"><Map /></div>
                 <div>
 <h6 className="text-white font-semibold font-poppins mb-1">India Office (Prayagraj)</h6>
               <p className="text-gray-400 font-inter mb-3">
                Kareli, Prayagraj, Uttar Pradesh, India
              </p>
</div>
              </div>
               
             
              
            </div>
          </div>
         <div className="text-left w-full border-t border-t-gray-800">
         <p className="text-center text-gray-400 mt-8">
            Copyright © {new Date().getFullYear()} Weblibron. All rights reserved.
         </p>
         </div>
        </div>
      </footer>
)
}

export default Footer