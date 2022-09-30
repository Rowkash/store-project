import { createSelector } from "@reduxjs/toolkit";
import { selectAllProducts } from "../products/selectors";
import { RootState } from "../store";

export const selectActiveFilter = (state: RootState) => state.filter.filters;
export const selectSearchValue = (state: RootState) => state.filter.searchValue;
export const selectActiveSort = (state: RootState) => state.filter.sort.name;

export const selectProductsByFilter = createSelector(
  [selectAllProducts, selectActiveFilter, selectSearchValue],
  (allProducts, activeFilter, searchValue) =>
    activeFilter === "all"
      ? allProducts.filter((prod) =>
          prod.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      : // .sort((a, b) => b.rating.rate - a.rating.rate)
        allProducts.filter(
          (product) =>
            product.category === activeFilter &&
            product.title.toLowerCase().includes(searchValue.toLowerCase())
        )
  // .sort((a, b) => b.rating.count - a.rating.count)
);
