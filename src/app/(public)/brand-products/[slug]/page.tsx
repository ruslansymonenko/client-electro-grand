import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import BrandProducts from '@/screens/brand-products/BrandProducts';

interface BrandProductsPageProps {
  params: {
    slug: string;
  };
}

export const metadata: Metadata = {
  title: 'Товари',
};

export default function BrandProductsPage({ params }: BrandProductsPageProps) {
  const { slug } = params;

  return (
    <main className="h-full">
      <Navbar />
      <BrandProducts brandSlug={slug} />
      <Footer />
    </main>
  );
}
