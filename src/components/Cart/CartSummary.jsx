import React from "react";
import { EshopState } from "../../context/context";
import { useNavigate } from "react-router";

const CartSummary = () => {
  const navigate = useNavigate();
  const {
    state: { cart },dispatch
  } = EshopState();
  const total = cart.reduce(
    (acc, item) => acc + item.productPrice * item.quantity,
    0
  );
  const tax = (total / 100) * 2;
  const grandTotal = total + tax;
  const handleOrder = () => {
    console.log("Order Placed");
    dispatch({ type: "PLACE_ORDER",payload: grandTotal });
    navigate("/orders");  
  };
  return (
    <div className=" p-4 border border-gray-300 rounded-md">
      <p className="font-bold text-xl text-gray-500 mb-2">Summary</p>
      {cart?.map((item, index) => {
        return (
          <div key={index} className="flex justify-between mb-2">
            <p>{item.productName}</p>
            <p>
              {item.quantity} X {item.productPrice} = ₹{" "}
              {item.productPrice * item.quantity}
            </p>
          </div>
        );
      })}
      <div className="flex justify-between mb-4">
        <p>Tax (2%)</p>
        <p>₹ {tax.toFixed()}</p>
      </div>
      <div className="flex justify-end my-2">
        <p className="me-4 font-xl font-bold">Total</p>
        <p>₹ {grandTotal.toFixed(2)} /-</p>
      </div>
      <button
        type="button"
        className="bg-blue-600 text-white w-full py-3 rounded mt-4 cursor-pointer"
        onClick={() => handleOrder()}
      >
        Place Order
      </button>
    </div>
  );
};

export default CartSummary;
