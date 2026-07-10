import { BUSINESS_INFO } from '../data';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format message for WhatsApp
    const message = `Hi, I want to book a cab.%0A*Name*: ${formData.name}%0A*Phone*: ${formData.phone}%0A*Pickup*: ${formData.pickup}%0A*Destination*: ${formData.destination}`;
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6">
              Need a Cab? Call Now
            </h2>
            <div className="w-2 h-8 bg-emerald-500 mb-10"></div>
            
            <p className="text-lg font-medium text-slate-500 mb-12">
              We provide 24/7 taxi booking services. Call us for instant confirmation or fill out the form to send us a message.
            </p>

            <div className="space-y-4">
              <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-400 hover:shadow-md hover:shadow-blue-100 transition-all group">
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-blue-800 group-hover:scale-110 transition-transform">
                  <Phone size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Call 24x7</p>
                  <p className="text-2xl font-black text-slate-900 uppercase tracking-tight">{BUSINESS_INFO.phone}</p>
                </div>
              </a>

              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-400 hover:shadow-md hover:shadow-emerald-100 transition-all group">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform">
                  <MessageCircle size={24} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">WhatsApp Fast Booking</p>
                  <p className="text-2xl font-black text-slate-900 uppercase tracking-tight">{BUSINESS_INFO.whatsapp}</p>
                </div>
              </a>

              <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Email Us</p>
                  <p className="text-lg font-black text-slate-900 tracking-tight">{BUSINESS_INFO.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Service Area</p>
                  <p className="text-lg font-black text-slate-900 tracking-tight uppercase">{BUSINESS_INFO.serviceArea}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 bg-emerald-50 p-6 rounded-2xl shadow-sm border border-emerald-200">
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                  <span className="font-bold text-xl">✅</span>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">GST Registered Business</p>
                  <p className="text-lg font-black text-emerald-900 tracking-tight uppercase">GSTIN: {BUSINESS_INFO.gstin}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-200 h-fit">
            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-10 flex items-center gap-3">
              <span className="w-1 h-6 bg-blue-800"></span>
              Book Your Ride
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Your Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-800 focus:bg-white focus:border-transparent outline-none transition-all text-slate-900 font-bold"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-800 focus:bg-white focus:border-transparent outline-none transition-all text-slate-900 font-bold"
                  placeholder="Enter your 10 digit number"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Pickup Location</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-800 focus:bg-white focus:border-transparent outline-none transition-all text-slate-900 font-bold"
                  placeholder="e.g. Raipur Airport"
                  value={formData.pickup}
                  onChange={(e) => setFormData({...formData, pickup: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Destination</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-5 py-4 bg-slate-50 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-800 focus:bg-white focus:border-transparent outline-none transition-all text-slate-900 font-bold"
                  placeholder="e.g. Bilaspur"
                  value={formData.destination}
                  onChange={(e) => setFormData({...formData, destination: e.target.value})}
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-800 hover:bg-blue-900 text-white py-5 rounded-2xl font-black text-lg transition-transform active:scale-95 shadow-lg shadow-blue-200 mt-4 uppercase tracking-widest"
              >
                Send Booking Request
              </button>
              <p className="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-6">
                Fast & Secure Booking via WhatsApp
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
