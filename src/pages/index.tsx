import { useEffect, useRef } from "react";
import gsap from "gsap";
import Services from "@/components/services/index";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";
import { TestimonialsSection } from "@/components/Testimonials/TestimonialsSection";
import AboutUs from "@/components/about/About";
import HeroSection from "@/components/hero";
import Portfolio from "@/components/portfolio/Portfolio";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Services />
      <Portfolio />
      <TestimonialsSection />
    
      {/* <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Portfolio
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className=" p-6 rounded-lg">
              <Image
                src={Logo}
                alt="Logo"
                className="w-72"
                width={160}
                // height={63}
              />
              <h3 className="text-xl font-semibold mb-2">Project One</h3>
              <p className="text-gray-600">Brief description of the project</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="h-40 bg-gray-300 mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-2">Project Two</h3>
              <p className="text-gray-600">Brief description of the project</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="h-40 bg-gray-300 mb-4 rounded"></div>
              <h3 className="text-xl font-semibold mb-2">Project Three</h3>
              <p className="text-gray-600">Brief description of the project</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-800 p-6 rounded-lg">
              <p className="mb-4">
                &quot;Essential Designs delivered beyond our expectations!&quot;
              </p>
              <p className="font-semibold">John Doe, Company X</p>
            </div>
            <div className="bg-blue-800 p-6 rounded-lg">
              <p className="mb-4">
                Their team is professional and highly skilled.
              </p>
              <p className="font-semibold">Jane Smith, Company Y</p>
            </div>
          </div>
        </div>
      </section> */}
      <Contact />
      <Footer />
    </>
  );
}
