import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '@/store/slices/cartSlice';
import addNewProductSlice from '@/store/slices/modals/addNewProductSlice';
import favoritesSlice from '@/store/slices/favoritesSlice';
import filterSlice from '@/store/slices/filterSlice';
import callbackModalSlice from '@/store/slices/modals/callbackModalSlice';
import deleteCheckModalSlice from '@/store/slices/modals/deleteCheckModalSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoritesSlice,
    filterSlice: filterSlice,

    //modals
    addNewProduct: addNewProductSlice,
    callbackModalSlice: callbackModalSlice,
    deleteCheckModal: deleteCheckModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
