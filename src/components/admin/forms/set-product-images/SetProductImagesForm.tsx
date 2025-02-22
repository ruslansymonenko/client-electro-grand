'use client';

import React, { FC, useState } from 'react';
import { X } from 'lucide-react';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@/components/common/button/Button';
import { TypeProductsImages } from '@/services/products/products.service';
import { setProductImagesModal } from '@/store/slices/modals/setProductImagesModalSlice';

interface IProps {
  onSetImages: (elementId: number, data: TypeProductsImages) => void;
}

const SetProductImagesForm: FC<IProps> = ({ onSetImages }) => {
  const dispatch: AppDispatch = useDispatch();
  const [images, setImages] = useState<File[]>([]);
  const elementToUpdate = useSelector((state: RootState) => state.setProductImagesModal.elementId);

  const handleCloseModal = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setProductImagesModal.closeModal());
    clearForm();
  };

  const clearForm = () => {
    setImages([]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (elementToUpdate) {
      onSetImages(elementToUpdate, images);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImages(Array.from(e.target.files));
    }
  };

  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="text-primary text-xl font-bold flex-1">Налаштувати зображення товару</h3>
        </div>

        <button onClick={handleCloseModal}>
          <X className="hover:bg-secondaryLight rounded-md cursor-pointer transition-all" />
        </button>
      </div>

      <div className="flex flex-col">
        <label htmlFor="images" className="text-gray-700 my-4 font-semibold">
          Зображення
        </label>
        <input
          type="file"
          id="images"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="mt-2"
        />
      </div>

      <form className="space-y-4 mt-8">
        <div className="flex justify-end gap-4 !mt-8">
          <Button addClasses="bg-secondaryLight" onClick={(e) => handleSubmit(e)}>
            Підтвердити
          </Button>
          <Button onClick={(e) => handleCloseModal(e)}>Відмінити</Button>
        </div>
      </form>
    </div>
  );
};

export default SetProductImagesForm;
