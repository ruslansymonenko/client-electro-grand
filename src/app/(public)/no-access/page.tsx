import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Немає доступу',
};

export default function NoAccessPage() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
            401
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Технічна помилка
          </p>
          <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Вибачте, сталась технічна помилка, або ви не маєте доступу до цієї сторінки. Ви можете
            повернутись на головну.{' '}
          </p>
          <Link
            href="/"
            className="inline-flex text-white bg-primary hover:scale-105 transition-all font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
          >
            Повернутись на головну.
          </Link>
        </div>
      </div>
    </section>
  );
}
