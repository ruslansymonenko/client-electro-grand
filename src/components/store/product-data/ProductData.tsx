import { FC } from 'react';
import styles from './ProductData.module.scss';
import { ShoppingCart, Star } from 'lucide-react';
import Button from '@/components/common/button/Button';
import { IProductDataResponse } from '@/types/server-response-types/product-response';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';
import { SERVER_URL } from '@/config/api.config';
import ProductReviews from '@/components/store/product-rewies/ProductReviews';

interface IProductDataProps {
  product: IProductDataResponse;
}

const ProductData: FC<IProductDataProps> = ({ product }) => {
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

            <div className="flex flex-wrap gap-4 mt-8">
              <Button addClasses={'h-14 flex items-center justify-center hover:bg-secondary'}>
                <span className="mr-4">Додати до кошика</span>
                <ShoppingCart />
              </Button>
            </div>
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
      </div>
    </div>
  );
};

export default ProductData;
