'use client';

import { FC, useEffect, useState } from 'react';
import ProductsList from '@/components/store/products-list/ProductsList';
import { useGetAllProducts } from '@/hooks/products/useProducts';
import { IProductResponse } from '@/types/server-response-types/product-response';
import Loader from '@/components/common/loader/Loader';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import ProductsFilter from '@/components/store/products-filter/ProductsFilter';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { buildSearchParams } from '@/store/slices/filterSlice';

const Products: FC = () => {
  const [searchParams, setSearchParams] = useState<string>('');
  const { data, isLoading, error } = useGetAllProducts(searchParams);
  const [productsData, setProductsData] = useState<IProductResponse[]>([]);
  const filters = useSelector((state: RootState) => state.filterSlice);

  const onApplyFilter = (): void => {
    const filterParams: string = buildSearchParams(filters);
    setSearchParams(filterParams);
  };

  useEffect(() => {
    if (data) {
      setProductsData(data.data);
    } else {
      setProductsData([]);
    }
  }, [data]);

  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight relative">
      <Breadcrumb />
      <div className="p-4 mx-auto w-full my-14">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Всі товари</h2>
        <div className="flex w-full">
          <ProductsFilter applyFilter={onApplyFilter} />

          {isLoading ? <Loader /> : <ProductsList products={productsData} />}
        </div>
      </div>
    </div>
  );
};

export default Products;
