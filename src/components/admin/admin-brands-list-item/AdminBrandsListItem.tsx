'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Pencil, Trash } from 'lucide-react';
import { PUBLIC_URL } from '@/config/url.config';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { openDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';
import { getFormatedDate } from '@/utils/getFormatedDate/getFormatedDate';
import { IBrand } from '@/types/data-types/brand';

interface IProps {
  brand: IBrand;
}

const AdminBrandsListItem: FC<IProps> = ({ brand }) => {
  const dispatch: AppDispatch = useDispatch();

  const openDeleteCheck = () => {
    if (brand.id) {
      dispatch(openDeleteCheckModal(brand.id));
    }
  };

  return (
    <li className="w-full p-2 bg-white rounded-md shadow-sm flex items-center justify-between min-h-10 my-2">
      <div className={'flex gap-4 justify-around w-full'}>
        <div className="mr-4">id: {brand.id}</div>
        <div className="flex gap-4">
          <Link href={PUBLIC_URL.category(brand.slug)}>
            <span className="mr-2">Бренд:</span>
            <span className="font-semibold">
              {brand.name.length > 20 ? `${brand.name.slice(0, 20)}...` : brand.name}
            </span>
          </Link>
        </div>

        <div>
          <span className="mr-2">Створено:</span>
          <span>{getFormatedDate(brand.createdAt)}</span>
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

export default AdminBrandsListItem;
