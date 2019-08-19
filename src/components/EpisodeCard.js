import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  margin: 20px;
  border: 1px solid black;
  padding: 15px;
`;


const EpisodeCard = ({ name, air, episode}) => {
    return (
    <Cards>
        <h2>{name}</h2>
        <p>Air Date: {air} </p>
        <p>Episode: {episode}</p>
    </Cards>
    );
}

export default EpisodeCard;