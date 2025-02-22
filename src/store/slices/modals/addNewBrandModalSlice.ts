import { createSlice } from '@reduxjs/toolkit';

interface ISlice {
  isOpen: boolean;
}

const initialState: ISlice = {
  isOpen: false,
};

const addNewBrandModalSlice = createSlice({
  name: 'addNewBrandModal',
  initialState,
  reducers: {
    openModal: (state: ISlice) => {
      state.isOpen = true;
    },
    closeModal: (state: ISlice) => {
      state.isOpen = false;
    },
  },
});

export const addNewBrandModal = addNewBrandModalSlice.actions;

export default addNewBrandModalSlice.reducer;
