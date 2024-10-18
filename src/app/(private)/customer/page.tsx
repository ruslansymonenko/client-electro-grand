import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Customer from '@/screens/customer/Customer';

export const metadata: Metadata = {
  title: 'Умови співпраці',
};

export default function UserDashBoardPage() {
  return (
    <main className="h-full">
      <Navbar />
      <Customer />
      <Footer />
    </main>
  );
}
