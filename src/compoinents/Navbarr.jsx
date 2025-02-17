import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ReactStars from "react-rating-stars-component";

const Navbarr = ({
  settext,setrate
}
  
) => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      
      <Container fluid>
        <Navbar.Brand href="#">FILM SLAYER</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">About</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
            
          </Nav>
          <ReactStars count={5} size={24} activeColor="#ffd700" 
          onChange={(new_rating)=>setrate(new_rating)} />
          ,
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>
                settext(e.target.value)
              }

            />
            <Button variant="outline-success">Search</Button>
          </Form>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navbarr;
