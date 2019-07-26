import React from "react";

const LocationCard = props => {
  return (
    <div className="cards">
      <h2>{props.name}</h2>
      <p>type: {props.type}</p>
      <p>Dimension: {props.dimension}</p>
    </div>
  );
};
export default LocationCard;

// export default function LocationCard({ name, type, dimension, residents }) {
//   // image={image}
//   return <span>todo: location</span>;
// }
