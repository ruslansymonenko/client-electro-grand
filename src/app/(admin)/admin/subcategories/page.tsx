import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/consts/seo.consts';
import AdminSubcategories from '@/screens/admin-subcategories/AdminSubcategories';

export const metadata: Metadata = {
  title: 'Управління магазином',
  ...NO_INDEX_PAGE,
};

export default function AdminSubCategoriesPage() {
  return (
    <main className="h-full">
      <Navbar />
      <AdminSubcategories />
      <Footer />
    </main>
  );
}
