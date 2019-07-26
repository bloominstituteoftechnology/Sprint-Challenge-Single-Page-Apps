import React from "react";

const EpisodeCard = props => {
  return (
    <div className="cards">
      <h2> {props.name}</h2>
      <p>Air Date: {props.air}</p>
      <p>Episode: {props.episode}</p>
    </div>
  );
};

export default EpisodeCard;
