import React from "react";
import { Link } from "react-router-dom";
import styles from "styled-components";

const StyledDiv = styles.div`
margin: 10px auto;
height: 100px;
width: 320px;
border: 1px solid gray;
text-align: center;
background-color: gray;
text-decoration: none;
padding-bottom: 20px;
:hover {
  background-color: silver;
  font-color: gray;
}
a {
  text-decoration: none;
  color: white;
}
`;

export default function CharacterCard(props) {
  const { name, status, species } = props;
  return (
    <StyledDiv>
      <Link>
        <p>Name: {name}</p>
        <p>Species: {species} </p>
        <p>Status: {status}</p>
      </Link>
    </StyledDiv>
  );
}
