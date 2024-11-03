'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Pencil, Trash, Image } from 'lucide-react';
import { IProductResponse } from '@/types/server-response-types/product-response';
import { PUBLIC_URL } from '@/config/url.config';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { openDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';
import { updateProductModal } from '@/store/slices/modals/updateProductModalSlice';
import { SERVER_URL } from '@/config/api.config';
import { setProductImagesModal } from '@/store/slices/modals/setProductImagesModalSlice';

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

  const openUpdateModal = () => {
    dispatch(updateProductModal.openModal(product.id));
  };

  const openSetElementImagesModal = () => {
    dispatch(setProductImagesModal.openModal(product.id));
  };

  return (
    <li className="w-full p-2 bg-white rounded-md shadow-sm flex items-center justify-between min-h-10 my-2">
      <div className={'flex gap-6 w-full items-center'}>
        <div className="mr-4 w-[80px]">id: {product.id}</div>

        <div className="h-[100px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
          <img
            className="object-contain w-full h-full"
            src={`${SERVER_URL}/${product.images[0]}`}
            alt={product.name}
          />
        </div>

        <div className="flex items-center w-3/12">
          <span className="mr-2">Товар:</span>
          <Link
            className="text-primary hover:text-secondaryDark2"
            href={PUBLIC_URL.product(product.slug)}
          >
            <span className="font-semibold text-sm">
              {product.name.length > 20 ? `${product.name.slice(0, 25)}...` : product.name}
            </span>
          </Link>
        </div>

        <div className="w-2/12">
          <span className="mr-2">Категорія:</span>
          <span className="font-semibold">{product.category.name}</span>
        </div>
        <div className="w-2/12">
          <span className="mr-2">Підкатегорія:</span>
          <span className="font-semibold">{product.subcategory.name}</span>
        </div>
        <div className="w-2/12">
          <span className="mr-2">Ціна:</span>
          <span className="font-semibold">{product.price}</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={openSetElementImagesModal}>
          <Image />
        </button>
        <button onClick={openUpdateModal}>
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
