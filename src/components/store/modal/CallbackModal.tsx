'use client';

import { FC } from 'react';
import cn from 'clsx';
import Button from '@/components/common/button/Button';
import { X, Phone } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { closeCallbackModal } from '@/store/slices/modals/callbackModalSlice';
import { useCallbackForm } from '@/hooks/forms/useCallbackForm';
import FormField from '@/components/common/form-field/FormField';

interface IProps {
  className?: string;
}

export const CallbackModal: FC<IProps> = ({ className }) => {
  const dispatch: AppDispatch = useDispatch();
  const { onSubmit, form } = useCallbackForm();
  const { handleSubmit, control } = form;

  const phoneRegex = /^\+?[1-9]\d{1,14}$/;

  const closeModal = () => {
    dispatch(closeCallbackModal());
  };

  return (
    <div
      className={cn(
        'p-6 mx-auto max-w-xl bg-white font-[sans-serif] z-20 rounded-md relative',
        className,
      )}
    >
      <h1 className="text-xl text-gray-800 font-bold text-center">Замовити зворотній звінок</h1>
      <form className="mt-8 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <label className="font-bold text-gray-800 text-sm mb-2 block">Email</label>
        <div className="relative flex items-center">
          <FormField
            name="phone"
            type="text"
            placeholder="Введіть телефон"
            control={control}
            rules={{
              required: 'Телефон необхідний',
              pattern: {
                value: phoneRegex,
                message: 'Поле телефон не заповнене або він не валідний',
              },
            }}
          />
          <Phone className="ml-2" />
        </div>
        <Button addClasses={'hover:bg-primary'}>Відправити</Button>
      </form>

      <div className="absolute top-1 right-1 cursor-pointer" onClick={closeModal}>
        <X size={20} />
      </div>
    </div>
  );
};
