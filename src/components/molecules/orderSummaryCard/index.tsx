import React from "react";
import { currencyFormatter } from "../../../helpers/currencyFormatter";
interface OrderSummaryCard {
  taxEstimate: number;
  shippingEstimate: number;
  subTotal: number;
}
function OrderSummaryCard({
  taxEstimate,
  shippingEstimate,
  subTotal,
}: OrderSummaryCard) {
  return (
    <div className="w-[400px] max-w-full mt-10 md:mt-0">
      <div className="bg-gray-100  p-10">
        <div className="flex-1 flex items-start justify-between">
          <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
        </div>
        <div className="my-10 divide-y">
          <div className="flex justify-between   text-sm text-gray-500  py-5">
            <p>Subtotal</p>
            <p>{currencyFormatter(subTotal, "NGN")}</p>
          </div>
          <div className="flex justify-between   text-sm text-gray-500 py-5 ">
            <p>Shipping Estimate</p>
            <p>{currencyFormatter(shippingEstimate, "NGN")}</p>
          </div>
          <div className="flex justify-between   text-sm text-gray-500  py-5">
            <p>Tax Estimate</p>
            <p>{currencyFormatter(taxEstimate, "NGN")}</p>
          </div>
          <div className="flex justify-between text-base font-medium text-gray-900 py-5 ">
            <p>Subtotal</p>
            <p>
              {currencyFormatter(
                taxEstimate + shippingEstimate + subTotal,
                "NGN"
              )}
            </p>
          </div>
        </div>

        <a
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Checkout
        </a>
      </div>
    </div>
  );
}

export default OrderSummaryCard;
