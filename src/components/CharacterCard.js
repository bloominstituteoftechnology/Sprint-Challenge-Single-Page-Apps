import React from "react";

export default function CharacterCard(props) {
  console.log(props)
    return (
        <span className="character-card" key={props.info.id}>
            <h2>Name: {props.info.name}</h2>
            <h3>Species: {props.info.species}</h3>
            <p>Status: {props.info.status}</p>
            <p>{props.info.gender}</p>
        </span>
    );
};
