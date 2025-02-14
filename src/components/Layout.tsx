import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer/Footer';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}