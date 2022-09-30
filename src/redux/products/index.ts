import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { IProduct, ProductsState, Status } from "./types";

const initialState: ProductsState = {
  products: [],
  status: Status.LOADING,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const res = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products"
      );
      return res.data;
    } catch (error) {
      console.log(error);
      const err = error as AxiosError;
      throw err.message;
    }
  }
);

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = Status.SUCCESS;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = Status.ERROR;
        state.error = action.payload;
      });
  },
});

export const ProductsAction = ProductSlice.actions;

export default ProductSlice.reducer;
