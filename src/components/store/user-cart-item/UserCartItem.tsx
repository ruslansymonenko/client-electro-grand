'use client';

import { FC } from 'react';
import { ICartItem } from '@/types/app-types/cart/cart.types';
import { SERVER_URL } from '@/config/api.config';
import { TrashIcon } from 'lucide-react';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '@/store/slices/cartSlice';

interface IUserCartItemProps {
  product: ICartItem;
}

const UserCartItem: FC<IUserCartItemProps> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch();

  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(product.product.id));
  };

  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(product.product.id));
  };

  const handleDeleteFromCart = () => {
    dispatch(removeFromCart(product.product.id));
  };

  return (
    <div className="grid grid-cols-3 items-start gap-4">
      <div className="col-span-2 flex items-start gap-4">
        <div className="w-28 h-28 max-sm:w-24 max-sm:h-24 shrink-0 p-2 rounded-md">
          <img
            src={`${SERVER_URL}/${product.product.images[0]}`}
            className="w-full h-full object-contain"
            alt={product.product.name}
          />
        </div>

        <div className="flex flex-col">
          <h3 className="text-sm font-bold text-gray-800">{product.product.name}</h3>

          <button
            className="mt-6 font-semibold text-red-500 text-xs flex items-center justify-center gap-1 shrink-0 hover:shadow-md w-[100px] p-2"
            onClick={handleDeleteFromCart}
          >
            <TrashIcon width={15} />
            Видалити
          </button>
        </div>
      </div>

      <div className="ml-auto">
        <h4 className="text-md max-sm:text-base font-bold text-primary">
          <span className="mr-2">{product.product.price * product.quantity}</span>
          <span>UAH</span>
        </h4>

        <div className="mt-6 flex items-center p-1 h-10 w-28 text-gray-800 text-xs border border-gray-300 rounded-md">
          <button className="hover:shadow-lg h-full w-full" onClick={handleDecreaseQuantity}>
            <span className="font-bold text-2xl">-</span>
          </button>
          <div className="flex items-center justify-center">
            <span className="mx-3 font-bold">{product.quantity}</span>
          </div>
          <button className="hover:shadow-lg h-full w-full" onClick={handleIncreaseQuantity}>
            <span className="font-bold text-2xl">+</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCartItem;
