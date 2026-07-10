import { Phone, MapPin, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { BUSINESS_INFO } from '../data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Routes', href: '#routes' },
    { name: 'Fleet', href: '#fleet' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-200">
                B
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-xl md:text-2xl font-black tracking-tighter text-blue-900 uppercase">Brahma Cabs</span>
                <span className="text-[10px] tracking-[0.2em] font-bold text-emerald-600 uppercase">Raipur's EV Fleet</span>
              </div>
            </a>
          </div>

          {/* Desktop Nav & CTA */}
          <div className="hidden lg:flex items-center gap-8">
            <nav className="flex gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-xs font-bold text-slate-500 uppercase tracking-widest hover:text-blue-900 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="flex gap-6 items-center border-l border-slate-200 pl-6">
              <div className="flex flex-col items-end">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">24/7 Helpline</span>
                <span className="text-xl font-bold text-blue-900 tracking-tight">{BUSINESS_INFO.phone}</span>
              </div>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 text-white px-6 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-200 uppercase tracking-wider text-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-blue-800 bg-blue-50 p-2.5 rounded-lg border border-blue-100"
            >
              <Phone size={20} fill="currentColor" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-900 hover:text-blue-800 focus:outline-none p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-2xl absolute w-full">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-4 text-sm font-black text-slate-900 hover:text-blue-800 hover:bg-slate-50 rounded-xl uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
              <a 
                href={`tel:${BUSINESS_INFO.phone}`}
                className="w-full bg-blue-800 text-white px-4 py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 uppercase tracking-widest"
              >
                Call Now
              </a>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`}
                className="w-full bg-emerald-500 text-white px-4 py-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-200 uppercase tracking-widest"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
