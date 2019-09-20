import React from "react";




const LocationCard = props => {
  return (
    <div className = "card" key = {jssPluginPropsSort.id}>
      <h1 className = "location-name">{props.name} </h1>
      <p className = "location-type">Status: {props.type}</p>
      <p className = "character-dimension">Species: {props.dimension}</p>
    </div>
  )
}

export default LocationCard;