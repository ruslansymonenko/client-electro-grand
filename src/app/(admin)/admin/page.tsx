import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Admin from '@/screens/admin/Admin';
import { NO_INDEX_PAGE } from '@/consts/seo.consts';

export const metadata: Metadata = {
  title: 'Управління магазином',
  ...NO_INDEX_PAGE,
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
