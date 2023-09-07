import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../CartContext/context';

export default function ItemCards({ data }) {

  const { state, dispatch } = useContext(CartContext)

  return (


    <Card>

      <Card.Img variant="top" src={data.Images} style={{ height: '15vh', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title className='text-uppercase d-flex justify-content-between mt-3'>
          <span>  {data.productName} </span>  <span className="badge bg-secondary">{data.price}$</span>
        </Card.Title>
        <Card.Text>
          {data.description.length > 50 ? (data.description.substring(0, 50) + "...") : (data.description)}
        </Card.Text>
        <Card.Text>
        <span className="badge bg-secondary">{data.quantity}</span>
        </Card.Text>
        <button className='btn btn-danger'
          onClick={
            () => dispatch({
              type: "REMOVE_ITEM",
              payload: {
                id: data._id
              }
            })}
        >
          Remove
        </button>
      </Card.Body>
    </Card>

  );
}

