import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-rating-stars-component";

const FilmCard = ({film}) => {

  return (
    <Card style={{ width: "18rem",
        margin:"20px"
     }}>
      <Card.Img variant="top" src={film.posterurl} />
      <Card.Body>
        <Card.Title>{film.name}</Card.Title>
        <Card.Text>{film.description}</Card.Text>
        <ReactStars
    count={5}
    edit={false}
    value={
        film.rating
    }
    
    size={24}
    activeColor="#ffd700"
  />,
        <Button variant="primary">trailar</Button>
      </Card.Body>
    </Card>
  );
};

export default FilmCard;
