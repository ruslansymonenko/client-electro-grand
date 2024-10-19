import { FC } from 'react';
import ProductCard from '@/components/store/product-card/ProductCard';
import { IProductResponse } from '@/types/server-response-types/product-response';
import ProductsFilter from '@/components/store/products-filter/ProductsFilter';

interface IProductsListProps {
  title?: string;
  products: IProductResponse[];
}

const ProductsList: FC<IProductsListProps> = ({ products, title }) => {
  return (
    <div className="p-4 mx-auto w-full my-14">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12">
        {title ? title : 'Всі товари'}
      </h2>
      <div className="flex w-full">
        <ProductsFilter />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4">
          {products.length === 0
            ? 'Товарів не знайдено'
            : products.map((item) => <ProductCard key={item.id} product={item} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
