import { createSlice } from '@reduxjs/toolkit';

interface ISlice {
  isOpen: boolean;
}

const initialState: ISlice = {
  isOpen: false,
};

const addNewCategoryModalSlice = createSlice({
  name: 'addNewCategoryModal',
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

export const addCategoryModal = addNewCategoryModalSlice.actions;

export default addNewCategoryModalSlice.reducer;
