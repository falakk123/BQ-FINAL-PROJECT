import React, { useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 "style={{maxHeight:'100vh'}}
            src="https://static-bebeautiful-in.unileverservices.com/Multipurpose-makeup-products-every-girl-needs_mobilehome.jpg"
            alt="First slide"
          />
         <Carousel.Caption className="d-flex align-items-center justify-content-center">
            <div>
              <h3 style={{ fontFamily: 'italic' , color:'black' }}>Welcome To Makeup Website</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img.freepik.com/free-photo/collection-beauty-products-with-copy-space_23-2148620110.jpg?w=2000"
            alt="Second slide"
          />
          <Carousel.Caption className="d-flex align-items-center justify-content-center">
            <div>
              <h3 style={{ fontFamily: 'italic', color : 'black' }}>Welcome To Falak Website</h3>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Home;