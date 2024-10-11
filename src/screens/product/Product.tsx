import { FC } from 'react';
import ProductData from '@/components/store/product-data/ProductData';

const Product: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <ProductData />
    </div>
  );
};

export default Product;
