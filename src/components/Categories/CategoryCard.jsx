import React from 'react'
import { useNavigate } from 'react-router'


const CategoryCard = ({item}) => {

  const navigate = useNavigate()

  return (
    <div className='border border-gray-300 rounded-md shadow-md hover:shadow-neutral-400 overflow-hidden' onClick={() => navigate(`/category/${item.name}`)} >
        <div className="w-full h-[180px]">
            <img src={item.image} className='w-full h-full object-cover rounded-t-md' alt="category images" />
        </div>
        <div>
            <p className='text-center font-bold text-[16px] text-cyan-800 py-2'>{item.name}</p>
        </div>
    </div>
  )
}

export default CategoryCard