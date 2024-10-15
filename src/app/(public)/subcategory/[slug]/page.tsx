import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import SubcategoryProducts from '@/screens/subcategory-products/SubcategoryProducts';

interface SubcategoryPageProps {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: 'Товари',
};

export default function SubcategoryPage({ params }: SubcategoryPageProps) {
  const { slug } = params;

  return (
    <main className="h-full">
      <Navbar />
      <SubcategoryProducts subcategorySlug={slug} />
      <Footer />
    </main>
  );
}
