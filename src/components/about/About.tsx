import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-black relative overflow-hidden flex items-center">
      <section className="relative z-10 mx-auto px-5">
        <div className="container md:container mx-auto">
          <div className="flex justify-center">
            <div className="w-full md:w-[80%] mx-auto">
              <h2 className="text-3xl md:text-6xl relative text-center z-10 text-white font-semibold mb-4 font-poppins">
                Hi. We&apos;re
                <span className="text-primary italic ms-2">Weblibron</span>
              </h2>

              <p className="text-lg font-inter mb-3 text-center text-gray-300">
                We are a team of passionate creators and expert developers dedicated to crafting exceptional digital experiences. Specializing in UI/UX design and robust development, we blend bold visuals with cutting-edge technology to build seamless, high-performance platforms
              </p>
              <p className="text-lg font-inter text-center text-gray-300">
                Our mission is to empower businesses with custom-built solutions that not only stand out but also deliver smooth, engaging, and high-speed user experiences. From websites and mobile apps to full-scale digital transformations, Weblibron is here to bring your vision to life with precision, innovation, and excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
