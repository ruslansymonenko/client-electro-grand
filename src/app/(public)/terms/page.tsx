import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Terms from '@/screens/terms/Terms';

export const metadata: Metadata = {
  title: 'Умови співпраці',
};

export default function TermsPage() {
  return (
    <main className="h-full">
      <Navbar />
      <Terms />
      <Footer />
    </main>
  );
}
