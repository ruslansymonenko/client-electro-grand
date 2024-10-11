import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Products from '@/screens/products/Products';

export const metadata: Metadata = {
  title: 'Товари',
};

export default function ProductsPage() {
  return (
    <main className="h-full">
      <Navbar />
      <Products />
      <Footer />
    </main>
  );
}
