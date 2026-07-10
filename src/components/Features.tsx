import { IndianRupee, Zap, UserCheck, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <IndianRupee size={32} className="text-emerald-600" />,
      bg: "bg-emerald-100",
      title: "Affordable Pricing",
      description: "Best rates for outstation drops with transparent, fixed pricing."
    },
    {
      icon: <Zap size={32} className="text-blue-600" />,
      bg: "bg-blue-100",
      title: "Mostly EV Fleet",
      description: "Quiet, comfortable, and environmentally friendly electric cabs."
    },
    {
      icon: <UserCheck size={32} className="text-amber-600" />,
      bg: "bg-amber-100",
      title: "Professional Drivers",
      description: "Experienced, polite, and verified drivers for your safety."
    },
    {
      icon: <Sparkles size={32} className="text-purple-600" />,
      bg: "bg-purple-100",
      title: "Clean & Sanitized",
      description: "Fresh, hygienic, and well-maintained cars before every trip."
    },
    {
      icon: <Clock size={32} className="text-rose-600" />,
      bg: "bg-rose-100",
      title: "24×7 Availability",
      description: "Need a cab at 3 AM? We are always ready to serve you."
    },
    {
      icon: <ShieldCheck size={32} className="text-indigo-600" />,
      bg: "bg-indigo-100",
      title: "Safe Family Travel",
      description: "GPS tracked rides ensuring maximum security for your family."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Our Values</span>
            <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6">
            Why Choose Us
          </h2>
          <div className="w-2 h-8 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:bg-slate-100 transition-colors flex flex-col items-start group relative overflow-hidden"
            >
              <div className="w-14 h-14 bg-white rounded-xl border border-slate-200 flex items-center justify-center mb-6 shadow-sm group-hover:scale-105 transition-transform text-blue-800">
                {feature.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{feature.title}</h3>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
