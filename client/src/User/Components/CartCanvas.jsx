import { state, useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';
import ItemCards from './ItemCards';
import { CartContext } from '../CartContext/context';
import { BsCreditCard2BackFill } from 'react-icons/bs'
import { GlobalContext } from '../../Context/context'
// import { decodeToken } from 'react-jwt'
import CheckModal from '../pages/CheckModal';


export default function CartCanvas() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const { state, dispatch } = useContext(CartContext)
  const { user_state, user_dispatch } = useContext(GlobalContext)
  const total = 0
  //state.cart?.reduce((accumulator, productData) => accumulator + ( productData.price * productData.counter), 0)
  //const user = decodeToken(user_state?.token)
  console.log(user_state)

  // const checkout = () => {
  //   const payload = {
  //     items: state.cart,
  //     totalBill: total,
  //     customerAddress: "hello 123 street",
  //     customerContact: "0010057",
  //     customerName: user.username,
  //     customerEmail: user.email
  //   }
  //   console.log(payload)
  // }



  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        <BsCreditCard2BackFill size={30} />  <Badge bg="secondary">
          {state.cart?.length}
        </Badge>
        <span className="visually-hidden">unread messages</span>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Cart
            <span className="me-auto">
              <button className='ms-4 btn btn-outline-danger'
                onClick={() =>
                  dispatch({
                    type: "CLEAR_CART"
                  })
                }
              >Clear cart</button>


              <CheckModal />
            </span>


          </Offcanvas.Title>
        </Offcanvas.Header>
        <h6 className='text-center border border-dark mx-3 border-rounded py-3'><span className="me-3">Total  : </span>
          {state.cart.length > 0 ? state.cart.reduce((accumulator, productData) => accumulator + productData.totalPrice, 0) : 0}
        </h6>
        <Offcanvas.Body>
          {/* Some text as placeholder. In real life you can have the elements you
        have chosen. Like, text, images, lists, etc. */}
          <div>
            {
              state.cart?.map((val, key) =>
                <ItemCards key={key} data={val} />)
            }
          </div>

        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}
