'use client';

import { FC } from 'react';
import { SERVER_URL } from '@/config/api.config';
import { TrashIcon } from 'lucide-react';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { IProductResponse } from '@/types/server-response-types/product-response';
import { removeFromFavorites } from '@/store/slices/favoritesSlice';

interface IFavoritesItemProps {
  product: IProductResponse;
}

const FavoritesListItem: FC<IFavoritesItemProps> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleDeleteFromFavorites = () => {
    dispatch(removeFromFavorites(product.id));
  };

  return (
    <div className="grid grid-cols-2 items-start gap-4">
      <div className="col-span-2 flex items-start gap-4">
        <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 p-2 rounded-md">
          <img
            src={`${SERVER_URL}/${product.images[0]}`}
            className="w-full h-full object-contain"
            alt={product.name}
          />
        </div>

        <div className="flex items-center justify-between w-full">
          <div>
            <h3 className="text-sm font-bold text-gray-800">{product.name}</h3>
            <p className="font-light text-sm mt-2">{product.subcategory.name}</p>
            <p className="font-light text-sm mt-2">{product.brand.name}</p>
          </div>

          <div>
            <span className="text-sm font-bold text-primary">{product.price}</span>
            <span className="text-sm font-bold ml-2 text-primary">UAH</span>
          </div>

          <div>
            <button
              className="font-semibold text-red-500 text-xs flex items-center justify-center gap-1 shrink-0 hover:shadow-md w-[100px] p-2"
              onClick={handleDeleteFromFavorites}
            >
              <TrashIcon width={15} />
              Видалити
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritesListItem;
