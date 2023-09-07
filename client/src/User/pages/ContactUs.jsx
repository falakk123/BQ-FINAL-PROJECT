import React from 'react'
import { Button } from 'react-bootstrap';

const ContactUs = () => {
  return (
    <div className="container">
        <div className="my-5 text-center">
                <h1>Contact Us</h1>
                <p className="text secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tenetur autem eos explicabo aliquam, eum unde fugiat quasi quam quos voluptates incidunt natus iure nisi consequatur quisquam doloremque corporis nostrum!</p>
            </div>
      {/* <h2>Contact Us</h2> */}
      <form>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea className="form-control" id="message" rows="4"></textarea>
        </div>
        {/* <button type="submit" className="btn btn-primary">Submit</button> */}
        {/* <div className='d-flex justify-content-center align-items-center my-3'> */}
            <Button variant="secondary my-3">
            Submit
            </Button>
          {/* </div> */}
      </form>
    </div>
  );
}

export default ContactUs;


