import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { storage } from '../utils/firebaseConfig'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import axios from 'axios';
import { AppRoute } from '../../App';
import LoaderAd from './LoaderAd';


function CategoryModal({ recallData }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [categoryName, setCategoryName] = useState("")
  const [categoryImages, setCategoryImage] = useState(null)

  const [loading, setLoading] = useState(false)

  const addCategory = (e) => {
    e.preventDefault();
    categoryName('')

    const storageRef = ref(storage, `images/${categoryImages.name}`);


    uploadBytes(storageRef, categoryImages).then((snapshot) => {
      getDownloadURL(snapshot.ref)
        .then((url) => {
          const payload = {
            categoryName,
            categoryImages: url
          }
          axios.post(`${AppRoute}api/create-categories`, payload)
            .then((json) => {
              setShow(false);
              recallData(json.data.Category)
              setLoading(false)

            }).catch(() => { alert(err.message)
            setLoading(false)}
            )

        })
        .catch((error) => { alert(error.message)
        setLoading(false)});


    });
  }

  return (
    <>

      <button className="button" onClick={handleShow}>Add Category</button>

      <Modal show={show} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        {loading ? (
           <LoaderAd />
          ) : (
          <form onSubmit={addCategory}>
            <div className="mb-3">
              <label htmlFor="CategoryName" className="form-label">
                Category Name
              </label>
              <input
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                type="text"
                className="form-control"
                id="CategoryName"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="formFile" className="form-label">
                Category Image
              </label>
              <input className="form-control" onChange={(e) => setCategoryImage(e.target.files[0])} type="file" id="formFile" />
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

export default CategoryModal;