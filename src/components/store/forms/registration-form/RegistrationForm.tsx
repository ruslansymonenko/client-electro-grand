import { FC } from 'react';
import { Mail, KeyRound } from 'lucide-react';
import Button from '@/components/common/button/Button';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';

const RegistrationForm: FC = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-4 mt-14">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">Реєстрація</h2>
            <form className="mt-8">
              <div className={'mb-6'}>
                <label className="font-bold text-gray-800 text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md shadow-md outline-gray-200 mr-2"
                    placeholder="Email"
                  />
                  <Mail />
                </div>
              </div>

              <div className="mb-10">
                <label className="font-bold text-gray-800 text-sm mb-2 block">Пароль</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type="password"
                    required
                    className="w-full text-gray-800 text-sm border border-gray-300 px-4 py-3 rounded-md shadow-md outline-gray-200 mr-2"
                    placeholder="Enter password"
                  />
                  <KeyRound />
                </div>
              </div>

              <div>
                <Button addClasses={'hover:bg-primary hover:text-white'}>Зареєструватись</Button>
              </div>
              <p className="text-gray-800 text-sm mt-8 text-center">
                Вже маєте аккаунт?
                <Link
                  href={`${PUBLIC_URL.login()}`}
                  className="text-primary hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Авторизація
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
