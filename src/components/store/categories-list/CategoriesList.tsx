'use client';

import { FC, useEffect, useState } from 'react';
import CategoryCard from '@/components/store/category-card/CategoryCard';
import { useGetAllCategories } from '@/hooks/categories/useCategories';
import { ICategoryResponse } from '@/types/server-response-types/category-response';
import Loader from '@/components/common/loader/Loader';

const CategoriesList: FC = () => {
  const { data, isLoading } = useGetAllCategories();
  const [categoriesData, setCategoriesData] = useState<ICategoryResponse[]>([]);

  useEffect(() => {
    if (data) {
      setCategoriesData(data.data);
    } else {
      setCategoriesData([]);
    }
  }, [data]);

  return (
    <div className="my-14">
      <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Категорії товарів</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          {isLoading ? (
            <Loader />
          ) : (
            categoriesData.map((item) => <CategoryCard key={item.id} categoryData={item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
