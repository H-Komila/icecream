import React from 'react';
import bg2 from "../../public/Images/bg2.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#FAF5EF]">
      {/* Pushti fonli banner va harakatlanadigan effektlar */}
      <div 
        className="relative w-full h-[300px] sm:h-[380px] md:h-[420px] bg-cover bg-center flex flex-col items-center justify-center text-center px-4 overflow-hidden"
        style={{ backgroundImage: `url(${bg2})` }}
      >
        {/* Harakatlanuvchi (animatsiyali) dekorativ elementlar */}
        <div className="absolute top-8 left-12 w-16 h-16 bg-white/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-10 right-16 w-24 h-24 bg-pink-300/30 rounded-full blur-2xl animate-bounce duration-1000" />
        <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-orange-200/40 rounded-full blur-lg animate-ping" />

        {/* Text Sarlavha qismi */}
        <div className="relative z-10 max-w-2xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#4A2010] drop-shadow-sm transition-transform duration-500 hover:scale-105 cursor-default">
            The full case, today
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-[#7A6256] font-medium max-w-md mx-auto leading-relaxed">
            Eleven scoops, rotated through the week. Ask what's fresh out of the freezer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;