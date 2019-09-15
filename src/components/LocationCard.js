import React from "react";

// import LocationList from './LocationsList';

function LocationCard(props) {
  const {name, type, dimension, residents} =props.location;
  return (
    <div className="residents">
      <span>Location: {name} {type} {dimension} </span>
    </div>
   )
  }

export default LocationCard;

// const residents = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: center;
// align-items: center;
// `;