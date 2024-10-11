import { FC } from 'react';
import ProductsList from '@/components/store/products-list/ProductsList';

const Products: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <ProductsList />
    </div>
  );
};

export default Products;
