import React from "react";
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function CharacterCard(props) {

const {name, species, gender, status} = props.character; 
return (
  <div>
    <Card style={{width: "50%"}}>
    <CardImg top width="50%" src={props.character.image} />
      <CardTitle>{name}</CardTitle>
      <CardBody>
        <CardSubtitle>{gender}</CardSubtitle>
        <CardSubtitle>{species}</CardSubtitle>
        <CardText>Status: {status}</CardText>
      </CardBody>
    </Card>
  </div>
);}
export default CharacterCard;
