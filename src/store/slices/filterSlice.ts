import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IFiltersSlice {
  minPrice: number;
  maxPrice: number;
  category: string[] | null;
  subcategory: string[] | null;
  brand: string[] | null;
  currentPage: number;
  pageSize: number;
}

const initialState: IFiltersSlice = {
  minPrice: 0,
  maxPrice: 10000,
  category: null,
  subcategory: null,
  brand: null,
  currentPage: 1,
  pageSize: 10,
};

export const defaultFilter: IFiltersSlice = {
  minPrice: 0,
  maxPrice: 10000,
  category: null,
  subcategory: null,
  brand: null,
  currentPage: 1,
  pageSize: 10,
};

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
      state.minPrice = 0;
      state.maxPrice = 10000;
      state.category = null;
      state.subcategory = null;
      state.brand = null;
      state.currentPage = 1;
      state.pageSize = 10;
    },
    setCurrentPage: (state: IFiltersSlice, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPageSize: (state: IFiltersSlice, action: PayloadAction<number>) => {
      state.pageSize = action.payload;
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
  setCurrentPage,
  setPageSize,
} = filtersSlice.actions;
export default filtersSlice.reducer;
