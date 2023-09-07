import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import { AppRoute } from '../../App';
// import  '../../Admin/Components/Add.css'
import LoaderAd from './LoaderAd';


function BrandsModal({ recallDataa }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [brand, setbrand] = useState("")
  const [Images, setImages] = useState([null])

  const [loading, setLoading] = useState(false)


  const addBrand = (e) => {
    e.preventDefault();
    setbrand('')

    setLoading(true)
    const storageRef = ref(storage, `images/${Images.name}`);


    uploadBytes(storageRef, Images).then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          const payload = {
            brand,
            Images: url
          }
          axios.post(`${AppRoute}api/create-brands`, payload)
            .then((json) => {
              setShow(false);
              recallDataa(json.data.Brands)
              setLoading(false)

            }).catch(() => {
              alert(err.message);
              setLoading(false);
            })

        })
        .catch((error) => {
          alert(error.message);
          setLoading(false);
        });


    });
  }




  return (
    <>

      <button className="button" onClick={handleShow}>Add Brands</button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {loading ? (
           <LoaderAd />
          ) : (
            <form onSubmit={addBrand}>
              <div className="mb-3">
                <label htmlFor="BrandName" className="form-label">
                  Brand Name
                </label>
                <input
                  value={brand}
                  onChange={(e) => setbrand(e.target.value)}
                  type="text"
                  className="form-control"
                  id="BrandName"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Brand Image
                </label>
                <input className="form-control" onChange={(e) => setImages(e.target.files[0])} type="file" id="formFile" />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

          )}



        </Modal.Body>
      </Modal>
    </>
  );
}

export default BrandsModal;
