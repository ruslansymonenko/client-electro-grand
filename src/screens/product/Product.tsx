'use client';

import { FC, useEffect, useState } from 'react';
import ProductData from '@/components/store/product-data/ProductData';
import { useGetProductBySlug } from '@/hooks/products/useProducts';
import { IProductDataResponse } from '@/types/server-response-types/product-response';
import Loader from '@/components/common/loader/Loader';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import { ElementNotFound } from '@/components/common/element-not-found/ElementNotFound';

interface IProductProps {
  productSlug: string;
}

const Product: FC<IProductProps> = ({ productSlug }) => {
  const { data, isLoading, error } = useGetProductBySlug(productSlug);
  const [productData, setProductsData] = useState<IProductDataResponse | null>(null);

  useEffect(() => {
    if (data) {
      setProductsData(data.data);
    } else {
      setProductsData(null);
    }
  }, [data]);

  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <Breadcrumb />
      {isLoading ? (
        <Loader />
      ) : productData ? (
        <ProductData product={productData} />
      ) : (
        <ElementNotFound text="Данний товар не знайдено" className="mt-32" />
      )}
    </div>
  );
};

export default Product;
