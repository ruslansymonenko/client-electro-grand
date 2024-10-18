import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Admin from '@/screens/admin/Admin';

export const metadata: Metadata = {
  title: 'Умови співпраці',
};

export default function AdminDashBoardPage() {
  return (
    <main className="h-full">
      <Navbar />
      <Admin />
      <Footer />
    </main>
  );
}
