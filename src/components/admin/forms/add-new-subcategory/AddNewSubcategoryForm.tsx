'use client';

import React, { FC, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import Button from '@/components/common/button/Button';
import toast from 'react-hot-toast';
import { addCategoryModal } from '@/store/slices/modals/addNewCategoryModalSlice';
import { ICreateSubcategoryData } from '@/services/subcategories/subcategories.service';
import { useGetAllCategories } from '@/hooks/categories/useCategories';
import { ICategoryResponse } from '@/types/server-response-types/category-response';
import Dropdown from '@/components/common/dropdown/Dropdown';

interface IAddProductProps {
  onAddItem: (data: ICreateSubcategoryData) => void;
}

const AddNewSubcategoryForm: FC<IAddProductProps> = ({ onAddItem }) => {
  const dispatch: AppDispatch = useDispatch();
  const { data, isLoading, error } = useGetAllCategories();
  const [categories, setCategories] = useState<ICategoryResponse[]>([]);

  const [name, setName] = useState<string>('');
  const [categoryId, setCategoryId] = useState<number>();

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
    if (name && categoryId) {
      onAddItem({
        name: name,
        categoryId: categoryId,
      });
    } else {
      toast.error('Введіть всі данні');
    }
  };

  const handleSelectCategory = (selectedName: string) => {
    const selectedCategory = categories.find((category) => category.name === selectedName);
    if (selectedCategory) {
      setCategoryId(selectedCategory.id);
    }
  };

  useEffect(() => {
    if (data) {
      setCategories(data.data);
    } else {
      setCategories([]);
    }
  }, [data]);

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

        <div>
          <label className="text-gray-800 text-sm mb-2 block">Категорія:</label>
          <Dropdown
            options={categories.map((category) => category.name)}
            placeholder="Виберіть категорію для підкатегорії"
            onSelect={handleSelectCategory}
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

export default AddNewSubcategoryForm;
