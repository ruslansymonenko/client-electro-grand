import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import CategoryProducts from '@/screens/category-products/CategoryProducts';

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: 'Товари',
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;

  return (
    <main className="h-full">
      <Navbar />
      <CategoryProducts categorySlug={slug} />
      <Footer />
    </main>
  );
}
