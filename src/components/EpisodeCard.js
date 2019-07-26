import React from 'react'

export default function LocationCard(props) {
    const { name, airDate, episodeCode, characters } = props;
    return (
        <div className="location-card">
            <h2>{name}</h2>
            <p>{airDate}</p>
            <p>{episodeCode}</p>
            <p>Characters: </p>
            {characters.map(character => (
                <div key={character} className="character">
                    {character}
                </div>
            ))}
        </div>
    )
} 