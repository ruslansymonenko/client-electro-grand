import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/consts/seo.consts';
import AdminBrands from '@/screens/admin-brands/AdminBrands';

export const metadata: Metadata = {
  title: 'Управління магазином',
  ...NO_INDEX_PAGE,
};

export default function AdminBrandsPage() {
  return (
    <main className="h-full">
      <Navbar />
      <AdminBrands />
      <Footer />
    </main>
  );
}
