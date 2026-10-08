import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Public papkasidagi rasmlar
import bg3 from "/Images/bg3.png";
import card from "/Images/card.png";
import card1 from "/Images/card1.png";

// Slayder ma'lumotlar to'plami
const slidesData = [
  {
    id: 1,
    image: bg3,
    title: "Started with one broken freezer and a stubborn idea",
    description:
      "Sprinkle & Scoop began in a rented Clifton kitchen in 2019, after our founder decided Karachi deserved ice cream that tasted like the fruit it was named after. Every batch is still churned by hand in small drums, in flavors that change with what the market has that week.",
    stats: [
      { value: "6", label: "years scooping" },
      { value: "60+", label: "flavors invented" },
      { value: "0", label: "artificial flavoring" },
    ],
  },
  {
    id: 2,
    image: card,
    title: "Crafted with 100% natural organic ingredients",
    description:
      "We source our fresh dairy and fruits directly from local organic farms every morning. No artificial preservatives, no artificial food colors, and no shortcuts — just pure, authentic taste in every single scoop.",
    stats: [
      { value: "100%", label: "organic dairy" },
      { value: "24", label: "daily fresh batches" },
      { value: "15k+", label: "happy customers" },
    ],
  },
  {
    id: 3,
    image: card1,
    title: "Rotating seasonal flavors fresh out of the freezer",
    description:
      "Eleven signature scoops rotated throughout the week. Ask our scooper about today's special batch and discover your new favorite taste today.",
    stats: [
      { value: "11", label: "weekly scoops" },
      { value: "100%", label: "handmade daily" },
      { value: "5★", label: "rated taste" },
    ],
  },
];

const Section = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="story"
      className="w-full bg-[#621543] bg-[radial-gradient(circle_at_95%_25%,rgba(140,50,70,0.55),transparent_35%)] py-12 text-white md:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-10 lg:flex-row lg:gap-12 lg:px-14">
        
        {/* Chap tomon: Swiper Rasm Slayderi */}
        <div className="flex w-full justify-center lg:w-1/2">
          <div className="h-[280px] w-full overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:h-[340px] lg:h-[400px]">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
              className="h-full w-full"
            >
              {slidesData.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="h-full w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* O'ng tomon: Rasmga mos ravishda o'zgaruvchi matnlar */}
        <div className="flex w-full flex-col justify-center min-h-[300px] lg:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              {/* Dynamic Sarlavha */}
              <h2 className="mb-5 font-serif text-2xl font-bold leading-tight lg:text-[40px] lg:leading-[1.15]">
                {slidesData[activeIndex].title}
              </h2>

              {/* Dynamic Matn */}
              <p className="max-w-xl text-sm leading-relaxed text-white/80 lg:text-base">
                {slidesData[activeIndex].description}
              </p>

              {/* Dynamic Statistika */}
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {slidesData[activeIndex].stats.map((s, idx) => (
                  <div key={idx} className="flex flex-col">
                    <strong className="mb-1 font-serif text-3xl font-bold text-white lg:text-[40px]">
                      {s.value}
                    </strong>
                    <span className="text-xs text-white/70 lg:text-sm">
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Section;