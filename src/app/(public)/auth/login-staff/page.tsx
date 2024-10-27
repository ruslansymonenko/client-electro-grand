import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Login from '@/screens/auth/login/Login';
import LoginStaff from '@/screens/auth/login-staff/LoginStaff';

export const metadata: Metadata = {
  title: 'Авторизація',
};

export default function LoginStaffPage() {
  return (
    <main className="h-full">
      <Navbar />
      <LoginStaff />
      <Footer />
    </main>
  );
}
