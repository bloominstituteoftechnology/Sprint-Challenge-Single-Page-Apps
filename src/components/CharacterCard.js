import React from "react";
import {
  Card,
  CardText,
  CardBody,
  Col
} from "reactstrap";


const CharacterCard = props => {  
    
  
  return (
    <>
    <Col xs="6" sm="4" key={props.id}></Col>
    <Card className="character-page">
      <h1>Character Page</h1>
    <CardBody className="characterCard">
      <img className='character' alt="characterPicture" src={props.image}/>
      <CardText>{props.name}</CardText>
      <CardText>{props.status}</CardText>
      <CardText>{props.species}</CardText>
    </CardBody>
    </Card>
    </>
  )
  
}

export default CharacterCard;
