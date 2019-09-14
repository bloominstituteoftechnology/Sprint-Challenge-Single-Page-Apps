import React from "react";

/*{ name, episode, air date}*/

export default function EpisodeCard(props) {
  return (
    <div className="episode">
      <h2>{props.name}</h2>
      <div className="info-wrap">
        <p>{props.episode}</p>
        <p>{props.date}</p>
      </div>
    </div>
  )
}
