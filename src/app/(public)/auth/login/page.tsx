import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Login from '@/screens/auth/login/Login';

export const metadata: Metadata = {
  title: 'Авторизація',
};

export default function LoginPage() {
  return (
    <main className="h-full">
      <Navbar />
      <Login />
      <Footer />
    </main>
  );
}
