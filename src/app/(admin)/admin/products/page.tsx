import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/consts/seo.consts';
import AdminProducts from '@/screens/admin-products/AdminProducts';

export const metadata: Metadata = {
  title: 'Управління магазином',
  ...NO_INDEX_PAGE,
};

export default function AdminProductsPage() {
  return (
    <main className="h-full">
      <Navbar />
      <AdminProducts />
      <Footer />
    </main>
  );
}
