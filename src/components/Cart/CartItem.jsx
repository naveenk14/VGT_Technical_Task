import React from "react";
import CartButton from "../../utils/CartButton";
import { IoMdCloseCircle } from "react-icons/io";
import { EshopState } from "../../context/context";

const CartItem = ({ item }) => {
  console.log(item);
  const { dispatch } = EshopState();
  return (
    <div className="flex justify-between items-center p-2 border mb-3 border-gray-300 rounded-md shadow-md hover:shadow-neutral-400 relative">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-[120px] h-[80px] cursor-pointer me-2">
          <img
            src={item.productImage}
            alt={item.productName}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div>
          <p className="font-bold text-[14px] text-cyan-800">{item.productName}</p>
          <p className="font-bold text-[14px] text-cyan-800">₹ {item.productPrice} /-</p>
        </div>
      </div>
      <CartButton item={item} style={{ width: "200px" }} />
      <IoMdCloseCircle size={20} className="absolute -top-2 -right-2 cursor-pointer" onClick={()=>dispatch({type:"REMOVE_FROM_CART", payload: item.id})} />
    </div>
  );
};

export default CartItem;
