import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Brands from '@/screens/brands/Brands';

export const metadata: Metadata = {
  title: 'Бренди',
};

export default function BrandsPage() {
  return (
    <main className="h-full">
      <Navbar />
      <Brands />
      <Footer />
    </main>
  );
}
