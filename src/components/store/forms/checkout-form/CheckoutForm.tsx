import { FC } from 'react';
import Button from '@/components/common/button/Button';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';

const CheckoutForm: FC = () => {
  return (
    <div className="font-sans bg-white p-4 my-14">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1">
            Оформлення замовлення
          </h2>
        </div>

        <div className="mt-12">
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">01</h3>
              <h3 className="text-xl font-bold text-gray-800 mt-1">Покупець</h3>
            </div>

            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ім'я"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Прізвище"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Телефон"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">02</h3>
              <h3 className="text-xl font-bold text-gray-800 mt-1">Спосіб доставки</h3>
            </div>

            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Street address"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="State"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      placeholder="Zip Code"
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">03</h3>
              <h3 className="text-xl font-bold text-gray-800 mt-1">Метод оплати</h3>
            </div>

            <div className="md:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center">
                  <input type="radio" className="w-5 h-5 cursor-pointer" id="card" checked />
                  <label htmlFor="card" className="ml-4 flex gap-2 cursor-pointer">
                    <img
                      src="https://readymadeui.com/images/visa.webp"
                      className="w-12"
                      alt="card1"
                    />
                    <img
                      src="https://readymadeui.com/images/american-express.webp"
                      className="w-12"
                      alt="card2"
                    />
                    <img
                      src="https://readymadeui.com/images/master.webp"
                      className="w-12"
                      alt="card3"
                    />
                  </label>
                </div>

                <div className="flex items-center">
                  <input type="radio" className="w-5 h-5 cursor-pointer" id="paypal" />
                  <label htmlFor="paypal" className="ml-4 flex gap-2 cursor-pointer">
                    <img
                      src="https://readymadeui.com/images/paypal.webp"
                      className="w-20"
                      alt="paypalCard"
                    />
                  </label>
                </div>
              </div>

              <div className="grid sm:grid-cols-4 gap-4 mt-4">
                <div className="col-span-2">
                  <input
                    type="number"
                    placeholder="Card number"
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="EXP."
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="number"
                    placeholder="CVV"
                    className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-12">
            <div className="flex w-1/2">
              <Link className="mr-4 w-full" href={`${PUBLIC_URL.main()}`}>
                <Button>Продовжити покупки</Button>
              </Link>
              <Button addClasses={'bg-primary text-white'}>Підтвердити</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
