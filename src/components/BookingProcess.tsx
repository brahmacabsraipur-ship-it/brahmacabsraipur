import { PhoneCall, Map, CheckCircle } from 'lucide-react';

export default function BookingProcess() {
  const steps = [
    {
      icon: <PhoneCall size={40} className="text-white" />,
      title: "1. Call or WhatsApp",
      description: "Contact us directly via Phone Call or WhatsApp.",
      color: "bg-blue-600"
    },
    {
      icon: <Map size={40} className="text-white" />,
      title: "2. Confirm Route & Fare",
      description: "Tell us your pickup and drop location, and finalize the fare.",
      color: "bg-yellow-500"
    },
    {
      icon: <CheckCircle size={40} className="text-white" />,
      title: "3. Enjoy Your Journey",
      description: "Our driver will arrive on time. Sit back and travel safely.",
      color: "bg-green-500"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6">
            How to Book
          </h2>
          <div className="w-2 h-8 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-12 justify-center items-start pt-8">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center relative w-full">
              {/* Connector line for desktop */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-[40px] w-full left-1/2 h-[2px] bg-slate-100 -z-10"></div>
              )}
              
              <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-blue-100 relative z-10 border-4 border-white`}>
                {step.icon}
              </div>
              <div className="flex flex-col items-center">
                <span className="text-5xl font-black text-blue-800 tracking-tighter italic mb-4">0{index + 1}</span>
                <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{step.title.substring(3)}</h3>
                <p className="text-sm font-semibold text-slate-400 leading-relaxed max-w-[200px]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
