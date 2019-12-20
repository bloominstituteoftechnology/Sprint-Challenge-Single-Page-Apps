import React from "react";
import {Link} from "react-router-dom";
import  styles from "styled-components";


const Buttons = styles.button`
margin-left: 2%;
margin-top: 5%;
position: relative;
border-radius: 10px;
color: white;
background-color: blue;
border: solid 2px black;
box-shadow: 5px 5px 5px; #A9A9A9;
-moz-box-shadow: 5px 5px 5px #A9A9A9;
-webkit-box-shadow: 5px 5px 5px #A9A9A9;
-khtml-box-shadow: 5px 5px 5px #A9A9A9;`


const Page = styles.section`
border: double 4px black;
background-color: #AEEEEE;
border-radius: 10px;
display:flex;
justify-content:center;`


const Img = styles.img`
border: double 4px black;
box-shadow: 15px 15px 7px #A9A9A9;
-moz-box-shadow: 15px 15px 7px #A9A9A9;
-webkit-box-shadow: 15px 15px 7px #A9A9A9;
-khtml-box-shadow: 15px 15px 7px #A9A9A9;
border-radius: 10px;
margin-bottom:25px;
margin-left: 15%;
margin-top: 5%;`


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