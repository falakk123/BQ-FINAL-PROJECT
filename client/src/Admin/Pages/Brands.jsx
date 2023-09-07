import React, { useEffect, useState } from 'react'
import BrandsModal from '../Components/BrandsModal'
import axios from 'axios'
import { AppRoute } from '../../App'
import DelButt from './DelButt'


export default function Brands() {

  const [brand, setBrand] = useState([])
  const [successMessage, setSuccessMessage] = useState('');

  // useEffect(() => {
  //   axios.get(`${AppRoute}api/get-all-brands`)
  //     .then((json) => setBrand(json.data.Brands))
  //     .catch((err) => alert(err.message))
  // }, [])

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
      axios.get(`${AppRoute}api/get-all-brands`)
      .then(json => {
          setBrand(json.data.Brands);
      })
      .catch(err => alert(err.message))
  };


  const deletProduct = (brand) => {
    console.log(brand)
    const payload = {
      brand: brand
    }


    const config = {
      method: 'delete',
      url: `${AppRoute}api/delete-products-by-brand`,
      data: payload
    };

    axios(config)
      .then(json => setBrand(json.data.brands))
      .catch(err => alert(err.message))
  }
  
  const updateBrandById = (_id, newData) => {
    axios
        .put(`${AppRoute}api/update-brand-id`, { _id, ...newData })
        .then((json) => {
            fetchCategories();
            setSuccessMessage('Brand updated successfully');
            console.log('Brand updated successfully')
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000); 
            console.log(json.data)
        })
        .catch((error) => console.log(error));
};


  return (
    <div className="bg p-2">
       <div className="d-flex justify-content-between align-items-center bg-dark p-2"> 
        <span className='fs-5 fw-bold text-white'>Brands</span>
        <BrandsModal recallDataa={setBrand} />
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Brand Name</th>
              <th scope="col">Brand Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              brand?.map((val, key) =>
                <tr key={key}>
                  <th scope="row">{val._id}</th>
                  <td>{val.brand}</td>
                  <td><img src={val.Images} className='image-fluid rounded-square border' style={{ height: '6vh',width:'7vh', objectFit: 'contain'}} alt='' srcSet='' /></td>
                  <td>
                    <button className='btn btn-dark mx-1'
                        onClick={() => {
                          const newBrandName = prompt('Enter new Category Name:', val.brand);
                          const newBrandImage = prompt('Enter new Category Image URL:', val.Images);
                          if (newBrandName && newBrandImage) {
                              updateBrandById(val._id, {
                                  brand: newBrandName,
                                  Images: newBrandImage,
                              });
                          }
                      }}
                    >update</button>
                    <div onClick={()=>deletProduct(val.brand)}><DelButt /></div>
                    {/* <button className='btn btn-dark mx-1' onClick={() => deletProduct(val.brand)}>delete</button> */}
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
