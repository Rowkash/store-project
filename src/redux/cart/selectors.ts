import { RootState } from "./../store";
export const selectTotalItems = (state: RootState) => state.cart.totalItems;
export const selectTotalPrice = (state: RootState) => state.cart.totalPrice;
