import { FooterSection } from './FooterSection';
import { AppDownload } from './AppDownload';
import { footerLinks } from './FooterLinks';
import { Link } from '../ui/Link';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <FooterSection title="Company" links={footerLinks.company} />
          <FooterSection title="Product" links={footerLinks.product} />
          <FooterSection title="Legal" links={footerLinks.legal} />
          <FooterSection title="Follow Us" links={footerLinks.social} />
          <AppDownload />
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <p className="text-sm">© 2024 Honey Science LLC</p>
            <p className="text-sm mt-1">
              Honey is now part of the PayPal family. Learn more{' '}
              <Link href="#">here</Link>.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#">Israel</Link>
            <span>|</span>
            <Link href="#">English</Link>
          </div>
        </div>
        
        <p className="mt-8 text-xs">
          Google Play and the Google Play logo are trademarks of Google Inc. 
          Apple and the Apple logo are trademarks of Apple Inc., registered in the 
          U.S. and other countries. App Store is a service mark of Apple Inc., 
          registered in the U.S. and other countries.
        </p>
      </div>
    </footer>
  );
}