import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Product from '@/screens/product/Product';

export const metadata: Metadata = {
  title: 'Товари',
};

export default function ProductsPage() {
  return (
    <main className="h-full">
      <Navbar />
      <Product />
      <Footer />
    </main>
  );
}
