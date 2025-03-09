import React from 'react'

const OrdersList = ({item}) => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between md:items-center p-2 border mb-3 bg-gradient-to-l from-gray-200 to-gray-100 border-gray-300 rounded-md shadow-md hover:shadow-neutral-400">
        <div className="flex items-center">
          <div className="w-[120px] h-[80px] cursor-pointer me-2">
            <img
              src={item?.productImage}
              alt={item?.productName}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div>
            <p className="font-bold text-[14px] text-cyan-800">
              {item?.productName}
            </p>
            <p className="font-bold text-[14px] text-cyan-800">
              ₹ {item?.productPrice} /-
            </p>
          </div>
        </div>
        <div className="font-xl font-medium text-right md:text-left"> {item?.quantity} X {item?.productPrice} = {item.quantity * item?.productPrice}</div>
      </div>
  )
}

export default OrdersList