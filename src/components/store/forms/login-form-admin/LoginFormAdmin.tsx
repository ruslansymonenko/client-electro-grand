'use client';

import { FC } from 'react';
import { Mail, KeyRound } from 'lucide-react';
import Button from '@/components/common/button/Button';
import Link from 'next/link';
import { PUBLIC_URL } from '@/config/url.config';
import { useAuthForm } from '@/hooks/auth/useAuthForm';
import FormField from '@/components/common/form-field/FormField';

const LoginFormAdmin: FC = () => {
  const { onSubmit, form } = useAuthForm('login-admin');
  const { handleSubmit, control, formState } = form;

  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

  return (
    <div className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-4 py-8 mt-14">
        <div className="max-w-md w-full">
          <div className="p-8 rounded-2xl bg-white shadow">
            <h2 className="text-gray-800 text-center text-2xl font-bold">Авторизація</h2>
            <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
              <div className={'mb-6'}>
                <label className="font-bold text-gray-800 text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <FormField
                    name="email"
                    type="email"
                    placeholder="Enter user email"
                    control={control}
                    rules={{
                      required: 'Email is required',
                      pattern: {
                        value: emailRegex,
                        message: 'Please, enter a valid email address',
                      },
                    }}
                  />
                  <Mail className="ml-2" />
                </div>
              </div>

              <div className="mb-10">
                <label className="font-bold text-gray-800 text-sm mb-2 block">Пароль</label>
                <div className="relative flex items-center">
                  <FormField
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    control={control}
                    rules={{
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password length should be more than 6 characters',
                      },
                    }}
                  />
                  <KeyRound className="ml-2" />
                </div>
              </div>

              <div className="mb-10">
                <label className="font-bold text-gray-800 text-sm mb-2 block">Ключ</label>
                <div className="relative flex items-center">
                  <FormField
                    name="secretKey"
                    type="password"
                    placeholder="Enter key"
                    control={control}
                    rules={{
                      required: 'Key is required',
                    }}
                  />
                  <KeyRound />
                </div>
              </div>

              <div>
                <Button addClasses={'hover:bg-primary hover:text-white'}>Увійти</Button>
              </div>
              <p className="text-gray-800 text-sm mt-8 text-center">
                Ще не маєте аккаунту?
                <Link
                  href={`${PUBLIC_URL.registration()}`}
                  className="text-primary hover:underline ml-1 whitespace-nowrap font-semibold"
                >
                  Реєстрація
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginFormAdmin;
