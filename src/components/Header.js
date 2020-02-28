import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function Header() {

  const PaddingDiv = styled.div`
  padding: 10px;
  display: inline-block;
  `;



  const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
  border-bottom: 1.2px dashed black;
  `;

  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <StyledDiv>
        <Link to="/">Home</Link>
        <PaddingDiv></PaddingDiv>
        <Link to="/characters">Characters</Link>
      </StyledDiv>
    </header>
  );
}