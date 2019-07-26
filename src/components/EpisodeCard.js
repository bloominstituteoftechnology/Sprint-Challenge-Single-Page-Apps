import React from 'react'

 export default function EpisodeCard ({ id, name, air_date, episode }) {
console.log(name)
   return (
    <div>
      <p>{name}</p>
      <h2>{episode}</h2>
      <h2>{id}</h2>
      <h2>{air_date}</h2>
    </div>
  )
}