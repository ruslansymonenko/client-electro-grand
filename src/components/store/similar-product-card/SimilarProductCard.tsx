'use client';

import { FC } from 'react';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';

import { Star } from 'lucide-react';
import { SERVER_URL } from '@/config/api.config';
import { IProduct } from '@/types/data-types/product';

interface IProductCardProps {
  product: IProduct;
}

const SimilarProductCard: FC<IProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white overflow-hidden rounded-md shadow-md hover:shadow-lg transition-all relative border">
      <Link href={PUBLIC_URL.product(product.slug)}>
        <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
          <img
            className="object-contain w-full h-full"
            src={`${SERVER_URL}/${product.images[0]}`}
            alt={product.name}
          />
        </div>
      </Link>

      <div className="p-6">
        <hr className="border-2 mb-6" />
        <div className="mb-2">
          <Link href={PUBLIC_URL.product(product.slug)}>
            <h3 className="text-base text-gray-800 mb-2 hover:text-secondaryDark2">
              {product.name}
            </h3>
          </Link>
          <h4 className="text-xl text-gray-800 font-bold mt-4">
            <span className="mr-2">{product.price}</span>
            <span>UAH</span>
          </h4>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1.5 mt-4">
            <Star strokeWidth={3} width={20} height={20} className={'text-secondaryDark'} />
            <Star strokeWidth={3} width={20} height={20} />
            <Star strokeWidth={3} width={20} height={20} />
            <Star strokeWidth={3} width={20} height={20} />
            <Star strokeWidth={3} width={20} height={20} />
            <p className="text-base text-gray-800 !ml-2">50</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimilarProductCard;
