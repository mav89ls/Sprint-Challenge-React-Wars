import React from "react";
import "./StarWars.css";

const Cards = ({ data }) => {
  return (
    <div className="cards">
      <h2 className="character-name">{data.name}</h2>

      <p className="facts">
        <strong>Gender</strong>:{data.gender}
      </p>
      <p className="facts">
        <strong>Hair Color</strong>:{data.hair_color}
      </p>
      <p className="facts">
        <strong>Eye Color</strong>:{data.eye_color}
      </p>
      <p className="facts">
        <strong>Height</strong>:{data.height}
      </p>
      <p className="facts">
        <strong>Skin Color</strong>:{data.skin_color}
      </p>
      <p className="facts">
        <strong>Date of Birth</strong>:{data.birth_year}
      </p>
    </div>
  );
};

export default Cards;
