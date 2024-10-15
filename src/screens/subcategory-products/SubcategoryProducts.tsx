'use client';

import { FC, useEffect, useState } from 'react';
import ProductsList from '@/components/store/products-list/ProductsList';
import {
  useGetProductsByCategory,
  useGetProductsBySubcategory,
} from '@/hooks/products/useProducts';
import { IProductResponse } from '@/types/server-response-types/product-response';
import Loader from '@/components/common/loader/Loader';

interface ISubcategoryProductsProps {
  subcategorySlug: string;
}

const SubcategoryProducts: FC<ISubcategoryProductsProps> = ({ subcategorySlug }) => {
  const { data, isLoading, error } = useGetProductsBySubcategory(subcategorySlug);
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
        <ProductsList products={productsData} title={'Товари за' + ' підкатегорією'} />
      )}
    </div>
  );
};

export default SubcategoryProducts;
