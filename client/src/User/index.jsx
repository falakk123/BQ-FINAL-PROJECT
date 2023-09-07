import React from 'react'
import NavigationBar from './Components/NavigationBar'
import BrandPage from './pages/BrandPage'
import Brands from './pages/Brands'
import About from './pages/About'
import CategoryPage from './pages/CategoryPage'
import Category from './pages/Category'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home'
import Products from './pages/Products'
import Terms from './pages/Terms'
import MyFooter from './Components/MyFooter'
import {Navigate, Route, Routes } from 'react-router-dom'


export default function User() {
  return (
   <>
   <NavigationBar />
   <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/about" element={<About />} />
              <Route path="/category" element={<Category />} />
              <Route path="/brands" element={<Brands />} />
              <Route path="/brands/:brand" element={<BrandPage />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="*" element={<Navigate to="/" replace={true}/>} />
            </Routes>

            <MyFooter />

   </>
  
  )
}
