import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineProductionQuantityLimits } from 'react-icons/Md'
import { Link } from 'react-router-dom';


export default function GuestNav() {
    return (
        <>

            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand><MdOutlineProductionQuantityLimits size={40} color='white' /></Navbar.Brand>
                    <Nav className="mx-auto">
                       <Link className='nav-link mx-2' to="/brands">Brands</Link>
                       <Link className='nav-link mx-2' to="/category">Category</Link>
                       <Link className='nav-link mx-2' to="/products">Products</Link>
                    </Nav>
                    <Nav className="ms-auto">
                    <Link className='nav-link mx-2' to="/signup">signUp</Link>
                    <Link className='nav-link mx-2' to="/loginsignup">Login</Link>
                    </Nav>
                </Container>
            </Navbar>


        </>
    )
}
