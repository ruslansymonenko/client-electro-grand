import { FC } from 'react';
import styles from './ProductData.module.scss';
import { ShoppingCart, Star } from 'lucide-react';
import Button from '@/components/common/button/Button';
import { IProductResponse } from '@/types/server-response-types/product-response';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';
import { SERVER_URL } from '@/config/api.config';

interface IProductDataProps {
  product: IProductResponse;
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
            <li className="text-sm">
              TYPE <span className="ml-4 float-right">LAPTOP</span>
            </li>
            <li className="text-sm">
              RAM <span className="ml-4 float-right">16 BG</span>
            </li>
            <li className="text-sm">
              SSD <span className="ml-4 float-right">1000 BG</span>
            </li>
            <li className="text-sm">
              PROCESSOR TYPE <span className="ml-4 float-right">INTEL CORE I7-12700H</span>
            </li>
            <li className="text-sm">
              PROCESSOR SPEED <span className="ml-4 float-right">2.3 - 4.7 GHz</span>
            </li>
            <li className="text-sm">
              DISPLAY SIZE INCH <span className="ml-4 float-right">16.0</span>
            </li>
            <li className="text-sm">
              DISPLAY SIZE SM <span className="ml-4 float-right">40.64 cm</span>
            </li>
            <li className="text-sm">
              DISPLAY TYPE <span className="ml-4 float-right">OLED, TOUCHSCREEN, 120 Hz</span>
            </li>
            <li className="text-sm">
              DISPLAY RESOLUTION <span className="ml-4 float-right">2880x1620</span>
            </li>
          </ul>
        </div>

        <div className="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 w-1/2 border">
          <h3 className="text-xl font-bold text-gray-800">Відгуки (10)</h3>
          <div className="grid md:grid-cols-2 gap-12 mt-4">
            <div className="space-y-3">
              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-bold">5.0</p>
                <svg
                  className="w-5 fill-secondaryDark ml-1"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                  <div className="w-2/3 h-full rounded bg-secondaryDark"></div>
                </div>
                <p className="text-sm text-gray-800 font-bold ml-3">66%</p>
              </div>

              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-bold">4.0</p>
                <svg
                  className="w-5 fill-secondaryDark ml-1"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                  <div className="w-1/3 h-full rounded bg-secondaryDark"></div>
                </div>
                <p className="text-sm text-gray-800 font-bold ml-3">33%</p>
              </div>

              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-bold">3.0</p>
                <svg
                  className="w-5 fill-secondaryDark ml-1"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                  <div className="w-1/6 h-full rounded secondaryDark"></div>
                </div>
                <p className="text-sm text-gray-800 font-bold ml-3">16%</p>
              </div>

              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-bold">2.0</p>
                <svg
                  className="w-5 fill-secondaryDark ml-1"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                  <div className="w-1/12 h-full rounded bg-secondaryDark"></div>
                </div>
                <p className="text-sm text-gray-800 font-bold ml-3">8%</p>
              </div>

              <div className="flex items-center">
                <p className="text-sm text-gray-800 font-bold">1.0</p>
                <svg
                  className="w-5 fill-secondaryDark ml-1"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <div className="bg-gray-400 rounded w-full h-2 ml-3">
                  <div className="w-[6%] h-full rounded bg-secondaryDark"></div>
                </div>
                <p className="text-sm text-gray-800 font-bold ml-3">6%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductData;
