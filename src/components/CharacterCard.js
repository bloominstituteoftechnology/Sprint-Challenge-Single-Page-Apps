import React from "react";
import styles from "styled-components";

const card= styles.div`  
border: 1px solid black;
margin: 2%;
padding: 3%;
`;

export default function CharacterCard({ name, image, species}) {
  return (
    <card>
      <img src={image} alt='rick & morty characters'/>
      <h3>Name: {name}</h3>
      <p>Species:{species}</p>
    </card>
  );
}
