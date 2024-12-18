import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISlice {
  isOpen: boolean;
  elementId: number | null;
}

const initialState: ISlice = {
  isOpen: false,
  elementId: null,
};

const updateProductModalSlice = createSlice({
  name: 'updateProductModal',
  initialState,
  reducers: {
    openModal: (state: ISlice, action: PayloadAction<number>) => {
      state.isOpen = true;
      state.elementId = action.payload;
    },
    closeModal: (state: ISlice) => {
      state.isOpen = false;
      state.elementId = null;
    },
  },
});

export const updateProductModal = updateProductModalSlice.actions;

export default updateProductModalSlice.reducer;
