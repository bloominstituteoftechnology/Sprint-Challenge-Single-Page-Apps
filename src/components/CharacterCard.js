import React from "react";
 import styled from "styled-components"


 export default function CharacterCard(props) {

     const Card = styled.div`
     display: flex;
     flex-wrap: wrap;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     background-color: white;
     margin: 5% 20%
     border-radius: 8px;
     font-weight: 600;
     font-size: 18px;
     box-shadow: 7px 7px 5px; #gray;`
    


     const Header = styled.h2`
     font-size: 35px;
     text-shadow: 2px 2px gray;`


   return(
     <Card>

       <Header>{props.name}</Header>
         <p>Species: {props.species}</p>
         <p>Status: {props.status}</p>
         
         

     </Card>

   )
 }
