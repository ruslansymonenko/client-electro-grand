import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import StoreFeatures from '@/screens/store-features/StoreFeatures';

export const metadata: Metadata = {
  title: 'Послуги та переваги',
};

export default function TermsPage() {
  return (
    <main className="h-full">
      <Navbar />
      <StoreFeatures />
      <Footer />
    </main>
  );
}
