'use client';

import React from 'react';
import Button from '@/components/common/button/Button';
import FormField from '@/components/common/form-field/FormField';
import { Mail, User, ClipboardList, AlignJustify } from 'lucide-react';
import { useContactForm } from '@/hooks/forms/useContactForm';

const ContactForm = () => {
  const { onSubmit, form } = useContactForm();
  const { handleSubmit, control } = form;

  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;

  return (
    <div>
      <form className="ml-auto space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="relative flex items-center">
            <FormField
              name="name"
              type="text"
              placeholder="Введіть ім'я"
              className={
                'w-full rounded-md py-1 px-2 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent'
              }
              control={control}
              rules={{
                required: 'Поле необхідне',
              }}
            />
            <User className="ml-2" />
          </div>
        </div>
        <div>
          <div className="relative flex items-center">
            <FormField
              name="email"
              type="email"
              placeholder="Введіть email"
              className={
                'w-full rounded-md py-1 px-2 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent'
              }
              control={control}
              rules={{
                required: 'Email необхідний',
                pattern: {
                  value: emailRegex,
                  message: 'Поле Email нне заповнене або email не валідний',
                },
              }}
            />
            <Mail className="ml-2" />
          </div>
        </div>
        <div>
          <div className="relative flex items-center">
            <FormField
              name="subject"
              type="text"
              placeholder="Введіть тему"
              className={
                'w-full rounded-md py-1 px-2 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent'
              }
              control={control}
              rules={{
                required: 'Тема необхідна',
              }}
            />
            <ClipboardList className="ml-2" />
          </div>
        </div>
        <div>
          <div className="relative flex items-center">
            <FormField
              name="message"
              type="text"
              placeholder="Введіть повідомлення"
              className={
                'w-full rounded-md py-1 px-2 bg-gray-100 text-gray-800 text-sm outline-blue-500 focus:bg-transparent'
              }
              control={control}
              rules={{
                required: 'Повідомлення необхідне',
              }}
            />
            <AlignJustify className="ml-2" />
          </div>
        </div>
        <Button addClasses="bg-primary" style={{ color: 'white' }}>
          Відправити
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
