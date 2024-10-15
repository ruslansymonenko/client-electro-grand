import { FC } from 'react';
import BrandsList from '@/components/store/brands-list/BrandsList';

const Brands: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <BrandsList />
    </div>
  );
};

export default Brands;
