'use client';

import React, { FC, useState } from 'react';
import { X } from 'lucide-react';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import Button from '@/components/common/button/Button';
import { closeAddNewProductModal } from '@/store/slices/modals/addNewProductSlice';

interface IAddProductProps {
  onAddProduct?: (name: string) => void;
}

const AddNewProductForm: FC<IAddProductProps> = ({ onAddProduct }) => {
  const dispatch: AppDispatch = useDispatch();
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [subcategoryId, setSubcategoryId] = useState<number | null>(null);

  const handleCloseModal = (e: React.FormEvent) => {
    e.preventDefault();
    setName('');
    dispatch(closeAddNewProductModal());
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setName('');
  };

  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
      <div className="flex items-center">
        <h3 className="text-primary text-xl font-bold flex-1">Додати новий товар</h3>
        <button onClick={handleCloseModal}>
          <X className="hover:bg-secondaryLight rounded-md cursor-pointer transition-all" />
        </button>
      </div>

      <form className="space-y-4 mt-8">
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Назва товару</label>
          <input
            type="text"
            placeholder="Введіть назву"
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
          />
        </div>

        <div className="flex justify-end gap-4 !mt-8">
          <Button
            children={'Підтвердити'}
            addClasses="bg-secondaryLight"
            onClick={(e) => handleSubmit(e)}
          />
          <Button children={'Відмінити'} onClick={(e) => handleCloseModal(e)} />
        </div>
      </form>
    </div>
  );
};

export default AddNewProductForm;
