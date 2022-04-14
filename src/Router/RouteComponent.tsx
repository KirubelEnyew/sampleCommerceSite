import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Components/Home/HomePage'
// import NavBar from '../Components/NavBar/NavBar'
// import Products from '../Components/Products/Products'
// import { products } from '../Shared/products'

const RouteComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      {/* <Route path='/' element={<Products data={products} />} /> */}
    </Routes>
  )
}

export default RouteComponent