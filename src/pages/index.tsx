import type { NextPage } from "next";
import { useEffect } from "react";
import ShoppingCartCard from "../components/molecules/shoppingCartCard";
import OrderSummaryCard from "../components/molecules/orderSummaryCard";
import { useGlobalDispatch, useGlobalState } from "../store";
import productsCart from "../database/productCart";
import { ShoppingType } from "../@types/reducer/shoppingCart";
import Header from "../components/molecules/header";

const Home: NextPage = () => {
  const { shoppingCart } = useGlobalState();
  const dispatch = useGlobalDispatch();
  useEffect(() => {
    dispatch({ type: ShoppingType.FetchCART, payload: productsCart });
  }, []);
  const handleRemoveProduct = (productId: number) => {
    dispatch({ type: ShoppingType.RemoveITEM, productId });
  };

  const handleIncreaseProductQTY = (productId: number) => {
    dispatch({ type: ShoppingType.IncreaseQTY, productId });
  };

  const handleDecreaseProductQTY = (productId: number) => {
    dispatch({ type: ShoppingType.ReduceQTY, productId });
  };

  return (
    <div>
      <Header />
      <div className="container flex flex-col lg:flex-row flex-wrap  justify-center mx-auto border-gray-200 border border-solid rounded-md  px-4 py-10 mt-10">
        <div className="w-full lg:w-3/4 md:pr-10">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {shoppingCart.products.map((product) => (
                <ShoppingCartCard
                  {...product}
                  key={product.id}
                  onClickRemove={() => handleRemoveProduct(product.id)}
                  onClickIncrease={() => handleIncreaseProductQTY(product.id)}
                  onClickDescrease={() => handleDecreaseProductQTY(product.id)}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-1/4 max-w-full mt-10 lg:mt-0">
          <OrderSummaryCard
            taxEstimate={shoppingCart.tax}
            shippingEstimate={shoppingCart.shippingFee}
            subTotal={shoppingCart.productsPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
