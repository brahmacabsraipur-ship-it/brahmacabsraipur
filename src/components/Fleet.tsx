import { FLEET, BUSINESS_INFO } from '../data';
import { Users, Shield, Wind } from 'lucide-react';
import { motion } from 'motion/react';

export default function Fleet() {
  return (
    <section id="fleet" className="py-24 bg-blue-900 text-white scroll-mt-20 relative overflow-hidden">
      {/* Bg Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect width="100" height="100" fill="url(#grid)" />
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase text-white">
            Our Fleet
          </h2>
          <div className="w-2 h-8 bg-emerald-400 mx-auto mb-6"></div>
          <p className="text-sm font-bold text-white/60 uppercase tracking-widest">
            Comfortable and Reliable Vehicles for Every Journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FLEET.map((vehicle, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 group hover:border-white/20 transition-colors"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-3 right-3 bg-blue-900/80 backdrop-blur-md text-emerald-400 px-3 py-1 pb-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/10 shadow-lg">
                  {vehicle.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black mb-4 uppercase tracking-tight text-white">{vehicle.name}</h3>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                    <Users size={14} className="text-emerald-400" />
                    {vehicle.seats}
                  </div>
                  <div className="flex items-center gap-3 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                    <Shield size={14} className="text-emerald-400" />
                    Verified Safe
                  </div>
                  {vehicle.ac && (
                    <div className="flex items-center gap-3 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                      <Wind size={14} className="text-emerald-400" />
                      AC Available
                    </div>
                  )}
                </div>
                {vehicle.bookNow && (
                  <div className="mt-6">
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="block w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white text-center rounded-xl font-black text-sm uppercase tracking-widest transition-colors">
                      Book Now
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
