import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Categories from '@/screens/categories/Categories';

export const metadata: Metadata = {
  title: 'Категорії товарів',
};

export default function CategoriesPage() {
  return (
    <main className="h-full">
      <Navbar />
      <Categories />
      <Footer />
    </main>
  );
}
