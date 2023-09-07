import React, { useContext, useReducer, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import HomeReview from './HomeReview';
import { Button } from 'react-bootstrap';
// import Swal from 'sweetalert2'

import { CartContext } from '../CartContext/context'


function ProductModal({ productData }) {
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const { state, dispatch } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1); 

  const checkCart = state?.cart?.some((val) => val._id == productData._id)


  // const [counter,setCounter]= useState(0)

  // const initialData = {
  //   counter: 1
  // }

  // const myCallback = (state, action) => {
  //   switch (action.type) {
  //     case "INCREMENT_COUNTER":
  //       return { ...state, counter: state.counter++ }
  //     case "DECREMENT_COUNTER":
  //       return { ...state, counter: state.counter-- }
  //     default:
  //       return state;
  //   }

  // }
  // const [quantitystate, quantitydispatch] = useReducer(myCallback, initialData)

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  // const addtoCart = () => {

  //   const payload = {
  //     ...productData,
  //     qunatity: quantitystate.counter,
  //     totalPrice: productData.price * quantitystate.counter
  //   }
  //   dispatch(
  //     {
  //       type: "ADD_TO_CART",
  //       payload: {
  //         item: payload
  //       }
  //     }
  //   )
  //   console.log(payload)
  // }


  const addtoCart = () => {
    const payload = {
      ...productData,
      quantity: quantity,
      totalPrice: productData.price * quantity,
    };
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item: payload,
      },
    });

    console.log(payload);
  }

  return (

    <>
      {values?.map((v, idx) => (
        <Button variant="secondary" key={idx} className=" me-2 mb-2" onClick={() => handleShow(v)}>
          More Details
          {typeof v === 'string' && `below ${v.split('-')[0]}`}
        </Button>
      ))}
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          {/* <Modal.Img variant="top" src=''/> */}
          <Modal.Title>{productData?.productName} - {productData?.price} {productData?.product_type}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img src={productData?.Images} className='img-fluid' alt="" srcSet="" />
              </div>
              <div className="col-md-6">

                <div className="container py-5">

                  <div className="d-flex justify-content-between align-items-center">
                    <h3>{productData?.productName} - {productData?.price}</h3>
                    <h4><span className="badge bg-dark">{productData.brand}</span></h4>
                    <span>{productData?.qunatity}</span>
                  </div>

                  <div>{productData.description}</div>

                  <div className="my-5">
                    <h5 className='my-2'>Available Colors : </h5>

                    <div className='row my-3 gap-2'>
                      {productData?.product_colors?.map((color, index) => (
                        <div className='col-1'
                          key={index}
                          style={{
                            width: '20px',
                            height: '20px',
                            borderRadius: '50%',
                            backgroundColor: color
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {
                    !checkCart && (<div className="d-grid gap-4">
                      <div className="d-flex justify-content-around align-items-center">
                        {/* <button className="btn btn-dark" onClick={() => quantitydispatch(
                          {
                            type: "INCREMENT_COUNTER"
                          }
                        )
                        }>+</button>
                        {quantitystate.counter}
                        <button className="btn btn-dark" onClick={() => quantitydispatch(
                          {
                            type: "DECREMENT_COUNTER"
                          }
                        )
                        }>-</button> */}
                        <button className="btn btn-dark" onClick={() => setQuantity(quantity + 1)}>
                          +
                        </button>
                        {quantity}
                        <button className="btn btn-dark" onClick={() => setQuantity(Math.max(quantity - 1, 1))}>
                          -
                        </button>
                      </div>
                      <button className="btn btn-dark" type="button" onClick={() => addtoCart()}>Add to Cart</button>
                      {state.addtoCart}
                    </div>)
                  }


                  {checkCart && <div> <button className="btn btn-dark" type="button"
                    onClick={
                      () => dispatch({
                        type: "REMOVE_ITEM",
                        payload: {
                          id: productData._id
                        }
                      })
                    }>
                    Remove from Cart</button></div>}




                </div>
              </div>
            </div>

            <div className="my-3">
              <div className="container">
                <h1 className="text-center mb-5">Reviews Us</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, ut facilis necessitatibus exercitationem magni autem, ipsam accusamus sit illum inventore optio quae! Laboriosam id labore excepturi non! Ab, mollitia sit.</p>
              </div>
              <div>
                <HomeReview />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProductModal;