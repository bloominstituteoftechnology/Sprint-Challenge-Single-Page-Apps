import React from "react";
import styled from "styled-components";

xport default function LocationCard(props) {
  // image={image}
  const locationData = props.locationData;
  return (
    <>
      {locationData.map(location => {
        return (
          <WrapperDiv className="locationWrapper">
            <h1>{location.name}</h1>
            <h2>{location.type}</h2>
            <h3>{location.dimension}</h3>
          </WrapperDiv>
        );
      })}
    </>
  );
}
