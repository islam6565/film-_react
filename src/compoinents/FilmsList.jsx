import React from "react";
import FilmCard from "./FilmCard";

function FilmsList({ films, setfilms, rate, text }) {
  return (
    <div className="containerr">
     {films.filter((el)=>el.name.toLowerCase().includes(text.toLowerCase()) && el.rating>=rate).map((el)=><FilmCard film={el}/>).reverse()}
    </div>
  );
}

export default FilmsList;
