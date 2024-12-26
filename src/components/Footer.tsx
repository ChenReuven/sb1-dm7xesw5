import { Link } from './ui/Link';

const footerLinks = {
  company: [
    { label: 'About', href: '#' },
    { label: 'Help', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'News', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Media', href: '#' },
  ],
  product: [
    { label: 'Droplist', href: '#' },
    { label: 'Amazon Badge', href: '#' },
    { label: 'Honey Gold', href: '#' },
    { label: 'For Affiliates', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Copyright', href: '#' },
    { label: 'Patents', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Ad Disclosure', href: '#' },
    { label: 'Accessibility', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
  social: [
    { label: 'Facebook', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Pinterest', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Get the App</h3>
            <div className="space-y-3">
              <a href="#" className="block">
                <img 
                  src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png" 
                  alt="Download on the App Store" 
                  className="h-10"
                />
              </a>
              <a href="#" className="block">
                <img 
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" 
                  alt="Get it on Google Play" 
                  className="h-10"
                />
              </a>
            </div>
          </div>
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