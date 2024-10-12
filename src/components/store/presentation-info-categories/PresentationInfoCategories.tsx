'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/common/button/Button';
import PresentationInfoCard from '@/components/store/presentation-info-card/PresentationInfoCard';
import { ICategoryResponse } from '@/types/server-response-types/category-response';
import { useGetAllCategories } from '@/hooks/categories/useCategories';
import Loader from '@/components/common/loader/Loader';

const PresentationInfo: FC = () => {
  const { data, isLoading, error } = useGetAllCategories();
  const [categoriesData, setCategoriesData] = useState<ICategoryResponse[]>([]);

  useEffect(() => {
    if (data) {
      console.log(data.data);
      setCategoriesData(data.data.slice(0, 6));
    } else {
      setCategoriesData([]);
    }
  }, [data]);

  return (
    <div className="bg-white flex flex-col max-lg:flex-col my-8 gap-6 max-w-[1400px] mx-auto mt-24">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-gray-800 text-4xl font-extrabold mb-4">Категорії товарів</h2>
        <Link href={'#'}>
          <Button addClasses={'hover:bg-secondary'}>Переглянути більше</Button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {isLoading ? (
          <Loader />
        ) : (
          categoriesData.map((item) => <PresentationInfoCard title={item.name} key={item.id} />)
        )}
      </div>
    </div>
  );
};

export default PresentationInfo;
