import React, { useEffect, useState } from 'react'
// import BrandsModal from '../Components/BrandsModal'
import axios from 'axios'
import { AppRoute } from '../../App'
// import DelButt from './DelButt'
import OrderModal from '../Components/OrderModal'


export default function Order() {

  const [orderr, setOrders] = useState([])
  // const [orderr, setOrder] = useState({ items: [] });

  useEffect(() => {
    axios.get(`${AppRoute}api/all-orders`)
      .then((json) => setOrders(json.data.order))
      .catch((err) => alert(err.message))
  }, [])


  return (
    <div className="bg p-2">
      <div className="d-flex justify-content-between align-items-center bg-dark p-2">
        <span className='fs-5 fw-bold text-white'>Order</span>
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Customer Email</th>
              <th scope="col">Customer Address</th>
              <th scope="col">Customer Contact</th>
              <th scope="col">Total Bill</th>
              <th scope="col">Order_at</th>
              <th scope="col">Items</th>
            </tr>
          </thead>
          <tbody>
            {
              orderr?.map((val, key) =>
                <tr key={key}>
                  <th scope="row">{val._id}</th>
                  <td>{val.customerName}</td>
                  <td>{val.customerEmail}</td>
                  <td>{val.customerAddress}</td>
                  <td>{val.customerContact}</td>
                  <td>{val.totalBill}</td>
                  <td>{val.order_at}</td>
                  <td>{val.status}</td>
                  <td ><OrderModal /></td>
                </tr>
              )
            }
            {/* {orderr.map((order , key) => (
              <tr key={key}>
                <td>{order._id}</td>
                <td>{order.customerName}</td>
                <td>{order.customerEmail}</td>
                <td>{order.customerAddress}</td>
                <td>{order.customerContact}</td>
                <td>{order.totalBill}</td>
                <td>{order.contact}</td>
                <td>{order.order_at}</td>
                <td ><OrderModal productData={order} /></td>
              </tr>
            ))} */}
          </tbody>
        </table>


      </div>



    </div>
  )
}
