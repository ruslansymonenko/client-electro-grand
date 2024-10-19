'use client';

import React, { FC, useState } from 'react';
import Button from '@/components/common/button/Button';

const ProductsFilter: FC = () => {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(1000);
  const [range, setRange] = useState<[number, number]>([0, 1000]);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMinPrice(value);
    setRange([value, range[1]]);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setMaxPrice(value);
    setRange([range[0], value]);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (e.target.name === 'min') {
      setRange([value, range[1]]);
      setMinPrice(value);
    } else {
      setRange([range[0], value]);
      setMaxPrice(value);
    }
  };

  return (
    <div className="w-1/4 shadow-lg mr-4 p-4">
      <h2 className="text-xl font-bold">Фільтр</h2>
      <section className="my-4">
        <h3 className="text-xl border-b-2 pb-2">Ціна</h3>
        <div className="my-4">
          <label htmlFor="minPrice" className="block">
            Мінімальна ціна
          </label>
          <input
            type="number"
            id="minPrice"
            value={minPrice}
            onChange={handleMinPriceChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="maxPrice" className="block">
            Максимальна ціна
          </label>
          <input
            type="number"
            id="maxPrice"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="block">Діапазон цін</label>
          <div className="flex space-x-4">
            <input
              type="range"
              name="min"
              min="0"
              max="10000"
              value={range[0]}
              onChange={handleRangeChange}
              className="w-full accent-primary"
            />
            <input
              type="range"
              name="max"
              min="0"
              max="10000"
              value={range[1]}
              onChange={handleRangeChange}
              className="w-full accent-primary"
            />
          </div>
          <div className="flex justify-between mt-2">
            <span>{range[0]}₴</span>
            <span>{range[1]}₴</span>
          </div>
        </div>
      </section>
      <Button children={'Застосувати'} addClasses={'bg-primary text-white'} />
    </div>
  );
};

export default ProductsFilter;
