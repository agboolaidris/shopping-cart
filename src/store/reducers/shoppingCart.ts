import {
  ShopingCartActionType,
  ShoppingCartIntialStateType,
} from "../../@types/shoppingCart";

export const ShoppingCartIntialState: ShoppingCartIntialStateType = {
  products: [],
  productsPrice: 0,
  shippingFee: 0,
  tax: 0,
};

export const shoppingCartReducer = (
  state: ShoppingCartIntialStateType,
  { type }: ShopingCartActionType
) => {
  switch (type) {
    default:
      return state;
  }
};
