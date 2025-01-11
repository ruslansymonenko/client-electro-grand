import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '@/store/slices/cartSlice';
import addNewProductSlice from '@/store/slices/modals/addNewProductModalSlice';
import favoritesSlice from '@/store/slices/favoritesSlice';
import filterSlice from '@/store/slices/filterSlice';
import callbackModalSlice from '@/store/slices/modals/callbackModalSlice';
import deleteCheckModalSlice from '@/store/slices/modals/deleteCheckModalSlice';
import addNewCategoryModalSlice from '@/store/slices/modals/addNewCategoryModalSlice';
import updateProductModalSlice from '@/store/slices/modals/updateProductModalSlice';
import setProductImagesModalSlice from '@/store/slices/modals/setProductImagesModalSlice';
import productPaginationSlice from '@/store/slices/productPaginationSlice';
import addNewSubcategoryModalSlice from '@/store/slices/modals/addNewSubcategoryModalSlice';
import addNewBrandModalSlice from '@/store/slices/modals/addNewBrandModalSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoritesSlice,
    filterSlice: filterSlice,
    productPagination: productPaginationSlice,

    //product modals
    addNewProductModal: addNewProductSlice,
    updateProductModal: updateProductModalSlice,
    setProductImagesModal: setProductImagesModalSlice,

    //category modals
    addNewCategoryModal: addNewCategoryModalSlice,
    addNewSubcategoryModal: addNewSubcategoryModalSlice,

    //brand modals
    addNewBrandModal: addNewBrandModalSlice,

    //common modals
    callbackModalSlice: callbackModalSlice,
    deleteCheckModal: deleteCheckModalSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
