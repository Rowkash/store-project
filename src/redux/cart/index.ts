import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../products/types";
import { CartState } from "./types";

const initialState: CartState = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
  display: false,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const exist = state.cart.find((item) => item.id === product.id);

      if (exist) {
        state.cart = state.cart.map((item) => {
          if (item.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        state.cart = [...state.cart, { ...product, quantity: 1 }];
      }
      state.totalItems += 1;
    },

    increaseCartQuantity: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.quantity += 1;
        }
        return item;
      });
      state.totalItems += 1;
    },

    subtractCartQuantity: (state, action: PayloadAction<number>) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          item.quantity -= 1;
        }
        return item;
      });
      state.cart = state.cart.filter((item) => item.quantity !== 0);
      state.totalItems -= 1;
    },

    addToTotal: (state, action: PayloadAction<number>) => {
      state.totalPrice += action.payload;
    },

    subtractFromTotal: (state, action: PayloadAction<number>) => {
      state.totalPrice -= action.payload;
    },

    displayCart: (state) => {
      state.display = !state.display;
    },
  },
});

export const CartActions = CartSlice.actions;

export default CartSlice.reducer;
