import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = char => {

  const { name, status, species, image, id } = char;

  return (
    <div className="wrapper">
      <div className="char-card">
        <Link to={`/results/${id}`}>
          <h2>{name}</h2>
        </Link>
        <div className="image">
          <img src={image} />
        </div>
        <div className="species">
          Species: <strong>{species}</strong>
        </div>
        <div className="status">
          Status: <em>{status}</em>
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;