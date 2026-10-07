import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Flavors', href: '#' },
    { name: 'Menu', href: '#' },
    { name: 'Our Story', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Visit', href: '#' },
  ];

  return (
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

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-7">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium text-[#6B5E57] hover:text-[#5C3A21] transition-colors duration-200 py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#E8A598] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Order Now Button */}
            <button className=" bg-white relative inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold tracking-wider text-[#5C3A21] uppercase border border-[#5C3A21]/30 rounded-full overflow-hidden group hover:border-[#5C3A21] transition-all duration-300 shadow-sm active:scale-95">
              <span className="absolute inset-0 w-full h-full bg-[#5C3A21] transition-all duration-300 ease-out transform -translate-x-full group-hover:translate-x-0"></span>
              <span className="relative group-hover:text-white transition-colors duration-300">
                Order now
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-xl text-[#5C3A21] hover:bg-pink-100/50 focus:outline-none transition-all duration-200 active:scale-90"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} className="animate-in spin-in-90 duration-200" /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 border-b border-pink-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 pt-2 pb-6 space-y-3 bg-[#FFF5F5]">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              style={{ transitionDelay: `${index * 40}ms` }}
              className={`block text-base font-medium text-[#6B5E57] hover:text-[#5C3A21] hover:translate-x-2 transition-all duration-200 py-1.5 ${
                isOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button className="w-full py-3 text-xs font-semibold tracking-wider text-gray-700 hover:text-white uppercase bg-white hover:bg-[#432A18] rounded-full transition-all duration-200 shadow-md active:scale-95">
              Order now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;