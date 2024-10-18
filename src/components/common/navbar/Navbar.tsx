'use client';

import { FC, useEffect, useState } from 'react';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';
import Image from 'next/image';
import { MapPin, Phone, ShoppingCart } from 'lucide-react';
import { appPages } from '@/components/common/navbar/nav-data';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const Navbar: FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const [quantityInCart, setQuantityInCart] = useState<number>(0);

  useEffect(() => {
    if (cartItems.length) {
      setQuantityInCart(cartItems.length);
    }
  }, [cartItems]);

  return (
    <header className="shadow-md font-[sans-serif] tracking-wide z-50 fixed w-full h-navbarHeight flex flex-col justify-between bg-white">
      <section className="md:flex lg:items-center relative py-3 lg:px-10 px-4 bg-white lg:min-h-[80px] max-lg:min-h-[60px]">
        <Link href={`${PUBLIC_URL.main()}`}>
          <Image src={'/icons/main-logo.svg'} alt="logo" width={100} height={100} />
        </Link>

        <div className="flex flex-wrap w-full items-center">
          <input
            type="text"
            placeholder="Пошук..."
            className="xl:w-96 max-lg:w-full lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 focus:bg-transparent px-6 rounded h-11 outline-none text-sm transition-all shadow-lg"
          />
          <div className="ml-auto max-lg:mt-4">
            <ul className="flex items-center">
              <li className="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-textPrimary cursor-pointer">
                <MapPin className="mr-2 text-primary" />
                <span>м. Львів, вул. Центральна 1</span>
              </li>
              <li className="max-sm:hidden flex text-[15px] max-lg:py-2 px-3 font-medium text-textPrimary cursor-pointer">
                <Phone className="mr-2 text-primary" />
                +38 (099) 123 45 67
              </li>
              <li className="max-lg:py-2 px-3 cursor-pointer">
                <span className="relative">
                  <Link href={PUBLIC_URL.cart()}>
                    <ShoppingCart />
                  </Link>
                  <span className="absolute -right-2 -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                    {quantityInCart}
                  </span>
                </span>
              </li>
              <li className="flex text-[15px] max-lg:py-2 px-3 hover:text-primary">
                <Link href={`${PUBLIC_URL.login()}`}>
                  <button className="px-4 py-2 text-sm rounded font-semibold bg-transparent shadow-lg">
                    Авторизація
                  </button>
                </Link>
              </li>
              <li className="lg:hidden">
                <button>
                  <svg
                    className="w-7 h-7"
                    fill="#333"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div
        id="collapseMenu"
        className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50 bg-white"
      >
        <button
          id="toggleClose"
          className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 fill-black"
            viewBox="0 0 320.591 320.591"
          >
            <path
              d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
              data-original="#000000"
            ></path>
            <path
              d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
              data-original="#000000"
            ></path>
          </svg>
        </button>

        <ul className="lg:flex lg:flex-wrap lg:items-center lg:justify-center px-10 py-3 min-h-[46px] gap-4 max-lg:space-y-4 max-lg:fixed max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50 bg-gray-400">
          {appPages.map((page, index) => (
            <li className="max-lg:border-b max-lg:py-3 px-3" key={index}>
              <Link
                href={page.pagePath}
                className="hover:text-secondary text-textLight text-[15px] font-medium block"
              >
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
