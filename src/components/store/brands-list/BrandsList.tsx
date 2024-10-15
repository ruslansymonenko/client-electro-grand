'use client';

import { FC, useEffect, useState } from 'react';
import Loader from '@/components/common/loader/Loader';
import { useGetAllBrands } from '@/hooks/brands/useBrands';
import { IBrand } from '@/types/data-types/brand';
import BrandCard from '@/components/store/brand-card/BrandCard';

const BrandsList: FC = () => {
  const { data, isLoading, error } = useGetAllBrands();
  const [brandsData, setBrandsData] = useState<IBrand[]>([]);

  useEffect(() => {
    if (data) {
      setBrandsData(data.data);
    } else {
      setBrandsData([]);
    }
  }, [data]);

  return (
    <div className="my-14">
      <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-12">Бренди</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
          {isLoading ? (
            <Loader />
          ) : (
            brandsData.map((item) => (
              <BrandCard key={item.id} name={item.name} image={item.image} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BrandsList;
