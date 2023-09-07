import React from 'react'
import SideBar from './Components/SideBar'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Category from './Pages/Category'
import Brands from './Pages/Brands'
import Order from './Pages/Order'
import { Route, Routes } from "react-router-dom";


export default function Admin() {
  return (

    <div className="row m-0 p-0">
      <div className="col md-3 bg-dark" style={{ height: '524vh' }}>
        <SideBar />
      </div>
      <div className="col-md-9">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/category" element={<Category />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>


  )
}
