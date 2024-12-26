import { LogIn } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/logo.svg" alt="PayPal Honey" className="h-8" />
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-[#F27C22] text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-[#E06912] transition-colors">
            Add to Chrome — It's Free
          </button>
          <button className="text-gray-700 hover:text-gray-900 flex items-center gap-2">
            <span>Log in</span>
            <LogIn className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}