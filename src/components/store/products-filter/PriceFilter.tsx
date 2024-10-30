'use client';

import React, { FC, useEffect, useState } from 'react';
import { AppDispatch } from '@/store';
import { useDispatch } from 'react-redux';
import { setFilterMaxPrice, setFilterMinPrice } from '@/store/slices/filterSlice';

interface IPriceFilterProps {
  min: number;
  max: number;
}

const PriceFilter: FC<IPriceFilterProps> = ({ min, max }) => {
  const dispatch: AppDispatch = useDispatch();

  const [minPrice, setMinPrice] = useState<number>(min);
  const [maxPrice, setMaxPrice] = useState<number>(max);
  const [range, setRange] = useState<[number, number]>([min, max]);

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

  useEffect(() => {
    dispatch(setFilterMinPrice(minPrice));
    dispatch(setFilterMaxPrice(maxPrice));
  }, [minPrice, maxPrice]);

  return (
    <section className="my-4">
      <h3 className="font-semibold border-b-2 pb-2">Ціна</h3>
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
            min={min}
            max={max}
            value={range[0]}
            onChange={handleRangeChange}
            className="w-full accent-primary"
          />
          <input
            type="range"
            name="max"
            min={min}
            max={max}
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
  );
};

export default PriceFilter;
