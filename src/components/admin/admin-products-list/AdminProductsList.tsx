import { FC } from 'react';
import AdminProductsListItem from '@/components/admin/admin-products-list-item/AdminProductsListItem';

const AdminProductsList: FC = () => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-xl mb-4">Список товарів</h2>
      <ul className="w-full bg-gray-100 min-h-40 p-2">
        <AdminProductsListItem />
      </ul>
    </div>
  );
};

export default AdminProductsList;
