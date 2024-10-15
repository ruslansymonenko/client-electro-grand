'use client';

import { FC, useEffect } from 'react';
import styles from './UserCart.module.scss';
import UserCartItem from '@/components/store/user-cart-item/UserCartItem';
import Button from '@/components/common/button/Button';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { calculateSum } from '@/store/slices/cartSlice';

const UserCart: FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cartSum = useSelector((state: RootState) => state.cart.cartSum);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateSum());
  }, []);

  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Кошик</h1>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="md:col-span-2 space-y-4">
          {cartItems.length > 0
            ? cartItems.map((item) => <UserCartItem key={item.product.id} product={item} />)
            : 'Товарі в корзині ще немає'}
          <hr className="border-gray-300" />
        </div>

        <div className="bg-gray-100 rounded-md p-4 h-max">
          <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
            Оформити замовлення
          </h3>

          <ul className="text-gray-800 mt-6 space-y-3">
            <li className="flex flex-wrap gap-4 text-sm">Сумма замовлення</li>
            <hr className="border-gray-300" />
            <li className="flex flex-wrap gap-4 text-sm font-bold">
              <span>Всього</span>
              <div className="ml-auto">
                <span className="mr-2">{cartSum}</span>
                <span>UAH</span>
              </div>
            </li>
          </ul>

          <div className="mt-6 space-y-3">
            <Link href={`${PUBLIC_URL.checkout()}`}>
              <Button addClasses={'bg-gray-800 hover:bg-gray-900 text-white mb-2'}>Замовити</Button>
            </Link>
            <Link href={`${PUBLIC_URL.main()}`}>
              <Button>Продовжити покупки</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCart;
