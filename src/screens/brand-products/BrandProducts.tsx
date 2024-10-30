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
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import { useGetCategoryBySlug } from '@/hooks/categories/useCategories';
import { useGetBrandBySlug } from '@/hooks/brands/useBrands';

interface IBrandProductsProps {
  brandSlug: string;
}

const BrandProducts: FC<IBrandProductsProps> = ({ brandSlug }) => {
  const { data, isLoading, error } = useGetProductsByBrand(brandSlug);
  const [productsData, setProductsData] = useState<IProductResponse[]>([]);
  const brandData = useGetBrandBySlug(brandSlug);
  const [brandName, setBrandName] = useState<string>('');

  useEffect(() => {
    if (data) {
      setProductsData(data.data);
    } else {
      setProductsData([]);
    }
  }, [data]);

  useEffect(() => {
    if (brandData.data) {
      setBrandName(brandData.data.data.name);
    }
  }, [brandData.data]);

  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <Breadcrumb />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-4 mx-auto w-full my-14">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-12">
            Товари бренду: {brandName}
          </h2>
          <div className="flex w-full">
            <ProductsList products={productsData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
