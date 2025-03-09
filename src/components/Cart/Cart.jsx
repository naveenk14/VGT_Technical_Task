import React from "react";
import CartItem from "./CartItem";
import { EshopState } from "../../context/context";
import CartSummary from "./CartSummary";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router";

const Cart = () => {
  const {
    state: { cart },
  } = EshopState();
  const navigate = useNavigate()

  if (cart.length === 0) {
    return (
      <div className="h-[80vh] flex flex-col items-center justify-center">
        <BsCart4 size={50} />
        <p className="text-center font-bold text-2xl text-gray-600 mt-2">
          Your cart is empty !
        </p>
        <p className="text-center font-medium text-gray-600 mt-2">
          Add items to it now.
        </p>
        <button className="bg-blue-600 text-white w-[140px] py-3 rounded mt-4 cursor-pointer" onClick={()=>navigate("/category")}  >
          SHOP NOW
        </button>
      </div>
    );
  }

  return (
    <>
      <p className="py-4 font-bold text-xl text-gray-500">Cart Items</p>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3">
          {cart &&
            cart.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })}
        </div>
        <div className="w-full lg:w-1/3 lg:ps-3">
          <CartSummary />
        </div>
      </div>
    </>
  );
};

export default Cart;
