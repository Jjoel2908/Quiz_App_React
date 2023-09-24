import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import { CategoryPage, Home } from '../pages'

const Router = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> }  />
        <Route path='/categoria/:category' element={ <CategoryPage /> }  />
      </Routes>
    </>
  )
}

export default Router