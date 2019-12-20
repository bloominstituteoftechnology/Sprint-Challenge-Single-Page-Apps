import React from "react";

const EpisodeCard = props => { 
  return (
    <div className ="grid-view">
      <div className="episode-card">
        <h1>{props.name}</h1>
        <p>{props.air_date}</p>
        <p>{props.episode}</p>
       
      </div>
    </div>
  )
  
}
export default EpisodeCard;