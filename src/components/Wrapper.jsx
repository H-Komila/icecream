import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Grid, ChevronLeft, ChevronRight, Heart, ShoppingBag, Star, Sparkles, Plus, Minus, Trash2 } from 'lucide-react';

const items = [
  { id: 1, title: "Double Chocolate Fudge", img: "/Images/a.png", category: "Chocolate", price: 4.50, rating: 4.9, badge: "Bestseller", desc: "Rich Belgian dark chocolate churned with fudge swirls." },
  { id: 2, title: "Cherried Up Forest", img: "/Images/b.png", category: "Fruity", price: 4.80, rating: 4.8, badge: "New", desc: "Wild sour cherries folded into creamy vanilla bean." },
  { id: 3, title: "Strawberry Trio", img: "/Images/c.png", category: "Fruity", price: 4.20, rating: 4.7, desc: "Fresh organic strawberries with a splash of sweet cream." },
  { id: 4, title: "Blueberry Blast", img: "/Images/d.png", category: "Fruity", price: 4.30, rating: 4.6, desc: "Wild mountain blueberries with a tangy citrus swirl." },
  { id: 5, title: "Mango Masala", img: "/Images/e.png", category: "Fruity", price: 4.60, rating: 4.9, badge: "Chef's Pick", desc: "Alphonso mangoes blended with a subtle touch of spice." },
  { id: 6, title: "Mint Choc Chip", img: "/Images/f.png", category: "Chocolate", price: 4.10, rating: 4.8, desc: "Cool peppermint cream loaded with dark chocolate flakes." },
  { id: 7, title: "Pistachio Crunch", img: "/Images/g.png", category: "Nutty", price: 5.00, rating: 4.9, badge: "Premium", desc: "Roasted Sicilian pistachios with caramelized nut crunch." },
  { id: 8, title: "Salted Caramel Drizzle", img: "/Images/h.png", category: "Classic", price: 4.70, rating: 4.8, desc: "Slow-cooked sea salt caramel blended to perfection." },
  { id: 9, title: "Vanilla Special", img: "/Images/i.png", category: "Classic", price: 3.90, rating: 4.5, desc: "Madagascar bourbon vanilla beans infused cream." },
  { id: 10, title: "Berry Delight", img: "/Images/j.png", category: "Fruity", price: 4.40, rating: 4.7, desc: "Mixed forest berries with a ribbon of sweet raspberry." },
  { id: 11, title: "Nutty Caramel", img: "/Images/k.png", category: "Nutty", price: 4.90, rating: 4.8, desc: "Crunchy pecans and buttery caramel in a velvet base." },
  { id: 12, title: "Choco Swirl", img: "/Images/l.png", category: "Chocolate", price: 4.50, rating: 4.6, desc: "Milk chocolate gelatos with dark fudge ribbons." },
  { id: 13, title: "Tropical Splash", img: "/Images/m.png", category: "Fruity", price: 4.60, rating: 4.7, desc: "Passion fruit, pineapple, and coconut milk blend." },
  { id: 14, title: "Cookie Cream", img: "/Images/n.png", category: "Classic", price: 4.30, rating: 4.9, badge: "Popular", desc: "Crushed chocolate cookies immersed in vanilla." },
  { id: 15, title: "Peach Perfection", img: "/Images/o.png", category: "Fruity", price: 4.20, rating: 4.6, desc: "Ripe summer peaches blended into velvety cream." },
  { id: 16, title: "Classic Crunch", img: "/Images/p.png", category: "Classic", price: 4.00, rating: 4.5, desc: "Traditional crisp waffle cone bits with honeycomb." },
];

const categories = ["All", "Fruity", "Chocolate", "Nutty", "Classic"];

