export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: TRating;
}

export type TRating = {
  rate: number;
  count: number;
};

export interface ProductsState {
  products: IProduct[];
  status: Status;
  error: string | null | unknown;
}

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}
