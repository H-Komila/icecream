import React, { useState, useEffect } from 'react';
import { Play, Sparkles } from 'lucide-react';

// Rasmlaringizni to'g'ri bog'lash
import bg from "../../public/Images/bg.png";
import logo1 from "../../public/Images/logo1.png";
import logo2 from "../../public/Images/logo2.png";
import logo3 from "../../public/Images/logo3.png";
import logo4 from "../../public/Images/logo4.png";

const Header = () => {
  // Slayder va rasmlar jamlanmasi
  const slides = [
    {
      id: 1,
      badge: "Churned in small batches, every morning",
      title: "Ice cream, taken seriously.",
      description: "No stabilizers, no shortcuts — just fresh cream, real fruit, and fourteen hours of patience per batch. Eleven flavors, and a new one every Friday.",
      stats: [
        { value: "11", label: "Signature flavors" },
        { value: "4hr", label: "Fresh batch cycle" },
        { value: "2019", label: "First scoop poured" }
      ],
      cardTag: "DELICIOUS ICE CREAM",
      cardBadge: "NATURAL INGREDIENT",
      price: "$4.99",
      image: logo1
    },
    {
      id: 2,
      badge: "100% Organic & Fresh Daily",
      title: "Pure Joy In Every Single Scoop.",
      description: "Handcrafted artisan ice cream made with locally sourced organic milk and real fruit infusions. Pure ingredients for an unforgettable taste.",
      stats: [
        { value: "100%", label: "Natural ingredients" },
        { value: "24/7", label: "Freshness guaranteed" },
        { value: "50k+", label: "Happy customers" }
      ],
      cardTag: "SUMMER SPECIAL",
      cardBadge: "ORGANIC MILK",
      price: "$5.50",
      image: logo2
    },
    {
      id: 3,
      badge: "Artisan Chocolate & Berry",
      title: "Rich Flavors, Pure Delight.",
      description: "Experience the ultimate melt-in-your-mouth experience with our double chocolate and fresh strawberry scoops.",
      stats: [
        { value: "15+", label: "Toppings" },
        { value: "0%", label: "Preservatives" },
        { value: "4.9★", label: "Customer Rating" }
      ],
      cardTag: "BEST SELLER",
      cardBadge: "FRESH BERRY",
      price: "$6.20",
      image: logo3
    },
    {
      id: 4,
      badge: "Sweet Mango & Chill",
      title: "Tropical Paradise In A Cone.",
      description: "A refreshing blend of ripe mangoes with a hint of chili spice to kickstart your summer vibes.",
      stats: [
        { value: "Real", label: "Mango Chunk" },
        { value: "Low", label: "Sugar Option" },
        { value: "100%", label: "Vegan Friendly" }
      ],
      cardTag: "NEW FLAVOR",
      cardBadge: "TROPICAL VIBE",
      price: "$4.50",
      image: logo4
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Faqat avtomatik almashinuv (har 4.5 soniyada)
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsAnimating(false);
      }, 500);
    }, 4500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const activeSlide = slides[currentSlide];

  return (
    <header 
      className="relative w-full min-h-[calc(100vh-80px)] bg-cover bg-center bg-no-repeat overflow-hidden py-10 lg:py-16 flex items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Background Overlay & Dynamic Glow Effects */}
      <div className="absolute inset-0 bg-[#FFF5F5]/80 backdrop-blur-[2px]"></div>
      <div className="absolute top-10 left-10 w-80 h-80 bg-pink-300/30 rounded-full filter blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200/40 rounded-full filter blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '4s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Chap Tomon: Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Sub-title Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100/90 border border-orange-200/60 text-xs sm:text-sm text-[#8B4513] font-medium shadow-sm transition-all duration-500 cursor-pointer hover:bg-orange-200/90 hover:scale-105 transform ${
              isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
            }`}>
              <Sparkles className="w-4 h-4 text-orange-500 animate-spin" style={{ animationDuration: '6s' }} />
              <span>{activeSlide.badge}</span>
            </div>

            {/* Main Heading */}
            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#5C3A21] leading-[1.15] tracking-tight transition-all duration-500 delay-75 transform ${
              isAnimating ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'
            }`}>
              {activeSlide.title.split(',')[0]}, <br className="hidden sm:inline" />
              <span className="italic font-serif text-[#D97757] relative inline-block transition-transform duration-300 hover:scale-105 hover:text-[#C55A3B]">
                {activeSlide.title.split(',')[1] || activeSlide.title}
              </span>
            </h1>

            {/* Paragraph Description */}
            <p className={`text-base sm:text-lg text-[#7C6A5D] max-w-xl mx-auto lg:mx-0 leading-relaxed font-light transition-all duration-500 delay-100 transform ${
              isAnimating ? 'opacity-0 -translate-y-2' : 'opacity-100 translate-y-0'
            }`}>
              {activeSlide.description}
            </p>

            {/* Buttons & Action Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button className="px-8 py-3.5 bg-[#5C3A21] hover:bg-[#432A18] text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-2xl hover:shadow-[#5C3A21]/30 transition-all duration-300 transform active:scale-95 hover:-translate-y-1 hover:scale-105">
                Our menu
              </button>
              
              <button className="flex items-center gap-3 px-6 py-3.5 bg-white/90 hover:bg-white text-[#5C3A21] font-medium text-sm rounded-full border border-pink-100 shadow-sm hover:shadow-xl hover:shadow-pink-200/50 transition-all duration-300 group active:scale-95 hover:-translate-y-1 hover:scale-105">
                <span className="w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center group-hover:bg-[#5C3A21] group-hover:text-white transition-colors duration-300 group-hover:rotate-12">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span>Our story</span>
              </button>
            </div>

            {/* Stats Counter Section */}
            <div className={`grid grid-cols-3 gap-4 pt-8 border-t border-pink-200/60 max-w-lg mx-auto lg:mx-0 transition-all duration-500 delay-150 transform ${
              isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'
            }`}>
              {activeSlide.stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left group/stat cursor-pointer">
                  <div className="text-2xl sm:text-3xl font-bold font-serif text-[#5C3A21] transition-transform duration-300 group-hover/stat:scale-110 group-hover/stat:text-[#D97757]">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#8C7A6B] font-medium mt-0.5 transition-colors duration-300 group-hover/stat:text-[#5C3A21]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* O'ng Tomon: Card Showcase */}
<div className="lg:col-span-5 relative flex justify-center items-center">
  
  <div className="relative w-full max-w-md rounded-2xl overflow-hidden bg-gradient-to-br from-pink-200 via-rose-200 to-amber-100 p-6 flex flex-col justify-between shadow-2xl transition-all duration-500 hover:shadow-pink-300/60 hover:-translate-y-1 group/card cursor-pointer h-80">
    
    {/* Floating Top Tags */}
    <div className="flex justify-between items-start z-20">
      <span className={`bg-pink-500/90 backdrop-blur-sm text-white text-[10px] font-bold tracking-widest px-3 py-1.5 rounded-full uppercase shadow-md transition-all duration-500 group-hover/card:bg-pink-600 group-hover/card:scale-105 ${
        isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
      }`}>
        {activeSlide.cardTag}
      </span>
      
      <span className={`bg-white/95 backdrop-blur-sm text-[#5C3A21] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md transition-all duration-500 group-hover/card:scale-110 group-hover/card:bg-[#5C3A21] group-hover/card:text-white ${
        isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
      }`}>
        {activeSlide.price}
      </span>
    </div>

    {/* Main Ice Cream Image */}
    <div className="absolute inset-0 flex items-center justify-center p-6 z-10 overflow-hidden">
      <img
        src={activeSlide.image}
        alt="Ice cream product"
        className={`w-auto h-full max-h-72 object-contain filter drop-shadow-2xl transition-all duration-500 ease-out transform group-hover/card:scale-110 group-hover/card:-rotate-6 ${
          isAnimating 
            ? 'scale-90 opacity-0 blur-sm' 
            : 'scale-100 opacity-100 blur-0 rotate-0'
        }`}
      />
    </div>

                {/* Bottom Tag */}
                <div className="self-end z-20">
                  <span className={`bg-amber-800/80 backdrop-blur-sm text-white text-[10px] font-bold tracking-wider px-3 py-1 rounded-full uppercase shadow-sm transition-all duration-500 group-hover/card:bg-amber-900 group-hover/card:scale-105 ${
                    isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'
                  }`}>
                    {activeSlide.cardBadge}
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
    </header>
  );
};

export default Header;