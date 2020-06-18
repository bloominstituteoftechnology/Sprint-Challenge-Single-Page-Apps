import React from "react";
import styled, {keyframes} from "styled-components";
import {fadeIn} from "react-animations";

let Break = keyframes`${fadeIn}`;
const Head =styled.h1`
font-weight: bold;
color:#349032;
font-size:4rem;
animation:3s ${Break};
`;

export default function Header() {
  return (
    <header>
      <Head className="ui center">Rick &amp; Morty Fan Page</Head>
    </header>
  );
}
