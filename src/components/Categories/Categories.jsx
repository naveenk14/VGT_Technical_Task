import React from "react";
import CategoryCard from "./CategoryCard";
import { EshopState } from "../../context/context";

const Categories = () => {

    const {state : {categories}} = EshopState() // destructuring the state object to get the categories

  return (
    <>
      <p className="py-4 font-bold text-xl text-gray-500">Categories</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {
            categories.map((item, i) => (
                <CategoryCard key={i} item={item} />
            ))
        }
      </div>
    </>
  );
};

export default Categories;
