import React from "react";
import {
  Card, CardImg, CardText, CardBody, Button
} from "reactstrap";



const CharacterCard = props => {

  return (
    <div>
      <div>
        <Card>
          <CardImg top width="50%" src={props.image} alt="Card image cap" />
          <CardBody>
            <CardText>Name: {props.name}</CardText>
            <CardText>Status: {props.status}</CardText>
            <CardText>Species: {props.species}</CardText>
            <CardText>Gender: {props.gender}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    </div>

  )
}

export default CharacterCard;

