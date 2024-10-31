'use client';

import { FC } from 'react';
import ControlBtns from '@/components/admin/control-btns/ControlBtns';
import Modal from '@/components/common/modal/Modal';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import AddNewProductForm from '@/components/admin/forms/add-new-product/AddNewPorductForm';
import AdminNav from '@/components/admin/admin-nav/AdminNav';

const Admin: FC = () => {
  const isAddNewProductModalOpen: boolean = useSelector(
    (state: RootState) => state.addNewProduct.isOpen,
  );

  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight relative">
      <div className="my-14">
        <div>
          <h2 className="font-bold text-3xl mb-4">Управління магазином</h2>
          <section className="mb-4 flex items-center w-full">
            <ControlBtns />
          </section>
          <section className="mb-4 flex flex-col items-center w-full">
            <AdminNav />
          </section>
        </div>
      </div>
      <Modal isVisible={isAddNewProductModalOpen}>
        <AddNewProductForm />
      </Modal>
    </div>
  );
};

export default Admin;
