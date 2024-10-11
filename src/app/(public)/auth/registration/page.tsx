import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Registration from '@/screens/auth/registration/Registration';

export const metadata: Metadata = {
  title: 'Реєстрація',
};

export default function RegistrationPage() {
  return (
    <main className="h-full">
      <Navbar />
      <Registration />
      <Footer />
    </main>
  );
}
