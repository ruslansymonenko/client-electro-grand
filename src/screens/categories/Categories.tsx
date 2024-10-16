import { FC } from 'react';
import CategoriesList from '@/components/store/categories-list/CategoriesList';
import Breadcrumb from '@/components/common/breadcrumb/Breadcrumb';

const Categories: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <Breadcrumb />
      <CategoriesList />
    </div>
  );
};

export default Categories;
