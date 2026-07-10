import { FAQS } from '../data';
import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6">
            FAQ
          </h2>
          <div className="w-2 h-8 bg-emerald-500 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div key={index} className="p-6 md:p-8 border border-slate-200 rounded-2xl group hover:border-blue-300 hover:shadow-md hover:shadow-blue-50 transition-all cursor-pointer">
              <div className="flex gap-6">
                <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-400 flex items-center justify-center font-black group-hover:bg-blue-100 group-hover:text-blue-800 transition-colors flex-shrink-0 mt-0.5">
                  Q
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-blue-800 transition-colors">{faq.question}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
