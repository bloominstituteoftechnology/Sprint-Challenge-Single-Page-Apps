import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Welcomecenter = styled.header`
background-color: lightcyan;
`

const Charcenter = styled.h2`
text-align: center;
  `
const Imgcenter = styled.div`
text-align: center;
`

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Welcomecenter>
        <h1>Welcome to the ultimate fan site!</h1>
        <Imgcenter>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </Imgcenter>
        <Link to='/characters/'>
          <div>
            <Charcenter>Characters</Charcenter>
          </div>
        </Link>
      </Welcomecenter>
    </section>
  );
}
