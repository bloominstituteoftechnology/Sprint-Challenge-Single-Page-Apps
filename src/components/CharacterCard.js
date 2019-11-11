import React from "react";
 import styled from "styled-components"


 export default function CharacterCard(props) {

     const Card = styled.div`
     display: flex;
     flex-wrap: wrap;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background-color: #11a7f7;
     margin: 5% 20%
     border: solid 4px black;
     border-radius: 8px;
     font-weight: 600;
     font-size: 18px;
     box-shadow: 7px 7px 5px; #2F4F4F;
      -moz-box-shadow: 7px 7px 5px #2F4F4F;
      -webkit-box-shadow: 7px 7px 5px #2F4F4F;
      -khtml-box-shadow: 7px 7px 7px #2F4F4F;`


     const Header = styled.h2`
     font-size: 35px;
     text-shadow: 2px 2px BlueViolet;`


   return(
     <Card>

       <Header>{props.name}</Header>
         <p>Species: {props.species}</p>
         <p>Status: {props.status}</p>
         <p>Location: {props.location}</p>

     </Card>

   )
 }


