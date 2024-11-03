'use client';

import React, { FC, useEffect, useState } from 'react';
import { AppDispatch, RootState } from '@/store';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterMaxPrice, setFilterMinPrice } from '@/store/slices/filterSlice';

interface IProps {
  min: number;
  max: number;
}

const PriceFilter: FC<IProps> = ({ min, max }) => {
  const dispatch: AppDispatch = useDispatch();

  const minPrice: number = useSelector((state: RootState) => state.filterSlice.minPrice);
  const maxPrice: number = useSelector((state: RootState) => state.filterSlice.maxPrice);

  const [range, setRange] = useState<[number, number]>([minPrice, maxPrice]);

  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    dispatch(setFilterMinPrice(value));
    setRange([value, range[1]]);
  };

  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    dispatch(setFilterMaxPrice(value));
    setRange([range[0], value]);
  };

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (e.target.name === 'min') {
      const newMin = Math.min(value, range[1]);

      setRange([newMin, range[1]]);
      dispatch(setFilterMinPrice(newMin));
    } else {
      const newMax = Math.max(value, range[0]);

      setRange([range[0], newMax]);
      dispatch(setFilterMaxPrice(newMax));
    }
  };

  useEffect(() => {
    setRange([minPrice, maxPrice]);
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
