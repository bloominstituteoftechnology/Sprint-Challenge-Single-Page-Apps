import React from "react";
import styled from "styled-components";

const Cards = styled.div`
  margin: 20px;
  border: 1px solid black;
  padding: 15px;
`;

export default function LocationCard({ name, type, dimension }) {
  return (
    <Cards>
      <h2>{name}</h2>
      <p>type: {type}</p>
      <p>Dimension: {dimension}</p>
    </Cards>
  );
}

// export default function LocationCard({ name, type, dimension, residents }) {
//   // image={image}
//   return <span>todo: location</span>;
// }
