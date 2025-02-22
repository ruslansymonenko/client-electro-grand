import { FC } from 'react';
import cn from 'clsx';
import SimilarProductCard from '@/components/store/similar-product-card/SimilarProductCard';
import { IProduct } from '@/types/data-types/product';

interface IProps {
  className?: string;
  products: IProduct[];
  limit?: number;
}

const SimilarProducts: FC<IProps> = ({ className, products, limit = 3 }) => {
  return (
    <div className={cn('w-full', className)}>
      <p className="font-bold mb-10 text-xl">Схожі товари</p>

      <div className="flex gap-4">
        {products.slice(0, limit).map((item) => (
          <SimilarProductCard product={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
