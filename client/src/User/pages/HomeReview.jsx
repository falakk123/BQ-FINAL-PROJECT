import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import ReactStars from 'react-stars'
import Swal from 'sweetalert2'


export default function HomeReview() {
    const [review, setReview] = useState("")
    const [ratingStar, setRatibgStar] = useState(0)

    const ratingChanged = (newRating) => {
        setRatibgStar(newRating)
    }
    const submitReview = () => {
        const payload = {
            id: 1048,
            review: review,
            rating: ratingStar
        }
        console.log(payload)

        Swal.fire({
            title: 'Successfully Submitted!',
            text: 'Thank You',
            icon: 'Success',
            confirmButtonText: 'Great'
        })

        setReview('')
        setRatibgStar(0)
    }

    return (

        <div className="container">
            {/* <h1 className="text-center mb-5">Reviews Us</h1> */}

            <div>
                <div className="form-floating">
                    <textarea
                        className="form-control"
                        placeholder="Leave a comment here"
                        id="floatingTextarea2"
                        style={{ height: 100 }}
                        defaultValue={review}
                        onChange={(e) => setReview(e.target.value)}
                    />
                    <label htmlFor="floatingTextarea2">Comments</label>
                </div>
                {/* {review} */}
                <div className='mt-3'>

                    Rate Us :
                    <div className='d-flex justify-align-items-center'>
                        <ReactStars
                            count={5}
                            size={24}
                            value={ratingStar}
                            onChange={ratingChanged}
                            color2={'#ffd700'} />
                        <span className='ms-3'>({ratingStar})</span>
                    </div>
                </div>
                 <Button className='my-3 text-center btn-btn-dark' onClick={submitReview}>Submit reviews</Button> 
          

            </div>

        </div>

    )
}
