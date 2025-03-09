import React from 'react'
import OrderDetails from './OrderDetails'
import { EshopState } from '../../context/context';
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router";

const Orders = () => {
    const {
        state: { orders },
      } = EshopState();
      const navigate = useNavigate()
      console.log(orders)

      if (orders.length === 0) {
          return (
            <div className="h-[80vh] flex flex-col items-center justify-center">
              <BsCart4 size={50} />
              <p className="text-center font-bold text-2xl text-gray-600 mt-2">
                Your orders is empty !
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
        <p className="py-4 font-bold text-xl text-gray-500">Orders</p>
        {
            orders.sort((a,b) => new Date(b.date) - new Date(a.date)).map((order, index) => {
                return  <OrderDetails key={index} order={order} />
            })
        }
       
    </>
  )
}

export default Orders