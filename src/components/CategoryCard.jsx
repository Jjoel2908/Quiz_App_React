import React from 'react'
import { NavLink } from 'react-router-dom'

export const CategoryCard = ({ 
  category,
	alt,
	src,
	gradientColor,
 }) => {
  return (
    <NavLink 
      to={`/categoria/${category}`}
      className={`flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r ${gradientColor} transition-all hover:scale-105`}
    >
      <div className='p-5 flex justify-center items-center'>
				<img src={src} alt={alt} className='w-36' />
			</div>

      <h1 className='text-xl text-center text-stone-100 bg-stone-950 bg-opacity-40 p-3 px-5'>
				{category}
			</h1>
      
    </NavLink>
  )
}
