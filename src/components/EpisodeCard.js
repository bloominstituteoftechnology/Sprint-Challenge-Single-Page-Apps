import react from 'react';

const EpisodeCard = ({ name, air, episode}) => {
    return (
    <Cards>
        <h2>{name}</h2>
        <p>Air Date: {air} </p>
        <p>Episode: {episode}</p>
    </Cards>
    );
}