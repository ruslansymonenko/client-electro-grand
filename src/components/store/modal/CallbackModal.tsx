'use client';

import { FC, useState } from 'react';
import cn from 'clsx';
import Button from '@/components/common/button/Button';
import toast from 'react-hot-toast';
import { X } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { closeCallbackModal } from '@/store/slices/modals/callbackModalSlice';

interface IProps {
  className?: string;
}

export const CallbackModal: FC<IProps> = ({ className }) => {
  const dispatch: AppDispatch = useDispatch();
  const [phone, setPhone] = useState<string>('');

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const closeModal = () => {
    dispatch(closeCallbackModal());
  };

  const handleSendCallbackRequest = (event: React.FormEvent) => {
    event.preventDefault();
    setPhone('');
    toast.success('Дякуємо! Ми вам зателефонуємо.');
    closeModal();
  };

  return (
    <div
      className={cn(
        'p-6 mx-auto max-w-xl bg-white font-[sans-serif] z-20 rounded-md relative',
        className,
      )}
    >
      <h1 className="text-xl text-gray-800 font-bold text-center">Замовити зворотній звінок</h1>
      <form className="mt-8 space-y-4" onSubmit={handleSendCallbackRequest}>
        <input
          type="string"
          placeholder="Телефон"
          className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm  mb-2"
          onChange={(e) => handlePhoneChange(e)}
        />
        <Button children={'Відправити'} addClasses={'hover:bg-primary'} />
      </form>

      <div className="absolute top-1 right-1 cursor-pointer" onClick={closeModal}>
        <X size={20} />
      </div>
    </div>
  );
};
