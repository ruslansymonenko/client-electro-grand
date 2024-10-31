'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Pencil, Trash } from 'lucide-react';
import { IProductResponse } from '@/types/server-response-types/product-response';
import { PUBLIC_URL } from '@/config/url.config';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { openDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';

interface IProps {
  product: IProductResponse;
}

const AdminProductsListItem: FC<IProps> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch();

  const openDeleteCheck = () => {
    if (product.id) {
      dispatch(openDeleteCheckModal(product.id));
    }
  };

  return (
    <li className="w-full p-2 bg-white rounded-md shadow-sm flex items-center justify-between min-h-10 my-2">
      <div className={'flex gap-4'}>
        <div className="mr-4">id: {product.id}</div>
        <div className="flex gap-4">
          <Link href={PUBLIC_URL.product(product.slug)}>
            <span className="mr-2">Товар:</span>
            <span className="font-semibold">
              {product.name.length > 20 ? `${product.name.slice(0, 20)}...` : product.name}
            </span>
          </Link>
          <div>
            <span className="mr-2">Категорія:</span>
            <span className="font-semibold">{product.category.name}</span>
          </div>
          <div>
            <span className="mr-2">Підкатегорія:</span>
            <span className="font-semibold">{product.subcategory.name}</span>
          </div>
          <div>
            <span className="mr-2">Ціна:</span>
            <span className="font-semibold">{product.price}</span>
          </div>
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

export default AdminProductsListItem;
