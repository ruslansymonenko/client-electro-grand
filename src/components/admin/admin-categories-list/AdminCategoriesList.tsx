import { FC } from 'react';
import { ICategoryResponse } from '@/types/server-response-types/category-response';
import AdminCategoriesListItem from '@/components/admin/admin-categories-list-item/AdminCategoriesListItem';

interface IProps {
  categories: ICategoryResponse[];
}

const AdminCategoriesList: FC<IProps> = ({ categories }) => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-xl mb-4">Список категорій</h2>
      <ul className="w-full bg-gray-100 min-h-40 p-2">
        {categories.map((item) => (
          <AdminCategoriesListItem category={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default AdminCategoriesList;
