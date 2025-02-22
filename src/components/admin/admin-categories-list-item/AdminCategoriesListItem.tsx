'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Pencil, Trash } from 'lucide-react';
import { PUBLIC_URL } from '@/config/url.config';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { openDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';
import { ICategoryResponse } from '@/types/server-response-types/category-response';
import { getFormatedDate } from '@/utils/getFormatedDate/getFormatedDate';
import { ISubcategoryResponse } from '@/types/server-response-types/subcategory-response';

interface IProps {
  category: ICategoryResponse | ISubcategoryResponse;
}

const AdminCategoriesListItem: FC<IProps> = ({ category }) => {
  const dispatch: AppDispatch = useDispatch();

  const openDeleteCheck = () => {
    if (category.id) {
      dispatch(openDeleteCheckModal(category.id));
    }
  };

  const isSubcategoryResponse = (
    item: ICategoryResponse | ISubcategoryResponse,
  ): item is ISubcategoryResponse => {
    return 'category' in item;
  };

  return (
    <li className="w-full p-2 bg-white rounded-md shadow-sm flex items-center justify-between min-h-10 my-2">
      <div className={'flex gap-4 justify-around w-full'}>
        <div className="mr-4">id: {category.id}</div>
        <div className="flex gap-4">
          <Link href={PUBLIC_URL.category(category.slug)}>
            <span className="mr-2">Категорія:</span>
            <span className="font-semibold">
              {category.name.length > 20 ? `${category.name.slice(0, 20)}...` : category.name}
            </span>
          </Link>
        </div>

        {isSubcategoryResponse(category) && category.category && (
          <div>
            <span className="mr-2">Належить до категорії:</span>
            <span className="font-semibold">{category.category.name}</span>
          </div>
        )}

        <div>
          <span className="mr-2">Створено:</span>
          <span>{getFormatedDate(category.createdAt)}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button>
          <Pencil />
        </button>
        <button onClick={openDeleteCheck}>
          <Trash />
        </button>
      </div>
    </li>
  );
};

export default AdminCategoriesListItem;
