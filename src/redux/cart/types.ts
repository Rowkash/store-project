export interface PropsCartTypes {
  key: number;
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartState {
  cart: any[];
  totalItems: number;
  totalPrice: number;
  display: boolean;
}
