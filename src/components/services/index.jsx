import Head from "next/head";

export default function Services() {
  return (
    <section className="min-h-screen flex flex-col">
      <Head>
        <title>Top Quality Software & Apps</title>
        <meta name="description" content="Building top-quality software and apps for over fifteen years." />
      </Head>

      {/* Top Section: Device Screenshots */}
      <section className="flex-1 bg-gray-100 py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Device 1: Laptop with yellow background */}
          <div className="bg-yellow-300 rounded-lg p-4 flex items-center justify-center">
            <img
              src="/path-to-laptop-screenshot.png" // Replace with your image path
              alt="Laptop Screenshot"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Device 2: Tablet with white background */}
          <div className="bg-white rounded-lg p-4 flex items-center justify-center">
            <img
              src="/path-to-tablet-screenshot.png" // Replace with your image path
              alt="Tablet Screenshot"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Device 3: Laptop with blue background */}
          <div className="bg-blue-200 rounded-lg p-4 flex items-center justify-center">
            <img
              src="/path-to-laptop-screenshot-2.png" // Replace with your image path
              alt="Laptop Screenshot"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Device 4: Laptop with light blue background */}
          <div className="bg-blue-100 rounded-lg p-4 flex items-center justify-center">
            <img
              src="/path-to-laptop-screenshot-3.png" // Replace with your image path
              alt="Laptop Screenshot"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Device 5: Phones with light blue background */}
          <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-center">
            <img
              src="/path-to-phones-screenshot.png" // Replace with your image path
              alt="Phones Screenshot"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* Bottom Section: Black Background with Text and Buttons */}
      <section className="bg-black text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-6">Building top quality software & apps for over fifteen years.</h1>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Web Applications
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Mobile Applications
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
              Business Platforms
            </button>
          </div>
          <div className="mb-6">
            <p className="text-lg">
              Revolutionize your business with our mobile app and software development expertise, delivering innovative solutions to elevate your brand and boost your bottom line.
            </p>
          </div>
          <button className="bg-gray-200 text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition">
            More About Our Services
          </button>
        </div>
      </section>
    </section>
  );
}