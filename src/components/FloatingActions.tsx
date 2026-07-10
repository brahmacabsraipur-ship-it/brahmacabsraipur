import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data';

export default function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      <a 
        href={`tel:${BUSINESS_INFO.phone}`}
        className="w-16 h-16 bg-blue-800 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-300 hover:bg-blue-900 active:scale-95 transition-all cursor-pointer border border-blue-700"
        aria-label="Call Now"
      >
        <Phone size={28} fill="currentColor" />
      </a>
      
      <a 
        href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=Hi, I want to book a cab.`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-16 h-16 bg-emerald-500 text-white rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-200 hover:bg-emerald-600 active:scale-95 transition-all cursor-pointer border border-emerald-400"
        aria-label="WhatsApp Us"
      >
        <MessageCircle size={32} fill="currentColor" />
      </a>
    </div>
  );
}
