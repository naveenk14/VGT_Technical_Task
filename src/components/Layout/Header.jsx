import React from "react";
import { TiShoppingCart } from "react-icons/ti";
import { IoMdSettings } from "react-icons/io";
import { EshopState } from "../../context/context";
import { Link, useNavigate } from "react-router";

const Header = () => {
  const {
    state: { cart },
  } = EshopState();
  const navigate = useNavigate();
  return (
    <div className="flex bg-gray-300 justify-between p-4">
      <div className="font-bold text-red-400 cursor-pointer" onClick={()=>navigate("/category")} >ESHOP</div>
      <div className="flex space-x-4 my-1">
        <Link to="/cart" className="relative">
          <TiShoppingCart
            size={24}
            className="cursor-pointer hover:text-red-500 transition-all"
          />
          {cart.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 w-[16px] h-[16px] rounded-full flex items-center justify-center">
              <span className="text-[10px] text-white font-bold">
                {cart.length}
              </span>
            </div>
          )}
        </Link>
        <Link to={"/orders"}>
          <IoMdSettings
            size={24}
            className="cursor-pointer hover:text-blue-500 transition-all"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
