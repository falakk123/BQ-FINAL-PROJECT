import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import {AppRoute} from '../../App'


function Brands() {

   
  const [Brands, setBrands] = useState([])

  useEffect(() => {
    axios.get(`${AppRoute}api/get-all-brands`)
      .then(json => setBrands(json.data.Brands))
      .catch(err => console.log(err))
  }, [])

const cards = {width: '100%', height: '10vw'}
const inlineStyles = {
    card: {
      width: '100%',
      marginBottom: '20px',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
      },
    },
    cardImage: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
    },
    cardBody: {
      padding: '30px',
    },
    cardTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '10px',
    },
    cardText: {
      fontSize: '16px',
    },
  };


    return (
        <div className="container">  

            <div className="text-center mt-5">
                <h3>Brands</h3>
                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corporis molestiae magnam repellat doloremque odit eveniet. Fugiat eos eligendi error nostrum laudantium hic exercitationem id, porro ut pariatur culpa ipsam.</p>
            </div>

             {/* <div className="row mt-4 mb-3 p-4">  */}
              <div className="row">
            {
                    Brands?.map((val, key) =>
                        <div className="col-md-4 my-3" key={key}>
                            <Link className='text-decoration-none' to={`/brands/${val.brand}`}>
                                <div className="card"style={inlineStyles.card}> 
                                    <img src={val.Images} className="card-img-top" style={cards}/>
                                    <div className="card-body">
                                        <h5 className="card-title text-center">{val.brand}</h5>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    
                    )
                }



            <div/>

</div>
        </div>

    )
}

export default Brands;

