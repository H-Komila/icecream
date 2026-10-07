import React, { useState } from 'react';
import { ArrowRight, ShoppingBag, Heart, ChevronLeft, ChevronRight } from 'lucide-react';

// Swiper kutubxonasi va modullari
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

// Swiper stillari
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import pic from "../../public/Images/pic1.png";
import pic1 from "../../public/Images/pic2.png";
import pic2 from "../../public/Images/pic3.png";
import pic3 from "../../public/Images/pic4.png";
import pic4 from "../../public/Images/pic5.png";
import pic5 from "../../public/Images/pic6.png";
import pic6 from "../../public/Images/pic7.png";
import pic7 from "../../public/Images/pic8.png";

const Article = () => {
  const [liked, setLiked] = useState({});

  const products = [
    {
      id: 1,
      title: "Salted Caramel Fudge",
      description: "Rich caramel swirl with sea salt crunch",
      price: "Rs 460",
      image: pic,
      badge: "Popular"
    },
    {
      id: 2,
      title: "Strawberry Rose",
      description: "Fresh strawberry puree infused with rosewater",
      price: "Rs 440",
      image: pic1,
      badge: "Fresh"
    },
    {
      id: 3,
      title: "Mango Chill",
      description: "Exotic mango with a subtle chili kick",
      price: "Rs 400",
      image: pic2,
      badge: "Trending"
    },
    {
      id: 4,
      title: "Midnight Cocoa",
      description: "70% single-origin dark cocoa fudge",
      price: "Rs 500",
      image: pic3,
      badge: "Classic"
    },
    {
      id: 5,
      title: "Vanilla Bean Delight",
      description: "Pure Madagascar vanilla with crushed pods",
      price: "Rs 420",
      image: pic4,
      badge: "Best Seller"
    },
    {
      id: 6,
      title: "Pistachio Crunch",
      description: "Roasted Sicilian pistachios with white cream",
      price: "Rs 480",
      image: pic5,
      badge: "Artisan"
    },
    {
      id: 7,
      title: "Berry Swirl Sorbet",
      description: "Dairy-free wild berry & mint explosion",
      price: "Rs 390",
      image: pic6,
      badge: "Vegan"
    },
    {
      id: 8,
      title: "Hazelnut Supreme",
      description: "Toasted hazelnut paste with dark chocolate",
      price: "Rs 520",
      image: pic7,
      badge: "Limited"
    }
  ];

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full bg-[#FAF5EF] py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto relative group/swiper">
        
        {/* Header Title Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 border-b border-orange-100 pb-6">
          <div>
            <span className="text-xs font-semibold tracking-widest text-[#E06D53] uppercase">
              Our Fan Favorites
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#4A2010] mt-1">
              The four everyone asks for first
            </h2>
          </div>

          {/* Slayder Navigatsiya Tugmalari */}
          <div className="flex items-center gap-3 mt-4 md:mt-0">
            <button className="swiper-prev-btn p-2.5 rounded-full bg-white border border-stone-200 text-[#4A2010] hover:bg-[#2B1107] hover:text-white transition-all shadow-sm active:scale-95">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="swiper-next-btn p-2.5 rounded-full bg-white border border-stone-200 text-[#4A2010] hover:bg-[#2B1107] hover:text-white transition-all shadow-sm active:scale-95">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Responsive Swiper Slider */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          navigation={{
            prevEl: '.swiper-prev-btn',
            nextEl: '.swiper-next-btn',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-custom-pagination',
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}
          className="!pb-12"
        >
          {products.map((item) => (
            <SwiperSlide key={item.id} className="h-auto">
              <div className="group relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl border border-orange-100/60 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between overflow-hidden h-full">
                
                {/* Top Bar: Badge & Heart Button */}
                <div className="flex items-center justify-between z-10">
                  <span className="bg-orange-50 text-[#C55A3B] text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {item.badge}
                  </span>

                  <button
                    onClick={() => toggleLike(item.id)}
                    className="p-1.5 rounded-full bg-stone-50 hover:bg-rose-50 text-stone-400 hover:text-rose-500 transition-colors"
                  >
                    <Heart
                      className={`w-4 h-4 transition-transform active:scale-125 ${
                        liked[item.id] ? "fill-rose-500 text-rose-500" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Product Image Showcase */}
                <div className="relative w-full h-48 my-3 flex items-center justify-center overflow-hidden">
                  <div className="absolute w-32 h-32 bg-orange-100/40 rounded-full blur-2xl group-hover:bg-rose-100/60 transition-all duration-500" />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-auto h-full max-h-44 object-contain filter drop-shadow-md transition-all duration-500 ease-out transform group-hover:scale-110 group-hover:-rotate-6"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-1.5 text-center sm:text-left">
                  <h3 className="font-serif font-bold text-lg text-[#4A2010] group-hover:text-[#E06D53] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7A6256] line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Price & Order Action */}
                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase text-stone-400 block font-medium">Price</span>
                    <span className="font-bold text-sm text-[#4A2010]">{item.price}</span>
                  </div>

                  <button className="flex items-center gap-1.5 px-4 py-2 bg-[#2B1107] hover:bg-[#E06D53] text-white text-xs font-medium rounded-xl shadow-sm transition-all duration-300 group/btn active:scale-95">
                    <span>Order now</span>
                    <ShoppingBag className="w-3.5 h-3.5 transition-transform group-hover/btn:scale-110" />
                  </button>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Indicator */}
        <div className="swiper-custom-pagination flex justify-center gap-1.5 !-bottom-2" />

        {/* Bottom Explore Link */}
        <div className="mt-8 text-center">
          <button className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#4A2010] hover:text-[#E06D53] transition-colors group">
            <span>Explore all signature flavors</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Article;