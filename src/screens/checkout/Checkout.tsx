import { FC } from 'react';
import CheckoutForm from '@/components/store/forms/checkout-form/CheckoutForm';

const Checkout: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <CheckoutForm />
    </div>
  );
};

export default Checkout;
