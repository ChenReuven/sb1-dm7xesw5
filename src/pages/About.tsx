export default function About() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-8">About Honey</h1>
      
      <section className="prose lg:prose-lg">
        <p className="text-lg text-gray-600 mb-6">
          Honey is a free browser extension that automatically finds and applies 
          coupon codes at checkout with a single click.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          We're on a mission to make the world more fair. We believe everyone 
          should have the information they need to make the best decisions with 
          their money.
        </p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Our Story</h2>
        <p className="text-gray-600 mb-6">
          Founded in 2012, Honey has grown from a browser extension to a suite of 
          money-saving tools that help millions of people shop smart and save time 
          and money.
        </p>

        <div className="bg-gray-50 p-8 rounded-lg mt-12">
          <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>
          <ul className="space-y-3">
            <li>Founded: 2012</li>
            <li>Headquarters: Los Angeles, CA</li>
            <li>Active Members: 17+ million</li>
            <li>Supported Sites: 30,000+</li>
            <li>Part of the PayPal family since 2020</li>
          </ul>
        </div>
      </section>
    </main>
  );
}