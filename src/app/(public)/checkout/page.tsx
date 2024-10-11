import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Checkout from '@/screens/checkout/Checkout';

export const metadata: Metadata = {
  title: 'Оформлення замовлення',
};

export default function HomePage() {
  return (
    <main className="h-full">
      <Navbar />
      <Checkout />
      <Footer />
    </main>
  );
}
