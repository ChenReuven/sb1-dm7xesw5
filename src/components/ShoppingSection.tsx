export default function ShoppingSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-4 py-24">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-12">
          <img 
            src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&q=80" 
            alt="Shopping illustration" 
            className="w-64 h-64 mx-auto rounded-full object-cover mb-8"
          />
        </div>
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          A shopping tool that does<br />all the work
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Add Honey to your computer in seconds and we'll search for coupons' and rewards.
        </p>
        <p className="text-lg text-gray-600">
          All you have do is shop like normal.
        </p>
      </div>
    </section>
  );
}