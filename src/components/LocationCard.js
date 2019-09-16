import React from "react";
import styled from 'styled-components';

// import LocationList from './LocationsList';

function LocationCard(props) {
  const { name, type, dimension } =props.location;
  return (
    <>
      <StyledLocationCard>Location: {name} {type} {dimension}</StyledLocationCard>
    </>
   )
  }

export default LocationCard;

const StyledLocationCard = styled.div`
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      padding: 10px 5px;
      width: 28%;
      height: 150px;
      padding: 15px;
      font-size: 1.4rem;
      line-spacing. 0.8;
      color: lightgreen;
      `;