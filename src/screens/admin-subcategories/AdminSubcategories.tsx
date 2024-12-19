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
import AddNewCategoryForm from '@/components/admin/forms/add-new-category/AddNewCategoryForm';
import { addSubcategoryModal } from '@/store/slices/modals/addNewSubcategoryModalSlice';
import {
  ICreateSubcategoryData,
  subcategoriesService,
} from '@/services/subcategories/subcategories.service';
import { useGetAllSubcategories } from '@/hooks/subcategories/useSubcategories';
import { ISubcategoryResponse } from '@/types/server-response-types/subcategory-response';
import AddNewSubcategoryForm from '@/components/admin/forms/add-new-subcategory/AddNewSubcategoryForm';

const AdminSubcategories: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { data, isLoading, error } = useGetAllSubcategories();
  const [subcategoriesData, setSubcategoriesData] = useState<ISubcategoryResponse[]>([]);

  const isAddNewSubcategoryModalOpen: boolean = useSelector(
    (state: RootState) => state.addNewSubcategoryModal.isOpen,
  );
  const isModalDeleteCheckOpen = useSelector((state: RootState) => state.deleteCheckModal.isOpen);
  const elementToDelete = useSelector((state: RootState) => state.deleteCheckModal.elementId);

  const openAddElementModal = () => {
    dispatch(addSubcategoryModal.openModal());
  };

  const closeDeleteCheck = () => {
    dispatch(closeDeleteCheckModal());
  };

  const deleteItem = async () => {
    try {
      if (elementToDelete) {
        await subcategoriesService.delete(elementToDelete);
      }
      closeDeleteCheck();
      setSubcategoriesData((prevTypes) => prevTypes.filter((type) => type.id !== elementToDelete));
      toast.success(`Елемент успішно видалено`);
    } catch (error: any) {
      console.log(error);
      toast.error(getErrorMessage(error));
    }
  };

  const addNewItem = async (data: ICreateSubcategoryData) => {
    if (!data.name && !data.categoryId) {
      toast.error('Будь ласка вкажіть всі необхідні дані для створення елементу.');
      return;
    }

    try {
      const newElement = await subcategoriesService.create({
        name: data.name,
        categoryId: data.categoryId,
      });

      dispatch(addSubcategoryModal.closeModal());
      setSubcategoriesData((prevTypes) => [...prevTypes, newElement.data]);
      toast.success('Елемент успішно створений!');
    } catch (error: any) {
      console.log(error);
      toast.error(getErrorMessage(error));
    }
  };

  useEffect(() => {
    if (data) {
      setSubcategoriesData(data.data);
    } else {
      setSubcategoriesData([]);
    }
  }, [data]);

  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight relative">
      <div className="my-14">
        <div>
          <h2 className="font-bold text-3xl mb-4">Управління підкатегоріями</h2>
          <section className="mb-4 flex items-center justify-center w-full">
            <ControlBtn text={'Додати підкатегорію'} action={openAddElementModal} />
          </section>
          <section className="mb-4 flex items-center justify-center w-full">
            <AdminNav />
          </section>
          <section className="mb-4 flex items-center w-full">
            {isLoading ? <Loader /> : <AdminCategoriesList categories={subcategoriesData} />}
          </section>
        </div>
      </div>
      <Modal isVisible={isAddNewSubcategoryModalOpen}>
        <AddNewSubcategoryForm onAddItem={addNewItem} />
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

export default AdminSubcategories;
