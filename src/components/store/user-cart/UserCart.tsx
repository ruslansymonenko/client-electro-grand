import { FC } from 'react';
import styles from './UserCart.module.scss';
import UserCartItem from '@/components/store/user-cart-item/UserCartItem';
import { User, Mail, Phone } from 'lucide-react';
import Button from '@/components/common/button/Button';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';

const UserCart: FC = () => {
  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Кошик</h1>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="md:col-span-2 space-y-4">
          <UserCartItem />
          <hr className="border-gray-300" />
        </div>

        <div className="bg-gray-100 rounded-md p-4 h-max">
          <h3 className="text-lg max-sm:text-base font-bold text-gray-800 border-b border-gray-300 pb-2">
            Оформити замовлення
          </h3>

          <ul className="text-gray-800 mt-6 space-y-3">
            <li className="flex flex-wrap gap-4 text-sm">
              Сумма замовлення <span className="ml-auto font-bold">$200.00</span>
            </li>
            <hr className="border-gray-300" />
            <li className="flex flex-wrap gap-4 text-sm font-bold">
              Total <span className="ml-auto">$206.00</span>
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
