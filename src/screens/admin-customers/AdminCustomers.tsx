'use client';

import { FC, useEffect, useState } from 'react';
import Modal from '@/components/common/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import AdminNav from '@/components/admin/admin-nav/AdminNav';
import { closeDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils/getErrorMessage/getErrorMessage';
import DeleteCheck from '@/components/common/modal/DeleteCheckModal';
import Loader from '@/components/common/loader/Loader';
import { useGetAllUsers } from '@/hooks/users/useUsers';
import { usersService } from '@/services/users/users.service';
import { IUserResponse } from '@/types/server-response-types/user-response';
import AdminUsersList from '@/components/admin/admin-users-list/AdminUsersList';

const AdminCustomers: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { data, isLoading, error } = useGetAllUsers();
  const [usersData, setUsersData] = useState<IUserResponse[]>([]);

  const isModalDeleteCheckOpen = useSelector((state: RootState) => state.deleteCheckModal.isOpen);
  const elementToDelete = useSelector((state: RootState) => state.deleteCheckModal.elementId);

  const closeDeleteCheck = () => {
    dispatch(closeDeleteCheckModal());
  };

  const deleteItem = async () => {
    try {
      if (elementToDelete) {
        await usersService.delete(elementToDelete);
      }
      closeDeleteCheck();
      setUsersData((prevTypes) => prevTypes.filter((type) => type.id !== elementToDelete));
      toast.success(`Елемент успішно видалено`);
    } catch (error: any) {
      console.log(error);
      toast.error(getErrorMessage(error));
    }
  };

  useEffect(() => {
    console.log(data);
    if (data) {
      setUsersData(data.data);
    } else {
      setUsersData([]);
    }
  }, [data]);

  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight relative">
      <div className="my-14">
        <div>
          <h2 className="font-bold text-3xl mb-4">Управління клієнтами</h2>
          <section className="mb-4 flex items-center justify-center w-full">
            <AdminNav />
          </section>
          <section className="mb-4 flex items-center w-full">
            {isLoading ? <Loader /> : <AdminUsersList users={usersData} />}
          </section>
        </div>
      </div>
      <Modal isVisible={isModalDeleteCheckOpen}>
        <DeleteCheck
          onConfirm={deleteItem}
          onClose={closeDeleteCheck}
          onCancel={closeDeleteCheck}
          message={'Ви хочете видалити цю позицію?'}
        />
      </Modal>
    </div>
  );
};

export default AdminCustomers;
