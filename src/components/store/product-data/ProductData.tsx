import { FC, useEffect, useState } from 'react';
import styles from './ProductData.module.scss';
import { Heart, ShoppingCart, Star, Trash } from 'lucide-react';
import Button from '@/components/common/button/Button';
import { IProductDataResponse } from '@/types/server-response-types/product-response';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';
import { SERVER_URL } from '@/config/api.config';
import ProductReviews from '@/components/store/product-rewies/ProductReviews';
import SimilarProducts from '@/components/store/similar-products/SimilarProducts';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '@/store/slices/cartSlice';
import toast from 'react-hot-toast';
import { toggleFavorites } from '@/store/slices/favoritesSlice';
import cn from 'clsx';

interface IProductDataProps {
  product: IProductDataResponse;
}

const ProductData: FC<IProductDataProps> = ({ product }) => {
  const dispatch: AppDispatch = useDispatch();
  const favoritesItems = useSelector((state: RootState) => state.favorites.favoritesItems);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [isProductFavorite, setIsProductFavorite] = useState<boolean>(false);
  const [isProductInCart, setIsProductInCart] = useState<boolean>(false);

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

  const handleDeleteFromCart = () => {
    dispatch(removeFromCart(product.id));

    toast.error('Товар видалено з кошика');
  };

  useEffect(() => {
    const isFavorite = favoritesItems.find((item) => item.id === product.id);

    if (isFavorite) {
      setIsProductFavorite(true);
    } else {
      setIsProductFavorite(false);
    }
  }, [favoritesItems]);

  useEffect(() => {
    const isInCart = cartItems.find((item) => item.product.id === product.id);

    if (isInCart) {
      setIsProductInCart(true);
    } else {
      setIsProductInCart(false);
    }
  }, [cartItems]);

  return (
    <div className={styles.data}>
      <div className={styles.data_container}>
        <div className={styles.main_data}>
          <div className={styles.img_container}>
            <div className={styles.img}>
              <img
                className="object-contain w-full h-full"
                src={`${SERVER_URL}/${product.images[0]}`}
                alt={product.name}
              />
            </div>
          </div>

          <div className={styles.info}>
            <div className="mb-4">
              <h2 className="text-2xl font-extrabold text-gray-800 mb-4">{product.name}</h2>
              <ul className="flex flex-col items-center w-full">
                <li className="flex items-center justify-between w-full mb-2">
                  <span>Категорія:</span>
                  <Link
                    className="font-bold hover:text-primary transition-all"
                    href={PUBLIC_URL.category(product.category.slug)}
                  >
                    {product.category.name}
                  </Link>
                </li>
                <li className="flex items-center justify-between w-full mb-2">
                  <span>Підкатегорія:</span>
                  <Link
                    className="font-bold hover:text-primary transition-all"
                    href={PUBLIC_URL.subcategory(product.subcategory.slug)}
                  >
                    {product.subcategory.name}
                  </Link>
                </li>
                <li className="flex items-center justify-between w-full mb-2">
                  <span>Бренд:</span>
                  <Link
                    className="font-bold hover:text-primary transition-all"
                    href={PUBLIC_URL.brandProducts(product.brand.slug)}
                  >
                    {product.brand.name}
                  </Link>
                </li>
              </ul>
              <div className="flex space-x-2 mt-4">
                <Star strokeWidth={3} width={20} height={20} className={'text-secondaryDark'} />
                <Star strokeWidth={3} width={20} height={20} />
                <Star strokeWidth={3} width={20} height={20} />
                <Star strokeWidth={3} width={20} height={20} />
                <Star strokeWidth={3} width={20} height={20} />
                <h4 className="text-gray-800 text-base">500 Відгуків</h4>
              </div>
            </div>

            <div>{product.description}</div>

            <div className="flex flex-wrap gap-4 mt-8">
              <p className="text-gray-800 text-2xl font-bold">
                <span className="mr-4">{product.price}</span>
                <span>UAH</span>
              </p>
            </div>

            <div className="mb-2 flex items-center justify-between">
              {isProductInCart ? (
                <>
                  <Button
                    addClasses={cn(
                      'h-14 flex items-center justify-center hover:bg-secondary',
                      isProductInCart ? 'bg-secondary' : '',
                    )}
                    onClick={handleDeleteFromCart}
                  >
                    <span className="mr-4">Видалити з кошика</span>
                    <Trash />
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    addClasses={'h-14 flex items-center justify-center hover:bg-secondary'}
                    onClick={handleAddToCart}
                  >
                    <span className="mr-4">Додати до кошика</span>
                    <ShoppingCart />
                  </Button>
                </>
              )}
            </div>

            <button
              className={cn(
                'cursor-pointer hover:text-secondaryDark2 absolute top-1 right-2',
                isProductFavorite ? 'text-secondaryDark2' : '',
              )}
              onClick={handleAddToFavorites}
            >
              <Heart />
            </button>
          </div>
        </div>

        <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
          <h3 className="text-xl font-bold text-gray-800">Інформація</h3>
          <ul className="mt-4 space-y-6 text-gray-800">
            {product.productAttribute.map((item, key) => (
              <li key={item.id} className="border-b pb-1">
                <span className="font-semibold text-primary">
                  {item.attributeValue.attribute.name}
                </span>
                <span className="ml-4 float-right font-bold">{item.attributeValue.value}</span>
              </li>
            ))}
          </ul>
        </div>

        <ProductReviews />
        <SimilarProducts products={product.similarProducts} className={'mt-10'} />
      </div>
    </div>
  );
};

export default ProductData;
