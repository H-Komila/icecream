import React from 'react';
import { Globe } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4a1525] text-white py-12 px-6 sm:px-12 font-sans border-t border-white/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        
        {/* Brand & Socials */}
        <div className="md:col-span-1">
          <h3 className="text-xl font-extrabold tracking-tight mb-3 select-none">
            Sprinkle <span className="text-[#e2939a] font-normal">&</span> Scoop
          </h3>
          <p className="text-xs text-pink-200/70 leading-relaxed mb-6">
            Small batch ice cream, churned daily in DHA Phase 6, Karachi.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full border border-white/20 text-pink-200 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full border border-white/20 text-pink-200 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
            >
              <FaFacebook size={16} />
            </a>
            <a
              href="#website"
              aria-label="Website"
              className="p-2 rounded-full border border-white/20 text-pink-200 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-200"
            >
              <Globe size={16} />
            </a>
          </div>
        </div>

        {/* Explore Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-pink-200/50 mb-4">
            Explore
          </h4>
          <ul className="space-y-2.5 text-xs text-pink-100/80">
            <li><a href="#signature" className="hover:text-white transition-colors duration-150">Signature scoops</a></li>
            <li><a href="#menu" className="hover:text-white transition-colors duration-150">Full menu</a></li>
            <li><a href="#story" className="hover:text-white transition-colors duration-150">Our story</a></li>
            <li><a href="#gallery" className="hover:text-white transition-colors duration-150">Gallery</a></li>
          </ul>
        </div>

        {/* Visit Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-pink-200/50 mb-4">
            Visit
          </h4>
          <ul className="space-y-2.5 text-xs text-pink-100/80">
            <li><a href="#location" className="hover:text-white transition-colors duration-150">Location & hours</a></li>
            <li><a href="#order" className="hover:text-white transition-colors duration-150">Order a tub</a></li>
            <li><a href="#catering" className="hover:text-white transition-colors duration-150">Catering</a></li>
          </ul>
        </div>

        {/* Contact Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-pink-200/50 mb-4">
            Contact
          </h4>
          <ul className="space-y-2.5 text-xs text-pink-100/80">
            <li>
              <a href="tel:+923001234567" className="hover:text-white transition-colors duration-150">
                +92 300 123 4567
              </a>
            </li>
            <li>
              <a href="mailto:hello@sprinklescoop.pk" className="hover:text-white transition-colors duration-150">
                hello@sprinklescoop.pk
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-pink-200/50">
        <p>© 2026 Sprinkle & Scoop</p>
        <div className="flex items-center gap-1 hover:text-pink-200 transition-colors cursor-pointer">
          <span>Powered by</span>
          <span className="font-semibold text-pink-100">Netlify</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;