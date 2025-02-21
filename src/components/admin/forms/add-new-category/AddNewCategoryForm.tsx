'use client';

import React, { FC, useState } from 'react';
import { X } from 'lucide-react';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import Button from '@/components/common/button/Button';
import toast from 'react-hot-toast';
import { ICreateCategoryData } from '@/services/categories/categories.service';
import { addCategoryModal } from '@/store/slices/modals/addNewCategoryModalSlice';

interface IAddProductProps {
  onAddItem: (data: ICreateCategoryData) => void;
}

const AddNewCategoryForm: FC<IAddProductProps> = ({ onAddItem }) => {
  const dispatch: AppDispatch = useDispatch();

  const [name, setName] = useState<string>('');

  const handleCloseModal = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addCategoryModal.closeModal());
    clearForm();
  };

  const clearForm = () => {
    setName('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name) {
      onAddItem({
        name: name,
      });
    } else {
      toast.error('Введіть всі данні');
    }
  };

  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
      <div className="flex items-center">
        <h3 className="text-primary text-xl font-bold flex-1">Додати новий елемент</h3>
        <button onClick={handleCloseModal}>
          <X className="hover:bg-secondaryLight rounded-md cursor-pointer transition-all" />
        </button>
      </div>

      <form className="space-y-4 mt-8">
        <div>
          <label className="text-gray-800 text-sm mb-2 block">Назва:</label>
          <input
            type="text"
            placeholder="Введіть назву"
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
          />
        </div>

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

export default AddNewCategoryForm;
