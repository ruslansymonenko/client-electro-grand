import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import { NO_INDEX_PAGE } from '@/consts/seo.consts';
import AdminSubcategories from '@/screens/admin-subcategories/AdminSubcategories';
import AdminBrands from '@/screens/admin-brands/AdminBrands';
import AdminCustomers from '@/screens/admin-customers/AdminCustomers';

export const metadata: Metadata = {
  title: 'Управління магазином',
  ...NO_INDEX_PAGE,
};

export default function AdminCustomersPage() {
  return (
    <main className="h-full">
      <Navbar />
      <AdminCustomers />
      <Footer />
    </main>
  );
}
