'use client';

import { FC, useEffect, useState } from 'react';
import ProductsList from '@/components/store/products-list/ProductsList';
import { useGetProductsByCategory } from '@/hooks/products/useProducts';
import { IProductResponse } from '@/types/server-response-types/product-response';
import Loader from '@/components/common/loader/Loader';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import { useGetCategoryBySlug } from '@/hooks/categories/useCategories';

interface ICategoryProductsProps {
  categorySlug: string;
}

const CategoryProducts: FC<ICategoryProductsProps> = ({ categorySlug }) => {
  const { data, isLoading, error } = useGetProductsByCategory(categorySlug);
  const [productsData, setProductsData] = useState<IProductResponse[]>([]);
  const categoryData = useGetCategoryBySlug(categorySlug);
  const [categoryName, setCategoryName] = useState<string>('');

  useEffect(() => {
    if (data) {
      setProductsData(data.data.products);
    } else {
      setProductsData([]);
    }
  }, [data]);

  useEffect(() => {
    if (categoryData.data) {
      setCategoryName(categoryData.data.data.name);
    }
  }, [categoryData.data]);

  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <Breadcrumb />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-4 mx-auto w-full my-14">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
            Товари за категорією: {categoryName}
          </h2>
          <div className="flex w-full">
            <ProductsList products={productsData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;
