import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IFiltersSlice {
  minPrice: number | null;
  maxPrice: number | null;
  category: string[] | null;
  subcategory: string[] | null;
  brand: string[] | null;
}

const initialState: IFiltersSlice = {
  minPrice: null,
  maxPrice: null,
  category: null,
  subcategory: null,
  brand: null,
};

export function buildSearchParams(filters: IFiltersSlice): string {
  const params: Record<string, string> = {};

  if (filters.minPrice !== null) params.minPrice = filters.minPrice.toString();
  if (filters.maxPrice !== null) params.maxPrice = filters.maxPrice.toString();
  if (filters.category) params.category = filters.category.join(',');
  if (filters.subcategory) params.subcategory = filters.subcategory.join(',');
  if (filters.brand) params.brand = filters.brand.join(',');

  const searchParams = new URLSearchParams(params);
  return searchParams.toString();
}

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterMinPrice: (state: IFiltersSlice, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setFilterMaxPrice: (state: IFiltersSlice, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },
    setFilterCategory: (state: IFiltersSlice, action: PayloadAction<string[]>) => {
      state.category = action.payload;
    },
    setFilterSubcategory: (state: IFiltersSlice, action: PayloadAction<string[]>) => {
      state.subcategory = action.payload;
    },
    setFilterBrand: (state: IFiltersSlice, action: PayloadAction<string[]>) => {
      state.brand = action.payload;
    },
    clearFilter: (state: IFiltersSlice) => {
      state.minPrice = null;
      state.maxPrice = null;
      state.category = null;
      state.subcategory = null;
      state.brand = null;
    },
  },
});

export const {
  setFilterMinPrice,
  setFilterMaxPrice,
  setFilterCategory,
  setFilterBrand,
  setFilterSubcategory,
  clearFilter,
} = filtersSlice.actions;
export default filtersSlice.reducer;
