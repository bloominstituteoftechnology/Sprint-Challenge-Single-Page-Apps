import React from "react";
import styled from "styled-components";

const MainImg = styled.img`
  height: 400px;
  display: block;
  margin: 0 auto;
`
const BannerSubHeader = styled.h1`
  font-family: 'Lacquer';
  color: white;
  font-weight: 200;
`
export default function Header() {
  return (
    <header className="ui centered">
      <MainImg src="https://miro.medium.com/max/840/1*d5g31wvUpmILqzge216Fug.png" />
      <img src="https://upload.wikimedia.org/wikipedia/en/c/c8/Rick_and_Morty_logo.png" />
      <BannerSubHeader className="ui center">rick and morty fan page</BannerSubHeader>
    </header>
  );
}
