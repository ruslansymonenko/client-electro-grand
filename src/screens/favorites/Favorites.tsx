import { FC } from 'react';
import FavoritesList from '@/components/store/favorites-list/FavoritesList';

const Favorites: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <FavoritesList />
    </div>
  );
};

export default Favorites;
