export default interface IFilterState {
  filters: string;
  searchValue: string;
  sort: TSort;
}

export type TSort = {
  name: string;
  sortProperty: SortProperty;
};

export enum SortProperty {
  RATING = "rating",
  PRICE_ASC = "priceAsc",
  PRICE_DESC = "priceDesk",
}
