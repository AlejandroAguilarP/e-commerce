import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductDetail } from '../views/ProductDetail'
import { ProductList } from '../views/ProductList'

export const RouterComponent = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route index path="/" element={<ProductList/> } />
        <Route path="/products/detail/:id" element={<ProductDetail/> } />
    </Routes>
  </BrowserRouter>
  )
}
