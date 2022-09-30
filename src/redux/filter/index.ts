import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IFilterState, { SortProperty, TSort } from "./types";

const initialState: IFilterState = {
  filters: "all",
  searchValue: "",
  sort: {
    name: "rating",
    sortProperty: SortProperty.RATING,
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<TSort>) {
      state.sort = action.payload;
    },
    changeFilter(state, action) {
      state.filters = action.payload;
    },
  },
});

export const FilterActions = filterSlice.actions;

export default filterSlice.reducer;
