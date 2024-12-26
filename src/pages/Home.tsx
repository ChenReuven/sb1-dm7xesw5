import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import ShoppingSection from '../components/ShoppingSection';

export default function Home() {
  return (
    <main>
      <div className="max-w-7xl mx-auto py-12 pt-24">
        <Hero />
        <ProductGrid />
      </div>
      <ShoppingSection />
    </main>
  );
}