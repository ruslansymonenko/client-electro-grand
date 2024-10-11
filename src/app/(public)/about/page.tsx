import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import About from '@/screens/about/About';

export const metadata: Metadata = {
  title: 'Про нас',
};

export default function AboutPage() {
  return (
    <main className="h-full">
      <Navbar />
      <About />
      <Footer />
    </main>
  );
}
