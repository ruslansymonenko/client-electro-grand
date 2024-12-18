'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import Button from '@/components/common/button/Button';
import PresentationInfoCard from '@/components/store/presentation-info-card/PresentationInfoCard';
import Loader from '@/components/common/loader/Loader';
import { IBrand } from '@/types/data-types/brand';
import { useGetAllBrands } from '@/hooks/brands/useBrands';
import { PUBLIC_URL } from '@/config/url.config';

const PresentationInfoBrands: FC = () => {
  const { data, isLoading, error } = useGetAllBrands();
  const [brandsData, setBrandsData] = useState<IBrand[]>([]);

  useEffect(() => {
    if (data) {
      setBrandsData(data.data.slice(0, 6));
    } else {
      setBrandsData([]);
    }
  }, [data]);

  return (
    <div className="bg-white flex flex-col max-lg:flex-col my-8 gap-6 max-w-[1400px] mx-auto mt-24">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-gray-800 text-4xl font-extrabold mb-4">Бренди</h2>
        <Link href={PUBLIC_URL.brands()}>
          <Button addClasses={'hover:bg-secondary'}>Переглянути більше</Button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {isLoading ? (
          <Loader />
        ) : (
          brandsData.map((item) => (
            <PresentationInfoCard
              title={item.name}
              image={item.image}
              slug={item.slug}
              key={item.id}
              type={'brand'}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default PresentationInfoBrands;
