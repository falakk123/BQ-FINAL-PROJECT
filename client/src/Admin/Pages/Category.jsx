import React, { useEffect, useState } from 'react'
import CategoryModal from '../Components/CategoryModal'
import axios from 'axios'
import { AppRoute } from '../../App'
import DelButt from './DelButt'

export default function Category() {

  const [category, setCategory] = useState([])
  const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
      fetchCategories();
    }, []);
  
    const fetchCategories = () => {
        axios.get(`${AppRoute}api/get-all-category`)
        .then(json => {
            setCategory(json.data.Category);
        })
        .catch(err => alert(err.message))
    };

    const deletProduct = (categoryName) => {
      console.log(categoryName)
      const payload = {
        categoryName: categoryName
      }
    const config = {
      method: 'delete',
      url: `${AppRoute}api/delete-products-by-category`,
      data: payload
    };

    axios(config)
      .then(json => setCategory(json.data.categories))
      .catch(err => alert(err.message))
  }

  const updateCategoryById = (_id, newData) => {
    axios
        .put(`${AppRoute}api/update-category-by-id`, { _id, ...newData })
        .then((json) => {
            fetchCategories();
            setSuccessMessage('Category updated successfully');
            console.log('Category updated successfully')
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
        <span className='fs-5 fw-bold text-white'>Categories</span>
        <CategoryModal recallData={setCategory} />
      </div>

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Category Name</th>
              <th scope="col">Category Image</th>
              <th scope="col">Actions</th>

            </tr>
          </thead>
          <tbody>
            {
              category?.map((val, key) =>
                <tr key={key}>
                  <th scope="row">{val._id}</th>
                  <td>{val.categoryName}</td>
                  <td><img src={val.categoryImages} className='image-fluid rounded-circle border' style={{ height: '6vh', objectFit: 'contain' , aspectRatio:'1/1'}} alt='' srcSet='' /></td>
                  <td>
                    <button className='btn btn-dark mx-1 pt-2'
                      onClick={() => {
                        const newCategoryName = prompt('Enter new Category Name:', val.categoryName);
                        const newCategoryImage = prompt('Enter new Category Image URL:', val.categoryImages);
                        if (newCategoryName && newCategoryImage) {
                            updateCategoryById(val._id, {
                                categoryName: newCategoryName,
                                categoryImages: newCategoryImage,
                            });
                        }
                    }}
                    >update</button>
                    <div onClick={()=>deletProduct(val.categoryName)}><DelButt /></div>
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
