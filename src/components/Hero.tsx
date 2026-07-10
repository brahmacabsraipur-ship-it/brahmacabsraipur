import { Phone, CheckCircle2, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-br from-white to-slate-50 overflow-hidden border-b border-slate-200">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start lg:items-center lg:text-center text-left">
        
        {/* Badge */}
        <div className="flex items-center gap-4 mb-6 w-full lg:justify-center">
          <div className="hidden lg:block h-px w-12 bg-slate-200"></div>
          <span className="px-3 py-1.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-md uppercase tracking-widest border border-blue-200">
            Top Rated in Chhattisgarh
          </span>
          <div className="hidden lg:block h-px w-12 bg-slate-200"></div>
        </div>
        
        <h1 className="text-6xl md:text-7xl lg:text-[100px] font-black text-slate-900 leading-[0.9] tracking-tighter mb-4 uppercase">
          Raipur to Bilaspur Cab
        </h1>
        
        <div className="flex flex-col md:flex-row items-baseline gap-2 md:gap-6 mt-2 mb-6">
          <span className="text-2xl font-medium text-slate-400 uppercase">ONLY</span>
          <span className="text-7xl md:text-8xl lg:text-[130px] font-black text-blue-800 leading-none tracking-tighter italic">
            ₹1299/-
          </span>
          <span className="text-2xl md:text-5xl font-black text-emerald-500 uppercase italic">
            (EV Cab)
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3 mb-8 w-full lg:justify-center">
          <span className="px-4 py-2 bg-orange-100 text-orange-700 text-sm md:text-base font-bold rounded-lg uppercase tracking-widest border border-orange-200 flex items-center gap-2">
            🔥 Best Selling Route
          </span>
          <span className="px-4 py-2 bg-emerald-100 text-emerald-700 text-sm md:text-base font-bold rounded-lg uppercase tracking-widest border border-emerald-200 flex items-center gap-2">
            ⚡ Lowest EV Fare
          </span>
        </div>

        {/* Subheadings */}
        <p className="text-xl md:text-2xl text-slate-600 font-medium mb-12 max-w-2xl leading-relaxed">
          Comfortable, Safe & Affordable Outstation Taxi Service. <span className="text-emerald-600 font-bold italic">EV Cabs Available</span> for a greener journey.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full max-w-3xl lg:justify-center">
          <a 
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex-1 bg-blue-800 hover:bg-blue-900 text-white px-8 py-5 rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-2xl shadow-blue-300 uppercase tracking-tight"
          >
            Call Now for Booking
          </a>
          <a 
            href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I want to book a cab.`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-5 rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-3 transition-transform active:scale-95 shadow-2xl shadow-emerald-200 uppercase tracking-tight"
          >
            WhatsApp
          </a>
          <a 
            href="#contact"
            className="sm:w-auto bg-white border-2 border-slate-200 hover:border-blue-500 hover:text-blue-600 text-slate-400 px-8 py-5 rounded-2xl font-bold text-sm lg:text-lg flex items-center justify-center gap-2 transition-colors uppercase tracking-widest"
          >
            Fare Quote
          </a>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-10 border-t border-slate-200 w-full lg:max-w-4xl">
          {[
            "One Way Taxi",
            "Round Trip",
            "No Hidden Fees",
            "Instant Booking",
            "24×7 Support"
          ].map((badge, index) => (
            <div key={index} className="flex items-center gap-2 lg:justify-center">
              <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0"></div>
              <span className="text-[11px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">{badge}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
