'use client';

import { FC, useEffect, useState } from 'react';
import ProductsList from '@/components/store/products-list/ProductsList';
import {
  useGetProductsByBrand,
  useGetProductsByCategory,
  useGetProductsBySubcategory,
} from '@/hooks/products/useProducts';
import { IProductResponse } from '@/types/server-response-types/product-response';
import Loader from '@/components/common/loader/Loader';

interface IBrandProductsProps {
  brandSlug: string;
}

const BrandProducts: FC<IBrandProductsProps> = ({ brandSlug }) => {
  const { data, isLoading, error } = useGetProductsByBrand(brandSlug);
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
        <ProductsList products={productsData} title={'Товари за' + ' брендом'} />
      )}
    </div>
  );
};

export default BrandProducts;
