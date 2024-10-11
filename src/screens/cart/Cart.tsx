import { FC } from 'react';
import UserCart from '@/components/store/user-cart/UserCart';

const Cart: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <UserCart />
    </div>
  );
};

export default Cart;
