import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import products from "./products";
import filter from "./filter";

export const store = configureStore({
  reducer: {
    cart,
    products,
    filter,
  },
});

export type RootState = ReturnType<typeof store.getState>;
