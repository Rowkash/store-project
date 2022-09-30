import { bindActionCreators } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { ProductsAction, fetchProducts } from "../redux/products";
import { CartActions } from "../redux/cart";
import { FilterActions } from "../redux/filter";

const actionCreators = {
  ...ProductsAction,
  ...CartActions,
  ...FilterActions,
  fetchProducts,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actionCreators, dispatch);
};
