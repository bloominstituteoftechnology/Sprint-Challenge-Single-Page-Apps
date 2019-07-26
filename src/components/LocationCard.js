import React from 'react'

export default function LocationCard (props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <h3>{props.dimension}</h3>
    </div>
  );
}
