import { FC } from 'react';
import { Mail, Phone } from 'lucide-react';
import Button from '@/components/common/button/Button';

const Contact: FC = () => {
  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight">
      <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-4xl bg-white font-[sans-serif] my-14">
        <div>
          <h1 className="text-gray-800 text-3xl font-extrabold">Зв&apos;язатись з нами</h1>
          <p className="text-sm text-gray-500 mt-4">
            Маєте питання по замовленню, або цікавить коммерційна співпраця?
          </p>

          <div className="mt-6">
            <h2 className="text-gray-800 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <Mail />
                </div>
                <a href="#" className="text-primary text-sm ml-4">
                  <small className="block">Mail</small>
                  <strong>info@example.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-800 text-base font-bold">Телефон</h2>

            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-gray-200 h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <Phone />
                </div>
                <a href="#" className="text-primary text-sm ml-4">
                  <small className="block">Телефон</small>
                  <strong>+38 (099) 123 45 67</strong>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="ml-auto space-y-4">
          <input
            type="text"
            placeholder="Ім'я"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          />
          <input
            type="email"
            placeholder="email"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          />
          <input
            type="text"
            placeholder="Тема"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          />
          <textarea
            placeholder="Повідомлення"
            className="w-full rounded-md px-4 bg-gray-100 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
          ></textarea>
          <Button addClasses="bg-primary" style={{ color: 'white' }}>
            Відправити
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
