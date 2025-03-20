import React from "react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10 animate-pulse"></div>
        {/* Abstract shapes for visual interest */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-5xl md:text-8xl text-center text-white font-poppins mb-6">
            We Are <span className="text-primary italic bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500 hover:from-blue-500 hover:to-primary transition-all duration-500">Weblibron</span>
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-2xl mx-auto animate-fade-in">
            Crafting digital experiences that leave lasting impressions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-20 relative">
        <div className="container mx-auto px-4">
          {/* About Section */}
          <section className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center backdrop-blur-sm">
              <div className="space-y-6 transform hover:scale-105 transition-transform duration-300">
                <h2 className="text-3xl md:text-5xl text-white font-bold">
                  Transforming Ideas into Digital Reality
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  We are a team of passionate creators and expert developers dedicated to crafting exceptional digital experiences. Specializing in UI/UX design and robust development, we blend bold visuals with cutting-edge technology.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-8">
                  <button className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-primary to-blue-500 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <div className="relative flex items-center gap-3">
                      <span className="text-2xl font-bold text-white">7+</span>
                      <div className="text-left">
                        <p className="text-white font-medium">Years</p>
                        <p className="text-white/80 text-sm">Experience</p>
                      </div>
                    </div>
                  </button>
                  <button className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-primary rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    <div className="relative flex items-center gap-3">
                      <span className="text-2xl font-bold text-white">20+</span>
                      <div className="text-left">
                        <p className="text-white font-medium">Projects</p>
                        <p className="text-white/80 text-sm">Delivered</p>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-black/40 p-8 rounded-2xl border border-gray-700/50 hover:border-primary/50 transition-colors">
                  <svg className="w-10 h-10 text-primary mb-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    <path d="M10.583 17.321C9.553 16.227 9 15 9 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                  </svg>
                  <p className="text-gray-300 leading-relaxed italic text-lg">
                    "Our mission is to empower businesses with custom-built solutions that not only stand out but also deliver smooth, engaging, and high-speed user experiences."
                  </p>
                  <div className="mt-8 pt-8 border-t border-gray-700/50">
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent mb-6">
                      Our Promise
                    </h3>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div className="text-center w-full sm:flex-1 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <p className="text-xl font-semibold text-primary">Innovation</p>
                      </div>
                      <div className="text-center w-full sm:flex-1 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <p className="text-xl font-semibold text-blue-400">Quality</p>
                      </div>
                      <div className="text-center w-full sm:flex-1 p-4 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                        <p className="text-xl font-semibold text-primary">Excellence</p>
                      </div>
                    </div>
                    <div className="h-1 w-full bg-gradient-to-r from-primary via-blue-500 to-primary mt-8 opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
