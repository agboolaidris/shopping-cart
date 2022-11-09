import React from "react";
import { BeakerIcon, PlusIcon } from "@heroicons/react/24/outline";
function Header() {
  return (
    <div className="h-[80px]  px-10 sm:none bg-dominant container flex items-center text-black">
      <BeakerIcon className="w-10 cursor-pointer hover:text-green-500" />
    </div>
  );
}

export default Header;
