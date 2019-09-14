import React from "react";

// import LocationList from './LocationsList';

function LocationCard(props) {
  const {name, type, dimension, residents} =props.location;
  return (
    <div>
      <span>Location: {name} {type} {dimension} </span>
    </div>
   )
  }

export default LocationCard;