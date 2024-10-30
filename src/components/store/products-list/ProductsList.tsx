import { FC } from 'react';
import ProductCard from '@/components/store/product-card/ProductCard';
import { IProductResponse } from '@/types/server-response-types/product-response';

interface IProductsListProps {
  products: IProductResponse[];
}

const ProductsList: FC<IProductsListProps> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4">
      {products.length === 0
        ? 'Товарів не знайдено'
        : products.map((item) => <ProductCard key={item.id} product={item} />)}
    </div>
  );
};

export default ProductsList;
