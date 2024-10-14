import { ICartItem } from '@/types/app-types/cart/cart.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ICartSlice {
  cartItems: ICartItem[];
  cartSum: number;
}

const saveCartToLocalStorage = (cartItems: ICartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
};

const loadCartFromLocalStorage = (): ICartItem[] => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

const calculateCartSum = (cartItems: ICartItem[]): number => {
  return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
};

const initialState: ICartSlice = {
  cartItems: loadCartFromLocalStorage(),
  cartSum: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state: ICartSlice, action: PayloadAction<ICartItem>) => {
      const existingItem = state.cartItems.find(
        (item) => item.product.id === action.payload.product.id,
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }

      state.cartSum = calculateCartSum(state.cartItems);
      saveCartToLocalStorage(state.cartItems);
    },
    increaseQuantity: (state: ICartSlice, action: PayloadAction<number>) => {
      const existingItem = state.cartItems.find((item) => item.product.id === action.payload);

      if (existingItem) {
        existingItem.quantity += 1;
      }

      state.cartSum = calculateCartSum(state.cartItems);
      saveCartToLocalStorage(state.cartItems);
    },
    decreaseQuantity: (state: ICartSlice, action: PayloadAction<number>) => {
      const existingItem = state.cartItems.find((item) => item.product.id === action.payload);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter((item) => item.product.id !== action.payload);
        }
      }

      state.cartSum = calculateCartSum(state.cartItems);
      saveCartToLocalStorage(state.cartItems);
    },

    removeFromCart: (state: ICartSlice, action: PayloadAction<number | string>) => {
      state.cartItems = state.cartItems.filter((item) => item.product.id !== action.payload);

      state.cartSum = calculateCartSum(state.cartItems);
      saveCartToLocalStorage(state.cartItems);
    },
    calculateSum: (state: ICartSlice) => {
      state.cartSum = calculateCartSum(state.cartItems);
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity, calculateSum } =
  cartSlice.actions;

export default cartSlice.reducer;
