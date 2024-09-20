import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-600 p-10 font-[sans-serif] tracking-wide">
      <div className="grid grid-cols-4">
        <div className="lg:flex lg:items-center">
          <Link href={`${PUBLIC_URL.main}`}>
            <Image src={'/icons/main-logo.svg'} alt="logo" width={200} height={200} />
          </Link>
        </div>

        <div className={'flex flex-col'}>
          <h4 className="text-lg font-semibold mb-6 text-white">Elektro Grand</h4>
          <span className="text-gray-300 text-sm w-3/4">
            Магазин сучасної електрики та освітлення. Висока якість та конкурентні ціни.
          </span>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">Контакт</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                info@elektro-grand.com.ua
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                +38 (099) 123 45 67
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                м. Львів, вул. Центральна 1
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">Інформація</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                Про Магазин
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                Умови
              </Link>
            </li>
            <li className="text-gray-300 text-sm">Графік роботи:</li>
            <li className="text-gray-300 text-sm">Пн - Пт, 9:00 - 18:00</li>
          </ul>
        </div>
      </div>

      <p className="text-gray-300 text-sm mt-10">
        © 2024. Elektro Grand. Освітлення та електрика.
      </p>
    </footer>
  );
};

export default Footer;
