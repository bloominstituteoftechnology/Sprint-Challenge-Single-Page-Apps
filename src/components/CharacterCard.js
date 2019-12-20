import React from "react";
import {Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

function CharacterCard(props) {

const {name, species, image, gender, status} = props.character; 
return (
  <div>
    <Card>
      <CardHeader>{image}</CardHeader>
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
