import { REVIEWS } from '../data';
import { Star, User } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mb-6">
            Customer Reviews
          </h2>
          <div className="w-2 h-8 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-sm font-bold text-slate-500 uppercase tracking-widest">
            4.8/5 Rating from 500+ Trips
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 flex flex-col h-full hover:border-emerald-300 transition-colors">
              <div className="flex text-emerald-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill={i < review.rating ? "currentColor" : "none"} className={i < review.rating ? "" : "text-slate-200"} />
                ))}
              </div>
              <p className="text-sm text-slate-600 font-medium leading-relaxed italic flex-grow mb-8">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100 mt-auto">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-400 font-black">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight">{review.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-slate-400 mt-0.5">Verified Trip</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
