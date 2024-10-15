'use client';

import { FC, useEffect, useState } from 'react';
import ProductsList from '@/components/store/products-list/ProductsList';
import { useGetProductsByCategory } from '@/hooks/products/useProducts';
import { IProductResponse } from '@/types/server-response-types/product-response';
import Loader from '@/components/common/loader/Loader';

interface ICategoryProductsProps {
  categorySlug: string;
}

const CategoryProducts: FC<ICategoryProductsProps> = ({ categorySlug }) => {
  const { data, isLoading, error } = useGetProductsByCategory(categorySlug);
  const [productsData, setProductsData] = useState<IProductResponse[]>([]);

  useEffect(() => {
    if (data) {
      setProductsData(data.data);
    } else {
      setProductsData([]);
    }
  }, [data]);

  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      {isLoading ? (
        <Loader />
      ) : (
        <ProductsList products={productsData} title={'Товари за' + ' категорією'} />
      )}
    </div>
  );
};

export default CategoryProducts;
