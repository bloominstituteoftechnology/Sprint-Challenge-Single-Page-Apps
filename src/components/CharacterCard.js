import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border: solid 2px whitesmoke;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    width: 35%;
    margin: 1rem;
    padding: 2rem 0;
    border-radius: 0.5rem;
    transition: all 0.3s ease;
    position: relative;
    &:hover {
        border-color: #ccc;
        cursor: pointer;
    }
    &:hover img {
        box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.3);
    }
`;

export default function CharacterCard({character}) {
  const {image, name, species, gender, status, episode} = character;
  return (
   
    <div className="movie-card">
      <Card>
        <img src={image} />
        <h2>{name}</h2>
        <p>Species: {species}</p>
        <p>Gender: {gender}</p>
        <p>Status: {status}</p>
        <p>Episodes featured {episode.length}</p>
      </Card>
    </div>
  )
}
