import { FC } from 'react';
import Link from 'next/link';
import { ADMIN_URL } from '@/config/url.config';

const AdminNav: FC = () => {
  return (
    <ul className="grid grid-cols-4 gap-4">
      <li className="font-bold hover:text-primary">
        <Link href={ADMIN_URL.admin()}>Магазин</Link>
      </li>
      <li className="font-bold hover:text-primary">
        <Link href={ADMIN_URL.orders()}>Замовлення</Link>
      </li>
      <li className="font-bold hover:text-primary">
        <Link href={ADMIN_URL.customers()}>Клієнти</Link>
      </li>
      <li className="font-bold hover:text-primary">
        <Link href={ADMIN_URL.products()}>Управління товарами</Link>
      </li>
      <li className="font-bold hover:text-primary">
        <Link href={ADMIN_URL.categories()}>Управління категоріями</Link>
      </li>
      <li className="font-bold hover:text-primary">
        <Link href={ADMIN_URL.subcategories()}>Управління підкатегоріями</Link>
      </li>
      <li className="font-bold hover:text-primary">
        <Link href={ADMIN_URL.subcategories()}>Управління брендами</Link>
      </li>
      <li className="font-bold hover:text-primary">
        <Link href={ADMIN_URL.subcategories()}>Управління Брендами</Link>
      </li>
    </ul>
  );
};

export default AdminNav;