const Wrapper = () => {
  const [showFullMenu, setShowFullMenu] = useState(false);
  const [mobilePage, setMobilePage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [favorites, setFavorites] = useState([]);
  const [activeItem, setActiveItem] = useState(null);
  
  // Savat (Cart) State-lari
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const initialItems = items.slice(0, 8);

  const toggleFavorite = (e, id) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // Savatga mahsulot qo'shish
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Savatdagi mahsulot miqdorini o'zgartirish
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  // Savatdan o'chirish
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Savatdagi umumiy summa va soni
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const filteredItems = selectedCategory === "All"
    ? items
    : items.filter((item) => item.category === selectedCategory);

  const nextPage = () => {
    setMobilePage((prev) => (prev + 1) % Math.ceil(initialItems.length / 4));
  };

  const prevPage = () => {
    setMobilePage((prev) => (prev - 1 + Math.ceil(initialItems.length / 4)) % Math.ceil(initialItems.length / 4));
  };

  return (
    <section 
      style={{ backgroundImage: `url('/Images/bg4.png')` }} 
      className="bg-cover bg-center bg-no-repeat py-12 px-4 sm:px-8 font-sans relative overflow-hidden transition-all duration-500"
    >
      <div className="absolute inset-0 bg-[#fceee9]/85 backdrop-blur-[2px] pointer-events-none" />

      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#f7d6cd] rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#f3c8bd] rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8c5258] mb-1">
              <Sparkles size={14} className="text-[#d96b75]" /> Freshly Churned
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5c1d24] tracking-tight">
              From the counter this week
            </h2>
            <p className="text-sm text-[#8c5258] mt-1">
              Hand-crafted ice creams made with local organic ingredients.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {favorites.length > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1.5 bg-white/80 px-3 py-2 rounded-full text-xs font-bold text-[#5c1d24] shadow-sm border border-white"
              >
                <Heart size={14} className="fill-[#d96b75] text-[#d96b75]" />
                {favorites.length}
              </motion.div>
            )}

            {/* Savat Tugmasi */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 bg-white text-[#5c1d24] border border-white px-4 py-3 rounded-full text-sm font-semibold shadow-md hover:bg-gray-50 transition-all"
            >
              <ShoppingBag size={18} className="text-[#5c1d24]" />
              <span className="hidden sm:inline">Savat</span>
              {totalCartCount > 0 && (
                <span className="bg-[#d96b75] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {totalCartCount}
                </span>
              )}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFullMenu(!showFullMenu)}
              className="flex items-center gap-2 bg-[#5c1d24] text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:bg-[#47151b] transition-all"
            >
              <Grid size={18} />
              {showFullMenu ? "Kamroq ko'rsatish" : "Full Menu (16)"}
            </motion.button>
          </div>
        </div>

        {/* Desktop Grid Display */}
        {!showFullMenu ? (
          <>
            <div className="hidden md:grid grid-cols-4 gap-5">
              {initialItems.map((item, index) => {
                const isFav = favorites.includes(item.id);
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.06 }}
                    whileHover={{ y: -8 }}
                    onClick={() => setActiveItem(item)}
                    className="group relative bg-white/70 backdrop-blur-md p-5 rounded-3xl flex flex-col items-center justify-between shadow-sm hover:shadow-xl transition-all cursor-pointer border border-white/80"
                  >
                    {item.badge && (
                      <span className="absolute top-3 left-3 bg-[#5c1d24] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                        {item.badge}
                      </span>
                    )}

                    <button
                      onClick={(e) => toggleFavorite(e, item.id)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-sm"
                    >
                      <Heart
                        size={16}
                        className={isFav ? "fill-[#d96b75] text-[#d96b75]" : "text-gray-400 hover:text-[#d96b75]"}
                      />
                    </button>

                    <div className="w-32 h-32 flex items-center justify-center my-3 relative">
                      <motion.img
                        animate={{ y: [0, -6, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: index * 0.2 }}
                        src={item.img}
                        alt={item.title}
                        className="max-w-full max-h-full object-contain drop-shadow-xl group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="w-full text-center mt-2">
                      <div className="flex items-center justify-center gap-1 text-xs text-amber-500 font-bold mb-1">
                        <Star size={12} className="fill-amber-400" /> {item.rating}
                      </div>
                      <h3 className="text-sm font-extrabold text-[#5c1d24] line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="text-xs font-bold text-[#8c5258] mt-1">${item.price.toFixed(2)}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Slider Display */}
            <div className="block md:hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={mobilePage}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-3"
                >
                  {initialItems.slice(mobilePage * 4, mobilePage * 4 + 4).map((item) => {
                    const isFav = favorites.includes(item.id);
                    return (
                      <div
                        key={item.id}
                        onClick={() => setActiveItem(item)}
                        className="relative bg-white/80 p-4 rounded-2xl flex flex-col items-center justify-between shadow-sm active:scale-95 transition-transform cursor-pointer"
                      >
                        <button
                          onClick={(e) => toggleFavorite(e, item.id)}
                          className="absolute top-2 right-2 p-1.5 rounded-full bg-white/80 shadow-sm"
                        >
                          <Heart
                            size={14}
                            className={isFav ? "fill-[#d96b75] text-[#d96b75]" : "text-gray-400"}
                          />
                        </button>
                        <img src={item.img} alt={item.title} className="w-20 h-20 object-contain my-2 drop-shadow-md" />
                        <p className="text-xs font-bold text-center text-[#5c1d24] line-clamp-1">
                          {item.title}
                        </p>
                        <span className="text-[11px] font-semibold text-[#8c5258]">${item.price.toFixed(2)}</span>
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center items-center gap-4 mt-6">
                <button
                  onClick={prevPage}
                  className="p-2.5 rounded-full bg-white text-[#5c1d24] shadow-md hover:bg-[#5c1d24] hover:text-white transition-colors"
                >
                  <ChevronLeft size={18} />
                </button>
                <span className="text-xs text-[#8c5258] font-bold tracking-wider">
                  {mobilePage + 1} / {Math.ceil(initialItems.length / 4)}
                </span>
                <button
                  onClick={nextPage}
                  className="p-2.5 rounded-full bg-white text-[#5c1d24] shadow-md hover:bg-[#5c1d24] hover:text-white transition-colors"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </>
        ) : (
          /* Inline Full Menu Section */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-6 pt-6 border-t border-[#eec2bd]/60"
          >
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar justify-start sm:justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                    selectedCategory === cat
                      ? "bg-[#5c1d24] text-white shadow-md scale-105"
                      : "bg-white/80 text-[#5c1d24] hover:bg-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
              <AnimatePresence>
                {filteredItems.map((item) => {
                  const isFav = favorites.includes(item.id);
                  return (
                    <motion.div
                      layout
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      whileHover={{ y: -5 }}
                      onClick={() => setActiveItem(item)}
                      className="relative bg-white/80 backdrop-blur-md p-5 rounded-3xl flex flex-col items-center justify-between shadow-sm hover:shadow-xl cursor-pointer border border-white"
                    >
                      {item.badge && (
                        <span className="absolute top-3 left-3 bg-[#5c1d24] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                          {item.badge}
                        </span>
                      )}

                      <button
                        onClick={(e) => toggleFavorite(e, item.id)}
                        className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white shadow-sm transition-colors"
                      >
                        <Heart
                          size={15}
                          className={isFav ? "fill-[#d96b75] text-[#d96b75]" : "text-gray-400"}
                        />
                      </button>

                      <div className="w-28 h-28 flex items-center justify-center my-3">
                        <img src={item.img} alt={item.title} className="max-w-full max-h-full object-contain drop-shadow-md" />
                      </div>

                      <div className="w-full text-center">
                        <div className="flex items-center justify-center gap-1 text-[11px] text-amber-500 font-bold mb-1">
                          <Star size={11} className="fill-amber-400" /> {item.rating}
                        </div>
                        <h4 className="text-xs sm:text-sm font-extrabold text-[#5c1d24] line-clamp-1">{item.title}</h4>
                        <span className="text-xs font-bold text-[#8c5258] mt-0.5 block">${item.price.toFixed(2)}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}

      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="bg-white rounded-3xl p-6 sm:p-8 w-full max-w-md shadow-2xl relative border border-gray-100 flex flex-col items-center text-center"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 text-gray-500"
              >
                <X size={20} />
              </button>

              <div className="w-40 h-40 flex items-center justify-center my-4 relative">
                <div className="absolute inset-0 bg-[#fceee9] rounded-full blur-xl opacity-70" />
                <img src={activeItem.img} alt={activeItem.title} className="max-w-full max-h-full object-contain drop-shadow-2xl relative z-10" />
              </div>

              <div className="flex items-center gap-1 text-amber-500 text-xs font-bold mb-2">
                <Star size={14} className="fill-amber-400" /> {activeItem.rating} / 5.0
              </div>

              <h3 className="text-xl font-extrabold text-[#5c1d24]">{activeItem.title}</h3>
              <p className="text-xs text-[#8c5258] mt-2 px-4 leading-relaxed">{activeItem.desc}</p>

              <div className="text-2xl font-extrabold text-[#5c1d24] my-4">${activeItem.price.toFixed(2)}</div>

              <button
                onClick={() => {
                  addToCart(activeItem);
                  setActiveItem(null);
                  setIsCartOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#5c1d24] text-white py-3 rounded-2xl font-bold shadow-lg hover:bg-[#47151b] transition-all"
              >
                <ShoppingBag size={18} /> Savatga Qo'shish
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Drawer Modal */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white w-full max-w-md h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between border-b pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <ShoppingBag size={20} className="text-[#5c1d24]" />
                    <h3 className="text-lg font-bold text-[#5c1d24]">Sizning Savatingiz</h3>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 rounded-full hover:bg-gray-100 text-gray-500"
                  >
                    <X size={20} />
                  </button>
                </div>

                {cart.length === 0 ? (
                  <div className="text-center py-12 text-[#8c5258]">
                    <ShoppingBag size={48} className="mx-auto mb-3 opacity-30" />
                    <p className="font-semibold text-sm">Savat hozircha bo'sh</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between bg-[#fceee9]/50 p-3 rounded-2xl border border-[#f7d6cd]/40"
                      >
                        <img src={item.img} alt={item.title} className="w-12 h-12 object-contain" />
                        
                        <div className="flex-1 mx-3">
                          <h4 className="text-xs font-bold text-[#5c1d24] line-clamp-1">{item.title}</h4>
                          <p className="text-xs font-semibold text-[#8c5258]">${item.price.toFixed(2)}</p>
                        </div>

                        <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl shadow-sm border border-gray-100">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 text-gray-600 hover:text-[#5c1d24]"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-xs font-bold text-[#5c1d24] w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 text-gray-600 hover:text-[#5c1d24]"
                          >
                            <Plus size={12} />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1.5 ml-2 text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="border-t pt-4 mt-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-semibold text-[#8c5258]">Jami summa:</span>
                    <span className="text-xl font-extrabold text-[#5c1d24]">${totalPrice.toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => {
                      alert("Buyurtmangiz qabul qilindi!");
                      setCart([]);
                      setIsCartOpen(false);
                    }}
                    className="w-full bg-[#5c1d24] text-white py-3 rounded-2xl font-bold shadow-lg hover:bg-[#47151b] transition-all"
                  >
                    Rasmiylashtirish
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Wrapper;