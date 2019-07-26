import React from 'react'

export default function LocationCard (props) {
  return (
    <div>
      <h2>Dwelling Place: {props.name}</h2>
      <h3>Dimension: {props.dimension}</h3>
    </div>
  );
}
