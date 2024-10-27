import { FC } from 'react';
import Link from 'next/link';
import { Pencil, Trash } from 'lucide-react';

const AdminProductsListItem: FC = () => {
  return (
    <li className="w-full p-2 bg-white rounded-md shadow-sm flex items-center justify-between min-h-10">
      <div className={'flex gap-4'}>
        <div>id: 1</div>
        <Link href="#">Товар</Link>
        <div>Категорія: тест</div>
        <div>Підкатегорія: тест</div>
        <div>Ціна: 100</div>
      </div>
      <div className="flex items-center gap-4">
        <button>
          <Pencil />
        </button>
        <button>
          <Trash />
        </button>
      </div>
    </li>
  );
};

export default AdminProductsListItem;
