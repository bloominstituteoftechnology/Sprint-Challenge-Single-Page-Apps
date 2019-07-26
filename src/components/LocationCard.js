import React from 'react'

export default function LocationCard ({ name, type, dimension}) {
  // image={image}
  return (
    <div>
      <h2>{name}</h2>
      <h2>{type}</h2>
      <h2>{dimension}</h2>
    </div>
  )
}
