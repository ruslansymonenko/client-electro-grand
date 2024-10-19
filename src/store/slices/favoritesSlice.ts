import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductResponse } from '@/types/server-response-types/product-response';

interface IFavoritesSlice {
  favoritesItems: IProductResponse[];
}

const saveFavoritesToLocalStorage = (favoritesItems: IProductResponse[]) => {
  localStorage.setItem('favorites', JSON.stringify(favoritesItems));
};

const initialState: IFavoritesSlice = {
  favoritesItems: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorites: (state: IFavoritesSlice, action: PayloadAction<IProductResponse>) => {
      const existingItem = state.favoritesItems.find((item) => item.id === action.payload.id);

      if (existingItem) {
        state.favoritesItems = state.favoritesItems.filter((item) => item.id !== action.payload.id);
        saveFavoritesToLocalStorage(state.favoritesItems);
      } else {
        state.favoritesItems.push(action.payload);
        saveFavoritesToLocalStorage(state.favoritesItems);
      }
    },
    setFavorites: (state: IFavoritesSlice, action: PayloadAction<IProductResponse[]>) => {
      state.favoritesItems = action.payload;
    },
    removeFromFavorites: (state: IFavoritesSlice, action: PayloadAction<number>) => {
      state.favoritesItems = state.favoritesItems.filter((item) => item.id !== action.payload);

      saveFavoritesToLocalStorage(state.favoritesItems);
    },
  },
});

export const { toggleFavorites, removeFromFavorites, setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
