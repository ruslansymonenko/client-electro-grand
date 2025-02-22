import { FC } from 'react';
import { IBrand } from '@/types/data-types/brand';
import AdminBrandsListItem from '@/components/admin/admin-brands-list-item/AdminBrandsListItem';

interface IProps {
  brands: IBrand[];
}

const AdminBrandsList: FC<IProps> = ({ brands }) => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-xl mb-4">Список брендів</h2>
      <ul className="w-full bg-gray-100 min-h-40 p-2">
        {brands.map((item) => (
          <AdminBrandsListItem brand={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default AdminBrandsList;
