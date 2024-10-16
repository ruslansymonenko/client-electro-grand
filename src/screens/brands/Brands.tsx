import { FC } from 'react';
import BrandsList from '@/components/store/brands-list/BrandsList';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';

const Brands: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <Breadcrumb />
      <BrandsList />
    </div>
  );
};

export default Brands;
