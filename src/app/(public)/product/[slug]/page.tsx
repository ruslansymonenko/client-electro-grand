import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Product from '@/screens/product/Product';

interface PagePageProps {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: 'Товари',
};

export default function ProductsPage({ params }: PagePageProps) {
  const { slug } = params;

  return (
    <main className="h-full">
      <Navbar />
      <Product productSlug={slug} />
      <Footer />
    </main>
  );
}
