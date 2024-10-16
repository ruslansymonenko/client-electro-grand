'use client';

import { FC, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';
import cn from 'clsx';

const pathReplacements: { [key: string]: string } = {
  '/subcategory': '/categories',
  '/product': '/products',
  '/category': '/categories',
  '/brand': '/brands',
  '/brand-products': '/brands',
};

const Breadcrumb: FC = () => {
  const pathname = usePathname();
  const [crumbItems, setCrumbItems] = useState<{ label: string; path: string }[]>([]);

  useEffect(() => {
    const segments: string[] = pathname.split('/').filter(Boolean);
    const newCrumbItems = segments.map((segment, index) => {
      const path: string = `/${segments.slice(0, index + 1).join('/')}`;

      const label: string =
        segment.length > 15
          ? `${segment.slice(0, 15)}...`
          : segment.charAt(0).toUpperCase() + segment.slice(1);

      const finalPath: string = pathReplacements[path] || path;

      return { label, path: finalPath };
    });
    setCrumbItems(newCrumbItems);
  }, [pathname]);

  return (
    <ul className="flex items-center justify-center space-x-4 font-[sans-serif] absolute top-40">
      <li className="text-gray-500 text-base cursor-pointer">
        <Link href={PUBLIC_URL.main()}>Головна</Link>
      </li>
      {crumbItems.map((item, index) => (
        <>
          <li className="text-gray-500 text-lg">/</li>
          <li className="text-gray-500 text-base cursor-pointer">
            <Link
              className={cn(item.path) === pathname ? 'text-primary font-bold' : ''}
              href={item.path}
            >
              {item.label}
            </Link>
          </li>
        </>
      ))}
    </ul>
  );
};

export default Breadcrumb;
