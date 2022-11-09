export interface ProductType {
  price: number;
  quantity: number;
  description: string;
  color: string;
  image: string;
}

export interface ShoppingCartIntialStateType {
  products: ProductType[];
  productsPrice: number;
  tax: number;
  shippingFee: number;
}

export interface ShopingCartActionType {
  type: string;
  payload: ShoppingCartIntialStateType;
}
