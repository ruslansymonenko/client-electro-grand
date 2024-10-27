import { FC } from 'react';
import { Cog, ShieldCheck, Headset, ChartNoAxesCombined, ChevronsRight } from 'lucide-react';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';

const Features: FC = () => {
  return (
    <div className="bg-white flex max-lg:flex-col px-4 my-8 gap-12 max-w-[1400px] mx-auto mt-24">
      <div>
        <h2 className="text-gray-800 text-4xl font-extrabold mb-6">
          Відкрийте наші ексклюзивні функції!
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Наш магазин електрики пропонує широкий асортимент товарів, включаючи розетки, кабелі,
          освітлення та щитове обладнання. Ми забезпечуємо високу якість та надійність кожного
          продукту.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-md:max-w-lg mx-auto">
        <div className="text-left bg-[#adf6e8] rounded-lg shadow p-6">
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <Cog />
          </div>
          <h3 className="text-gray-800 text-xl font-semibold mt-6 mb-3">Налаштування</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Ми пропонуємо можливість налаштування електричних систем під ваші потреби. Вибирайте з
            безлічі варіантів розеток та вимикачів для створення індивідуального дизайну.
          </p>
          <Link href={PUBLIC_URL.features()}>
            <button
              type="button"
              className="text-gray-800 border border-gray-300 px-4 py-2 rounded-lg font-bold flex items-center text-sm mt-6 hover:bg-white"
            >
              Дізнатися більше
              <ChevronsRight />
            </button>
          </Link>
        </div>

        <div className="text-left bg-[#adf6e8] rounded-lg shadow p-6">
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <ShieldCheck />
          </div>
          <h3 className="text-gray-800 text-xl font-semibold mt-6 mb-3">Безпека</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Ми дбаємо про вашу безпеку, пропонуючи продукцію з сертифікацією та високими стандартами
            якості.
          </p>
          <Link href={PUBLIC_URL.features()}>
            <button
              type="button"
              className="text-gray-800 border border-gray-300 px-4 py-2 rounded-lg font-bold flex items-center text-sm mt-6 hover:bg-white"
            >
              Дізнатися більше
              <ChevronsRight />
            </button>
          </Link>
        </div>

        <div className="text-left bg-[#adf6e8] rounded-lg shadow p-6">
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <Headset />
          </div>
          <h3 className="text-gray-800 text-xl font-semibold mt-6 mb-3">Підтримка</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Наша команда завжди готова допомогти вам з вибором та установкою обладнання. Ми
            забезпечуємо консультації та підтримку на всіх етапах.
          </p>
          <Link href={PUBLIC_URL.features()}>
            <button
              type="button"
              className="text-gray-800 border border-gray-300 px-4 py-2 rounded-lg font-bold flex items-center text-sm mt-6 hover:bg-white"
            >
              Дізнатися більше
              <ChevronsRight />
            </button>
          </Link>
        </div>

        <div className="text-left bg-[#adf6e8] rounded-lg shadow p-6">
          <div className="h-12 w-12 bg-white rounded-full flex items-center justify-center">
            <ChartNoAxesCombined />
          </div>
          <h3 className="text-gray-800 text-xl font-semibold mt-6 mb-3">Продуктивність</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Ми пропонуємо продукцію, яка відповідає всім сучасним вимогам до енергозбереження та
            ефективності. Забезпечте свою оселю якісними електричними рішеннями.
          </p>
          <Link href={PUBLIC_URL.features()}>
            <button
              type="button"
              className="text-gray-800 border border-gray-300 px-4 py-2 rounded-lg font-bold flex items-center text-sm mt-6 hover:bg-white"
            >
              Дізнатися більше
              <ChevronsRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Features;
