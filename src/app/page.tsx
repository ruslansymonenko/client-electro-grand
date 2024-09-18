import Main from '@/screens/main/Main';
import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';

export default function Home() {
  return (
    <main className="h-full">
      <Navbar />
      <Main />
      <Footer />
    </main>
  );
}
