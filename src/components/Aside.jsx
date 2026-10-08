import React, { useState } from 'react';
import { Plus, ChevronDown, ChevronUp } from 'lucide-react';

import pic9 from "../../public/Images/pic9.png";
import pic10 from "../../public/Images/pic10.png";
import pic11 from "../../public/Images/pic11.png";
import pic12 from "../../public/Images/pic12.png";
import pic13 from "../../public/Images/pic13.png";
import pic14 from "../../public/Images/pic14.png";
import pic15 from "../../public/Images/pic15.png";
import pic16 from "../../public/Images/pic16.png";
import pic17 from "../../public/Images/pic17.png";
import pic18 from "../../public/Images/pic18.png";
import pic19 from "../../public/Images/pic19.png";
import pic20 from "../../public/Images/pic20.png";

const Aside = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFullMenu, setShowFullMenu] = useState(false);

  const categories = [
    "All",
    "Fruit-forward",
    "Rich & Glossy",
    "Nutty",
    "Dairy-free"
  ];

  const products = [
    { id: 1, name: "Guava Chaat Swirl", category: "Fruit-forward", price: "Rs 440", image: pic9, rating: 5 },
    { id: 2, name: "Madagascar Vanilla Bean", category: "Classic", price: "Rs 420", image: pic10, rating: 5, featured: true },
    { id: 3, name: "Blueberry Swirl", category: "Fruit-forward", price: "Rs 440", image: pic11, rating: 5 },
    { id: 4, name: "Roasted Pistachio", category: "Nutty", price: "Rs 480", image: pic12, rating: 5 },
    { id: 5, name: "Cookies & Cream", category: "Rich & Glossy", price: "Rs 460", image: pic13, rating: 5 },
    { id: 6, name: "Original Cream Cone", category: "Classic", price: "Rs 400", image: pic14, rating: 5 },
    { id: 7, name: "Mango Magic", category: "Fruit-forward", price: "Rs 450", image: pic15, rating: 5 },
    { id: 8, name: "Hazelnut Bliss", category: "Nutty", price: "Rs 490", image: pic16, rating: 5 },
    { id: 9, name: "Vegan Strawberry", category: "Dairy-free", price: "Rs 430", image: pic17, rating: 5 },
    { id: 10, name: "Choco Crunch", category: "Rich & Glossy", price: "Rs 470", image: pic18, rating: 5 },
    { id: 11, name: "Caramel Sundae", category: "Rich & Glossy", price: "Rs 460", image: pic19, rating: 5 },
    { id: 12, name: "Pistachio Cone", category: "Nutty", price: "Rs 480", image: pic20, rating: 5 }
  ];

  // Kategoriyaga ko'ra saralash
  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(p => p.category === activeCategory);

  // Agar tugma bosilmagan bo'lsa, faqat dastlabki 3 tasini ko'rsatamiz
  const visibleProducts = showFullMenu 
    ? filteredProducts 
    : filteredProducts.slice(0, 3);

  const handleAddToCart = (product) => {
    if (addToCart) {
      addToCart(product);
    }
  };

  return (
    <section id='story' className="w-full bg-[#FAF5EF] pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Kategoriya menyu tugmalari */}
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 active:scale-95 shadow-sm ${
                activeCategory === category
                  ? "bg-[#2B1107] text-white shadow-md scale-105"
                  : "bg-white text-[#4A2010] hover:bg-orange-50 hover:text-[#E06D53] border border-stone-200/60"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid mahsulotlar kartasi */}
        <div id='story' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className={`group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border flex flex-col justify-between ${
                product.featured ? "border-[#E06D53] ring-2 ring-orange-100" : "border-stone-100"
              }`}
            >
              <div className="relative w-full h-52 flex items-center justify-center mb-4 overflow-hidden">
                <div className="absolute w-36 h-36 bg-orange-50/60 rounded-full blur-xl group-hover:bg-rose-50/80 transition-all duration-500" />
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-auto h-full max-h-48 object-contain z-10 filter drop-shadow-md transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
                />
              </div>

              <div className="text-left space-y-1">
                <span className="text-[10px] font-semibold tracking-wider text-stone-400 uppercase">
                  {product.category}
                </span>
                <h3 className="text-base font-serif font-bold text-[#4A2010] group-hover:text-[#E06D53] transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-0.5 text-amber-400 text-xs pt-0.5">
                  {"★".repeat(product.rating)}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between">
                <span className="font-bold text-sm text-[#4A2010]">
                  {product.price}
                </span>

                <button 
                  onClick={() => handleAddToCart(product)}
                  className="w-8 h-8 rounded-full bg-[#2B1107] text-white flex items-center justify-center hover:bg-[#E06D53] transition-all duration-300 active:scale-90 shadow-sm"
                  title="Savatga qo'shish"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Qolgan kartochkani ochish va yopish tugmasi */}
        {filteredProducts.length > 3 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowFullMenu((prev) => !prev)}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white border border-[#2B1107]/20 text-[#4A2010] hover:bg-[#2B1107] hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 shadow-sm hover:shadow-md active:scale-95 group"
            >
              <span>{showFullMenu ? "Show less" : "See full menu"}</span>
              {showFullMenu ? (
                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              ) : (
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              )}
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default Aside;