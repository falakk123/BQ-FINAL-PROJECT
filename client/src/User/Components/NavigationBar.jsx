import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { MdOutlineProductionQuantityLimits } from 'react-icons/Md'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartCanvas from './CartCanvas';
import { BiSolidContact } from 'react-icons/Bi'
import { useContext } from 'react';
import { GlobalContext } from '../../Context/context';

export default function NavigationBar() {
    const { user_state, user_dispatch } = useContext(GlobalContext)


    const logOutUser = () => {
        user_dispatch(
            {
                type: "USER_LOGOUT"
            }
        )
    }

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Navbar className='navbar-brand' to="/"><MdOutlineProductionQuantityLimits size={40} color='white' /></Navbar>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className='nav-link mx-2' to="/">Home</Link>
                        <Link className='nav-link mx-2' to="/category">Category</Link>
                        <Link className='nav-link mx-2' to="/brands">Brands</Link>
                        <Link className='nav-link ms-4' to="/products">Products</Link>
                        <span className='btn btn-dark'
                            onClick={logOutUser}
                        >LogOut</span>
                        <span bg="dark" data-bs-theme="dark" style={{ color: "white" }}>
                            {/* <BiSolidContact size={30} color='white' />
                            <span bg="dark" data-bs-theme="dark" style={{color: "white"}}>{contextData.username}</span> */}
                            <CartCanvas />
                        </span>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </>
    );
}















