import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const VisitSection = () => {
  return (
    <section className="bg-[#fceee9] py-16 px-4 sm:px-8 font-sans relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
        
        {/* Chap tarafdagi matnlar va ma'lumotlar */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#5c1d24] tracking-tight mb-3">
            Come find the counter
          </h2>
          <p className="text-sm text-[#8c5258] mb-8 leading-relaxed max-w-md">
            One shop, open daily. No app, no delivery fees — just walk in, or call ahead for a tub to take home.
          </p>

          <div className="space-y-6">
            {/* Manzil */}
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-full bg-[#f3c8bd]/40 text-[#5c1d24] shrink-0 mt-0.5">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#5c1d24]">Shop 6, Building 5-C</h4>
                <p className="text-xs text-[#8c5258] mt-0.5">
                  Street 16, Khayaban-e-Bukhari, DHA Phase 6, Karachi
                </p>
              </div>
            </div>

            {/* Ish vaqti */}
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-full bg-[#f3c8bd]/40 text-[#5c1d24] shrink-0 mt-0.5">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#5c1d24]">Open every day</h4>
                <p className="text-xs text-[#8c5258] mt-0.5">
                  1:00 PM - 11:30 PM, including weekends
                </p>
              </div>
            </div>

            {/* Telefon */}
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-full bg-[#f3c8bd]/40 text-[#5c1d24] shrink-0 mt-0.5">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#5c1d24]">Call ahead for tubs</h4>
                <p className="text-xs text-[#8c5258] mt-0.5">
                  +92 300 123 4567 — 500ml and 1L available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* O'ng tarafdagi xarita (Google Maps iFrame) */}
        <div className="w-full h-[380px] sm:h-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-white/80 relative">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14485.748360408548!2d67.0601!3d24.8143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33ce02b000001%3A0x8673a9686e000000!2sD.H.A.%20Phase%206%20Karachi!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[20%] contrast-[1.05]"
          />
        </div>

      </div>
    </section>
  );
};

export default VisitSection;