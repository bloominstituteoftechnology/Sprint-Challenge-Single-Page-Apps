import React from 'react'

export default function EpisodeCard ({ id, name, air_date, episode }) {

  return (
    <div>
      {name}
      {episode}
      {id}
      {air_date}
    </div>
  )
}
