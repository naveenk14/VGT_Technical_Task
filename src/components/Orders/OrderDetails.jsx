import React from "react";
import OrdersList from "./OrdersList";

const OrderDetails = ({order}) => {
  return (
    <div className="border border-gray-300 p-3 mb-3 rounded-md w-full lg:w-[70%]">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2" >
        <p className="font-bold">Order Id : #{order.id}</p>
        <p className="font-semibold">Total : ₹ {order.total} /- <span className="font-light text-[11px]">(Taxes Included)</span></p>
      </div>
      <p className="font-extrabold text-[16px] mb-2">Items</p>
      {
        order?.items.map((item, index) => <OrdersList key={index} item={item} />)
      }
      
    </div>
  );
};

export default OrderDetails;
