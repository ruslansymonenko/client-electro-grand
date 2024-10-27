import { createSlice } from '@reduxjs/toolkit';

interface IAddNewProductModalSlice {
  isOpen: boolean;
}

const initialState: IAddNewProductModalSlice = {
  isOpen: false,
};

const addNewProductModalSlice = createSlice({
  name: 'addNewElement',
  initialState,
  reducers: {
    openAddNewProductModal: (state: IAddNewProductModalSlice) => {
      state.isOpen = true;
    },
    closeAddNewProductModal: (state: IAddNewProductModalSlice) => {
      state.isOpen = false;
    },
  },
});

export const { openAddNewProductModal, closeAddNewProductModal } = addNewProductModalSlice.actions;

export default addNewProductModalSlice.reducer;
