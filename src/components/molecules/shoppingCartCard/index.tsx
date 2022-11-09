import React from "react";
import { BeakerIcon, PlusIcon, MinusIcon } from "@heroicons/react/24/outline";
interface ShoppingCardCardProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  quantity: number;
  price: string;
  href: string;
  color: string;
}
function ShoppingCartCard({
  imageSrc,
  imageAlt,
  href,
  name,
  quantity,
  price,
  color,
}: ShoppingCardCardProps) {
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 md:h-36 md:w-36 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={href}>{name}</a>
            </h3>
            <p className="ml-4">{price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center">
            <div className="bg-red-600 h-[20px] w-[20px] rounded flex justify-center items-center cursor-pointer hover:bg-red-700">
              <MinusIcon className="w-3 text-white" />
            </div>
            <p className="text-gray-500 p-2 ">Qty {quantity}</p>
            <div className="bg-green-600 h-[20px] w-[20px] rounded flex justify-center items-center cursor-pointer hover:bg-green-700">
              <PlusIcon className="w-3 text-white" />
            </div>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ShoppingCartCard;
