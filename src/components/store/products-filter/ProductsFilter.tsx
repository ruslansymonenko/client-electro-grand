'use client';

import React, { FC, useEffect, useState } from 'react';
import Button from '@/components/common/button/Button';
import PriceFilter from '@/components/store/products-filter/PriceFilter';
import {
  CheckboxFilterGroup,
  ICheckboxOption,
} from '@/components/store/products-filter/CheckboxFilterGroup';
import { useGetAllCategories } from '@/hooks/categories/useCategories';
import Loader from '@/components/common/loader/Loader';
import { useGetAllSubcategories } from '@/hooks/subcategories/useSubcategories';
import { useGetAllBrands } from '@/hooks/brands/useBrands';

interface IProductsFilterProps {
  applyFilter: () => void;
  clearFilter: () => void;
}

const ProductsFilter: FC<IProductsFilterProps> = ({ applyFilter, clearFilter }) => {
  const categoriesData = useGetAllCategories();
  const subcategoriesData = useGetAllSubcategories();
  const brandsData = useGetAllBrands();
  const [filterCategoriesOptions, setFilterCategoriesOptions] = useState<ICheckboxOption[]>([]);
  const [filterSubcategoriesOptions, setFilterSubcategoriesOptions] = useState<ICheckboxOption[]>(
    [],
  );
  const [filterBrandsOptions, setFilterBrandsOptions] = useState<ICheckboxOption[]>([]);

  useEffect(() => {
    if (categoriesData.data) {
      const filterOptions: ICheckboxOption[] = categoriesData.data.data.map((item) => {
        return {
          label: item.name,
          value: item.slug,
          checked: false,
        };
      });
      setFilterCategoriesOptions(filterOptions);
    }
  }, [categoriesData.data]);

  useEffect(() => {
    if (subcategoriesData.data) {
      const filterOptions: ICheckboxOption[] = subcategoriesData.data.data.map((item) => {
        return {
          label: item.name,
          value: item.slug,
          checked: false,
        };
      });

      setFilterSubcategoriesOptions(filterOptions);
    }
  }, [subcategoriesData.data]);

  useEffect(() => {
    if (brandsData.data) {
      const filterOptions: ICheckboxOption[] = brandsData.data.data.map((item) => {
        return {
          label: item.name,
          value: item.slug,
          checked: false,
        };
      });
      setFilterBrandsOptions(filterOptions);
    }
  }, [categoriesData.data]);

  return (
    <div className="w-1/4 shadow-lg mr-4 p-4">
      <h2 className="text-xl font-bold">Фільтр</h2>

      <PriceFilter min={0} max={10000} />

      {categoriesData.isLoading ? (
        <Loader />
      ) : (
        <CheckboxFilterGroup
          options={filterCategoriesOptions}
          title={'Категорії'}
          className="my-4"
        />
      )}

      {subcategoriesData.isLoading ? (
        <Loader />
      ) : (
        <CheckboxFilterGroup
          options={filterSubcategoriesOptions}
          title={'Підкатегорії'}
          className="my-4"
        />
      )}

      {subcategoriesData.isLoading ? (
        <Loader />
      ) : (
        <CheckboxFilterGroup options={filterBrandsOptions} title={'Бренди'} className="my-4" />
      )}

      <Button addClasses={'bg-primary text-white'} onClick={applyFilter}>
        Застосувати
      </Button>
      <Button addClasses={'bg-secondary mt-4'} onClick={clearFilter}>
        Очистити
      </Button>
    </div>
  );
};

export default ProductsFilter;
