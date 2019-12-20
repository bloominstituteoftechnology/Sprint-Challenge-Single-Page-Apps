import React from "react";
import jssPluginPropsSort from "jss-plugin-props-sort";
import styles from "styled-components";

const card = styles.div`
border: 2px dotted black;
margin: 2%;
padding: 3%;
`;

export default function CharacterCard({ name, image, species}) {
  return (
    <card>
      <img src={image} alt='rick and morty characters'/>
      <h3>Name: {name}</h3>
      <p>Species:{species}</p>
      {/* <p>Gender: {gender}</p> */}
    </card>
  );
}



