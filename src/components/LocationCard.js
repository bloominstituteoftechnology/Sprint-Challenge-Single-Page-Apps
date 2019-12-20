import React from "react";

const LocationCard = props => { 
  return (
    <div className ="grid-view">
      <div className="location-card">
        <h1>{props.name}</h1>
        <p>{props.type}</p>
        <p>{props.dimension}</p>
       
      </div>
    </div>
  )
  
}
export default LocationCard;