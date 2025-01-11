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
import { subcategoriesService } from '@/services/subcategories/subcategories.service';
import AddNewSubcategoryForm from '@/components/admin/forms/add-new-subcategory/AddNewSubcategoryForm';
import { useGetAllBrands } from '@/hooks/brands/useBrands';
import { IBrand } from '@/types/data-types/brand';
import { brandsService, ICreateBrandData } from '@/services/brands/brands.service';
import { addNewBrandModal } from '@/store/slices/modals/addNewBrandModalSlice';
import AdminBrandsList from '@/components/admin/admin-brands-list/AdminBrandsList';
import AddNewBrandForm from '@/components/admin/forms/add-new-brand/AddNewBrandForm';

const AdminBrands: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { data, isLoading, error } = useGetAllBrands();
  const [brandsData, setBrandsData] = useState<IBrand[]>([]);

  const isAddNewBrandModalOpen: boolean = useSelector(
    (state: RootState) => state.addNewBrandModal.isOpen,
  );
  const isModalDeleteCheckOpen = useSelector((state: RootState) => state.deleteCheckModal.isOpen);
  const elementToDelete = useSelector((state: RootState) => state.deleteCheckModal.elementId);

  const openAddElementModal = () => {
    dispatch(addNewBrandModal.openModal());
  };

  const closeDeleteCheck = () => {
    dispatch(closeDeleteCheckModal());
  };

  const deleteItem = async () => {
    try {
      if (elementToDelete) {
        await brandsService.delete(elementToDelete);
      }
      closeDeleteCheck();
      setBrandsData((prevTypes) => prevTypes.filter((type) => type.id !== elementToDelete));
      toast.success(`Елемент успішно видалено`);
    } catch (error: any) {
      console.log(error);
      toast.error(getErrorMessage(error));
    }
  };

  const addNewItem = async (data: ICreateBrandData) => {
    if (!data.name) {
      toast.error('Будь ласка вкажіть всі необхідні дані для створення елементу.');
      return;
    }

    try {
      const newElement = await brandsService.create({
        name: data.name,
      });

      dispatch(addNewBrandModal.closeModal());
      setBrandsData((prevTypes) => [...prevTypes, newElement.data]);
      toast.success('Елемент успішно створений!');
    } catch (error: any) {
      console.log(error);
      toast.error(getErrorMessage(error));
    }
  };

  useEffect(() => {
    if (data) {
      setBrandsData(data.data);
    } else {
      setBrandsData([]);
    }
  }, [data]);

  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight relative">
      <div className="my-14">
        <div>
          <h2 className="font-bold text-3xl mb-4">Управління брендами</h2>
          <section className="mb-4 flex items-center justify-center w-full">
            <ControlBtn text={'Додати бренд'} action={openAddElementModal} />
          </section>
          <section className="mb-4 flex items-center justify-center w-full">
            <AdminNav />
          </section>
          <section className="mb-4 flex items-center w-full">
            {isLoading ? <Loader /> : <AdminBrandsList brands={brandsData} />}
          </section>
        </div>
      </div>
      <Modal isVisible={isAddNewBrandModalOpen}>
        <AddNewBrandForm onAddItem={addNewItem} />
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

export default AdminBrands;
