import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Trash2, Plus, Minus } from 'lucide-react';

const Nav = ({ cart = [], removeFromCart, updateQuantity }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Linklar va ularning ID-lari
  const navLinks = [
    { name: 'Flavors', href: '#flavors' },
    { name: 'Menu', href: '#menu' },
    { name: 'Our Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit', href: '#visit' },
  ];

  // Silliq aylantirish (Smooth Scroll)
  const scrollToSection = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Savatdagi umumiy tovarlar soni
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Savatdagi umumiy narxni hisoblash
  const totalPrice = cart.reduce((acc, item) => {
    const numericPrice = parseFloat(String(item.price).replace(/[^0-9.]/g, '')) || 0;
    return acc + numericPrice * item.quantity;
  }, 0);

  return (
    <>
      <nav className="w-full bg-amber-200/20 backdrop-blur-md border-b border-pink-100/60 sticky top-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <a href="#" className="flex items-center gap-1 group">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5C3A21] tracking-tight group-hover:opacity-90 transition-opacity">
                  Sprinkle
                </span>
                <span className="inline-block bg-[#E8A598] text-white font-serif font-semibold text-sm sm:text-base px-2 py-0.5 rounded-full rotate-[-6deg] shadow-sm group-hover:rotate-0 transition-transform duration-300">
                  &
                </span>
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#5C3A21] tracking-tight group-hover:opacity-90 transition-opacity">
                  Scoop
                </span>
              </a>
            </div>

            {/* Desktop Links & Order Now Button */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-7">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="relative text-sm font-medium text-[#6B5E57] hover:text-[#5C3A21] transition-colors duration-200 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E8A598] hover:after:w-full after:transition-all after:duration-300 cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* Order now (Savat) tugmasi */}
              <button 
                onClick={() => setIsCartOpen(true)}
                className="bg-white relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-wider text-[#5C3A21] uppercase border border-[#5C3A21]/30 rounded-full overflow-hidden group hover:border-[#5C3A21] transition-all duration-300 shadow-sm active:scale-95"
              >
                <span className="absolute inset-0 w-full h-full bg-[#5C3A21] transition-all duration-300 ease-out transform -translate-x-full group-hover:translate-x-0"></span>
                <span className="relative group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                  <ShoppingBag size={14} /> 
                  <span>Order now</span>
                  {totalItemsCount > 0 && (
                    <span className="bg-[#E06D53] group-hover:bg-white group-hover:text-[#5C3A21] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold ml-1 transition-colors">
                      {totalItemsCount}
                    </span>
                  )}
                </span>
              </button>
            </div>

            {/* Mobile Menu & Cart Buttons */}
            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsCartOpen(true)}
                className="p-2 relative rounded-xl text-[#5C3A21] hover:bg-pink-100/50"
              >
                <ShoppingBag size={22} />
                {totalItemsCount > 0 && (
                  <span className="absolute top-1 right-1 bg-[#E06D53] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {totalItemsCount}
                  </span>
                )}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="p-2 rounded-xl text-[#5C3A21] hover:bg-pink-100/50 focus:outline-none transition-all duration-200 active:scale-90"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100 border-b border-pink-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-6 pt-2 pb-6 space-y-3 bg-[#FFF5F5]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="block text-base font-medium text-[#6B5E57] hover:text-[#5C3A21] py-1.5"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full py-3 text-xs font-semibold tracking-wider text-gray-700 hover:text-white uppercase bg-white hover:bg-[#432A18] rounded-full transition-all duration-200 shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <ShoppingBag size={16} /> Order now ({totalItemsCount})
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dynamic Savat Drawer (Modal) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end transition-opacity">
          <div className="w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex justify-between items-center border-b pb-4 mb-4">
                <h3 className="text-xl font-bold text-[#5C3A21] flex items-center gap-2">
                  <ShoppingBag size={20} /> Savatingiz ({totalItemsCount})
                </h3>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Savat ichi */}
              {cart.length === 0 ? (
                <div className="text-center py-12 text-gray-400">
                  <ShoppingBag size={48} className="mx-auto mb-3 opacity-30" />
                  <p className="text-sm font-medium">Savatingiz hozircha bo'sh</p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                  {cart.map((item) => (
                    <div 
                      key={item.id} 
                      className="p-3 bg-stone-50 rounded-2xl border border-stone-100 flex items-center justify-between gap-3 shadow-sm"
                    >
                      <img 
                        src={item.image} 
                        alt={item.name || item.title} 
                        className="w-14 h-14 object-contain rounded-lg bg-white p-1"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-[#5C3A21] truncate">
                          {item.name || item.title}
                        </h4>
                        <p className="text-xs font-semibold text-[#E06D53] mt-0.5">
                          {item.price}
                        </p>
                      </div>

                      {/* Miqdorni o'zgartirish */}
                      <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-full px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-stone-500 hover:text-black"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="text-xs font-bold text-[#5C3A21] px-1">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-stone-500 hover:text-black"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      {/* O'chirish */}
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="p-1.5 rounded-full text-rose-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                        title="O'chirish"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Jami summa va tasdiqlash */}
            {cart.length > 0 && (
              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-semibold text-gray-600">Jami summa:</span>
                  <span className="text-xl font-bold text-[#5C3A21]">
                    Rs {totalPrice.toLocaleString()}
                  </span>
                </div>
                <button 
                  onClick={() => {
                    alert("Buyurtmangiz muvaffaqiyatli qabul qilindi!");
                    setIsCartOpen(false);
                  }}
                  className="w-full py-3.5 bg-[#5C3A21] text-white text-xs font-bold uppercase rounded-full shadow-lg hover:bg-[#432A18] active:scale-95 transition-all"
                >
                  Buyurtmani rasmiylashtirish
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;