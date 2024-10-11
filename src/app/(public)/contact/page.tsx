import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Contact from '@/screens/contact/Contact';

export const metadata: Metadata = {
  title: 'Контакт',
};

export default function ContactPage() {
  return (
    <main className="h-full">
      <Navbar />
      <Contact />
      <Footer />
    </main>
  );
}
