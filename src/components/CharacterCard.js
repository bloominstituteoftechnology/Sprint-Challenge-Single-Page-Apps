import React from "react";
// import { Card, CardHeader, CardBody,
//   CardText } from 'reactstrap';
import styled from "styled-components";


export default function CharacterCard(props) {
  return(
    <div className ="CharcterCard">
    {/* <span>todo: character</span>; */}
        <h3> Name : {props.name}</h3>  
        <p>Gender: {props.gender}</p>
        <p>Species:{props.species}</p>
        {/* <p>Type: {props.type}</p> */}
        <img src= {props.image}/>

  </div>


  )  
  
}
