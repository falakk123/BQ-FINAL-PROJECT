import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';

function productCanvas() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // useEffect(()=>{
    //     axios.get().then(json=>console.log(json))
    // },[])
    let brands = [
        "almay",
        "alva",
        "anna su",
        "annabelle",
        "benefit",
        "boosh",
        "burt's bees",
        "butter london",
        "cest moi",
        " cargo cosmetics",
        " china glaze",
        " clinique",
        " coastal classic creation",
        " colourpop",
        " covergirl",
        " dalish",
        " deciem",
        " dior",
        " dr. hauschka",
        " e.l.f.",
        " essie",
        " fenty",
        " glossier",
        " green people",
        " iman",
        " l'oreal",
        "lotus cosmetics usa",
        " maia's mineral galaxy",
        "marcelle",
        " marienatie",
        " maybelline",
        " milani",
        " mineral fusion",
        " misa",
        " mistura",
        " moov",
        " nudus",
        " nyx",
        " orly",
        " pacifica",
        " penny lane organics",
        " physicians formula",
        " piggy paint",
        " pure anada",
        " rejuva minerals",
        " revlon",
        " sally b's skin yummies",
        " salon perfect",
        " sante",
        " sinful colours",
        " smashbox",
        "stila",
        " suncoat",
        " w3llpeople",
        " wet n wild",
        " zorah",
        " zorah biocosmetiques"
    ]
    return (
        <>
            <button className='btn nav-link' onClick={handleShow}>
                Brands
            </button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Brands</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the elements you
                    have chosen. Like, text, images, lists, etc.
                    <div className="container mt-4">
                        <ListGroup>
                            {
                                brands.map((val, key) => <ListGroup.Item>{key + 1} - {val.toUpperCase().replace('-', ' ')}</ListGroup.Item>)
                            }

                        </ListGroup>
                    </div>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default productCanvas;