import React from 'react'
import { CategoryCard } from './CategoryCard'
import { imgs, categories } from '../data';

const [ 
  imgCiencia,
	imgDeportes,
	imgFilosofia,
	imgGeografia,
	imgHistoria,
	imgLiteratura,
	imgTecnologia ] = imgs;

export const Categories = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-8 mt-4'>
      <CategoryCard
        category={categories.ciencia}
        src={imgCiencia} 
        alt={`Categoría ${categories.ciencia}`}
        gradientColor=' from-purple-500 to-pink-500'
      />

      <CategoryCard
        category={categories.deportes}
        src={imgDeportes}
        alt={`Categoría ${categories.deportes}`}
        gradientColor='from-lime-400 to-teal-700'
      />

      <CategoryCard
        category={categories.filosofia}
        src={imgFilosofia} 
        alt={`Categoría ${categories.filosofia}`}
        gradientColor='from-rose-400 via-fuchsia-500 to-indigo-500'
      />

      <CategoryCard
        category={categories.geografia}
        src={imgGeografia}
        alt={`Categoría ${categories.geografia}`}
        gradientColor='from-orange-500 to-yellow-300'
      />

      <CategoryCard 
        category={categories.historia}
        src={imgHistoria}
        alt={`Categoría ${categories.historia}`}
        gradientColor='from-green-700 to-lime-500'
      />

      <CategoryCard
        category={categories.literatura}
        src={imgLiteratura}
        alt={`Categoría ${categories.literatura}`}
        gradientColor='from-pink-500 via-red-500 to-yellow-500'
      />

      <CategoryCard
        category={categories.tecnologia}
        src={imgTecnologia}
        alt={`Categoría ${categories.tecnologia}`}
        gradientColor='from-violet-900 to-rose-500'
      />

    </div>
  )
}
