import React from 'react'
import ProductCard from './ProductCard'
import { EshopState } from '../../context/context'
import { useLocation } from 'react-router'
import BreadCrumb from '../../utils/BreadCrumb'

const Products = () => {

    const {state : {products}} = EshopState() // destructuring the state object to get the products
    const location = useLocation()
    const categoryName = location.pathname.split('/')[2]
  return (
    <>
      <p className="py-4 font-bold text-xl text-gray-500">
        <BreadCrumb path={location.pathname} />
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {
            products.filter(item => item.categoryName === categoryName).map((item, i) => (
                <ProductCard key={i} item={item} />
            ))
        }
      </div>
    </>
  )
}

export default Products