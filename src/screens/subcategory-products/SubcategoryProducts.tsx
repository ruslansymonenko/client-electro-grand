'use client';

import { FC, useEffect, useState } from 'react';
import ProductsList from '@/components/store/products-list/ProductsList';
import { useGetProductsBySubcategory } from '@/hooks/products/useProducts';
import { IProductResponse } from '@/types/server-response-types/product-response';
import Loader from '@/components/common/loader/Loader';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import { useGetSubcategoryBySlug } from '@/hooks/subcategories/useSubcategories';

interface ISubcategoryProductsProps {
  subcategorySlug: string;
}

const SubcategoryProducts: FC<ISubcategoryProductsProps> = ({ subcategorySlug }) => {
  const { data, isLoading, error } = useGetProductsBySubcategory(subcategorySlug);
  const [productsData, setProductsData] = useState<IProductResponse[]>([]);
  const subcategoryData = useGetSubcategoryBySlug(subcategorySlug);
  const [subcategoryName, setSubcategoryName] = useState<string>('');

  useEffect(() => {
    if (data) {
      setProductsData(data.data.products);
    } else {
      setProductsData([]);
    }
  }, [data]);

  useEffect(() => {
    if (subcategoryData.data) {
      setSubcategoryName(subcategoryData.data.data.name);
    }
  }, [subcategoryData.data]);

  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <Breadcrumb />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="p-4 mx-auto w-full my-14">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-12">
            Товари за підкатегорією: {subcategoryName}
          </h2>
          <div className="flex w-full">
            <ProductsList products={productsData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default SubcategoryProducts;
