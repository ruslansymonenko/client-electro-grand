import { createSlice } from '@reduxjs/toolkit';

interface IAddNewProductModalSlice {
  isOpen: boolean;
}

const initialState: IAddNewProductModalSlice = {
  isOpen: false,
};

const addNewProductModalSlice = createSlice({
  name: 'addNewProductModal',
  initialState,
  reducers: {
    openModal: (state: IAddNewProductModalSlice) => {
      state.isOpen = true;
    },
    closeModal: (state: IAddNewProductModalSlice) => {
      state.isOpen = false;
    },
  },
});

export const addProductModal = addNewProductModalSlice.actions;

export default addNewProductModalSlice.reducer;
