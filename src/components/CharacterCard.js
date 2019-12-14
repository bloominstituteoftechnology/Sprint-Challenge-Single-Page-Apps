import React from "react";
import styled from "styled-components";
import { Col } from 'reactstrap';
// import CharacterList from "./CharacterList";



export default function CharacterCard(props) {
  

  return (
    
    <Col xs="6" sm="4">
      
      <Card>
      
      <span>{props.name}</span>

              {/* <h4>Name: {props.name}</h4> */}
              <img src={props.image} alt='rick & morty characters'/>
              <p>Status: {props.status}</p>
            
              <p>Species: {props.species}</p>
            
              <p>Gender: {props.gender}</p>
      </Card>
    
    </Col>
  );
};
