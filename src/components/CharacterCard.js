import React from 'react'

export default function CharacterCard ({ name, image, location, origin, species, status }) {
   return (
    <div>
      	<h2>{name}</h2>
        <img src={image}/>
      	<h2>{location}</h2>
        <h2>{origin}</h2>
        <h3>{species}</h3>
        <h2>{status}</h2>
        </div>
    )
	}