import { FC } from 'react';
import Link from 'next/link';
import Button from '@/components/common/button/Button';
import PresentationInfoCard from '@/components/store/presentation-info-card/PresentationInfoCard';

const PresentationInfoBrands: FC = () => {
  return (
    <div className="bg-white flex flex-col max-lg:flex-col my-8 gap-6 max-w-[1400px] mx-auto mt-24">
      <div className="flex w-full items-center justify-between">
        <h2 className="text-gray-800 text-4xl font-extrabold mb-4">Бренди</h2>
        <Link href={'#'}>
          <Button addClasses={'hover:bg-secondary'}>Переглянути більше</Button>
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <PresentationInfoCard title={'brand'} />
        <PresentationInfoCard title={'brand'} />
      </div>
    </div>
  );
};

export default PresentationInfoBrands;
