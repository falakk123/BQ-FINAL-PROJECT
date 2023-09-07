import React, { useEffect, useState } from 'react'
import ProductModal from '../Components/ProductModal'
import { useAccordionButton } from 'react-bootstrap'
import axios from 'axios'
import { AppRoute } from '../../App'
import DelButt from './DelButt'

export default function Product() {

  const [Product, setProduct] = useState([])


  useEffect(() => {
    axios.get(`${AppRoute}api/get-all-Products`)
      .then((json) => setProduct(json.data.Products))
      .catch((err) => console.log(err))
  }, [])


  const deletProduct = (productName) => {
    console.log(productName)
    const payload = {
      productName: productName
    }


    const config = {
      method: 'delete',
      url: `${AppRoute}api/delete-product-by-product`,
      data: payload
    };

    axios(config)
      .then(json => setProduct(json.data.products))
      .catch(err => alert(err.message))
  }
  
 

  return (
    <div className="bg p-2">
    <div className="d-flex justify-content-between align-items-center bg-dark p-2"> 
        <span className='fs-5 fw-bold text-white'>Products</span>
        <ProductModal recallData = {setProduct} />
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"> ID</th>
              <th scope="col"> Name</th>
              <th scope="col"> Image</th>
              <th scope="col"> Price</th>
              <th scope="col"> Brand</th>
              <th scope="col"> Description</th>
              <th scope="col"></th>
              <th scope="col"> Type</th>
              <th scope="col">Action</th>

            </tr>
          </thead>
          <tbody>
            {
              Product?.map((val, key) =>
                <tr key={key}>
                  <th scope="row">{val._id}</th>
                  <td>{val.productName}</td>
                  <td><img src={val.Images} className='image-fluid rounded-circle border' style={{ height: '6vh', objectFit: 'contain' }} alt='' srcSet='' /></td>
                  <td>{val.price}</td>
                  <td>{val.brand}</td>
                  <td>
                    {
                      val?.description?.length > 10 ? (val?.description?.substring(0, 10) + "....") : (val?.description)
                    }
                  </td>
                  <td>{val.rating}</td>
                  <td>{val.product_type}</td>
                  <td>
                  <div onClick={()=>deletProduct(val.productName)}><DelButt /></div>
                    </td>
                </tr>
              )
            }
          </tbody>
        </table>


      </div>



    </div>
  )
}
