import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';

const Footer: FC = () => {
  return (
    <footer className="bg-gray-600 p-10 font-[sans-serif] tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:flex lg:items-center">
          <Link href={`${PUBLIC_URL.main}`}>
            <Image src={'/icons/main-logo.svg'} alt="logo" width={200} height={200} />
          </Link>
        </div>

        <div className="lg:flex lg:items-center"></div>

        <div>
          <h4 className="text-lg font-semibold mb-6 text-white">Контакт</h4>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                Email
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                Телефон
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-300 hover:text-white text-sm">
                Адреса
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
          </ul>
        </div>
      </div>

      <p className="text-gray-300 text-sm mt-10">© Elektro Grand. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
