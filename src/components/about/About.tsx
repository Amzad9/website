import React from "react";

const AboutUs = () => {
  return (
    <section className="py-16 bg-black relative overflow-hidden flex items-center">
      <section className="relative z-10 mx-auto">
        <div className="container md:container mx-auto">
          <div className="flex justify-center">
            <div className="w-full md:w-[80%] mx-auto">
              <h2 className="text-6xl relative text-center z-10 text-white font-semibold mb-4 font-inter">
                Hi. We&apos;re
                <span className="text-primary italic ms-2">Weblibron</span>
              </h2>

              <p className="text-lg font-inter mb-3 text-center text-gray-300">
                A team of passionate creators and coders specializing in digital
                and UI crafting and building. We believe that combining bold
                visuals with robust development is the foundation of exceptional
                online journeys.
              </p>
              <p className="text-lg font-inter text-center text-gray-300">
                Our mission is to empower businesses with custom platforms that
                stand out and run smoothly. We focus on crafting people-first
                layouts and seamless functionality to boost engagement, boost
                speed, and elevate your brand. Whether you need a site or app,
                or a full digital transformation, weblibron is here to craft and
                code your vision into reality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
