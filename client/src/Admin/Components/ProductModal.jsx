import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import { FloatingLabel } from 'react-bootstrap';
import { AppRoute } from '../../App';
import LoaderAd from './LoaderAd';


function ProductModal({ recallData }) {
    const [show, setShow] = useState(false)

    const [productName, setProduct] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState(0)
    const [Images, setImages] = useState([])
    const [brand, setbrands] = useState("")
    const [category, setCategory] = useState("")
    const [product_type, setproduct_type] = useState("")

    const [brandsVal, setbrandsVal] = useState([])
    const [categoryVal, setCategorVal] = useState([])

    const [loading, setLoading] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => {

        axios.get(`${AppRoute}api/get-all-brands`).then((json) => {
            setbrandsVal(json.data.Brands)
            axios.get(`${AppRoute}api/get-all-category`).then((json) => {
                setCategorVal(json.data.Category)
                // console.log(json.data.Category)
                setShow(true)
            })

        })
    };
    const urls = []
    const MultipleImagesUploaded = () => Images?.map((val) => {
        const MultipleImageRef = ref(storage, `Images/Product/${productName}/${val.name}`);
        return uploadBytes(MultipleImageRef, val).then((snapshot) => {
            return getDownloadURL(snapshot.ref)
                .then((url) => {
                    urls.push(url)
                    console.log(urls)
                }).catch((error) => alert(error.message));
        });
    });

    const addProduct = (e) => {
        e.preventDefault();
        const uploadImages = MultipleImagesUploaded()
        Promise.all(uploadImages)
            .then(() => {
                console.log("Multiple IMAGES Uploaded Successfuly", urls)
                const payload = {
                    productName,
                    price,
                    brand,
                    Images: urls,
                    category,
                    description,
                    product_type
                }
                console.log(payload)
                
        axios.post(`${AppRoute}api/create-products`, payload)
            .then((json) => {
                console.log(json.data)
                recallData(json.data.Product)
                setShow(false);
                setProduct('')
                setDescription('')
                setPrice('')
                setbrands('')
                setCategory('')
                setproduct_type('')
                setLoading(false)
            }).catch(() => {alert(err.message)
            setLoading(false)}
            )
            }).catch((err) => {console.log(err)
            setLoading(false)})
    }

    return (
        <>
        <button className="button" onClick={handleShow}>Add Product</button>
            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Add Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                {loading ? (
           <LoaderAd />
          ) : (

                    <form onSubmit={addProduct}>

                        <div className="row">
                            <div className="col">
                                <FloatingLabel controlId="productName" label="Product Name" className="mb-3 text-secondary">
                                    <Form.Control type='text' placeholder='Product Name' value={productName} onChange={(e) => setProduct(e.target.value)}></Form.Control>
                                </FloatingLabel>
                            </div>
                            <div className="col">
                                <FloatingLabel controlId="price" label="Product Price ($)" className="mb-3 text-secondary">
                                    <Form.Control type='number' placeholder='Product Price' value={price} onChange={(e) => setPrice(e.target.value)}></Form.Control>
                                </FloatingLabel>
                            </div>
                        </div>

                        <div className="mb-3">
                            <p>Choose Images</p>
                            <small className='tex-secondary'>Double click to Delete Images</small>
                            <div className='mt-2 d-flex gap-2 align-items-center'>
                                {
                                    Images?.map((val, key) =>
                                        <div key={key} className="bg-light border rounded col-md-1" onDoubleClick={() => setImages(Images.filter((img) => img != val))}>
                                            <img style={{ height: '10vh', cursur: 'pointer', objectFit: 'contain' }}
                                                className='img-fluid' src={URL.createObjectURL(val)} alt="" />
                                        </div>
                                    )
                                }
                                <label htmlFor='formFile' style={{ height: '10vh', cursur: 'pointer', width: '10vh' }}
                                    className='col-md-1 d-flex justify-content-center align-items-center border '
                                >+</label>
                            </div>
                            <input className='form-control d-none' onChange={(e) => setImages([...Images, e.target.files[0]])} type="file" id='formFile' />
                        </div>
                        <div className='row'>
                            <div className="col">
                                <Form.Group className='mb-3'>
                                    <FloatingLabel controlId='selectedBrand' label="Select Brand" >
                                        <Form.Select aria-label="Please Select a Brand" onChange={(e) => setbrands(e.target.value)}>
                                            <option>Please Select a Brand</option>
                                            {
                                                brandsVal?.map((val, key) => <option key={key} value={val.brand}>{val.brand}</option>)
                                            }

                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                            </div>

                            <div className="col">
                                <Form.Group className='mb-3'>
                                    <FloatingLabel controlId='selectedCategoty' label="Select Category">
                                        <Form.Select aria-label="Please Select a Category" onChange={(e) => setCategory(e.target.value)}>
                                            <option>Please Select a Category</option>
                                            {
                                                categoryVal?.map((val, key) => <option key={key} value={val.categoryName}>{val.categoryName}</option>)
                                            }
                                        </Form.Select>
                                    </FloatingLabel>
                                </Form.Group>
                            </div>

                            <div className="mb-3">
                                <FloatingLabel controlId="productType" label="Product type" className="mb-3 text-secondary">
                                    <Form.Control type='text' placeholder='Product Type' value={product_type} onChange={(e) => setproduct_type(e.target.value)}></Form.Control>
                                </FloatingLabel>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="descriptionFormControlTextarea1" className="form-label">
                                    Description
                                </label>
                                <textarea
                                    className="form-control"
                                    id="descriptionFormControlTextarea1"
                                    rows={3}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                        </div>

                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>


                    </form>
                     )}
                </Modal.Body>
            </Modal>



        </>
    );
}

export default ProductModal;