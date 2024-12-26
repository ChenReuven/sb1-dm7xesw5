import { useEffect, useState } from 'react';
import { LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="/logo.svg" alt="PayPal Honey" className="h-8" />
        </Link>

        <div className="flex items-center gap-6">
          <button className="bg-[#F27C22] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#E06912] transition-colors whitespace-nowrap">
            Add to Chrome — It's Free
          </button>
          
          <Link 
            to="/login" 
            className="flex items-center gap-2 text-gray-700 hover:text-gray-900"
          >
            <span>Log in</span>
            <LogIn className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}