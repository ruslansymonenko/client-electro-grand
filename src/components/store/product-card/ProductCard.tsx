import { FC } from 'react';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';
import Button from '@/components/common/button/Button';
import { ShoppingCart, Star } from 'lucide-react';
import { SERVER_URL } from '@/config/api.config';

interface IProductCardProps {
  name: string;
  price: number;
  subcategory: string;
  brand: string | null;
  images: string[];
}

const ProductCard: FC<IProductCardProps> = ({ name, price, subcategory, brand, images }) => {
  return (
    <div className="bg-white overflow-hidden cursor-pointer rounded-md shadow-md hover:shadow-lg transition-all relative border">
      <div className="w-full h-[250px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 p-2">
        <img src={`${SERVER_URL}/${images[0]}`} alt={name} />
      </div>

      <div className="p-6">
        <hr className="border-2 mb-6" />
        <div className="mb-2">
          <h3 className="text-base text-gray-800 mb-2">{name}</h3>
          <h3 className="text-base text-primary font-bold">{subcategory}</h3>
          {brand ? <h3 className="text-base text-primary font-bold">{subcategory}</h3> : ''}
          <h4 className="text-xl text-gray-800 font-bold mt-4">
            <span className="mr-2">{price}</span>
            <span>UAH</span>
          </h4>
        </div>

        <div className="mb-2 flex items-center justify-between">
          <Button addClasses={'h-14 flex items-center justify-center hover:bg-secondary'}>
            <span className="mr-4">Додати до кошика</span>
            <ShoppingCart />
          </Button>
        </div>

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
  );
};

export default ProductCard;
