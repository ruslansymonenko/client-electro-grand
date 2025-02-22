import { createSlice } from '@reduxjs/toolkit';

interface ISlice {
  isOpen: boolean;
}

const initialState: ISlice = {
  isOpen: false,
};

const addNewSubcategoryModalSlice = createSlice({
  name: 'addNewSubcategoryModal',
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

export const addSubcategoryModal = addNewSubcategoryModalSlice.actions;

export default addNewSubcategoryModalSlice.reducer;
