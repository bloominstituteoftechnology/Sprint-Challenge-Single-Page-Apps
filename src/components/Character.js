import React from 'react';

const Character = props => {
  return (
    <div className="characters">
      <h3>{props.name}</h3>
      <strong>Species: {props.species}</strong>
      <strong>Type: {props.type}</strong>
      <p>{props.age} years old</p>
    </div>
  );
};

export default Character;

