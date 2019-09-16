import React from "react";


function EpisodeCard({episodes}) {
  console.log(episodes)
  return(
    <div>
      <img src={episodes.img} alt={episodes.name}/>
      <h2>{episodes.name}</h2>
      <h3>Air Date: {episodes.air_date}</h3>
      <h4>Episode: {episodes.episode}</h4>
      {console.log(episodes)}
    </div>
  );
}

export default EpisodeCard;
