import React from "react";
import { useLocation } from "react-router";
import BreadCrumb from "../../utils/BreadCrumb";
import { EshopState } from "../../context/context";
import CartButton from "../../utils/CartButton";

const ProductDetails = () => {
  const location = useLocation();
  const { state } = location;
  const {
    state: { products }
  } = EshopState();
  const singleproduct = products.find((product) => product.id === state);
  console.log(singleproduct);

  return (
    <>
      <p className="py-4 font-bold text-xl text-gray-500">
        <BreadCrumb path={location.pathname} />
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="w-full h-[580px]">
          <img
            src={singleproduct && singleproduct?.productImage}
            className="w-full h-full object-cover rounded-md"
            alt="category images"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-2xl font-bold mb-2">
              {singleproduct && singleproduct?.productName}
            </p>
            <p className="font-extralight mb-2">
              {singleproduct && singleproduct?.productDescription}
            </p>
            <p className="text-xl font-bold mb-2">
              ₹ {singleproduct && singleproduct?.productPrice} /-
            </p>
          </div>
          <CartButton item={singleproduct} style={{width:"200px"}} />
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
