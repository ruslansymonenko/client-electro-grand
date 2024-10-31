import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICallbackModalSlice {
  isOpen: boolean;
}

const initialState: ICallbackModalSlice = {
  isOpen: false,
};

const callbackModalSlice = createSlice({
  name: 'callbackModalSlice',
  initialState,
  reducers: {
    openCallbackModal: (state: ICallbackModalSlice) => {
      state.isOpen = true;
    },
    closeCallbackModal: (state: ICallbackModalSlice) => {
      state.isOpen = false;
    },
  },
});

export const { openCallbackModal, closeCallbackModal } = callbackModalSlice.actions;

export default callbackModalSlice.reducer;
