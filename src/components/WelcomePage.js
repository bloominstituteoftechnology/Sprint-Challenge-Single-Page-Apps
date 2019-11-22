import React from "react";
import {Link} from "react-router-dom";
import  styles from "styled-components";

const Buttons = styles.button`
margin-left: 2%;
margin-top: 5%;
position: relative;
left: 120px;

`
const Page = styles.section`
display:flex;
justify-content:center;`
const Img = styles.img`
margin-left: 15%;
margin-top: 10%;`


export default function WelcomePage() {
  return (
    <Page className="welcome-page">
      
         
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to="/Characters"><Buttons>Characters
          </Buttons></Link>
          <Link to="/Search"><Buttons>Search
          </Buttons></Link>

        <Img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
       
      </header>
  
    </Page>
  );
}