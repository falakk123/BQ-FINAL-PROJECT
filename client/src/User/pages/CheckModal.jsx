import { useState, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import { CartContext } from '../CartContext/context';
import { GlobalContext } from '../../Context/context'
import axios from "axios"
import { decodeToken } from 'react-jwt'
import {AppRoute} from '../../App'


function CheckModal() {

  const { user_state, user_dispatch } = useContext(GlobalContext)
  const { state, dispatch } = useContext(CartContext)
  const [customerName, setCustromerName] = useState("")
  const [customerEmail, setCustomerEmail] = useState("")
  const [customerContact, setCustromerContact] = useState("")
  const [customerAddress, setCustomerAddress] = useState("")




  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    const data = decodeToken(user_state.token)
    setCustomerEmail(data.email)
    setCustromerName(data.username)
    setShow(true);
  }

  const totalBill = state.cart.length > 0 ? state.cart.reduce((accumulator, productData) => accumulator + productData.totalPrice, 0) : 0

  const addCheckOut = (e) => {
    e.preventDefault();
    const payload = { customerName, customerEmail, customerAddress, customerContact, items: state.cart, totalBill }
    // console.log(payload)

    axios.post(`${AppRoute}api/create-order`, payload)
      .then((json) => {
        alert(json.data.message)
        setShow(false);
        dispatch({ type: "CLEAR_CART" })
      })
      .catch(err => alert(err.message))

  }
  return (
    <>



      <button className="ms-3 btn btn-dark" onClick={handleShow} disabled={state.cart.length > 0 ? false : true}>
        CheckOut
      </button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Checkout from Here!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={addCheckOut}>
            <div className="mb-3">
              <label htmlFor="CustomerName" className="form-label">
                Customer Name
              </label>
              <input disabled
                value={customerName}
                onChange={(e) => setCustromerName(e.target.value)}
                type="text"
                className="form-control"
                id="Customer Name"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="CustomerEmail" className="form-label">
                Customer Email
              </label>
              <input
                disabled
                value={customerEmail}
                onChange={(e) => setCustomerEmail(e.target.value)}
                type="text"
                className="form-control"
                id="Customer Email"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="CategoryName" className="form-label">
                Customer Address
              </label>
              <input
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                type="text"
                className="form-control"
                id="Customer Address"
                aria-describedby="emailHelp"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="CategoryName" className="form-label">
                Customer Contact
              </label>
              <input
                value={customerContact}
                onChange={(e) => setCustromerContact(e.target.value)}
                type="text"
                required
                className="form-control"
                id="Customer Contact"
                aria-describedby="emailHelp"
              />
            </div>




            <button type="submit" className="btn btn-primary">
              Submit

            </button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CheckModal;
