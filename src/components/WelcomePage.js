import React from "react";
import {Link} from "react-router-dom";
import  styles from "styled-components";


const Buttons = styles.button`
margin-left: 2%;
margin-top: 5%;
position: relative;
border-radius: 10px;
color: black;
background-color: white;
box-shadow: 5px 5px 5px; #A9A9A9;`



const Page = styles.section`
background-color: #AEEEEE;
border-radius: 10px;
display:flex;
justify-content:center;
box-shadow: 5px 5px 5px #A9A9A9;`



const Img = styles.img`
box-shadow: 15px 15px 7px #A9A9A9;

border-radius: 10px;
margin-bottom:25px;
margin-left: 15%;
margin-top: 5%;`


export default function WelcomePage() {
  return (
    <Page className="welcome-page">

      <header>
        <h1>Welcome to the ultimate fan site!</h1>

        
          <Link to="/Search"><Buttons>Search Characters!
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