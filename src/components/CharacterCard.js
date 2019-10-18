import React from "react";

export default function CharacterCard({ character }) {
    const { image, name, species, gender, status, origin, episode } = character;
    return (
        <div className="movie-card">
            <img src={image} />
            <h3>{name}</h3>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            <p>Status: {status}</p>
            <p>Origin: {origin.name}</p>
            <p>Featured in {episode.length} episode/s</p>
        </div>
    );
}
