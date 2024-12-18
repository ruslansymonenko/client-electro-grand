'use client';

import { FC, useEffect, useState } from 'react';
import ProductCard from '@/components/store/product-card/ProductCard';
import { useGetAllProducts } from '@/hooks/products/useProducts';
import { IProductResponse } from '@/types/server-response-types/product-response';
import Loader from '@/components/common/loader/Loader';

const PopularGoods: FC = () => {
  const { data, isLoading, error } = useGetAllProducts();
  const [productsData, setProductsData] = useState<IProductResponse[]>([]);

  const renderProducts = (items: IProductResponse[]) => {
    if (items.length > 0) {
      return items.map((item) => <ProductCard key={item.id} product={item} />);
    }

    return <div>Товари не знайдені</div>;
  };

  useEffect(() => {
    if (data) {
      if (data.data.products.length > 5) {
        setProductsData(data.data.products.slice(0, 6));
      } else {
        setProductsData(data.data.products);
      }
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
        ) : error ? (
          <div>Помилка завантаження товарів</div>
        ) : (
          renderProducts(productsData)
        )}
      </div>
    </div>
  );
};

export default PopularGoods;
