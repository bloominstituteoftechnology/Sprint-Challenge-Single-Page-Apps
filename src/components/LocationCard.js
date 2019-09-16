import React from "react";


function LocationCard({locations}) {
  console.log(locations)
  return(
    <div>
      <h2>{locations.name}</h2>
      <h3>Type: {locations.type}</h3>
      <h4>Dimension: {locations.dimension}</h4>
      {console.log(locations)}
    </div>
  );
}

export default LocationCard;
