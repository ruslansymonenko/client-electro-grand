import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Cart from '@/screens/cart/Cart';

export const metadata: Metadata = {
  title: 'Кошик',
};

export default function CartPage() {
  return (
    <main className="h-full">
      <Navbar />
      <Cart />
      <Footer />
    </main>
  );
}
