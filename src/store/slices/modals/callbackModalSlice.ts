import { createSlice } from '@reduxjs/toolkit';

interface ISlice {
  isOpen: boolean;
}

const initialState: ISlice = {
  isOpen: false,
};

const callbackModalSlice = createSlice({
  name: 'callbackModalSlice',
  initialState,
  reducers: {
    openCallbackModal: (state: ISlice) => {
      state.isOpen = true;
    },
    closeCallbackModal: (state: ISlice) => {
      state.isOpen = false;
    },
  },
});

export const { openCallbackModal, closeCallbackModal } = callbackModalSlice.actions;

export default callbackModalSlice.reducer;
