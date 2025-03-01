import Head from "next/head";
import { InfiniteMovingCardsDemo } from "@/components/Card";

export default function Services() {
  return (
    <section className="flex flex-col">
      <Head>
        <title>Top Quality Software & Apps</title>
        <meta
          name="description"
          content="Building top-quality software and apps for over fifteen years."
        />
      </Head>
      {/* Top Section: Device Screenshots */}
      <section className="bg-gray-950 pt-4 pb-4">
        <InfiniteMovingCardsDemo />
      </section>

      {/* Bottom Section: Black Background with Text and Buttons */}
      <section className="bg-black text-white py-16 relative z-30">
        <div className="container mx-auto px-4 text-center">
          <div className="relative">
            <h1 className="text-7xl relative z-10 font-semibold mb-12 font-inter">
              Seamless <span className="text-primary italic">Digital</span>{" "}
              Solutions
            </h1>
            <span className="absolute h-5 w-full rounded-xl bg-slate-50 opacity-50 blur-lg top-10 backdrop-blur-sm  left-0 transform -translate-y-1/2"></span>
          </div>
          <div className="flex flex-col flex-wrap w-1/2 mx-auto md:flex-row justify-center gap-4 mb-12">
            <button className="bg-transparent text-white border-2 border-white px-6 py-1.5 rounded-full  hover:text-primary hover:border-primary transition font-poppins font-medium">
              Web Applications
            </button>
            <button className="bg-transparent text-white border-2 border-white px-6 py-1.5 rounded-full font-medium hover:text-primary hover:border-primary transition font-poppins">
              Mobile Applications
            </button>
            <button className="bg-transparent text-white border-2 border-white px-6 py-1.5 rounded-full font-medium hover:text-primary hover:border-primary transition font-poppins">
              U/i/Ux Dessign
            </button>
            <button className="bg-transparent text-white border-2 border-white px-6 py-1.5 rounded-full font-medium hover:text-primary hover:border-primary transition font-poppins">
              Business Platforms
            </button>
            <button className="bg-transparent text-white border-2 border-white px-6 py-1.5 rounded-full font-medium hover:text-primary hover:border-primary transition font-poppins">
              Software Support
            </button>
          </div>
          <div className="mb-6">
            <p className="text-md w-full md:w-2/4 mx-auto font-poppins font-light">
              Revolutionize your business with our mobile app and software
              development expertise, delivering innovative solutions to elevate
              your brand and boost your bottom line.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
