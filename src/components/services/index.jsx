import Head from "next/head";
import {InfiniteMovingCardsDemo} from '@/components/Card'
export default function Services() {
  return (
    <section className="min-h-screen flex flex-col">
      <Head>
        <title>Top Quality Software & Apps</title>
        <meta name="description" content="Building top-quality software and apps for over fifteen years." />
      </Head>
      {/* Top Section: Device Screenshots */}
      <section className="bg-gray-950 pt-4 pb-4"> 
         <InfiniteMovingCardsDemo />
      </section>

      {/* Bottom Section: Black Background with Text and Buttons */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-7xl font-bold mb-12 font-poppins">Seamless <span className="text-green-300">Digital</span> Solutions</h1>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
            <button className="bg-white text-black px-7 py-5 rounded-full  hover:bg-gray-200 transition font-poppins font-medium">
              Web Applications
            </button>
            <button className="bg-white text-black px-6 py-5 rounded-full font-medium hover:bg-gray-200 transition font-poppins">
              Mobile Applications
            </button>
            <button className="bg-white text-black px-6 py-6 rounded-full font-medium hover:bg-gray-200 transition font-poppins">
              Business Platforms
            </button>
          </div>
          <div className="mb-6">
            <p className="text-md w-full md:w-3/4 mx-auto font-poppins font-light">
              Revolutionize your business with our mobile app and software development expertise, delivering innovative solutions to elevate your brand and boost your bottom line.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}