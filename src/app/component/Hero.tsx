import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h5 className="text-gray-500 uppercase tracking-widest mb-2">
            Welcome to Comforty
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Best Furniture Collection For Your Interior.
          </h1>
          <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition">
            Shop Now →
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="/chair.png" // Replace with your chair image path
            alt="Furniture Chair"
            className="w-3/4 lg:w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
