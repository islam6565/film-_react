import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

import Form from "react-bootstrap/Form";

const AddFilm = ({films,setfilms}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [newFilm, setnewFilm] = useState({
    name: "",
    posterurl: "",
    description: "",
    rating: "",
  });
  const handleadd=()=>{
    setfilms([...films,newFilm])
    
    }
    



    

  return (
    <>
      <Button
        style={{
          backgroundColor: "#4CAF50",
          color: "white",
          border: "red",
          marginTop: "20px",
        }}
        onClick={handleShow}
      >
        add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>add film</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>film name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer film name"
                onChange={(e) =>
                  setnewFilm({ ...newFilm, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>film image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer film image"
                onChange={(e) =>
                  setnewFilm({ ...newFilm, posterurl: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>film description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer film description"
                onChange={(e) =>
                  setnewFilm({ ...newFilm, description: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>film rate</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrer film rate"
                onChange={(e) =>
                  setnewFilm({ ...newFilm, rating: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={
            () => {handleadd();handleClose()}

          }>
            ADD
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddFilm;
