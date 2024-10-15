'use client';

import { FC, useEffect, useState } from 'react';
import ProductCard from '@/components/store/product-card/ProductCard';
import { useGetAllProducts } from '@/hooks/products/useProducts';
import { IProductResponse } from '@/types/server-response-types/product-response';
import Loader from '@/components/common/loader/Loader';

const PopularGoods: FC = () => {
  const { data, isLoading, error } = useGetAllProducts();
  const [productsData, setProductsData] = useState<IProductResponse[]>([]);

  useEffect(() => {
    if (data) {
      setProductsData(data.data);
    } else {
      setProductsData([]);
    }
  }, [data]);

  return (
    <div className="p-4 mx-auto w-full mt-20">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Популярні товари</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {isLoading ? (
          <Loader />
        ) : (
          productsData.map((item) => <ProductCard key={item.id} product={item} />)
        )}
      </div>
    </div>
  );
};

export default PopularGoods;
