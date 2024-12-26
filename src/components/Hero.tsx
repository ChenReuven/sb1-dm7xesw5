import { Star } from 'lucide-react';

export default function Hero() {
  return (
    <div className="text-center max-w-3xl mx-auto px-4 mt-24 mb-8">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        Love deals? You came to the right place.
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        The Honey extension automatically searches for coupons on 30,000+ sites around the globe.
      </p>
      
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
          ))}
          <span className="ml-2 font-semibold">141,786</span>
          <span className="text-gray-600 ml-1">Chrome Store reviews</span>
        </div>
        
        <div className="text-gray-600">
          <span className="font-semibold">17 million</span> members and counting
        </div>
      </div>

      <button className="bg-[#F27C22] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#E06912] transition-colors">
        Add to Chrome — It's Free
      </button>
    </div>
  );
}