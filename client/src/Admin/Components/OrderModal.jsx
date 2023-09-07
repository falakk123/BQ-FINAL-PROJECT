import axios from 'axios';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function OrderModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

  // const [orderr, setOrders] = useState([]);
  // const [selectedOrder, setSelectedOrder] = useState(null);

  // useEffect(() => {
  //   fetchOrders();
  // }, []);

  // const fetchOrders = () => {
  //   axios
  //     .get(`${AppRoute}api/all-orders`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setOrders(response.data.order);
  //     })
  //     .catch((error) => console.log(error));
  // };



  // const { state } = useContext(CartContext);

  // const [orders, setOrders] = useState([]);
  // const [selectedOrder, setSelectedOrder] = useState(null);

  // useEffect(() => {
  //   fetchOrders();
  // }, []);

  // const fetchOrders = () => {
  //   axios
  //     .get(`${AppRoute}api/all-orders`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setOrders(response.data.order);
  //     })
  //     .catch((error) => console.log(error));
  // };

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Items
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Order Items</Modal.Title>
        </Modal.Header>
   Not Getting
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default OrderModal;

