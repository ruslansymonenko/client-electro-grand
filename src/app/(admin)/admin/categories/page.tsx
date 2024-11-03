import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/consts/seo.consts';
import AdminCategories from '@/screens/admin-categories/AdminCategories';

export const metadata: Metadata = {
  title: 'Управління магазином',
  ...NO_INDEX_PAGE,
};

export default function AdminCategoriesPage() {
  return (
    <main className="h-full">
      <Navbar />
      <AdminCategories />
      <Footer />
    </main>
  );
}
