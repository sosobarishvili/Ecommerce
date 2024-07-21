import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
  image: string;
  imageTablet: string;
  imageMobile: string;
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice += action.payload.totalPrice;
      } else {
        state.items.push(action.payload);
      }
    },
    setCartItems(state, action: PayloadAction<CartItem[]>) {
      state.items = action.payload;
    },
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity++;
        item.totalPrice = item.quantity * item.price;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        item.quantity--;
        item.totalPrice = item.quantity * item.price;
        if (item.quantity <= 0) {
          state.items = state.items.filter(item => item.id !== action.payload);
        }
      }
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    }
  },
});

export const { addItem, setCartItems, increaseQuantity, decreaseQuantity, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;