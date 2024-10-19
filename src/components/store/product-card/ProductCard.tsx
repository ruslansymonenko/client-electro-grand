'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';
import Button from '@/components/common/button/Button';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { SERVER_URL } from '@/config/api.config';
import { IProductResponse } from '@/types/server-response-types/product-response';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '@/store/slices/cartSlice';
import toast from 'react-hot-toast';
import { toggleFavorites } from '@/store/slices/favoritesSlice';
import cn from 'clsx';

interface IProductCardProps {
  product: IProductResponse;
}

const ProductCard: FC<IProductCardProps> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch();
  const favoritesItems = useSelector((state: RootState) => state.favorites.favoritesItems);
  const [isProductFavorite, setIsProductFavorite] = useState<boolean>(false);

  const handleAddToCart = (): void => {
    dispatch(
      addToCart({
        product: product,
        quantity: 1,
      }),
    );

    toast.success('Товар додано в корзину');
  };

  const handleAddToFavorites = (): void => {
    dispatch(toggleFavorites(product));

    if (isProductFavorite) {
      toast.error('Товар видалено з обраного');
    } else {
      toast.success('Товар додано до обраного');
    }
  };

  useEffect(() => {
    const isFavorite = favoritesItems.find((item) => item.id === product.id);

    if (isFavorite) {
      setIsProductFavorite(true);
    } else {
      setIsProductFavorite(false);
    }
  }, [favoritesItems]);

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
          <Link href={PUBLIC_URL.subcategory(product.subcategory.slug)}>
            <h3 className="text-base hover:text-primary font-bold">{product.subcategory.name}</h3>
          </Link>
          {product.brand ? (
            <Link href={PUBLIC_URL.brandProducts(product.brand.slug)}>
              <h3 className="text-base hover:text-primary font-bold">{product.brand.name}</h3>
            </Link>
          ) : (
            ''
          )}
          <h4 className="text-xl text-gray-800 font-bold mt-4">
            <span className="mr-2">{product.price}</span>
            <span>UAH</span>
          </h4>
        </div>

        <div className="mb-2 flex items-center justify-between">
          <Button
            addClasses={'h-14 flex items-center justify-center hover:bg-secondary'}
            onClick={handleAddToCart}
          >
            <span className="mr-4">Додати до кошика</span>
            <ShoppingCart />
          </Button>
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
          <button
            className={cn(
              'cursor-pointer hover:text-secondaryDark2',
              isProductFavorite ? 'text-secondaryDark2' : '',
            )}
            onClick={handleAddToFavorites}
          >
            <Heart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
