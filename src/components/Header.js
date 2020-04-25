import React from "react";
import styled, {keyframes} from "styled-components";
import {hinge} from "react-animations";

let Break = keyframes`${hinge}`;
const Head =styled.h1`
animation:3s ${Break};
`;

export default function Header() {
  return (
    <header className="ui centered">
      <Head className="ui center">Rick &amp; Morty Fan Page</Head>
    </header>
  );
}
