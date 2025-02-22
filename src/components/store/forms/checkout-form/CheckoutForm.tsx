'use client';

import { FC, useState } from 'react';
import Button from '@/components/common/button/Button';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const CheckoutForm: FC = () => {
  // const [isDropDownOpen, setIsDropDownOpen] = useState<boolean>(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('delivery-payment');
  const [newPostTerminal, setNewPostTerminal] = useState<number | null>(null);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerSurname, setCustomerSurname] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const cartSum = useSelector((state: RootState) => state.cart.cartSum);

  const handleTerminalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPostTerminal(event.target.value ? parseInt(event.target.value) : null);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleCustomerNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerName(event.target.value);
  };

  const handleCustomerSurnameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerSurname(event.target.value);
  };

  const handleCustomerEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerEmail(event.target.value);
  };

  const handleCustomerPhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerPhone(event.target.value);
  };

  // const toggleDropdown = () => {
  //   setIsDropDownOpen(!isDropDownOpen);
  // };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(event.target.id);
  };

  const handleSendOrder = () => {
    const customerData = {
      name: customerName,
      surname: customerSurname,
      email: customerEmail,
      phone: customerPhone,
    };

    const order = {
      customer: customerData,
      products: cartItems,
      paymentMethod: selectedPaymentMethod,
      deliveryAddress: `Нова пошта: ${newPostTerminal}, Місто: ${city}`,
    };
    console.log(order);
  };

  return (
    <div className="font-sans bg-white p-4 my-14">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 inline-block border-b-[3px] border-gray-800 pb-1 mb-4">
            Оформлення замовлення
          </h2>
        </div>

        <div className="text-center">
          <p className="text-gray-800 inline-block pb-1">Ваше замовлення на сумму: {cartSum}</p>
        </div>

        <div className="mt-12">
          <div className="grid md:grid-cols-3 gap-4 border-b-2 pb-6">
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
                      value={customerName}
                      onChange={handleCustomerNameChange}
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Прізвище"
                      value={customerSurname}
                      onChange={handleCustomerSurnameChange}
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={customerEmail}
                      onChange={handleCustomerEmailChange}
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Телефон"
                      value={customerPhone}
                      onChange={handleCustomerPhoneChange}
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-12 border-b-2 pb-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-300">02</h3>
              <h3 className="text-xl font-bold text-gray-800 mt-1">Спосіб доставки</h3>
            </div>

            <div className="md:col-span-2">
              <form>
                <p className="mb-2 font-semibold">Доступна доставка Новою Поштою</p>
                {/*<div className="relative font-[sans-serif] mb-6">*/}
                {/*  <button*/}
                {/*    type="button"*/}
                {/*    onClick={toggleDropdown}*/}
                {/*    className="px-5 py-2.5 rounded text-white text-sm font-semibold border-none outline-none bg-primary hover:bg-secondaryDark active:bg-secondaryDark2 z-10"*/}
                {/*  >*/}
                {/*    Вибрати спосіб доставки*/}
                {/*    <ArrowDown/>*/}
                {/*  </button>*/}

                {/*  {isDropDownOpen && (*/}
                {/*    <ul className="absolute block shadow-lg bg-white py-2 z-[1000] min-w-full w-max rounded max-h-96 overflow-auto">*/}
                {/*      <li className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer">*/}
                {/*        Нова Пошта*/}
                {/*      </li>*/}
                {/*      <li className="py-2.5 px-5 hover:bg-blue-50 text-black text-sm cursor-pointer">*/}
                {/*        Укр Пошта*/}
                {/*      </li>*/}
                {/*    </ul>*/}
                {/*  )}*/}
                {/*</div>*/}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="number"
                      placeholder="Відділення нової пошти"
                      value={newPostTerminal ?? ''}
                      onChange={handleTerminalChange}
                      className="px-4 py-3 bg-white text-gray-800 w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Місто"
                      value={city}
                      onChange={handleCityChange}
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
              <div className="flex items-center mb-4">
                <input
                  id="delivery-payment"
                  type="radio"
                  name="default-radio"
                  checked={selectedPaymentMethod === 'delivery-payment'}
                  onChange={handleOptionChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-emerald-500 dark:focus:ring-emerald-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-1"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Оплата при отриманні замовлення
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="order-payment"
                  type="radio"
                  name="default-radio"
                  checked={selectedPaymentMethod === 'order-payment'}
                  onChange={handleOptionChange}
                  className="w-4 h-4 text-primary bg-gray-100 border-gray-300 focus:ring-emerald-500 dark:focus:ring-emerald-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="default-radio-2"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Звичайна оплата
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-12">
            <div className="flex w-1/2">
              <Link className="mr-4 w-full" href={`${PUBLIC_URL.main()}`}>
                <Button>Продовжити покупки</Button>
              </Link>
              <Button addClasses={'bg-primary text-white'} onClick={handleSendOrder}>
                Підтвердити
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
