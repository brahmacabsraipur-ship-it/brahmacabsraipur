import { BUSINESS_INFO } from '../data';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10 border-t-4 border-emerald-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div>
            <h3 className="text-white text-2xl font-black mb-6 uppercase tracking-tight flex items-center gap-3">
              <span className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white text-lg">B</span>
              {BUSINESS_INFO.name}
            </h3>
            <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-xs mb-4">
              Premium outstation taxi service based in Raipur. Reliable, transparent, and comfortable rides across Chhattisgarh.
            </p>
            <p className="text-sm font-bold text-emerald-400">
              GSTIN: {BUSINESS_INFO.gstin}
            </p>
          </div>

          <div>
            <h4 className="text-white text-sm font-black uppercase tracking-widest mb-6">Why Choose Us</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400">
              <li><span className="text-emerald-500 mr-2">✓</span> Business Hours: 24×7</li>
              <li><span className="text-emerald-500 mr-2">✓</span> Based in Raipur, Chhattisgarh</li>
              <li><span className="text-emerald-500 mr-2">✓</span> Mostly Electric Vehicle Fleet</li>
              <li><span className="text-emerald-500 mr-2">✓</span> Instant WhatsApp Booking</li>
              <li><span className="text-emerald-500 mr-2">✓</span> Professional Drivers</li>
              <li><span className="text-emerald-500 mr-2">✓</span> Safe & Reliable Travel</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-black uppercase tracking-widest mb-6">Popular Routes</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
              <li>Raipur to Bilaspur Cab</li>
              <li>Raipur to Durg Taxi</li>
              <li>Raipur to Bhilai Cab</li>
              <li>Raipur to Raigarh Taxi</li>
              <li>Raipur to Korba Taxi</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-sm font-black uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#routes" className="hover:text-emerald-400 transition-colors">Popular Routes</a></li>
              <li><a href="#fleet" className="hover:text-emerald-400 transition-colors">Our Fleet</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] gap-4">
          <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. ALL RIGHTS RESERVED.</p>
          <p>GOVT. RECOGNIZED E-V FLEET SERVICES</p>
        </div>
      </div>
    </footer>
  );
}
