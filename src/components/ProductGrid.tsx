export default function ProductGrid() {
  const products = [
    { src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=300&q=80", alt: "VR Headset", className: "col-start-1 col-end-2 row-start-1" },
    { src: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=300&q=80", alt: "Sunglasses", className: "col-start-1 row-start-2" },
    { src: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&q=80", alt: "Headphones", className: "col-start-1 row-start-3" },
    { src: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&q=80", alt: "Laptop", className: "col-start-3 row-start-1" },
    { src: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&q=80", alt: "Smart Watch", className: "col-start-3 row-start-2" },
    { src: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?w=300&q=80", alt: "Game Controller", className: "col-start-3 row-start-3" },
  ];

  return (
    <div className="relative max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-3 gap-8 items-center">
        {products.map((product, index) => (
          <div key={index} className={`${product.className} transition-transform hover:scale-105`}>
            <img
              src={product.src}
              alt={product.alt}
              className="rounded-lg shadow-lg object-cover w-full"
            />
          </div>
        ))}
        
        <div className="col-start-2 row-start-2 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <img
              src="/savings-illustration.svg"
              alt="Savings Illustration"
              className="w-full mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}