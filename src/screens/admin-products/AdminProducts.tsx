'use client';

import { FC, useEffect, useState } from 'react';
import Modal from '@/components/common/modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store';
import AddNewProductForm from '@/components/admin/forms/add-new-product/AddNewProductForm';
import AdminNav from '@/components/admin/admin-nav/AdminNav';
import AdminProductsList from '@/components/admin/admin-products-list/AdminProductsList';
import { useGetAllProducts } from '@/hooks/products/useProducts';
import { IProductResponse } from '@/types/server-response-types/product-response';
import ControlBtn from '@/components/admin/control-btn/ControlBtn';

import { closeDeleteCheckModal } from '@/store/slices/modals/deleteCheckModalSlice';
import {
  ICreateProductData,
  IUpdateProductData,
  productService,
  TypeProductsImages,
} from '@/services/products/products.service';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils/getErrorMessage/getErrorMessage';
import DeleteCheck from '@/components/common/modal/DeleteCheckModal';
import Loader from '@/components/common/loader/Loader';
import { addProductModal } from '@/store/slices/modals/addNewProductModalSlice';
import UpdateProductForm from '@/components/admin/forms/update-product/UpdateProductForm';
import { updateProductModal } from '@/store/slices/modals/updateProductModalSlice';
import SetProductImagesForm from '@/components/admin/forms/set-product-images/SetProductImagesForm';
import { setProductImagesModal } from '@/store/slices/modals/setProductImagesModalSlice';

const AdminProducts: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const { data, isLoading } = useGetAllProducts();
  const [productsData, setProductsData] = useState<IProductResponse[]>([]);

  const isAddNewProductModalOpen: boolean = useSelector(
    (state: RootState) => state.addNewProductModal.isOpen,
  );
  const isUpdateProductModalOpen: boolean = useSelector(
    (state: RootState) => state.updateProductModal.isOpen,
  );
  const isSetProductImagesModalOpen: boolean = useSelector(
    (state: RootState) => state.setProductImagesModal.isOpen,
  );
  const isModalDeleteCheckOpen = useSelector((state: RootState) => state.deleteCheckModal.isOpen);
  const elementToDelete = useSelector((state: RootState) => state.deleteCheckModal.elementId);

  const openAddProductModal = () => {
    dispatch(addProductModal.openModal());
  };

  const closeDeleteCheck = () => {
    dispatch(closeDeleteCheckModal());
  };

  const deleteProduct = async () => {
    try {
      if (elementToDelete) {
        await productService.delete(elementToDelete);
      }
      closeDeleteCheck();
      setProductsData((prevTypes) => prevTypes.filter((type) => type.id !== elementToDelete));
      toast.success(`Товар успішно видалено`);
    } catch (error: any) {
      toast.error(getErrorMessage(error));
    }
  };

  const addNewProduct = async (data: ICreateProductData) => {
    if (!data.name || !data.price || !data.categoryId || !data.subcategoryId || !data.brandId) {
      toast.error('Будь ласка вкажіть всі необхідні дані для створення товару.');
      return;
    }

    try {
      const newElement = await productService.create({
        name: data.name,
        description: data.description ? data.description : '',
        price: data.price,
        categoryId: data.categoryId,
        subcategoryId: data.subcategoryId,
        brandId: data.brandId,
      });

      dispatch(addProductModal.closeModal());
      setProductsData((prevTypes) => [...prevTypes, newElement.data]);
      toast.success('Товар успішно створений!');
    } catch (error: any) {
      console.log(error);
      toast.error(getErrorMessage(error));
    }
  };

  const updateElement = async (itemId: number, data: IUpdateProductData) => {
    if (
      !data.name &&
      !data.description &&
      !data.price &&
      !data.categoryId &&
      !data.subcategoryId &&
      !data.brandId
    ) {
      toast.error('Немає данних для оновлення');
    } else {
      try {
        const newElement = await productService.update(itemId, {
          name: data.name ? data.name : undefined,
          description: data.description ? data.description : undefined,
          price: data.price ? data.price : undefined,
          categoryId: data.categoryId ? data.categoryId : undefined,
          subcategoryId: data.subcategoryId ? data.subcategoryId : undefined,
          brandId: data.brandId ? data.brandId : undefined,
        });

        dispatch(updateProductModal.closeModal());

        const oldElementIndex = productsData.findIndex((element) => element.id === itemId);
        if (oldElementIndex !== -1) {
          productsData.splice(oldElementIndex, 1);
        }
        setProductsData((prevTypes) => [...prevTypes, newElement.data]);
        toast.success('Елемент успішно оновлено!');
      } catch (error: any) {
        console.log(error);
        toast.error(getErrorMessage(error));
      }
    }
  };

  const setImages = async (itemId: number, data: TypeProductsImages) => {
    console.log(data);

    if (!data) {
      toast.error('Немає данних для оновлення');
    } else {
      try {
        const newElement = await productService.setImages(itemId, data);

        dispatch(setProductImagesModal.closeModal());

        const oldElementIndex = productsData.findIndex((element) => element.id === itemId);
        if (oldElementIndex !== -1) {
          productsData.splice(oldElementIndex, 1);
        }
        setProductsData((prevTypes) => [...prevTypes, newElement.data]);
        toast.success('Елемент успішно оновлено!');
      } catch (error: any) {
        console.log(error);
        toast.error(getErrorMessage(error));
      }
    }
  };

  useEffect(() => {
    if (data) {
      setProductsData(data.data.products);
    } else {
      setProductsData([]);
    }
  }, [data]);

  return (
    <div className="py-4 px-8 container mx-auto min-h-screen pt-navbarHeight relative">
      <div className="my-14">
        <div>
          <h2 className="font-bold text-3xl mb-4">Управління товарами</h2>
          <section className="mb-4 flex items-center justify-center w-full">
            <ControlBtn text={'Додати товар'} action={openAddProductModal} />
          </section>
          <section className="mb-4 flex items-center justify-center w-full">
            <AdminNav />
          </section>
          <section className="mb-4 flex items-center w-full">
            {isLoading ? <Loader /> : <AdminProductsList products={productsData} />}
          </section>
        </div>
      </div>
      <Modal isVisible={isAddNewProductModalOpen}>
        <AddNewProductForm onAddProduct={addNewProduct} />
      </Modal>
      <Modal isVisible={isUpdateProductModalOpen}>
        <UpdateProductForm onUpdateItem={updateElement} />
      </Modal>
      <Modal isVisible={isSetProductImagesModalOpen}>
        <SetProductImagesForm onSetImages={setImages} />
      </Modal>
      <Modal isVisible={isModalDeleteCheckOpen}>
        <DeleteCheck
          onConfirm={deleteProduct}
          onClose={closeDeleteCheck}
          onCancel={closeDeleteCheck}
          message={'Ви хочете видалити товар?'}
        />
      </Modal>
    </div>
  );
};

export default AdminProducts;
