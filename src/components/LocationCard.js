import React from "react";

const LocationCard = loc => {
  return (
    <div className="cards">
      <h2>{loc.name}</h2>
      <p>type: {loc.type}</p>
      <p>Dimension: {loc.dimension}</p>
    </div>
  );
};
export default LocationCard;

// export default function LocationCard({ name, type, dimension, residents }) {
//   // image={image}
//   return <span>todo: location</span>;
// }
