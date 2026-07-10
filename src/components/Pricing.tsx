import { EV_ROUTES, STANDARD_ROUTES, BUSINESS_INFO } from '../data';
import { Phone, MessageCircle, BatteryCharging, Car } from 'lucide-react';
import { motion } from 'motion/react';

export default function Pricing() {
  const openWhatsApp = () => {
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I want to book a cab.`, '_blank');
  };

  return (
    <section id="routes" className="py-24 bg-slate-50 scroll-mt-20 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6">
            Compare & Choose
          </h2>
          <div className="w-2 h-8 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            Transparent fixed pricing • No hidden charges
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* EV Cab Fare Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col relative border-4 border-emerald-500 shadow-2xl shadow-emerald-200/50"
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs md:text-sm font-black px-6 py-2 rounded-full uppercase tracking-widest whitespace-nowrap shadow-lg shadow-emerald-200">
              ⚡ Recommended
            </div>
            
            <div className="flex items-center gap-4 mb-4 mt-2">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <BatteryCharging size={28} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">EV Cab Fare</h3>
                <p className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest">Affordable, Eco-Friendly & Comfortable</p>
              </div>
            </div>

            <div className="flex-1 mt-6 space-y-4">
              {EV_ROUTES.map((route, index) => (
                <div key={index} className="flex justify-between items-center py-4 border-b border-slate-100 last:border-0">
                  <div className="font-bold text-slate-600 uppercase tracking-wide">
                    Raipur &rarr; <span className="text-slate-900">{route.destination}</span>
                  </div>
                  <div className="text-2xl font-black text-emerald-500 tracking-tighter italic">
                    ₹{route.price}/-
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-slate-100">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex-1 text-center bg-emerald-500 hover:bg-emerald-600 text-white py-4 rounded-xl font-black text-sm transition-transform active:scale-95 uppercase tracking-widest shadow-lg shadow-emerald-200"
              >
                Book Now
              </a>
              <button 
                onClick={openWhatsApp}
                className="flex-1 flex justify-center items-center gap-2 text-center bg-white hover:bg-emerald-50 text-emerald-600 py-4 rounded-xl font-black text-sm transition-colors uppercase tracking-widest border-2 border-emerald-500"
              >
                <MessageCircle size={18} />
                WhatsApp
              </button>
            </div>
          </motion.div>

          {/* Standard Cab Fare Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 lg:p-10 flex flex-col relative border-2 border-blue-800 shadow-xl shadow-blue-100"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800">
                <Car size={28} />
              </div>
              <div>
                <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tight">Petrol / Diesel Fare</h3>
                <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Comfortable Travel for Every Journey</p>
              </div>
            </div>

            <div className="flex-1 mt-6 space-y-4">
              {STANDARD_ROUTES.map((route, index) => (
                <div key={index} className="flex justify-between items-center py-4 border-b border-slate-100 last:border-0">
                  <div className="font-bold text-slate-600 uppercase tracking-wide">
                    Raipur &rarr; <span className="text-slate-900">{route.destination}</span>
                  </div>
                  <div className="text-2xl font-black text-blue-800 tracking-tighter italic">
                    ₹{route.price}/-
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8 pt-6 border-t border-slate-100">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex-1 text-center bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-xl font-black text-sm transition-transform active:scale-95 uppercase tracking-widest shadow-lg shadow-blue-200"
              >
                Book Now
              </a>
              <button 
                onClick={openWhatsApp}
                className="flex-1 flex justify-center items-center gap-2 text-center bg-white hover:bg-blue-50 text-blue-800 py-4 rounded-xl font-black text-sm transition-colors uppercase tracking-widest border-2 border-blue-800"
              >
                <MessageCircle size={18} />
                WhatsApp
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
