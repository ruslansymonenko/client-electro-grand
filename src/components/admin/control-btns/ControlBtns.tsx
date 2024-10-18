'use client';

import { FC } from 'react';
import ControlBtn from '@/components/admin/control-btn/ControlBtn';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store';
import { openAddNewProductModal } from '@/store/slices/modals/addNewProductSlice';

const ControlBtns: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleOpenAddNewProductModal = () => {
    dispatch(openAddNewProductModal());
  };

  return (
    <div className="grid grid-cols-3 w-full gap-4">
      <ControlBtn text={'Додати товар'} action={handleOpenAddNewProductModal} />
      <ControlBtn text={'Додати категорію'} />
      <ControlBtn text={'Додати підкатегорію'} />
      <ControlBtn text={'Додати бренд'} />
      <ControlBtn text={'Список замовленнь'} />
      <ControlBtn text={'Список користувачів'} />
    </div>
  );
};

export default ControlBtns;
