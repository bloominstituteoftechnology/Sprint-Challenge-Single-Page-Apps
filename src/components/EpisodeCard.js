import React from 'react'

export default function EpisodeCard (props) {
//   console.log(props.id)

  return (
    <div>
        <h2>{props.name}</h2>
        <h3>{props.episode}</h3>
        <h3>Air Date: {props.air_date}</h3>
    </div>
  );
}