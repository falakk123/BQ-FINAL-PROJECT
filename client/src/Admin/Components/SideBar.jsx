import React, { useContext } from 'react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GlobalContext } from '../../Context/context'
import { FiHome } from 'react-icons/fi';
import { BiCategoryAlt } from 'react-icons/bi'

export default function SideBar() {
const {user_state,user_dispatch}=useContext(GlobalContext)

  const location = useLocation()

  const navItem = [
    {
      tab: "Home",
      url: "/",
      icon: <FiHome />
    },
    {
      tab: "Product",
      url: "/product",
      icon: <BiCategoryAlt />
    },
    {
      tab: "Brands",
      url: "/brands",
     icon: <BiCategoryAlt />
    },
    {
      tab: "Category",
      url: "/category",
      icon: <BiCategoryAlt />
    },
    {
      tab: "Order",
      url: "/order",
      icon: <BiCategoryAlt />
    }
    

  ]
  return (
    <>
      <div className="btn btn-outline-light bg-dark p-2 mt-2 d-flex text-white justify-content-between align-items-center">
        <span>Admin Name
        </span>
     
        <button className="btn btn-light" onClick={()=>user_dispatch({type:"USER_LOGOUT"})}>Logout</button>
       
      </div>
    
      <ul className="nav flex-column p-3">
        {
          navItem.map((val, key) =>
            <li key={key} className={`nav-item mt-3 text-dark ${location.pathname == val.url ? 'btn btn-outline-light' : null}`}>
        <Link className='text-white nav-link d-flex align-items-center gap-2' to={val.url}>
          <span>{val.icon}</span>
          <span> {val.tab}</span>
        </Link>
      </li>
      )
        }
    </ul >

    </>
  )
}
