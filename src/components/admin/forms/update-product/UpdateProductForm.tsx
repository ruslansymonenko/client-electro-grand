'use client';

import React, { FC, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@/components/common/button/Button';
import { useGetAllCategories } from '@/hooks/categories/useCategories';
import { ICategoryResponse } from '@/types/server-response-types/category-response';
import { ISubcategory } from '@/types/data-types/subcategory';
import Dropdown from '@/components/common/dropdown/Dropdown';
import { useGetAllBrands } from '@/hooks/brands/useBrands';
import { IBrand } from '@/types/data-types/brand';
import { IUpdateProductData } from '@/services/products/products.service';
import { updateProductModal } from '@/store/slices/modals/updateProductModalSlice';

interface IProps {
  onUpdateItem: (elementId: number, data: IUpdateProductData) => void;
}

const UpdateProductForm: FC<IProps> = ({ onUpdateItem }) => {
  const dispatch: AppDispatch = useDispatch();
  const categoriesData = useGetAllCategories();
  const brandsData = useGetAllBrands();

  const [availableCategories, setAvailableCategories] = useState<ICategoryResponse[]>([]);
  const [availableSubcategories, setAvailableSubcategories] = useState<ISubcategory[]>([]);
  const [availableBrands, setAvailableBrands] = useState<IBrand[]>([]);

  const elementToUpdate = useSelector((state: RootState) => state.updateProductModal.elementId);
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number | null>(null);
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [subcategoryId, setSubcategoryId] = useState<number | null>(null);
  const [brandId, setBrandId] = useState<number | null>(null);

  const handleCloseModal = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateProductModal.closeModal());
    clearForm();
  };

  const clearForm = () => {
    setName('');
    setDescription('');
    setPrice(null);
    setCategoryId(null);
    setSubcategoryId(null);
    setBrandId(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (elementToUpdate) {
      onUpdateItem(elementToUpdate, {
        name: name,
        description: description,
        price: price!,
        categoryId: categoryId!,
        subcategoryId: subcategoryId!,
        brandId: brandId!,
      });
    }
  };

  const handleSetChosenCategories = (name: string) => {
    const chosenCategory = availableCategories.find((item) => item.name === name);
    if (chosenCategory) {
      setCategoryId(chosenCategory.id);
    }
  };

  const handleSetChosenSubcategories = (name: string) => {
    const chosenSubcategory = availableSubcategories.find((item) => item.name === name);
    if (chosenSubcategory) {
      setSubcategoryId(chosenSubcategory.id);
    }
  };

  const handleSetChosenBrand = (name: string) => {
    const chosenBrand = availableBrands.find((item) => item.name === name);
    if (chosenBrand) {
      setBrandId(chosenBrand.id);
    }
  };

  useEffect(() => {
    if (categoriesData.data) {
      setAvailableCategories(categoriesData.data.data);
    }
  }, [categoriesData.data]);

  useEffect(() => {
    if (brandsData.data) {
      setAvailableBrands(brandsData.data.data);
    }
  }, [brandsData.data]);

  useEffect(() => {
    if (categoryId) {
      const chosenCategory = availableCategories.find((element) => element.id === categoryId);

      if (chosenCategory) {
        setAvailableSubcategories(chosenCategory.subcategories);
      }
    }
  }, [categoryId]);

  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 relative">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <h3 className="text-primary text-xl font-bold flex-1">Змінити товар</h3>
          <p className="font-light text-sm">(Введіть тільки необхідні для зміни данні)</p>
        </div>

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

        <div>
          <label className="text-gray-800 text-sm mb-2 block">Опис</label>
          <input
            type="text"
            placeholder="Введіть опис"
            onChange={(e) => setDescription(e.target.value)}
            className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
          />
        </div>

        <div>
          <label className="text-gray-800 text-sm mb-2 block">Ціна</label>
          <input
            type="number"
            placeholder="Введіть ціну"
            onChange={(e) => setPrice(parseInt(e.target.value))}
            className="px-4 py-3 bg-gray-100 w-full text-gray-800 text-sm border-none focus:outline-blue-600 focus:bg-transparent rounded-lg"
          />
        </div>

        <div>
          <label className="text-gray-800 text-sm mb-2 block">Виберіть категорію</label>
          <Dropdown
            options={availableCategories.map((item) => item.name)}
            onSelect={handleSetChosenCategories}
            placeholder={'Виберіть категорію'}
          />
        </div>

        <div>
          <label className="text-gray-800 text-sm mb-2 block">Виберіть підкатегорію</label>
          <Dropdown
            options={availableSubcategories.map((item) => item.name)}
            onSelect={handleSetChosenSubcategories}
            placeholder={'Виберіть підкатегорію'}
          />
        </div>

        <div>
          <label className="text-gray-800 text-sm mb-2 block">Виберіть бренд</label>
          <Dropdown
            options={availableBrands.map((item) => item.name)}
            onSelect={handleSetChosenBrand}
            placeholder={'Виберіть бренд'}
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

export default UpdateProductForm;
