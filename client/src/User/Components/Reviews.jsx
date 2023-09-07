import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import HomeReview from '../pages/HomeReview';
// import Spinner from 'react-bootstrap/Spinner';
import Loader from '../../Guest/Components/Loader';



export default function Reviews() {


    const [review, setReview] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        axios.get('https://dummyjson.com/comments')
            .then(json => {

                setReview(json.data.comments)
                setLoader(false)
            })

    }, [])


    return (
        <> {
            loader ? (<div className='d-flex justify-content-center align-items-center' style={{ width: '100%', height: '100vh' }}>
              <Loader />
            </div>
            ) : (
                <div className="container my-5 ">
                    <div className='text-center'>
                        <h1>Reviews</h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem facere, pariatur sapiente ipsum adipisci esse libero tempore corporis laudantium, culpa incidunt cupiditate at. Ipsa fugiat nulla quod ducimus inventore.</p>
                    </div>
                    <Carousel data-bs-theme="dark" controls={false}>
                        {
                            review.map((val, key) =>

                                <Carousel.Item interval={1000} key={key}>

                                    <Card className='m-5'>
                                        <Card.Body>
                                            <Card.Title className='text-uppercase'>{val.user.username}</Card.Title>
                                            <Card.Text className='fst-italic'>
                                                {val.body}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Carousel.Item>
                            )
                        }
                    </Carousel>
                    <div>
                        <HomeReview />
                    </div>

                </div>
            )
        }

        </>
    )
}
