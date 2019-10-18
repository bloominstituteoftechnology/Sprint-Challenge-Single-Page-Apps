import React from "react";
import styled from "styled-components";

const Card = styled.div`
    border: solid 2px whitesmoke;
    width: 40%;
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

const Img = styled.img`
    border-radius: 50%;
    width: 70%;
    height: 70%;
    transition: all 0.3s ease;
`;

export default function CharacterCard({ character }) {
    const { image, name, species, gender, status, origin, episode } = character;

    return (
        <Card>
            <Img src={image} alt="character" />
            <h3>{name}</h3>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            <p>Status: {status}</p>
            <p>Origin: {origin.name}</p>
            <p>Featured in {episode.length} episode/s</p>
        </Card>
    );
}
