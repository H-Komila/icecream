import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// public papkasidan to'g'ridan-to'g'ri chaqirish:
import bg3 from "/Images/bg3.png";
import card from "/Images/card.png";
import card1 from "/Images/card1.png";

const images = [bg3, card, card1];

const stats = [
  { value: "6", label: "years scoopinaented" },
  { value: "0", label: "artificial flavoring" },
];

const Section = () => {
  return (
    <section
      id="story"
      className="w-full bg-[#621543] bg-[radial-gradient(circle_at_95%_25%,rgba(140,50,70,0.55),transparent_35%)] py-12 text-white md:py-20"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 sm:px-10 lg:flex-row lg:gap-12 lg:px-14">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex w-full justify-center lg:w-1/2"
        >
          <div className="h-[260px] w-full overflow-hidden rounded-[28px] shadow-[0_30px_60px_rgba(0,0,0,0.35)] sm:h-[340px] lg:h-[400px]">
            <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="h-full w-full"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`Ice cream ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex w-full flex-col justify-center lg:w-1/2"
        >
          <h2 className="mb-5 font-serif text-2xl font-bold leading-tight lg:text-[40px] lg:leading-[1.1]">
            Started with one broken freezer and a stubborn idea
          </h2>

          <p className="max-w-xl text-sm leading-relaxed text-white/80 lg:text-lg">
            Sprinkle &amp; Scoop began in a rented Clifton kitchen in 2019,
            after our founder decided Karachi deserved ice cream that tasted
            like the fruit it was named after. Every batch is still churned by
            hand in small drums, in flavors that change with what the market
            has that week.
          </p>

          <div className="mt-8 flex flex-wrap gap-6 lg:gap-10">
            {stats.map((s) => (
              <div key={s.label}>
                <strong className="mb-2 block font-serif text-3xl font-semibold text-[#f4a46a] lg:text-[38px]">
                  {s.value}
                </strong>
                <span className="text-sm text-white/75 lg:text-base">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section;