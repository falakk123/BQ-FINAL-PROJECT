import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import GuestNav from './Components/GuestNav'
import Products from '../Guest/Components/CustomForm/Products'
import Category from '../Guest/Components/CustomForm/Category'
import Brands from './Components/CustomForm/Brands'
import Home from './Components/CustomForm/Home'
import LoginSignup from '../Guest/Pages/LoginSignup'
import SignUp from './Pages/SignUp'
import Terms from '../User/pages/Terms'
import ContactUs from '../User/pages/ContactUs'
import About from '../User/pages/About'
import MyFooter from '../User/Components/MyFooter'

export default function index() {
  return (
    <>
      <GuestNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/category" element={<Category />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <MyFooter />
    </>
  )
}