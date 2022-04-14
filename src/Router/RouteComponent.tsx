import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Components/Home/HomePage'
import Checkout from '../Components/Order/Checkout'
import OrderSummary from '../Components/Order/OrderSummary'

const RouteComponent = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/summary' element={<OrderSummary />} />
    </Routes>
  )
}

export default RouteComponent