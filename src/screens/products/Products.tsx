/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { FC, useEffect, useState } from 'react';
import ProductsList from '@/components/store/products-list/ProductsList';
import { useGetAllProducts } from '@/hooks/products/useProducts';
import { IProductResponse } from '@/types/server-response-types/product-response';
import Loader from '@/components/common/loader/Loader';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';
import ProductsFilter from '@/components/store/products-filter/ProductsFilter';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import { Pagination } from '@/components/common/pagination/Pagination';
import { setCurrentPage } from '@/store/slices/productPaginationSlice';
import { buildSearchParams } from '@/utils/buildSearchParams/buildSearchParams';
import { clearFilter, defaultFilter, IFiltersSlice, setPageSize } from '@/store/slices/filterSlice';

const Products: FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [searchParams, setSearchParams] = useState<string>('');
  const { data, isLoading } = useGetAllProducts(searchParams);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [productsData, setProductsData] = useState<IProductResponse[]>([]);
  const filters: IFiltersSlice = useSelector((state: RootState) => state.filterSlice);
  const currentPage: number = useSelector(
    (state: RootState) => state.productPagination.currentPage,
  );

  const pageSize: number = useSelector((state: RootState) => state.productPagination.pageSize);

  const onApplyFilter = (): void => {
    const filterParams: string = buildSearchParams(filters);
    setSearchParams(filterParams);
  };

  const onClearFilter = (): void => {
    dispatch(clearFilter());
    setSearchParams(buildSearchParams(defaultFilter));
  };

  const handlePageChange = (newPage: number) => {
    dispatch(setCurrentPage(newPage));
    const filterParams: string = buildSearchParams({
      ...filters,
      currentPage: newPage,
    });
    setSearchParams(filterParams);
  };

  const handlePageSizeChange = (newSize: number) => {
    dispatch(setPageSize(newSize));
    const filterParams: string = buildSearchParams({
      ...filters,
      pageSize: newSize,
    });
    setSearchParams(filterParams);
  };

  useEffect(() => {
    if (data) {
      setProductsData(data.data.products);
      setTotalPages(data.data.totalPages);
    } else {
      setProductsData([]);
    }
  }, [data]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight relative">
      <Breadcrumb />
      <div className="p-4 mx-auto w-full my-14">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Всі товари</h2>
        <div className="flex w-full">
          <ProductsFilter applyFilter={onApplyFilter} clearFilter={onClearFilter} />

          {isLoading ? <Loader /> : <ProductsList products={productsData} />}
        </div>
        <div className="my-10">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
