import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ShoppingSection from './components/ShoppingSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div className="max-w-7xl mx-auto py-12 pt-24">
          <Hero />
          <ProductGrid />
        </div>
        <ShoppingSection />
      </main>
      <Footer />
    </div>
  );
}