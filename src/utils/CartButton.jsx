import React from 'react'
import { EshopState } from '../context/context';

const CartButton = ({item,style}) => {
    const {
        state: { cart }, dispatch
      } = EshopState();
      console.log(item)
  return (
    <>
        {item.id ===
          cart.find((i) => i.id === item.id)?.id ? (
            <div className="flex justify-start items-center mt-2 " style={style}>
              <button
                className="cursor-pointer border border-blue-600 w-1/2 py-2 rounded hover:bg-blue-600 hover:text-white transition-all"
                onClick={() =>
                  dispatch({
                    type: "DECREASE_QUANTITY",
                    payload: item.id,
                  })
                }
              >
                -
              </button>
              <p className="text-blue-600 font-bold w-1/2 text-center">
                {cart.find((i) => i.id === item.id)?.quantity}
              </p>
              <button
                className="cursor-pointer border border-blue-600 w-1/2 py-2 rounded hover:bg-blue-600 hover:text-white transition-all"
                onClick={() =>
                  dispatch({
                    type: "INCREASE_QUANTITY",
                    payload: item.id,
                  })
                }
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="cursor-pointer bg-blue-600 text-white w-full py-3 rounded"
              style={style}
              onClick={() =>
                dispatch({ type: "ADD_TO_CART", payload: item.id })
              }
            >
              Add to Cart
            </button>
          )}
    </>
  )
}

export default CartButton