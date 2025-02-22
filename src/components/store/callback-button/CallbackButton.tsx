'use client';

import { FC } from 'react';
import { motion } from 'framer-motion';
import cn from 'clsx';
import { Phone } from 'lucide-react';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { openCallbackModal } from '@/store/slices/modals/callbackModalSlice';

interface IProps {
  className?: string;
}

export const CallbackButton: FC<IProps> = ({ className }) => {
  const dispatch: AppDispatch = useDispatch();

  const openModal = () => {
    dispatch(openCallbackModal());
  };

  return (
    <motion.button
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={cn(
        'fixed z-20 h-14 w-14 bg-secondaryDark bottom-10 right-10 flex rounded-full p-2 shadow-md' +
          ' items-center justify-center',
        className,
      )}
      onClick={openModal}
    >
      <Phone className={'text-gray-700'} />
    </motion.button>
  );
};
