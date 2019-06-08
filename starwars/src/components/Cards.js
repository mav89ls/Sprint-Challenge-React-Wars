import React from "react";
import "./StarWars.css";

const Cards = ({ data }) => {
  return (
    <div className="cards">
      <h2 className="title">{data.name}</h2>
      <p className="listItem">
        <strong>Gender</strong>:{data.gender}
      </p>
      <p className="listItem">
        <strong>Hair Color</strong>:{data.hair_color}
      </p>
      <p className="listItem">
        <strong>Eye Color</strong>:{data.eye_color}
      </p>
      <p className="listItem">
        <strong>Height</strong>:{data.height}
      </p>
      <p className="listItem">
        <strong>Skin Color</strong>:{data.skin_color}
      </p>
      <p className="listItem">
        <strong>Date of Birth</strong>:{data.birth_year}
      </p>
    </div>
  );
};

export default Cards;
