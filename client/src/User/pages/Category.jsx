import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {AppRoute} from '../../App'



import { Link } from 'react-router-dom';


export default function Category() {


    const [Category, setCategory] = useState([])

    useEffect(() => {
        axios.get(`${AppRoute}api/get-all-category`)
            .then(json => setCategory(json.data.Category))
            .catch(err => console.log(err))
    }, [])



    const cards = { width: '100%', height: '30vw' , objectFit: 'cover'}
    const inlineStyles = {
        card: {
            width: '100%',
            //   marginBottom: '20px',
            boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
            transition: 'transform 0.3s',
            '&:hover': {
                transform: 'scale(1.05)',
            },
        },
    };

    const inlineStyless = {
        container: {
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            cursel: 'ponter',
        },
        title: {
            fontSize: '40px',
            fontWeight: 'bold',
            marginBottom: '20px',
        },
        content: {
            fontSize: '16px',
            lineHeight: '1.5',
        },
    };

    return (
        <div className="container" style={inlineStyles.container}>
            <div className="my-5 text-center">
                <h1 style={inlineStyless.title}>Categories</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus illum, laudantium earum sit saepe dolore aperiam vitae ullam iusto deserunt, ipsam asperiores temporibus! Quis exercitationem neque porro nisi saepe autem?</p>
            </div>


            <div className="row">

                {
                    Category?.map((val, key) =>
                        <div className="col-md-6 my-3" key={key}>
                            <Link className='text-decoration-none' to={`/category/${val.categoryName}`}>
                                <div className="card" style={inlineStyles.card}>
                                    <img src={val.categoryImages} className="card-img-top" style={cards} />
                                    <div className="card-body">
                                        <h5 className="card-title text-center">
                                            {val.categoryName}</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                }
            </div>

        </div>








    )

}