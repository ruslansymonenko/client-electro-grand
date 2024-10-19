import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '@/store/slices/cartSlice';
import addNewProductSlice from '@/store/slices/modals/addNewProductSlice';
import favoritesSlice from '@/store/slices/favoritesSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoritesSlice,
    addNewProduct: addNewProductSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
