'use client';

import { FC, useEffect, useState } from 'react';
import Modal from '@/components/common/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import AdminNav from '@/components/admin/admin-nav/AdminNav';
import ControlBtn from '@/components/admin/control-btn/ControlBtn';
import { closeDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils/getErrorMessage/getErrorMessage';
import DeleteCheck from '@/components/common/modal/DeleteCheckModal';
import Loader from '@/components/common/loader/Loader';
import AdminCategoriesList from '@/components/admin/admin-categories-list/AdminCategoriesList';
import { ICategoryResponse } from '@/types/server-response-types/category-response';
import { useGetAllCategories } from '@/hooks/categories/useCategories';
import { categoriesService, ICreateCategoryData } from '@/services/categories/categories.service';
import AddNewCategoryForm from '@/components/admin/forms/add-new-category/AddNewCategoryForm';
import { addCategoryModal } from '@/store/slices/modals/addNewCategoryModalSlice';

const AdminCategories: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { data, isLoading, error } = useGetAllCategories();
  const [categoriesData, setCategoriesData] = useState<ICategoryResponse[]>([]);

  const isAddNewCategoryModalOpen: boolean = useSelector(
    (state: RootState) => state.addNewCategoryModal.isOpen,
  );
  const isModalDeleteCheckOpen = useSelector((state: RootState) => state.deleteCheckModal.isOpen);
  const elementToDelete = useSelector((state: RootState) => state.deleteCheckModal.elementId);

  const openAddCategoryModal = () => {
    dispatch(addCategoryModal.openModal());
  };

  const closeDeleteCheck = () => {
    dispatch(closeDeleteCheckModal());
  };

  const deleteItem = async () => {
    try {
      if (elementToDelete) {
        await categoriesService.delete(elementToDelete);
      }
      closeDeleteCheck();
      setCategoriesData((prevTypes) => prevTypes.filter((type) => type.id !== elementToDelete));
      toast.success(`Елемент успішно видалено`);
    } catch (error: any) {
      console.log(error);
      toast.error(getErrorMessage(error));
    }
  };

  const addNewItem = async (data: ICreateCategoryData) => {
    if (!data.name) {
      toast.error('Будь ласка вкажіть всі необхідні дані для створення товару.');
      return;
    }

    try {
      const newElement = await categoriesService.create({
        name: data.name,
      });

      dispatch(addCategoryModal.closeModal());
      setCategoriesData((prevTypes) => [...prevTypes, newElement.data]);
      toast.success('Елемент успішно створений!');
    } catch (error: any) {
      console.log(error);
      toast.error(getErrorMessage(error));
    }
  };

  useEffect(() => {
    if (data) {
      setCategoriesData(data.data);
    } else {
      setCategoriesData([]);
    }
  }, [data]);

  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight relative">
      <div className="my-14">
        <div>
          <h2 className="font-bold text-3xl mb-4">Управління категоріями</h2>
          <section className="mb-4 flex items-center justify-center w-full">
            <ControlBtn text={'Додати категорію'} action={openAddCategoryModal} />
          </section>
          <section className="mb-4 flex items-center justify-center w-full">
            <AdminNav />
          </section>
          <section className="mb-4 flex items-center w-full">
            {isLoading ? <Loader /> : <AdminCategoriesList categories={categoriesData} />}
          </section>
        </div>
      </div>
      <Modal isVisible={isAddNewCategoryModalOpen}>
        <AddNewCategoryForm onAddItem={addNewItem} />
      </Modal>
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

export default AdminCategories;
