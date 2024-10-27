'use client';

import { FC, useEffect } from 'react';
import styles from './FavoritesList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import FavoritesListItem from '@/components/store/favorites-list-item/FavoritesListItem';
import { IProductResponse } from '@/types/server-response-types/product-response';
import { setFavorites, toggleFavorites } from '@/store/slices/favoritesSlice';

const FavoritesList: FC = () => {
  const favoritesItems = useSelector((state: RootState) => state.favorites.favoritesItems);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');

    if (favorites) {
      const parsedFavorites = JSON.parse(favorites) as IProductResponse[];
      dispatch(setFavorites(parsedFavorites));
    }
  }, [dispatch]);

  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Обрані товари</h1>

      <div className="grid md:grid-cols-1 gap-8 mt-10">
        <div className="md:col-span-2 space-y-4">
          {favoritesItems.length > 0 ? (
            favoritesItems.map((item) => <FavoritesListItem key={item.id} product={item} />)
          ) : (
            <div className="w-full">Обраних товарів ще немає</div>
          )}
          <hr className="border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default FavoritesList;
