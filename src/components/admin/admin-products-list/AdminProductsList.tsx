import { FC } from 'react';
import AdminProductsListItem from '@/components/admin/admin-products-list-item/AdminProductsListItem';
import { IProductResponse } from '@/types/server-response-types/product-response';

interface IProps {
  products: IProductResponse[];
}

const AdminProductsList: FC<IProps> = ({ products }) => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-xl mb-4">Список товарів</h2>
      <ul className="w-full bg-gray-100 min-h-40 p-2">
        {products.map((item) => (
          <AdminProductsListItem product={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default AdminProductsList;
