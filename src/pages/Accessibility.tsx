export default function Accessibility() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">Accessibility Statement</h1>
      
      <section className="prose lg:prose-lg">
        <p className="text-lg text-gray-600 mb-6">
          Honey is committed to ensuring digital accessibility for people with 
          disabilities. We are continually improving the user experience for 
          everyone, and applying the relevant accessibility standards.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Our Commitment</h2>
        <p className="text-gray-600 mb-6">
          We strive to ensure that our website and browser extension are accessible 
          to all users, regardless of technology or ability. We are actively 
          working to increase the accessibility and usability of our website and 
          extension.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Standards</h2>
        <p className="text-gray-600 mb-6">
          Honey follows the Web Content Accessibility Guidelines (WCAG) 2.1 Level 
          AA standards. These guidelines explain how to make web content more 
          accessible for people with disabilities.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-semibold mb-4">Key Features</h3>
          <ul className="space-y-3">
            <li>Screen reader compatibility</li>
            <li>Keyboard navigation support</li>
            <li>Color contrast compliance</li>
            <li>Alt text for images</li>
            <li>Resizable text support</li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Contact Us</h2>
        <p className="text-gray-600">
          If you encounter any accessibility barriers on our website, please 
          contact our accessibility team. We welcome your feedback and suggestions 
          for improvement.
        </p>
      </section>
    </main>
  );
}