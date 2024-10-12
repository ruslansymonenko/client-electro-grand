'use client';

import { useEffect } from 'react';
import Button from '@/components/common/button/Button';
import { PUBLIC_URL } from '@/config/url.config';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center flex flex-col items-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Шось пішло не так :(
          </p>
          <p className="text-lg font-light text-gray-500 dark:text-gray-400 mb-10">
            Вибачте виникла технічна поилка, спробуйте повернутись на головну сторінку, або
            сбробуйте пізніше!{' '}
          </p>
          <Button addClasses="bg-primary" style={{ width: '50%' }}>
            <Link href={PUBLIC_URL.main()}>На Головну</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
