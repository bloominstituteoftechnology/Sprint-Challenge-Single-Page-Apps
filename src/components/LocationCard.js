import React from "react";

// import LocationList from './LocationsList';

function LocationCard(props) {
  const {name, type, dimension, residents} =props;
  return (
    <div>
        {name && type && dimension && residents}
    <span>Location:{name}</span>
    </div>
  )
  }

export default LocationCard;