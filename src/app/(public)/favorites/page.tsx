import Navbar from '@/components/common/navbar/Navbar';
import Footer from '@/components/common/footer/Footer';
import { Metadata } from 'next';
import Favorites from '@/screens/favorites/Favorites';

export const metadata: Metadata = {
  title: 'Обрані товари',
};

export default function FavoritesPage() {
  return (
    <main className="h-full">
      <Navbar />
      <Favorites />
      <Footer />
    </main>
  );
}
