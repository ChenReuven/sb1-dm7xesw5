export function AppDownload() {
  return (
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
  );
}