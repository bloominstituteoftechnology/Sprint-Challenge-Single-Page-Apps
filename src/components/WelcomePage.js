import React from "react";
import {Link} from "react-router-dom";
import  styles from "styled-components";


const Buttons = styles.button`
-khtml-box-shadow: 5px 5px 5px #A9A9A9;`


const Page = styles.section`
justify-content:center;`


const Img = styles.img`
margin-top: 5%;`


export default function WelcomePage() {
  return (
    <Page className="welcome-page">

      <header>
        <h1>Welcome to the ultimate fan site!</h1>        
        <Link to="/Characters" />
        <Buttons>Characters</Buttons>
        <Link to="/Search" />
        <Buttons>Search</Buttons>        
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />

      </header>

    </Page>
  );
}