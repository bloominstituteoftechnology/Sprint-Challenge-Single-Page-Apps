import React from "react";
import styled from "styled-components";



export default function Header() {

  const Heading = styled.h2`
    font-size: 20px;
    text-shadow: 2px 2px BlueViolet;
    text-align: center;
  `

  return (
    <div>
    <Heading className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
    </Heading>
    </div>
  );
}
