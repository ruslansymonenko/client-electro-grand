import { FC } from 'react';
import ProductCard from '@/components/store/product-card/ProductCard';

const PopularGoods: FC = () => {
  return (
    <div className="p-4 mx-auto w-full mt-20">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Популярні товари</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default PopularGoods;
