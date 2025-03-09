import React from "react";
import { useNavigate } from "react-router";
import { EshopState } from "../../context/context";
import CartButton from "../../utils/CartButton";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const {state : {cart}, dispatch} = EshopState()
  console.log(cart)

  return (
    <div className="border border-gray-300 rounded-md shadow-md hover:shadow-neutral-400 overflow-hidden">
      <div
        className="w-full h-[180px] cursor-pointer"
        onClick={() =>
          navigate(`/category/${item.categoryName}/${item.productName}`,{state: item.id})
        }
        
      >
        <img
          src={item.productImage}
          className="w-full h-full object-cover rounded-t-md"
          alt="category images"
        />
      </div>
      <div className="p-2">
        <p className="font-bold text-[19px] text-cyan-800">
          {item.productName}
        </p>
        <p className="font-bold text-[16px] text-cyan-800 mb-2">
        ₹ {item.productPrice} /-
        </p>
        <CartButton item={item} />
      </div>
    </div>
  );
};

export default ProductCard;
