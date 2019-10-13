import React from "react";
import styled from "styled-components"

const WrapperDiv = styled.div `
Font-family: The Wild Hammers;
Font-size: 30px;
width: 100%;
background-color: lightgrey;
border: 1px dashed black;
margin-bottom: 1%;
box-shadow: 2px 2px 2px slategrey;
`;

const Header = () => {
  return (
    <WrapperDiv className = "header-ds">
    <header className = "ui centered">
      <h1 className = "ui center">Rick &amp; Morty Fan Page</h1>
    </header>
    </WrapperDiv>
  );
}
export default Header; 